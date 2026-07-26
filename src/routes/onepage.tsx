import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  ExternalLink,
  Mail,
  MonitorSmartphone,
  Music2,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoImg from "@/assets/arix-logo.png";

export const Route = createFileRoute("/onepage")({
  component: OnePageCampaign,
  head: () => ({
    meta: [
      { title: "One-page website laten maken | Arix Marketing" },
      {
        name: "description",
        content:
          "Een professionele one-page website voor kappers, nagelstudio's en muziekstudio's. Vanaf €399 inclusief btw, mobiel geoptimaliseerd en gebouwd vanuit een duidelijke intake.",
      },
      {
        property: "og:title",
        content: "Professioneel online met één sterke pagina | Arix Marketing",
      },
      {
        property: "og:description",
        content: "Een complete one-page website vanaf €399 inclusief btw.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arixmarketing.nl/onepage" },
    ],
    links: [{ rel: "canonical", href: "https://arixmarketing.nl/onepage" }],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const products = [
  {
    name: "One Page",
    price: "€399",
    exVat: "€329,75 excl. btw",
    description:
      "Voor ondernemers die snel een professionele, duidelijke en mobielvriendelijke website nodig hebben.",
    features: [
      "Eén pagina met maximaal zeven secties",
      "Mobiel geoptimaliseerd",
      "Contact-, bel- of WhatsApp-knop",
      "Teksten uitgewerkt vanuit jouw intake",
      "Basis-SEO en domeinkoppeling",
      "Eén gebundelde correctieronde",
    ],
    cta: "Bestel mijn website",
    href: "mailto:info@arixmarketing.nl?subject=One%20Page%20van%20€399%20bestellen",
    featured: false,
  },
  {
    name: "One Page Boekbaar",
    price: "€599",
    exVat: "€495,04 excl. btw",
    description:
      "Voor dienstverleners die bezoekers direct een afspraak willen laten inplannen.",
    features: [
      "Alles uit het One Page-pakket",
      "Setmore-account op bedrijfsnaam",
      "Maximaal acht diensten en twee medewerkers",
      "Beschikbaarheid en openingstijden instellen",
      "Boekingsknop en één agenda koppelen",
      "Eén testboeking en korte uitleg",
    ],
    cta: "Maak mijn website boekbaar",
    href: "mailto:info@arixmarketing.nl?subject=One%20Page%20Boekbaar%20van%20€599%20bestellen",
    featured: true,
  },
];

function OnePageCampaign() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navigation />
      <Hero />
      <Audience />
      <Workflow />
      <Pricing />
      <Proof />
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
          <ArrowLeft className="h-4 w-4" /> Arix Marketing
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
          href="#prijzen"
          className="rounded-full bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:opacity-90 md:px-5"
        >
          Bekijk prijzen
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
      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <motion.div {...fadeUp}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> 16 bedrijven online in 90 dagen
            </div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-5xl font-display text-5xl font-black leading-[0.94] tracking-tight sm:text-6xl md:text-7xl xl:text-[6.2rem]"
          >
            Professioneel online met{" "}
            <span className="gold-gradient-text italic">één sterke pagina.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Een snelle, duidelijke en mobiel geoptimaliseerde website voor kappers,
            nagelstudio&apos;s en muziekstudio&apos;s. Kies je pakket, lever je informatie
            aan en wij bouwen.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#prijzen"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:gap-4 hover:opacity-90"
            >
              Kies je website <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#voorbeelden"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground transition hover:text-gold"
            >
              Bekijk voorbeelden <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.85, delay: 0.18 }} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-3xl" />
          <div className="relative border border-gold/35 bg-card/90 p-7 shadow-2xl md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                  Transparante prijs
                </div>
                <div className="mt-3 font-display text-5xl font-bold">€399</div>
                <div className="mt-1 text-sm text-muted-foreground">inclusief btw</div>
              </div>
              <MonitorSmartphone className="h-7 w-7 text-gold" />
            </div>
            <div className="mt-8 grid gap-3">
              {[
                "Complete one-page website",
                "Eerste concept na complete intake",
                "Mobiel geoptimaliseerd",
                "Teksten uitgewerkt vanuit jouw input",
                "Eén correctieronde",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CircleCheck className="h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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

function Audience() {
  const audiences = [
    {
      icon: Scissors,
      title: "Kappers & barbers",
      text: "Laat behandelingen, prijzen, openingstijden en een directe boekingsroute zien.",
    },
    {
      icon: Sparkles,
      title: "Nagelstudio's",
      text: "Presenteer jouw stijl, behandelingen en beschikbaarheid zonder afhankelijk te zijn van alleen Instagram.",
    },
    {
      icon: Music2,
      title: "Muziekstudio's",
      text: "Maak ruimtes, engineers, tarieven en boekingsmogelijkheden direct begrijpelijk.",
    },
  ];

  return (
    <section className="border-y border-border bg-card/30 px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionLabel number="01">Voor wie</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Gebouwd voor lokale dienstverleners.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-gold/40"
            >
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-10 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    ["01", "Kies en betaal", "Selecteer de gewone of boekbare one-page."],
    ["02", "Vul de intake in", "Lever bedrijfsinformatie, diensten, logo en beelden aan."],
    ["03", "Wij bouwen", "Je input wordt omgezet in een duidelijke Codex-brief en websiteversie."],
    ["04", "Controle en live", "Na één correctieronde koppelen we het domein."],
  ];

  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div {...fadeUp} className="max-w-4xl">
          <SectionLabel number="02">De funnel</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Betaling → intake → Codex-brief → productie → correctie → live.
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <motion.div key={number} {...fadeUp} className="min-h-[250px] bg-background p-7">
              <span className="font-mono text-xs text-gold">{number}</span>
              <h3 className="mt-16 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="prijzen" className="border-y border-border bg-card/30 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <SectionLabel number="03">Vaste pakketten</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-6xl">Kies wat jouw bedrijf nodig heeft.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            De grote prijs is inclusief btw en is het bedrag dat bij de checkout wordt afgerekend.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              {...fadeUp}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={`relative flex flex-col border p-7 md:p-9 ${
                product.featured ? "border-gold bg-gold/[0.07]" : "border-border bg-background"
              }`}
            >
              {product.featured && (
                <div className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-gold px-4 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Meest gekozen
                </div>
              )}
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">{product.name}</div>
              <div className="mt-6 font-display text-6xl font-black">{product.price}</div>
              <div className="mt-1 text-sm text-muted-foreground">incl. btw · {product.exVat}</div>
              <p className="mt-7 text-sm leading-7 text-muted-foreground">{product.description}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={product.href}
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] transition ${
                  product.featured
                    ? "bg-gold text-primary-foreground hover:opacity-90"
                    : "border border-gold/45 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                {product.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const cases = [
    {
      name: "Soundlab",
      label: "Interactieve preview",
      text: "Een muziekstudio met diensten, tarieven, teamleden en een directe Setmore-boekingsroute.",
      href: "https://arixconnect.github.io/Soundlab/",
    },
    {
      name: "Master Barbershop",
      label: "Website + online boeken",
      text: "Een mobiele website die bezoekers naar behandelingen, prijzen en de boekingspagina leidt.",
      href: "https://masterbarbershop.nl",
    },
    {
      name: "GSM Reparatie Arnhem",
      label: "Uitgebreide bedrijfssite",
      text: "Een voorbeeld van hoe diensten en contactroutes overzichtelijk online worden gepresenteerd.",
      href: "https://www.gsmreparatie-arnhem.nl",
    },
  ];

  return (
    <section id="voorbeelden" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionLabel number="04">Voorbeelden</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-6xl">Bekijk hoe wij bedrijven online neerzetten.</h2>
        </motion.div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.a
              key={item.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-border bg-card/50 p-7 transition hover:-translate-y-1 hover:border-gold/45"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{item.label}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-gold" />
              </div>
              <h3 className="mt-14 font-display text-3xl font-semibold">{item.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Wanneer begint de productietijd?",
      a: "Nadat de betaling en de volledige intake, het logo en de benodigde beelden compleet zijn aangeleverd.",
    },
    {
      q: "Is dit een AI-website?",
      a: "We gebruiken Codex om efficiënt te bouwen. De website wordt door Arix Marketing ingericht, gecontroleerd en afgestemd op jouw bedrijf.",
    },
    {
      q: "Kan ik later extra pagina's toevoegen?",
      a: "Ja, maar dit valt buiten de vaste one-page scope en wordt apart begroot als maatwerkproject.",
    },
    {
      q: "Wie is eigenaar van Setmore en de agenda?",
      a: "Het account staat op naam van jouw bedrijf. Jij blijft eigenaar van de login, agenda en eventuele Stripe-koppeling.",
    },
  ];

  return (
    <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <motion.div {...fadeUp}>
          <SectionLabel number="05">Veelgestelde vragen</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Duidelijk voordat je bestelt.</h2>
        </motion.div>
        <motion.div {...fadeUp}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:text-gold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground">{item.a}</AccordionContent>
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
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]">Doe mee met de challenge</div>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
              Word één van de 16 bedrijven die wij in 90 dagen online zetten.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">
              Start voor €399 inclusief btw met een complete one-page website.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="#prijzen"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-foreground transition hover:scale-[1.02]"
            >
              Kies mijn pakket <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-xs text-primary-foreground/70">Vaste scope · één correctieronde · transparante prijs</span>
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
          <a href="/recruitment-campagne" className="hover:text-gold">Recruitmentcampagne</a>
          <a href="/voorwaarden" className="hover:text-gold">Voorwaarden</a>
          <a href="/privacy" className="hover:text-gold">Privacy</a>
        </div>
      </div>
    </footer>
  );
}