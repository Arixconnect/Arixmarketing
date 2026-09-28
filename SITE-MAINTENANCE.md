# Arix Marketing: live HTML-site

## Publicatie

De live site gebruikt de HTML-bestanden in de root op `main`. GitHub Pages publiceert
via de bestaande **pages build and deployment** (branch-publicatie). De vroegere
workflow `.github/workflows/pages.yml` heet nu **Validate static site** en heeft
geen deploy-stap en geen Pages-schrijfrechten meer. Er is dus maar een automatische
publicatieroute. De controleworkflow blokkeert een branch-publicatie niet: test voor
een push of gebruik een gecontroleerde PR. Verander de Pages-bron niet naar Actions
zonder ook bewust een nieuwe publicatieworkflow in te richten.

`src/`, `vite.config.ts` en de React/TanStack-build blijven bewaard, maar sturen de
live site niet aan. Er is geen React-migratie uitgevoerd. `npm run build` en de
React-linter testen niet de gepubliceerde HTML-site.

## Bronnen en controles

- `site/content.mjs`: diensten en gecontroleerde casefeiten.
- `scripts/build-site.mjs`: gedeelde header, footer, CTA, CaseStudy en diensttemplate.
- `assets/site.css` en `assets/site.js`: gedeelde presentatie, mobiel menu, casefilters.
- De bestaande homepage en campagne-HTML blijven bewerkbaar; de generator vernieuwt
  hun gedeelde onderdelen en bewaakt de navigatie. Nieuwe diensten/cases worden
  volledig gegenereerd en moeten via de brondata/template worden bewerkt.
- `assets/portfolio.css` en `assets/portfolio.js`: bestaande mobiele video- en
  websitepreviews, met de bestaande cookietoestemming. Geen tracking toegevoegd.

Voer voor publicatie uit:

```sh
node scripts/build-site.mjs
python3 scripts/check-site.py
node --check assets/site.js
```

Commit de gegenereerde HTML en sitemap samen met de bronbestanden. Een tweede build
moet dezelfde bestanden opleveren. Controleer daarnaast desktop/mobiel, toetsenbord,
cookiekeuze, videoportfolio en directe route-refreshes in een browser. De gewone
publieke URL moet na een geslaagde Pages-publicatie dezelfde versie tonen.

## URL's en SEO

`/onepage/` en `/recruitment-campagne/` blijven bestaan. De nieuwe dienstpagina's
linken ernaar voor het aanbod. `/website-campagne/` verwijst met canonical en HTML
refresh naar `/onepage/`; `/studie-case/` naar `/cases/`. Dit zijn geen HTTP 301's:
GitHub Pages biedt hier geen serverconfiguratie voor. Een echte 301 vraagt een
aparte edge/proxy-instelling. Bestaande juridische `.html`-aliassen blijven behouden.

## Nog aan te leveren of te bevestigen

- Broodje & Co: periode, platform, meetbron/screenshots en toestemming bij het
  opgegeven resultaat circa 300 naar 10.000 volgers. Geen extra omzet- of bereikclaims.
- Ichiba, GSM en Master: aanvullen van concrete projectbriefs, looptijden en
  geverifieerde resultaten. GSM-weergavecijfers blijven ongepubliceerd.
- Er zijn nog geen onderbouwde SEO-, GEO- of recruitmentresultaten als case.
  Verwante cases zijn expliciet als verwant werk benoemd, niet als bewijs daarvoor.
- GEO blijft een basispagina. Prijs, roadmap en uitgebreide propositie volgen later.
- Alle primaire aanvragen gaan naar https://arixmarketing.setmore.com/.
  De vijf bestaande `data-mollie-config`-namen blijven voor latere betaalintegratie;
  er wordt nu geen werkende checkout of automatische intake beloofd.
- Bestaande pakketprijzen, campagnegarantie en juridische teksten zijn niet nieuw
  juridisch beoordeeld. Bevestig deze afspraken voor een toekomstige betaalfunnel.

## Mascotte

Er staat nog geen bevestigde mascotte-afbeelding in deze repository. Plaats later
web-geoptimaliseerde bestanden in `assets/mascotte/`, bijvoorbeeld `strategie.webp`
en `geo.webp`. Gebruik de originele zwart-gele mascotte, geen andere figuur.
Voeg het gekozen pad, alttekst en vaste afmetingen toe aan de template in
`scripts/build-site.mjs`. Toon hem hooguit bij werkwijze en GEO, niet in echte
klantcases. Verwijs nooit rechtstreeks naar lokale Downloads- of Drive-paden.
Tot de bestanden beschikbaar zijn, worden geen lege afbeeldingen gepubliceerd.
