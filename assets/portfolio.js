(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  function closeMenu() {
    header.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Menu openen');
  }
  document.querySelectorAll('.nav a,.header-cta').forEach(link => link.addEventListener('click', closeMenu));
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      menu.focus();
    }
  });
  const preview = document.querySelector('#website-preview');
  const previewBody = preview.querySelector('.preview-body');
  const title = preview.querySelector('h3');
  let selectedCase;
  let returnFocus;
  const marketingAllowed = () => Boolean(window.ArixCookieConsent?.get()?.marketing);

  function consentGate(container, description, resume) {
    const gate = document.createElement('div');
    gate.className = 'embed-gate';
    const text = document.createElement('p');
    text.textContent = description;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button primary';
    button.textContent = 'Cookievoorkeuren aanpassen';
    button.addEventListener('click', () => {
      pendingResume = resume;
      window.ArixCookieConsent?.open();
    });
    gate.append(text, button);
    container.replaceChildren(gate);
  }

  let pendingResume;
  function showCase() {
    if (!selectedCase) return;
    if (!marketingAllowed()) {
      consentGate(previewBody, 'Deze preview laadt een externe website die cookies kan gebruiken. Schakel marketingcookies in om de website hier te bekijken.', showCase);
      return;
    }
    const frame = document.createElement('iframe');
    frame.title = `Websitepreview ${selectedCase.dataset.caseName}`;
    frame.src = selectedCase.dataset.caseUrl;
    // External pages can scroll and run, but cannot navigate the parent page.
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const help = document.createElement('p');
    help.className = 'preview-help';
    help.append('Laadt de preview niet? ');
    const link = document.createElement('a');
    link.href = frame.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open de website in een nieuw tabblad';
    help.append(link);
    previewBody.replaceChildren(frame, help);
  }

  document.querySelectorAll('[data-case-url]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      selectedCase = link;
      returnFocus = link;
      title.textContent = link.dataset.caseName;
      preview.hidden = false;
      showCase();
      title.focus({ preventScroll: true });
      preview.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  });
  function closePreview() {
    preview.hidden = true;
    previewBody.replaceChildren();
    selectedCase = null;
    pendingResume = null;
    returnFocus?.focus({ preventScroll: true });
  }
  preview.querySelector('.preview-close').addEventListener('click', closePreview);
  preview.addEventListener('keydown', event => {
    if (event.key === 'Escape') closePreview();
  });

  function playVideo(container) {
    if (!marketingAllowed()) {
      consentGate(container, 'Deze video wordt afgespeeld via YouTube. Schakel marketingcookies in om de video hier te bekijken.', () => playVideo(container));
      return;
    }
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${container.dataset.videoId}?rel=0`;
    frame.title = container.dataset.videoTitle;
    frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    container.replaceChildren(frame);
  }
  function resetVideo(container) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'video-play';
    button.textContent = `Bekijk ${container.dataset.videoTitle}`;
    const poster = document.createElement('img');
    poster.src = `assets/video-${container.dataset.videoId}.jpg`;
    poster.alt = '';
    poster.width = 480;
    poster.height = 360;
    poster.loading = 'lazy';
    button.prepend(poster);
    button.addEventListener('click', () => playVideo(container));
    container.replaceChildren(button);
  }
  const videoContainers = document.querySelectorAll('[data-video-id]');
  videoContainers.forEach(resetVideo);
  window.ArixCookieConsent?.onChange(consent => {
    if (!consent.marketing) {
      videoContainers.forEach(resetVideo);
      if (selectedCase) showCase();
      pendingResume = null;
    } else if (pendingResume) {
      const resume = pendingResume;
      pendingResume = null;
      resume();
    }
  });
})();
