
## Bevestigde wijzigingen

Eén pass over `src/routes/index.tsx` + portret kopiëren.

### 1. Pakketten — 3 maandpakketten (huisstijl goud)
| Pakket | Prijs | Inhoud |
|---|---|---|
| **Starter** | €850 p/m | 4 posts + stories · 2 platformen · 1 content shoot p/m · Metricool rapport · community |
| **Groei** ⭐ Meest gekozen | €1.750 p/m | 12 posts + stories · 4 platformen · 2 content shoots p/m · strategie & rapportage · ondersteuning werving |
| **Expert** | €3.333 p/m | 20 posts + stories · 5 platformen · 4 content shoots p/m · prioriteit support · Google zichtbaarheid · videoregie |

Onder de drie pakketten: *€350 onboarding eenmalig · min. 6 maanden · excl. btw · advertenties op aanvraag · extra platform +€250 p/m*.

Losse €650/€950 content-shoot kaart → **verwijderd**.
AI SEO / GEO sectie → **verwijderd**.

**Wervingscampagne + Pakket op maat groter:**
- Niet meer als smalle 2-koloms onder, maar als twee gelijkwaardige kaarten op volle breedte (groter padding, prominente prijs, korte feature-lijst i.p.v. één regel tekst):
  - **🚀 Wervingscampagnes — €1.200**: landingspagina + content + strategie + bereik onder werkzoekenden, eenmalig of als sprint.
  - **✨ Pakket op maat — op aanvraag**: voor specifieke wensen, extra contentbehoefte of grotere trajecten — voorstel binnen 48u.
- Website-blok (Landing/Business/Maatwerk) blijft, label aangepast naar *"Websites via Nomadsoffice"*.

### 2. Premium "Wie is Arix" bovenaan
- **Nav**: klein rond portret (40px) + "Arixon Camelia" micro-label.
- **Nieuwe Slide 02 — About** tussen Hero en "Wat doen we": portret (gouden border) links, korte tekst rechts uit ondernemingsplan, 3 chips (*Sinds 2019 · Arnhem & Nijmegen · 6+ jaar ervaring*). Slide-nummers schuiven 1 op.

### 3. Partner-slider (goud, huidige huisstijl)
Vervang "Instagram/TikTok/…" marquee onder Hero door **partner-marquee**: Broodje & Co · Ichiba · Masterbarbershop · Studiekunst · GSM Reparatie Arnhem · Gemeente Arnhem × Rijnstad · Maximum Performance · Nomadsoffice · Sankofa · Stingray — met **gouden ster-separator** (huidige stijl behouden). Kempi & Josylvio verwijderd.

### 4. Showreel — 1–3 YouTube embeds
Nieuwe sectie tussen Pricing en Work, layout 1 grote + 2 kleine YouTube `nocookie` iframes met titel-overlay. Placeholder IDs tot je 1–3 URL's stuurt.

### 5. Strategie-accordion met 3 E's + ROI
Intro herschreven: *"Consistentie in zichtbaarheid en content met een verhaal — gemaakt volgens de 3 E's: Entertainment, Educatie, Emotie. Gebaseerd op bewezen frameworks."*

Antwoorden op alle 6 vragen, met heldere ROI-uitleg via Metricool + UTM + conversies. (Zie vorige plan voor exacte teksten.)

### Bestanden
- **edit** `src/routes/index.tsx`
- **copy** `user-uploads://Arix_linkedIn_bril.png` → `src/assets/arixon-portret.jpg`

---

## 💡 Tips om de site nog beter te maken

Mijn top 8, gerangschikt op impact:

1. **Echte testimonials/quotes** — Eén korte zin van Broodje & Co of Ichiba ("van 300 naar 10k volgers in 6 maanden") doet meer dan elk verkooppraatje. Plek: nieuwe smalle sectie boven of onder Pricing.
2. **Resultaten met cijfers per case** — In Recent Work nu alleen labels; voeg per case 1 cijfer toe (+342% bereik, +8.5k volgers, etc.). Visitors scannen op getallen.
3. **Mini-contactformulier i.p.v. alleen mailto** — Naam + bedrijf + bericht, drie velden. Veel mensen klikken geen mailto. Kan via Lovable Cloud + Resend in 1 stap.
4. **WhatsApp/Calendly knop** — Lage drempel: "Plan kennismaking (15 min)" knop in CTA + floating bubble. Levert vaak 2–3× meer leads dan e-mail alleen.
5. **FAQ-sectie onderaan** — 5–6 vragen: minimale looptijd, opzegging, eigendom content, btw, wat als ik geen tijd heb voor shoots, levertijd. Wegnemen van twijfels = meer aanvragen + SEO-bonus.
6. **Eigen domein + SEO meta** — Custom domein `arixmarketing.nl` koppelen + per pagina goede `<title>`/`<meta description>` voor Google. Nu heel basic.
7. **OG-image** — Eigen social share-afbeelding (logo + tagline + gouden accent) zodat een WhatsApp/LinkedIn link er premium uitziet. 1 plaatje, eenmalig.
8. **Cookie/privacy + KvK in footer** — Voor zakelijke geloofwaardigheid: KvK-nummer, btw-id, privacy-link. Hoort er gewoon bij voor B2B.

**Bonus (later)**:
- Blog/cases-pagina (per case 1 detailpagina met before/after + cijfers) — voert je SEO en geeft potentiële klanten "proof".
- Notion klantportaal-mockup screenshot in Strategie-slide → laat zien hoe samenwerking eruitziet.
- Lichtere "leesversie" voor mobiel — huidige hero is op telefoon nog wat dicht.

Zeg welke tips ik **nu** mee mag bouwen (bv. 1, 3, 5 — testimonials + contactform + FAQ in dezelfde pass), of zet er na deze pass los achteraan. Geen actie nodig: dan bouw ik puur de bevestigde punten en wachten we de tips af.
