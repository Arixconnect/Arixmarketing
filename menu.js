function loadCookieConsentAssets() {
  if (!document.querySelector("link[href='/cookie-consent.css']")) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/cookie-consent.css";
    document.head.appendChild(stylesheet);
  }

  if (!document.querySelector("script[src='/cookie-consent.js']")) {
    const script = document.createElement("script");
    script.src = "/cookie-consent.js";
    script.defer = true;
    document.head.appendChild(script);
  }
}

loadCookieConsentAssets();

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a, .header-cta");

menuToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  menuToggle.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Menu openen");
  });
});
