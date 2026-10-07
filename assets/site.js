(() => {
  const header = document.querySelector('.shared-header');
  const toggle = header?.querySelector('.menu-toggle');
  const close = () => {
    header?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Menu openen');
  };
  toggle?.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  header?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  header?.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); toggle.focus(); } });
  const filters = document.querySelector('[data-case-filter]');
  if (filters) {
    filters.hidden = false;
    filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      const cards = [...document.querySelectorAll('[data-case-category]')];
      cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.caseCategory !== button.dataset.filter; });
      const count = cards.filter(c => !c.hidden).length;
      document.querySelector('[data-case-count]').textContent = `${count} ${count === 1 ? 'project' : 'projecten'}`;
    }));
  }
  window.scrollWebsiteCases = direction => {
    const track = document.querySelector('[data-website-case-slider]');
    if (track) track.scrollBy({left: direction * ((track.firstElementChild?.getBoundingClientRect().width || 300) + 16), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  };
  document.querySelector('[data-website-prev]')?.addEventListener('click', () => window.scrollWebsiteCases(-1));
  document.querySelector('[data-website-next]')?.addEventListener('click', () => window.scrollWebsiteCases(1));
  document.querySelector('[data-cookie-settings]')?.addEventListener('click', () => window.ArixCookieConsent?.open());
})();
