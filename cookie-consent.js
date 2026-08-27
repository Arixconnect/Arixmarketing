(function () {
  const STORAGE_KEY = "arix_cookie_consent_v1";
  const CONSENT_EVENT = "arix:cookie-consent";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  });

  function readConsent() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }

  function writeConsent(consent) {
    const saved = {
      necessary: true,
      analytics: Boolean(consent.analytics),
      marketing: Boolean(consent.marketing),
      updatedAt: new Date().toISOString(),
      version: 1,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return saved;
  }

  function updateGoogleConsent(consent) {
    window.gtag("consent", "update", {
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });
  }

  function dispatchConsent(consent) {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
    window.dataLayer.push({ event: "cookie_consent_update", cookie_consent: consent });
  }

  function activateDeferredScripts(consent) {
    document.querySelectorAll("script[type='text/plain'][data-cookie-category]").forEach((script) => {
      const category = script.getAttribute("data-cookie-category");
      if ((category === "analytics" && !consent.analytics) || (category === "marketing" && !consent.marketing)) {
        return;
      }

      const activeScript = document.createElement("script");
      Array.from(script.attributes).forEach((attribute) => {
        if (attribute.name !== "type" && attribute.name !== "data-cookie-category") {
          activeScript.setAttribute(attribute.name, attribute.value);
        }
      });
      activeScript.text = script.text || "";
      script.replaceWith(activeScript);
    });
  }

  function applyConsent(consent) {
    updateGoogleConsent(consent);
    activateDeferredScripts(consent);
    dispatchConsent(consent);
  }

  function createBanner() {
    const root = document.createElement("section");
    root.className = "cookie-consent-root";
    root.setAttribute("aria-label", "Cookievoorkeuren");
    root.innerHTML = `
      <div class="cookie-consent-backdrop" aria-hidden="true"></div>
      <div class="cookie-consent-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <p class="cookie-consent-eyebrow">Cookievoorkeuren</p>
        <h2 id="cookie-title">Mogen we cookies gebruiken voor meten en advertenties?</h2>
        <p>
          We gebruiken noodzakelijke cookies om de website goed te laten werken. Met jouw toestemming
          gebruiken we ook analytische en marketingcookies voor Google, Facebook/Meta, TikTok,
          Snapchat en Apple/App Store-campagnes. Zonder toestemming plaatsen we deze trackingcookies niet.
        </p>
        <div class="cookie-consent-actions">
          <button class="cookie-button primary" type="button" data-cookie-action="accept">Alles accepteren</button>
          <button class="cookie-button" type="button" data-cookie-action="reject">Alles weigeren</button>
          <button class="cookie-button" type="button" data-cookie-action="configure">Voorkeuren instellen</button>
        </div>
        <div class="cookie-preferences" aria-label="Cookiecategorieën">
          <label class="cookie-choice">
            <input type="checkbox" checked disabled />
            <span><strong>Noodzakelijk</strong><span>Nodig voor beveiliging, voorkeuren en basiswerking van de website.</span></span>
          </label>
          <label class="cookie-choice">
            <input type="checkbox" data-cookie-input="analytics" />
            <span><strong>Analytisch</strong><span>Helpt meten welke pagina's worden bezocht en welke campagnes verkeer opleveren.</span></span>
          </label>
          <label class="cookie-choice">
            <input type="checkbox" data-cookie-input="marketing" />
            <span><strong>Marketing</strong><span>Nodig voor advertentiemeting, remarketing en conversies via Google, Meta, TikTok, Snapchat en Apple.</span></span>
          </label>
          <div class="cookie-consent-settings-actions">
            <button class="cookie-button primary" type="button" data-cookie-action="save">Voorkeuren opslaan</button>
            <button class="cookie-button" type="button" data-cookie-action="reject">Alles weigeren</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);
    return root;
  }

  function closeBanner(root) {
    root.setAttribute("hidden", "");
  }

  function showBanner(forceOpen) {
    const existing = document.querySelector(".cookie-consent-root");
    const root = existing || createBanner();
    const saved = readConsent();

    if (saved) {
      root.querySelector("[data-cookie-input='analytics']").checked = saved.analytics;
      root.querySelector("[data-cookie-input='marketing']").checked = saved.marketing;
    }

    if (!forceOpen && saved) {
      closeBanner(root);
      return;
    }

    root.removeAttribute("hidden");
    root.querySelector(".cookie-consent-panel").classList.toggle("is-configuring", Boolean(saved));
    root.querySelector("[data-cookie-action='accept']").focus({ preventScroll: true });
  }

  function createSettingsButton() {
    const button = document.createElement("button");
    button.className = "cookie-settings-link";
    button.type = "button";
    button.textContent = "Cookie-instellingen";
    button.addEventListener("click", () => showBanner(true));
    document.body.appendChild(button);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cookie-action]");
    if (!button) return;

    const root = document.querySelector(".cookie-consent-root");
    const panel = root?.querySelector(".cookie-consent-panel");
    const action = button.getAttribute("data-cookie-action");

    if (action === "configure") {
      panel?.classList.add("is-configuring");
      return;
    }

    let consent;
    if (action === "accept") {
      consent = { necessary: true, analytics: true, marketing: true };
    } else if (action === "reject") {
      consent = { necessary: true, analytics: false, marketing: false };
    } else if (action === "save") {
      consent = {
        necessary: true,
        analytics: Boolean(root.querySelector("[data-cookie-input='analytics']").checked),
        marketing: Boolean(root.querySelector("[data-cookie-input='marketing']").checked),
      };
    }

    if (consent) {
      const saved = writeConsent(consent);
      applyConsent(saved);
      closeBanner(root);
    }
  });

  window.ArixCookieConsent = {
    get: readConsent,
    open: () => showBanner(true),
    onChange: (callback) => window.addEventListener(CONSENT_EVENT, (event) => callback(event.detail)),
  };

  const savedConsent = readConsent();
  if (savedConsent) {
    applyConsent(savedConsent);
  }

  document.addEventListener("DOMContentLoaded", () => {
    createSettingsButton();
    showBanner(false);
  });
})();
