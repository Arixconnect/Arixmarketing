(() => {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.hero-slide')];
  const image = slides[0].querySelector('img');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let timer;
  let visible = false;
  let finished = false;
  const stop = () => { clearTimeout(timer); timer = undefined; };
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    slider.querySelector('[data-hero-count]').textContent = `${current + 1} / ${slides.length}`;
  };
  const cancel = () => { finished = true; stop(); };
  const schedule = () => {
    stop();
    const consent = document.querySelector('.cookie-consent-root');
    const blocked = consent && consent.getBoundingClientRect().height > 0;
    if (finished || reduced.matches || !visible || document.hidden || blocked || !image.complete || !image.naturalWidth) return;
    timer = setTimeout(() => { finished = true; show(1); }, 3000);
  };
  slider.querySelector('.hero-slider-controls').hidden = false;
  slider.querySelector('[data-hero-prev]').addEventListener('click', () => { cancel(); show(current - 1); });
  slider.querySelector('[data-hero-next]').addEventListener('click', () => { cancel(); show(current + 1); });
  slider.addEventListener('focusin', cancel);
  slider.addEventListener('pointerdown', cancel);
  slider.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault(); cancel(); show(current + (event.key === 'ArrowRight' ? 1 : -1));
  });
  // Start only after the introduction is actually visible and the image is loaded.
  new IntersectionObserver(entries => { visible = entries[0].intersectionRatio >= .5; schedule(); }, {threshold:[0,.5]}).observe(slider);
  image.addEventListener('load', schedule);
  image.addEventListener('error', () => { cancel(); show(1); });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', schedule);
  new MutationObserver(records => {
    if (records.some(record => record.target.matches?.('.cookie-consent-root') || [...record.addedNodes].some(node => node.matches?.('.cookie-consent-root')))) schedule();
  }).observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['hidden']});
  schedule();
})();
