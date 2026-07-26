import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileText,
  Gauge,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoImg from "@/assets/arix-logo.png";

export const Route = createFileRoute("/recruitment")({
  component: RecruitmentPage,
  head: () => ({
    meta: [
      { title: "Personeel werven met Meta Ads | Arix Marketing" },
      {
        name: "description",
        content:
          "Een complete recruitmentcampagne met vacaturepagina, Meta Ads, minimaal 10.000 impressies en directe leadregistratie. Vanaf €1.028,50 incl. btw.",
      },
      {
        property: "og:title",
        content: "Recruitmentcampagne met resultaat | Arix Marketing",
      },
      {
        property: "og:description",
        content:
          "Bereik kandidaten met een professionele vacaturepagina, gerichte Meta-campagne en minimaal 10.000 impressies.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const packages = [
  {
    name: "Vacature Start",
    impressions: "10.000",
    price: "€1.028,50",
    exVat: "€850 excl. btw",
    description:
      "Voor een duidelijke lokale vacature en een eerste gerichte wervingscampagne.",
    cta: "Start met 10.000 impressies",
    href: "mailto:info@arixmarketing.nl?subject=Recruitmentcampagne%20Start%20-%2010.000%20impressies",
    featured: false,
  },
  {
    name: "Vacature Groei",
    impressions: "30.000",
    price: "€1.270,50",
    exVat: "€1.050 excl. btw",
    description:
      "Voor werkgevers die meer kandidaten willen bereiken en meer ruimte willen om te testen.",
    cta: "Kies 30.000 impressies",
    href: "mailto:info@arixmarketing.nl?subject=Recruitmentcampagne%20Groei%20-%2030.000%20impressies",
    featured: true,
  },
  {
    name: "Vacature Impact",
    impressions: "50.000",
    price: "€1.512,50",
    exVat: "€1.250 excl. btw",
    description:
      "Voor complexere vacatures of organisaties die meerdere kandidaten willen spreken.",
    cta: "Kies 50.000 impressies",
    href: "mailto:info@arixmarketing.nl?subject=Recruitmentcampagne%20Impact%20-%2050.000%20impressies",
    featured: false,
  },
];

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Intake",
    text: "We verzamelen de functie-eisen, arbeidsvoorwaarden, doelgroep en het verhaal van jouw bedrijf.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Vacaturepagina",
    text: "We bouwen een vaste, snelle one-page waarop kandidaten direct begrijpen wat het werk inhoudt.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Campagne",
    text: "We zetten de vacature via Meta gericht in de markt en leveren het afgesproken aantal impressies.",
  },
  {
    icon: UserRoundCheck,
    number: "04",
    title: "Leads",
    text: "Kandidaten laten naam, telefoonnummer en e-mailadres achter. Jouw bedrijf verzorgt de opvolging.",
  },
];

function RecruitmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navigation />
      <Hero />
      <PromiseStrip />
      <HowItWorks />
      <Packages />
      <Deliverables />
      <PhotoBrief />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Arix Marketing
        </a>

        <a href="/" aria-label="Naar de homepage van Arix Marketing">
          <img
            src={logoImg}
            alt="Arix Marketing"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full border border-gold/40 bg-background object-contain p-1"
          />
        </a>

        <a
          href="#pakketten"
          className="rounded-full bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:opacity-90 md:px-5"
        >
          Bekijk pakketten
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <div className="absolute inset-0 grain" />
      <div className="absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute -left-64 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <motion.div {...fadeUp}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              <Target className="h-3.5 w-3.5" />
              Recruitmentcampagne met resultaat
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-5xl font-display text-5xl font-black leading-[0.94] tracking-tight sm:text-6xl md:text-7xl xl:text-[6.2rem]"
          >
            Breng jouw vacature onder de aandacht van minimaal{" "}
            <span className="gold-gradient-text italic">10.000 kandidaten.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Wij bouwen de vacaturepagina, zetten de Meta-campagne op en leveren
            geïnteresseerde kandidaten rechtstreeks aan via een kort formulier.
            Eén vaste aanpak, één vacature en een meetbaar resultaat.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#pakketten"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:gap-4 hover:opacity-90"
            >
              Start jouw campagne
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#werkwijze"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground transition hover:text-gold"
            >
              Bekijk hoe het werkt <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-sm border border-gold/35 bg-card/90 p-7 shadow-2xl md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                  Complete campagne
                </div>
                <div className="mt-3 font-display text-4xl font-bold">€1.028,50</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  incl. btw · €850 excl. btw
                </div>
              </div>
              <div className="rounded-full border border-gold/30 bg-gold/10 p-3 text-gold">
                <Gauge className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {[
                "Professionele vacaturepagina",
                "Meta-advertentiecampagne",
                "Minimaal 10.000 impressies",
                "Directe leadregistratie",
                "3 tot 4 weken campagne",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CircleCheck className="h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Geen geldige lead? Dan verlengen we de campagne eenmalig met
                  twee weken en 10.000 extra impressies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PromiseStrip() {
  const promises = [
    { icon: Target, label: "Minimaal 10.000 impressies" },
    { icon: MousePointerClick, label: "Solliciteren via one-page" },
    { icon: Clock3, label: "3 tot 4 weken actief" },
    { icon: BarChart3, label: "Meetbare campagne" },
  ];

  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {promises.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 bg-background px-6 py-6 text-center text-sm font-medium"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
      <span className="text-muted-foreground">{number}</span>
      <span className="h-px w-10 bg-gold/50" />
      <span>{children}</span>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="werkwijze" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionLabel number="01">Werkwijze</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Van openstaande vacature naar een{" "}
            <span className="italic text-gold">duidelijke sollicitatiefunnel.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            De technische basis blijft hetzelfde. Daardoor kunnen we snel
            lanceren en onze aandacht richten op de vacature, beelden en
            boodschap die kandidaten moeten overtuigen.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, number, title, text }, index) => (
            <motion.article
              key={title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group min-h-[290px] border border-border bg-card/55 p-7 transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
              </div>
              <h3 className="mt-16 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="pakketten" className="border-y border-border bg-card/30 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <SectionLabel number="02">Bereik kiezen</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            Kies het bereik dat past bij jouw vacature.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Iedere campagne bevat dezelfde complete funnel. Je schaalt alleen
            het aantal impressies op wanneer de vacature complexer is of je
            meer kandidaten wilt bereiken.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <motion.article
              key={item.name}
              {...fadeUp}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={`relative flex flex-col border p-7 md:p-8 ${
                item.featured
                  ? "border-gold bg-gold/[0.07] shadow-[0_20px_80px_-35px_var(--gold)]"
                  : "border-border bg-background"
              }`}
            >
              {item.featured && (
                <div className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-gold px-4 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Aanbevolen
                </div>
              )}

              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {item.name}
              </div>
              <div className="mt-7 flex items-end gap-2">
                <span className="font-display text-6xl font-black leading-none">
                  {item.impressions}
                </span>
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                impressies
              </div>

              <div className="mt-8 border-y border-border py-6">
                <div className="font-display text-4xl font-bold">{item.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  incl. btw · {item.exVat}
                </div>
              </div>

              <p className="mt-6 min-h-[84px] text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Eén vacature",
                  "Vaste recruitment-one-page",
                  "Meta-campagne",
                  "Sollicitatieformulier",
                  "Leadregistratie",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={item.href}
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] transition ${
                  item.featured
                    ? "bg-gold text-primary-foreground hover:opacity-90"
                    : "border border-gold/45 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                {item.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-8 flex flex-col items-center justify-between gap-5 border border-border bg-background p-6 text-center md:flex-row md:text-left"
        >
          <div>
            <div className="font-display text-2xl font-semibold">Extra bereik nodig?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Breid iedere campagne uit met nog eens 10.000 impressies.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl font-bold text-gold">€121</span>
            <span className="max-w-[130px] text-left text-xs leading-5 text-muted-foreground">
              incl. btw per 10.000 extra impressies
            </span>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
          Op basis van eerdere campagnes levert 10.000 impressies vaak 1 tot 3
          leads op. Bij 50.000 impressies kan dit oplopen tot circa 5 tot 15
          leads. Resultaten verschillen per vacature, regio, aanbod en
          aangeleverd beeldmateriaal.
        </p>
      </div>
    </section>
  );
}

function Deliverables() {
  const included = [
    "Campagne-intake en doelgroepomschrijving",
    "Vacaturetekst en werkgeversboodschap",
    "Snelle one-page in de huisstijl van het bedrijf",
    "Kort sollicitatieformulier op de website",
    "Twee advertentievarianten",
    "Meta-campagne voor één Nederlandse vacature",
    "Minimaal het gekozen aantal impressies",
    "Leads met naam, telefoonnummer en e-mailadres",
    "Eindrapportage van bereik en inzendingen",
  ];

  const notIncluded = [
    "Foto- of videoproductie",
    "Vertalingen of internationale campagnes",
    "Selectie en beoordeling van kandidaten",
    "Telefonische opvolging van sollicitanten",
    "Garantie op een sollicitatiegesprek of aanname",
    "Meerdere vacatures binnen één campagne",
  ];

  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div {...fadeUp} className="lg:sticky lg:top-28">
          <SectionLabel number="03">Vaste scope</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Precies weten wat je krijgt.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Eén duidelijke vacature, één campagne en één sollicitatieroute. De
            vaste opbouw houdt het snel, schaalbaar en meetbaar.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="border border-gold/35 bg-gold/[0.05] p-7">
            <div className="mb-7 flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-gold" />
              <h3 className="font-display text-2xl font-semibold">Inbegrepen</h3>
            </div>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="border border-border bg-card/55 p-7"
          >
            <div className="mb-7 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-muted-foreground" />
              <h3 className="font-display text-2xl font-semibold">Niet inbegrepen</h3>
            </div>
            <ul className="space-y-4">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhotoBrief() {
  const shots = [
    "Een medewerker die herkenbaar aan het werk is",
    "Een natuurlijke glimlach en zichtbaar werkplezier",
    "Drie tot vijf foto's van de belangrijkste werkzaamheden",
    "Een overzicht van de werkplek of het team",
    "Een close-up van gereedschap, voertuig of werkproces",
    "Horizontale én verticale originele bestanden",
  ];

  return (
    <section className="border-y border-border bg-card/30 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp}>
          <SectionLabel number="04">Beeldmateriaal</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Laat het echte werk zien.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            De campagne werkt het sterkst met echte medewerkers en een
            herkenbare werkomgeving. Geen algemene stockfoto, maar een eerlijk
            beeld van wat een kandidaat straks gaat doen.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 border border-gold/30 bg-gold/[0.06] px-5 py-4 text-sm">
            <Camera className="h-5 w-5 text-gold" />
            De opdrachtgever levert de foto's aan volgens onze fotobrief.
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="border border-border bg-background p-7 md:p-9"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            Aanleverchecklist
          </div>
          <div className="mt-7 grid gap-4">
            {shots.map((shot) => (
              <div key={shot} className="flex items-start gap-3 border-b border-border pb-4 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{shot}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            Medewerkers moeten toestemming hebben gegeven voor commercieel
            gebruik. Veiligheidskleding en werksituaties moeten correct en
            representatief worden vastgelegd.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <motion.div
        {...fadeUp}
        className="relative mx-auto max-w-[1200px] overflow-hidden border border-gold/45 bg-gold/[0.06] p-8 md:p-14"
      >
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-[90px]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="flex items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-gold/40 bg-background/70">
              <ShieldCheck className="h-20 w-20 text-gold" strokeWidth={1.2} />
            </div>
          </div>
          <div>
            <SectionLabel number="05">Resultaatgarantie</SectionLabel>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Geen geldige lead? Dan gaan we door.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ontvang je tijdens de oorspronkelijke campagneperiode geen
              geldige lead, dan verlengen we de campagne eenmalig met twee weken
              en voegen we 10.000 extra impressies toe zonder extra kosten.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-border bg-background/70 p-5">
                <div className="font-semibold">Wat is een geldige lead?</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Een unieke kandidaat die naam, geldig telefoonnummer en geldig
                  e-mailadres via de vacaturepagina achterlaat.
                </p>
              </div>
              <div className="border border-border bg-background/70 p-5">
                <div className="font-semibold">Wie verzorgt de opvolging?</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  De opdrachtgever beoordeelt en benadert de kandidaten. Snel
                  opvolgen vergroot de kans op een gesprek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Garanderen jullie dat wij iemand aannemen?",
      a: "We garanderen het afgesproken aantal impressies en onze verlengingsregeling wanneer er geen geldige lead binnenkomt. Een sollicitatiegesprek of aanname hangt ook af van de functie-eisen, arbeidsvoorwaarden, locatie en opvolging door de werkgever.",
    },
    {
      q: "Wat gebeurt er nadat iemand solliciteert?",
      a: "De kandidaat vult naam, telefoonnummer en e-mailadres in op de vacaturepagina. De inzending wordt doorgestuurd naar de afgesproken contactpersoon binnen het bedrijf. Het bedrijf verzorgt zelf de opvolging.",
    },
    {
      q: "Kan ik meerdere vacatures tegelijk promoten?",
      a: "Ieder pakket is bedoeld voor één vacature. Voor een tweede functie wordt een aparte campagne ingericht, zodat de boodschap, pagina en resultaten duidelijk meetbaar blijven.",
    },
    {
      q: "Zijn foto's inbegrepen?",
      a: "Nee. Je ontvangt een duidelijke fotobrief en levert zelf representatieve foto's van medewerkers, werkzaamheden en de werkomgeving aan. Een aparte contentshoot kan op aanvraag worden aangeboden.",
    },
    {
      q: "Kan ik later extra impressies bijkopen?",
      a: "Ja. Iedere campagne kan worden uitgebreid met 10.000 extra impressies voor €121 inclusief btw. Je hoeft hiervoor geen nieuwe vacaturepagina te laten bouwen.",
    },
    {
      q: "Hoe lang duurt een campagne?",
      a: "De reguliere looptijd is drie tot vier weken. De exacte startdatum wordt afgesproken nadat de intake en het benodigde beeldmateriaal compleet zijn aangeleverd.",
    },
  ];

  return (
    <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <motion.div {...fadeUp}>
          <SectionLabel number="06">Veelgestelde vragen</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Duidelijk voordat we starten.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Staat jouw vraag er niet tussen? Stuur een bericht naar
            info@arixmarketing.nl.
          </p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:text-gold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-32">
      <motion.div
        {...fadeUp}
        className="relative mx-auto max-w-[1400px] overflow-hidden bg-gold px-7 py-16 text-primary-foreground md:px-14 md:py-20"
      >
        <div className="absolute inset-0 opacity-10 grain" />
        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]">
              Klaar om kandidaten te bereiken?
            </div>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
              Zet jouw vacature professioneel in de markt.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">
              Start vanaf €1.028,50 inclusief btw met een complete
              recruitmentcampagne en minimaal 10.000 impressies.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:info@arixmarketing.nl?subject=Ik%20wil%20een%20recruitmentcampagne%20starten"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-foreground transition hover:scale-[1.02]"
            >
              Campagne starten <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-xs text-primary-foreground/70">
              Eén vacature · Nederlandse markt · vaste scope
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-7 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
          <div>
            <div className="font-display font-semibold text-foreground">Arix Marketing</div>
            <div>Online zichtbaarheid die werkt.</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="mailto:info@arixmarketing.nl" className="inline-flex items-center gap-2 hover:text-gold">
            <Mail className="h-4 w-4" /> info@arixmarketing.nl
          </a>
          <a href="/" className="hover:text-gold">Homepage</a>
          <a href="/voorwaarden" className="hover:text-gold">Voorwaarden</a>
          <a href="/privacy" className="hover:text-gold">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
