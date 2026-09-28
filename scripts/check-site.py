"""Dependency-free checks for the published HTML, not the unused React app."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []
        self.assets = []
        self.h1 = 0
        self.canonical = None
        self.description = None
        self.redirect = False
        self.nav = []
        self.in_nav = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'nav' and a.get('aria-label') == 'Hoofdnavigatie': self.in_nav = True
        if tag == 'a':
            self.links.append(a.get('href', ''))
            if self.in_nav: self.nav.append(a.get('href'))
        if tag in ('img', 'script') and a.get('src'): self.assets.append(a['src'])
        if tag == 'img': assert 'alt' in a, 'Image without alt'
        if tag == 'link':
            if a.get('rel') == 'canonical': self.canonical = a.get('href')
            if a.get('rel') == 'stylesheet': self.assets.append(a.get('href', ''))
        if tag == 'meta':
            if a.get('name') == 'description': self.description = a.get('content')
            if a.get('http-equiv') == 'refresh': self.redirect = True
    def handle_endtag(self, tag):
        if tag == 'nav': self.in_nav = False

pages = {}
for file in ROOT.rglob('*.html'):
    if any(p in file.parts for p in ('.git', 'node_modules')): continue
    page = Page()
    page.feed(file.read_text())
    pages[file.resolve()] = page
errors = []
for file, page in pages.items():
    name = str(file.relative_to(ROOT))
    if not page.redirect:
        if page.h1 != 1: errors.append(f'{name}: expected one H1')
        if not page.description or not page.canonical: errors.append(f'{name}: missing metadata')
        if page.nav != ['/', '/diensten/', '/cases/', '/over-ons/', '/contact/']: errors.append(f'{name}: inconsistent navigation')
    if len(page.ids) != len(set(page.ids)): errors.append(f'{name}: duplicate IDs')
    for href in page.links + page.assets:
        u = urlsplit(href)
        if u.scheme or u.netloc: continue
        if not href or href == '#': errors.append(f'{name}: empty link'); continue
        dest = ROOT / unquote(u.path).lstrip('/') if href.startswith('/') else file.parent / unquote(u.path) if u.path else file
        if dest.is_dir(): dest /= 'index.html'
        dest = dest.resolve()
        if not dest.exists(): errors.append(f'{name}: missing {href}')
        elif u.fragment and dest in pages and u.fragment not in pages[dest].ids: errors.append(f'{name}: missing anchor {href}')
    text = file.read_text()
    if 'Mollie-betaallink nog koppelen' in text or '10.000 kandidaten' in text: errors.append(f'{name}: obsolete claim or placeholder')
for loc in ET.parse(ROOT / 'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
    target = ROOT / urlsplit(loc.text).path.lstrip('/') / 'index.html'
    if not target.exists(): errors.append(f'Sitemap missing {loc.text}')
assert not errors, '\n'.join(errors)
print(f'PASS: {len(pages)} HTML documents, internal links, assets, anchors, shared navigation and metadata.')
