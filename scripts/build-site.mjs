import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {services, cases} from '../site/content.mjs';
const root = new URL('../', import.meta.url);
const origin = 'https://www.arixmarketing.nl';
const booking = 'https://arixmarketing.setmore.com/';
const version = 'security-20261007';
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const read = path => readFile(new URL(path, root), 'utf8');
// Pages cannot configure response headers. This enforces only meta-supported CSP directives.
// frame-ancestors, COOP and HSTS must be configured at a controllable hosting/CDN layer.
function secureHtml(html) {
  html = html.replace(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>\s*/gi, '');
  const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, attrs, code]) => !/\bsrc\s*=/i.test(attrs) && code.trim())
    .map(([, , code]) => "'sha256-" + createHash('sha256').update(code).digest('base64') + "'");
  const policy = [
    "default-src 'none'",
    "base-uri 'none'",
    "object-src 'none'",
    "script-src 'self' https://www.googletagmanager.com " + [...new Set(hashes)].join(' '),
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
    "font-src 'self'",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com",
    "frame-src https://www.youtube-nocookie.com https://arixconnect.github.io https://masterbarbershop.nl https://www.masterbarbershop.nl https://studiekunst.nl https://www.studiekunst.nl https://www.googletagmanager.com",
    "media-src 'self' blob:",
    "form-action 'self' https://arixmarketing.setmore.com",
    "upgrade-insecure-requests"
  ].map(value => value.trim()).join('; ');
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
  // Charset remains within the first 1024 bytes; CSP precedes every resource.
  html = html.replace(/<meta charset="utf-8">\s*/i, '');
  return html.replace(/(<head[^>]*>)\s*/i, `$1\n<meta charset="utf-8">\n${meta}\n`);
}
async function save(path, html) {
  html = html.replace(/[ \t]+$/gm, '');
  if (path.endsWith('.html')) html = secureHtml(html);
  await mkdir(new URL('./', new URL(path, root)), {recursive:true});
  await writeFile(new URL(path, root), html);
}
const nav = [['/','Home'],['/diensten/','Diensten'],['/cases/','Cases'],['/over-ons/','Over ons'],['/contact/','Contact']];
const button = () => `<a class="site-button" href="${booking}">Plan een kennismaking</a>`;
function header(path) {
  return `<header class="site-header shared-header"><a class="brand" href="/" aria-label="Arix Marketing home"><img src="/assets/logo-arixmarketing.svg" alt="" width="42" height="42"><span class="brand-text"><strong>Arix Marketing</strong><small>Social media &amp; content bureau</small></span></a><button class="menu-toggle" type="button" aria-label="Menu openen" aria-controls="site-nav" aria-expanded="false"><span></span><span></span><span></span></button><div class="header-actions" id="site-nav"><nav class="nav" aria-label="Hoofdnavigatie">${nav.map(([url,label])=>`<a href="${url}"${(url==='/'?path===url:path.startsWith(url))?' aria-current="page"':''}>${label}</a>`).join('')}</nav><a class="header-cta" href="${booking}">Plan een kennismaking</a></div></header>`;
}
function footer() {
  return `<footer class="shared-footer"><div class="footer-grid"><div><strong>Arix Marketing</strong><span>Online zichtbaarheid voor lokale bedrijven.</span><span>Arnhem, Nederland</span><a href="mailto:info@arixmarketing.nl">info@arixmarketing.nl</a><a href="tel:+31638212543">06 38 21 25 43</a><span>KvK: 82042691 · Betaalvaluta: EUR</span></div><nav aria-label="Footer pagina's"><strong>Ontdek Arix</strong>${nav.map(([url,label])=>`<a href="${url}">${label}</a>`).join('')}<a href="/onepage/">Onepage-aanbod</a><a href="/recruitment-campagne/">Recruitmentcampagne</a></nav><nav aria-label="Footer diensten"><strong>Diensten</strong>${services.map(s=>`<a href="/diensten/${s.slug}/">${esc(s.name)}</a>`).join('')}</nav></div><div class="footer-legal"><a href="/voorwaarden/">Voorwaarden</a><a href="/privacy/">Privacy</a><a href="/annulering-terugbetaling/">Annulering &amp; terugbetaling</a><button type="button" data-cookie-settings>Cookie-instellingen</button></div></footer>`;
}
function closing(title = 'Wat kan jouw bedrijf online beter laten zien?') { return `<section class="closing-band"><div class="inner"><h2>${esc(title)}</h2><p>Vertel ons waar je nu staat en wat je wilt bereiken. We bekijken samen welke volgende stap past bij jouw bedrijf.</p>${button()}</div></section>`; }
function serviceCards(slugs = services.map(s=>s.slug)) { return `<div class="link-grid">${slugs.map(slug=>{const s=services.find(s=>s.slug===slug);return `<article class="link-card"><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><a href="/diensten/${s.slug}/">Bekijk ${esc(s.name.toLowerCase())}</a></article>`;}).join('')}</div>`; }
function caseCards(slugs = cases.map(c=>c.slug), filter = false) { return `<div class="link-grid">${slugs.map(slug=>{const c=cases.find(c=>c.slug===slug);return `<article class="link-card"${filter?` data-case-category="${c.category}"`:''}><img src="${c.image}" alt="${esc(c.alt)}" width="600" height="450" loading="lazy"><small>${esc(c.label)}</small><h3>${esc(c.name)}</h3><p>${esc(c.intro)}</p><a href="/cases/${c.slug}/">Bekijk de case ${esc(c.name)}</a></article>`;}).join('')}</div>`; }
function hero(label,title,intro,image='/assets/masterbarbershop-case.jpg') { return `<section class="page-hero has-image" style="--hero-image:url('${image}')"><div class="inner"><p class="breadcrumb"><a href="/">Home</a> / ${esc(label)}</p><h1>${esc(title)}</h1><p>${esc(intro)}</p>${button()}</div></section>`; }
const section = (title, content, soft=false) => `<section class="page-section${soft?' soft':''}"><div class="inner"><h2>${esc(title)}</h2>${content}</div></section>`;
const documents = [];
async function page(path,title,description,body,image='/assets/masterbarbershop-case.jpg') {
  const entity = {'@context':'https://schema.org','@type':'Organization','@id':`${origin}/#organization`,name:'Arix Marketing',url:origin,email:'info@arixmarketing.nl',telephone:'+31638212543',address:{'@type':'PostalAddress',addressLocality:'Arnhem',addressCountry:'NL'}};
  const html = `<!doctype html>\n<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)} | Arix Marketing</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${origin}${path}"><meta property="og:title" content="${esc(title)} | Arix Marketing"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin}${path}"><meta property="og:type" content="website"><meta property="og:site_name" content="Arix Marketing"><meta property="og:locale" content="nl_NL"><meta property="og:image" content="${origin}${image}"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/assets/logo-arixmarketing.svg"><link rel="stylesheet" href="/cookie-consent.css"><script src="/cookie-consent.js"></script><link rel="stylesheet" href="/assets/site.css?v=${version}"><script src="/assets/site.js?v=${version}" defer></script><script type="application/ld+json">${JSON.stringify(entity)}</script></head><body><a class="skip-link" href="#main-content">Naar de inhoud</a>${header(path)}<main id="main-content">${body}</main>${footer()}</body></html>\n`;
  await save(path.slice(1)+'index.html',html); documents.push(path);
}
await page('/diensten/','Online zichtbaarheid: onze diensten','Social media, SEO, AI-vindbaarheid, websites en werving voor lokale bedrijven. Kies de aanpak die bij jouw vraag past.',hero('Diensten','Van zichtbaar zijn naar gekozen worden.','Je hoeft niet overal tegelijk te beginnen. Kies de dienst die past bij jouw bedrijf, of start met een zichtbaarheidsanalyse.')+section('Waar wil jij aan werken?',serviceCards())+section('Werk uit de praktijk',caseCards(['broodje-en-co','master-barbershop']),true)+closing());
for (const s of services) {
  await page(`/diensten/${s.slug}/`,`${s.name} voor lokale bedrijven`,s.description,
    hero(s.name,s.title,s.intro)+section('Wat we samen aanpakken',`<ul>${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>${s.next?`<p><a class="text-link" href="${s.next}">${s.nextLabel}</a></p>`:''}`)+section('Een duidelijke eerste stap','<p>We beginnen met jouw vraag, je huidige online aanwezigheid en wat je zelf kunt aanleveren. Daarna spreken we de werkzaamheden, planning en kosten af. Een kennismaking is nog geen opdracht.</p>',true)+section(s.evidence?'Verwant werk uit de praktijk':'Werk uit de praktijk',`${s.evidence?`<p>${esc(s.evidence)}</p>`:''}${caseCards(s.cases)}`)+section('Veelgestelde vraag',`<details class="faq-block"><summary>${esc(s.faq[0])}</summary><p>${esc(s.faq[1])}</p></details>`)+closing());
}
await page('/cases/','Cases: ons werk in beeld','Bekijk werk van Arix Marketing voor Broodje & Co Arnhem, Ichiba, GSM Reparatie Arnhem en Master Barbershop.',hero('Cases','Het werk achter de zichtbaarheid.','Bekijk wat we maken voor lokale bedrijven. Per case lees je de vraag, de aanpak en wat er aantoonbaar is opgeleverd.','/assets/broodje-content.jpg')+section('Onze projecten',`<div class="case-filters" data-case-filter hidden aria-label="Filter cases">${[['all','Alle cases'],['social-media','Social media'],['content','Content'],['lokale-zichtbaarheid','Lokale zichtbaarheid'],['websites','Websites']].map(([key,label])=>`<button type="button" data-filter="${key}" aria-pressed="${key==='all'}">${label}</button>`).join('')}</div><p data-case-count aria-live="polite">4 projecten</p>${caseCards(undefined,true)}<p><a class="text-link" href="/#contentvoorbeelden">Bekijk het videoportfolio</a></p>`)+closing());
// Reusable CaseStudy template. Optional metrics are never generated from guesses.
for (const c of cases) {
  const story = `<div class="case-reading"><div><h2>De vraag</h2><p>${esc(c.problem)}</p><h2>Onze aanpak</h2><p>${esc(c.approach)}</p><h2>Uitgevoerde werkzaamheden</h2><ul>${c.work.map(w=>`<li>${esc(w)}</li>`).join('')}</ul><h2>Het resultaat</h2><p>${esc(c.result)}</p>${c.metric?`<div class="case-stat"><strong>${esc(c.metric)}</strong><span>${esc(c.metricLabel)}</span></div>`:''}${c.difference?`<h2>Wat maakte het verschil?</h2><p>${esc(c.difference)}</p>`:''}</div><figure><img src="${c.image}" alt="${esc(c.alt)}" width="1080" height="1350" loading="lazy"><figcaption>${esc(c.imageCaption || `${c.name} · ${c.label}`)}</figcaption></figure></div>`;
  await page(`/cases/${c.slug}/`,`${c.name}: de case`,c.intro,hero(c.name,c.name,c.intro,c.image)+`<section class="page-section"><div class="inner">${story}</div></section>`+section('Diensten bij dit project',serviceCards(c.services),true)+`<section class="page-section"><div class="inner"><a class="text-link" href="/cases/">Bekijk alle cases</a></div></section>`+closing('Ook jouw bedrijf herkenbaar in beeld?'),c.image);
}
await page('/contact/','Contact: plan een kennismaking','Bespreek jouw online zichtbaarheid met Arix Marketing in Arnhem. Plan een kennismaking of neem contact op via e-mail of telefoon.',hero('Contact','Vertel ons waar je naartoe wilt.','Een nieuwe website, meer structuur op social media of beter lokaal gevonden worden? Laten we beginnen met jouw vraag.')+section('Rechtstreeks contact',`<address class="contact-details"><strong>Arix Marketing</strong><span>Arnhem, Nederland</span><a href="mailto:info@arixmarketing.nl">info@arixmarketing.nl</a><a href="tel:+31638212543">06 38 21 25 43</a><span>KvK: 82042691</span></address>`)+section('Wat bespreken we?','<p>Je vertelt over je bedrijf, je doelgroep en waar je tegenaan loopt. We bekijken welke dienst past en welke informatie nodig is voor een concreet voorstel. Planning en kosten spreken we vooraf af.</p><p><a class="text-link" href="/diensten/">Bekijk onze diensten</a></p>',true));

const existing = ['index.html','over-ons/index.html','onepage/index.html','recruitment-campagne/index.html','privacy/index.html','voorwaarden/index.html','annulering-terugbetaling/index.html'];
for (const file of existing) {
  const path = file==='index.html'?'/':'/'+file.replace('index.html','');
  let html = await read(file);
  html = html.replace(/<header\b[^>]*>[\s\S]*?<\/header>/,header(path)).replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/,footer());
  html = html.replace(/<script>const header=document\.querySelector\([\s\S]*?<\/script>/g,'').replace(/<script src="\.\.\/menu\.js"><\/script>/g,'');
  html = html.replace(/<main>/,'<main id="main-content">');
  if (!html.includes('class="skip-link"')) html=html.replace(/<body>/,'<body><a class="skip-link" href="#main-content">Naar de inhoud</a>');
  html=html.replace(/<link rel="stylesheet" href="\/assets\/site.css[^\"]*">\s*<script src="\/assets\/site.js[^\"]*" defer><\/script>/g,'');
  html=html.replace('</head>',`<link rel="stylesheet" href="/assets/site.css?v=${version}"><script src="/assets/site.js?v=${version}" defer></script></head>`);
  if (!html.includes('src="/cookie-consent.js"')) html=html.replace('</head>','<link rel="stylesheet" href="/cookie-consent.css"><script src="/cookie-consent.js"></script></head>');
  html=html.replace(/<a([^>]*href=")mailto:info@arixmarketing.nl\?subject=Mollie-link[^\"]*("[^>]*)>[^<]*<\/a>/g,`<a$1${booking}$2>Plan een kennismaking</a>`).replace(/<p class="microcopy">Mollie-betaallink[^<]*<\/p>/g,'<p class="microcopy">Bespreek je project tijdens een kennismaking. Werkzaamheden en betaling spreken we daarna af.</p>');
  html=html.replace(/Mijn website starten|Mijn campagne starten/g,'Plan een kennismaking');
  html=html.replace(/<a class="(header-cta|button primary)" href="#pakketten">Plan een kennismaking<\/a>/g,`<a class="$1" href="${booking}">Plan een kennismaking</a>`);
  html=html.replace(/minimaal 10\.000 kandidaten/g,'minimaal 10.000 advertentieweergaven');
  html=html.replace(/Breng jouw vacature onder de aandacht van minimaal 10\.000 advertentieweergaven\./g,'Geef jouw vacature minimaal 10.000 advertentieweergaven.');
  html=html.replace(/content="https:\/\/www.arixmarketing.nl\/assets\/logo-arixmarketing.svg"/g,'content="https://www.arixmarketing.nl/assets/masterbarbershop-case.jpg"');
  if (file==='over-ons/index.html') {
    html=html.replace(/href="mailto:info@arixmarketing.nl\?subject=Samenwerken%20met%20Arix%20Marketing">Kennismaken/g,`href="${booking}">Plan een kennismaking`);
    if(!html.includes('property="og:title"'))html=html.replace('</head>',`<meta property="og:title" content="Over ons | Arix Marketing"><meta property="og:description" content="Maak kennis met Arix Marketing en ons creatieve partnernetwerk in Arnhem."><meta property="og:url" content="${origin}/over-ons/"><meta property="og:type" content="website"><meta property="og:image" content="${origin}/src/assets/arixon-portret.jpg"></head>`);
  }
  if (file==='index.html') {
    html=html.replace(/href="#cases">Bekijk ons werk/g,'href="/cases/">Bekijk ons werk');
    html=html.replace(/<section class="section soft" id="diensten">[\s\S]*?<\/section>/,`<section class="section soft" id="diensten"><div class="section-head"><p class="eyebrow">Diensten</p><h2>Wat heeft jouw zichtbaarheid nu nodig?</h2><p class="muted">Van een eerste analyse tot structurele uitvoering. Kies waar je wilt beginnen.</p></div>${serviceCards()}<p><a class="text-link" href="/diensten/">Vergelijk onze diensten</a></p></section>`);
    if(!html.includes('Lees de case Broodje'))html=html.replace('<span>Volgers opgebouwd met consistente organische social content.</span>','<span>Van circa 300 naar 10.000 volgers.</span><a href="/cases/broodje-en-co/">Lees de case Broodje &amp; Co</a>');
    const caseSlugs=['broodje-en-co','ichiba','master-barbershop']; let n=0;
    html=html.replace(/<article class="case">([\s\S]*?)<\/article>/g,(whole,inside)=> {const slug=caseSlugs[n++];return inside.includes('<a ')?whole:`<article class="case"><a href="/cases/${slug}/">${inside}</a></article>`;});
    if(!html.includes('<!-- commercial-order -->')) {
      const approach=html.match(/<section id="aanpak"[\s\S]*?<\/section>/)?.[0]||'';
      const who=html.match(/<section class="section">\s*<div class="section-head"><p class="eyebrow">Voor wie[\s\S]*?<\/section>/)?.[0]||'';
      const process=html.match(/<section class="section" aria-label="Onze werkwijze">[\s\S]*?<\/section>/)?.[0]||'';
      html=html.replace(approach,'').replace(who,'').replace(process,'');
      html=html.replace('<section id="pakketten"',`<!-- commercial-order -->${approach}${process}${who}<section id="pakketten"`);
    }
    html=html.replace(/>Bespreek Starter<|>Bespreek Groei<|>Bespreek Expert<|>Bespreek jouw wensen</g,'>Plan een kennismaking<');
  }
  // Build is idempotent; shared assets are always loaded after legacy styles.
  html=html.replace(/>\s+</g,'>\n<');
  await save(file,html); documents.push(path);
}
for (const file of ['privacy.html', 'voorwaarden.html', 'annulering-terugbetaling.html']) await save(file, await read(file));
const redirect = (target,title) => `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | Arix Marketing</title><link rel="canonical" href="${origin}${target}"><meta http-equiv="refresh" content="0;url=${target}"></head><body><p><a href="${target}">${title}</a></p></body></html>\n`;
await save('website-campagne/index.html',redirect('/onepage/','Bekijk het onepage-aanbod'));
await save('studie-case/index.html',redirect('/cases/','Bekijk onze cases'));
await save('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(documents)].sort().map(p=>`  <url><loc>${origin}${p}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated and synced ${documents.length} pages; existing campaigns and legal routes preserved.`);
