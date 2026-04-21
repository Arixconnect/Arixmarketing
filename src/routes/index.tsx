import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Camera,
  Megaphone,
  Search,
  Sparkles,
  ArrowUpRight,
  Check,
  Mail,
  Globe,
  Star,
  TrendingUp,
} from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import logoImg from "@/assets/arix-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SlideTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
      <span className="text-muted-foreground">{n}</span>
      <span className="h-px w-10 bg-gold/60" />
      <span>{label}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1500px] items-start justify-between px-6 py-5 md:px-10">
        <nav className="mt-3 hidden items-center gap-7 rounded-full border border-border bg-background/80 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl md:flex">
          <a href="#diensten" className="transition hover:text-foreground">Diensten</a>
          <a href="#cases" className="transition hover:text-foreground">Cases</a>
          <a href="#tarieven" className="transition hover:text-foreground">Tarieven</a>
          <a href="#werk" className="transition hover:text-foreground">Werk</a>
          <a
            href="mailto:info@arixmarketing.nl"
            className="inline-flex items-center gap-1.5 text-foreground transition hover:text-gold"
          >
            Contact <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
        <div className="md:hidden" />
        <a href="#top" className="group relative ml-auto block">
          <div className="absolute -inset-3 rounded-full bg-gold/20 opacity-0 blur-xl transition group-hover:opacity-100" />
          <img
            src={logoImg}
            alt="Arix Marketing logo"
            width={88}
            height={88}
            className="relative h-16 w-16 rounded-full border border-gold/40 bg-background object-contain p-1 backdrop-blur-xl md:h-20 md:w-20"
          />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <motion.div {...fadeUp}>
          <SlideTag n="01" label="Arix Marketing" />
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 max-w-[14ch] font-display text-[14vw] font-black leading-[0.88] tracking-tighter text-foreground md:text-[8.5vw]"
        >
          Online{" "}
          <span className="italic gold-gradient-text">zichtbaarheid</span>{" "}
          die converteert<span className="text-gold">.</span>
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 grid gap-10 md:grid-cols-12"
        >
          <p className="md:col-span-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Wij helpen ondernemers groeien met social media die werkt.
            Strategie, content en campagnes — gebouwd om resultaat te leveren.
          </p>
          <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#tarieven"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-gold hover:text-primary-foreground"
            >
              Bekijk tarieven
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-gold hover:text-gold"
            >
              Onze cases
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-border bg-card/40 py-5">
        <div className="ticker-fade overflow-hidden">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl italic md:text-3xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12">
                {["Instagram", "TikTok", "YouTube", "LinkedIn", "Meta Ads", "Google SEA", "AI Search"].map(
                  (w) => (
                    <span key={w} className="flex items-center gap-12">
                      <span className="text-muted-foreground">{w}</span>
                      <span className="text-gold">★</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Instagram, title: "Social media management", desc: "Dagelijks beheer, community management en doelgerichte groei." },
  { icon: Camera, title: "Content creatie", desc: "Foto- en videoproductie die opvalt en converteert." },
  { icon: Globe, title: "Websites", desc: "Snelle, premium websites die jouw merk dragen." },
  { icon: Sparkles, title: "AI zoekmachine optimalisatie", desc: "Zichtbaar in ChatGPT, Perplexity en Google AI Overviews." },
  { icon: Megaphone, title: "Social advertenties", desc: "Meta, TikTok en LinkedIn campagnes met meetbare ROAS." },
];

function Services() {
  return (
    <section id="diensten" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <motion.div {...fadeUp} className="mb-14 max-w-2xl">
        <SlideTag n="02" label="Diensten" />
        <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl">
          Wat wij <span className="italic gold-gradient-text">leveren</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group flex flex-col justify-between gap-10 bg-background p-8 transition hover:bg-card"
          >
            <s.icon className="h-8 w-8 text-gold transition group-hover:scale-110" strokeWidth={1.3} />
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const cases = [
  {
    name: "GSM Reparatie Arnhem",
    tag: "Lokale groei",
    metric: "300 – 10.000",
    metricLabel: "organische weergaven per post",
    desc: "Gegroeid van een locatie aan de Spijkerlaan naar een winkel aan de Steenstraat. Door consistent en strategisch te posten op social media bereikt de Facebookpagina gemiddeld tussen de 300 en 10.000 organische weergaven.",
    img: p2,
  },
  {
    name: "Broodje & Co",
    tag: "Community building",
    metric: "300 → 10.000",
    metricLabel: "volgers in 2 jaar",
    desc: "In twee jaar tijd gegroeid van 300 naar 10.000 volgers. Het resultaat: een lokale hype waarbij het broodje shortrib een begrip werd in Arnhem.",
    img: p1,
  },
  {
    name: "Master Barbershop",
    tag: "Reputatie & SEO",
    metric: "0 → 3.000",
    metricLabel: "Google bezoekers",
    desc: "Binnen één jaar meer dan 100 reviews opgebouwd en gegroeid van 0 naar 3.000 Google bezoekers. Daarnaast hebben wij de website en de online zichtbaarheid een sterke startboost gegeven.",
    img: p3,
  },
  {
    name: "Ichiba Arnhem",
    tag: "Content strategie",
    metric: "3.000",
    metricLabel: "bereik per maand op Facebook",
    desc: "Met een strategische puzzle feed bereiken zij maandelijks gemiddeld 3.000 mensen op Facebook — exact binnen hun eigen doelgroep.",
    img: p4,
  },
];

function Cases() {
  return (
    <section id="cases" className="relative border-y border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <motion.div {...fadeUp} className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SlideTag n="03" label="Cases" />
            <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl">
              Resultaten die <span className="italic gold-gradient-text">spreken</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Een selectie van merken die wij hebben helpen groeien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-background transition hover:border-gold"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                  {c.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {c.name}
                  </h3>
                  <TrendingUp className="h-5 w-5 shrink-0 text-gold" />
                </div>
                <div>
                  <div className="font-display text-4xl font-black tracking-tighter text-gold md:text-5xl">
                    {c.metric}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.metricLabel}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  price,
  name,
  features,
  highlight,
  badge,
}: {
  price: string;
  name: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`relative flex flex-col rounded-sm border p-7 ${
        highlight
          ? "border-gold bg-gradient-to-b from-gold/15 to-transparent glow-gold"
          : "border-border bg-background"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {badge}
        </span>
      )}
      <h3 className={`font-display text-lg font-medium ${highlight ? "text-gold" : ""}`}>
        {name}
      </h3>
      <div className="mt-4 mb-7">
        <div className="font-display text-5xl font-black tracking-tighter md:text-6xl">{price}</div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          per maand
        </div>
      </div>
      <ul className="mb-7 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${highlight ? "text-gold" : "text-foreground"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:info@arixmarketing.nl"
        className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-xs font-medium uppercase tracking-wider transition ${
          highlight
            ? "bg-gold text-primary-foreground hover:opacity-90"
            : "border border-border hover:border-gold hover:text-gold"
        }`}
      >
        Aanvragen <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

function Pricing() {
  return (
    <section id="tarieven" className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <motion.div {...fadeUp} className="mb-14 max-w-2xl">
        <SlideTag n="04" label="Tarieven" />
        <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl">
          Social media <span className="italic gold-gradient-text">pakketten</span>
        </h2>
        <p className="mt-5 text-sm text-muted-foreground md:text-base">
          Maximaal 3 platformen inbegrepen. Extra platform: <span className="text-gold">€250 per maand</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <PricingCard
          name="Test traject"
          price="€150"
          badge="Try"
          features={["1 post per week", "1 telefoon shoot per maand", "Basis rapportage"]}
        />
        <PricingCard
          name="Starter"
          price="€750"
          features={["3 posts per week", "Maandelijkse content shoot", "Community management", "Maandrapport"]}
        />
        <PricingCard
          name="Growth"
          price="€1050"
          highlight
          badge="Meest gekozen"
          features={["5 posts per week", "2 content shoots per maand", "Reels & video editing", "Strategie sessie"]}
        />
        <PricingCard
          name="Premium"
          price="€2300"
          features={["Dagelijkse posts", "Wekelijkse shoots", "Volledige creatieve directie", "Ads management"]}
        />
      </div>

      {/* Add-ons */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <SlideTag n="05" label="Websites" />
          <h3 className="mt-5 font-display text-3xl font-black tracking-tighter md:text-4xl">
            Website <span className="italic gold-gradient-text">design</span>
          </h3>
          <div className="mt-6 space-y-3">
            {[
              { p: "€350", t: "Landing page", d: "Eén pagina, mobile first" },
              { p: "€550", t: "Business site", d: "Tot 5 pagina's, CMS" },
              { p: "€1050", t: "Premium build", d: "Custom design en animaties" },
            ].map((w) => (
              <div
                key={w.p}
                className="flex items-center justify-between rounded-sm border border-border bg-background p-5 transition hover:border-gold"
              >
                <div>
                  <div className="font-display text-lg font-semibold">{w.t}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {w.d}
                  </div>
                </div>
                <div className="font-display text-3xl font-black text-gold">{w.p}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
          <SlideTag n="06" label="AI Search" />
          <h3 className="mt-5 font-display text-3xl font-black tracking-tighter md:text-4xl">
            AI zoekmachine <span className="italic gold-gradient-text">optimalisatie</span>
          </h3>
          <div className="mt-6 flex h-[calc(100%-6rem)] flex-col justify-between rounded-sm border border-gold bg-gradient-to-br from-gold/15 via-card to-card p-7 glow-gold">
            <div>
              <Sparkles className="h-9 w-9 text-gold" strokeWidth={1.3} />
              <p className="mt-5 max-w-md text-sm text-muted-foreground md:text-base">
                Word zichtbaar in ChatGPT, Perplexity, Google AI Overviews en Gemini.
                De volgende generatie vindbaarheid — vandaag.
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="font-display text-5xl font-black tracking-tighter md:text-6xl">€1000</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  per maand
                </div>
              </div>
              <a
                href="mailto:info@arixmarketing.nl"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                Activeer <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const works = [
  { title: "Reel voor Gemeente Arnhem", tag: "Video productie", href: "#" },
  { title: "Puzzle feed voor Studiekunst", tag: "Content strategie", href: "#" },
  { title: "Website Maximum Performance", tag: "Webdesign", href: "https://www.maximumperformance.nl" },
  { title: "Podcast over schulden", tag: "Audio & video", href: "https://youtu.be/YSHkj5YS7jo" },
];

function Work() {
  return (
    <section id="werk" className="relative border-y border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <motion.div {...fadeUp} className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SlideTag n="07" label="Recent werk" />
            <h2 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl">
              Recent <span className="italic gold-gradient-text">werk</span>
            </h2>
          </div>
          <Star className="hidden h-8 w-8 text-gold md:block" strokeWidth={1.3} />
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              target={w.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-6 bg-background p-7 transition hover:bg-card md:p-9"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{w.tag}</div>
                <div className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {w.title}
                </div>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-gold" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 text-center md:px-10 md:py-36">
        <motion.div {...fadeUp} className="flex justify-center">
          <SlideTag n="08" label="Contact" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl font-display text-5xl font-black leading-[0.9] tracking-tighter md:text-8xl"
        >
          Klaar om <span className="italic gold-gradient-text">te groeien</span>?
        </motion.h2>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <a
            href="mailto:info@arixmarketing.nl"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider text-background transition hover:bg-gold hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
            info@arixmarketing.nl
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Reactie binnen 24 uur
          </p>
        </motion.div>
      </div>

      <footer className="relative border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-7 md:flex-row md:px-10">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-black">ARIX</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">★ marketing</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Arix Marketing
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <Instagram className="h-4 w-4 transition hover:text-gold" />
            <Youtube className="h-4 w-4 transition hover:text-gold" />
            <Search className="h-4 w-4 transition hover:text-gold" />
          </div>
        </div>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Cases />
      <Pricing />
      <Work />
      <CTA />
    </main>
  );
}
