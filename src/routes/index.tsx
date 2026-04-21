import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Camera,
  Megaphone,
  Search,
  Users,
  Sparkles,
  TrendingUp,
  Eye,
  Heart,
  Calendar,
  ArrowUpRight,
  Check,
  Mail,
  Play,
  BarChart3,
  Target,
  Layers,
} from "lucide-react";
import heroImg from "@/assets/hero-abstract.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function SlideTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
      <span className="text-muted-foreground">{n}</span>
      <span className="h-px w-10 bg-gold/50" />
      <span>{label}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-black tracking-tight text-foreground">
            ARIX
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            ★ marketing
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#services" className="transition hover:text-gold">Services</a>
          <a href="#strategy" className="transition hover:text-gold">Strategie</a>
          <a href="#pricing" className="transition hover:text-gold">Pricing</a>
          <a href="#work" className="transition hover:text-gold">Work</a>
        </nav>
        <a
          href="mailto:info@arixmarketing.nl"
          className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gold transition hover:bg-gold hover:text-primary-foreground"
        >
          Contact <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 grain" />
      <img
        src={heroImg}
        alt="Abstract gold ribbons"
        width={1920}
        height={1080}
        className="absolute right-0 top-0 h-full w-full object-cover opacity-50 md:w-[65%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 30%, transparent 70%), linear-gradient(180deg, transparent 60%, var(--background) 100%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1400px] grid-cols-12 gap-6 px-6 py-16 md:px-10">
        <div className="col-span-12 flex flex-col justify-between md:col-span-7">
          <motion.div {...fadeUp}>
            <SlideTag n="01 / 10" label="The Pitch" />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.1 }}>
            <h1 className="font-display text-[14vw] font-black leading-[0.85] tracking-tighter text-foreground md:text-[8.5vw]">
              Online
              <br />
              <span className="italic gold-gradient-text">zichtbaarheid</span>
              <br />
              vergroten<span className="text-gold">.</span>
            </h1>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 grid gap-8 md:grid-cols-2"
          >
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Wij helpen ondernemers groeien met social media die werkt. Strategie,
              content en campagnes — gebouwd om te converteren.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:gap-4 hover:opacity-90"
              >
                Bekijk pakketten
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-2 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-gold"
              >
                <Play className="h-3 w-3 fill-current" /> Showreel
              </a>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 flex flex-col items-end justify-end gap-4 md:col-span-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-sm rounded-sm border border-gold/30 bg-card/80 p-6 backdrop-blur-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Engagement / Q4
              </span>
              <TrendingUp className="h-4 w-4 text-gold" />
            </div>
            <div className="flex items-end gap-1.5">
              {[30, 45, 38, 60, 55, 78, 70, 92, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                  className="flex-1 rounded-sm"
                  style={{
                    background: i > 6 ? "var(--gold)" : "oklch(0.3 0.005 90)",
                    minHeight: "12px",
                  }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-display text-4xl font-bold text-foreground">+342%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                YoY reach
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.55 }}
            className="flex w-full max-w-sm gap-3"
          >
            <div className="flex-1 rounded-sm border border-border bg-card/60 p-4 backdrop-blur">
              <Heart className="mb-2 h-4 w-4 text-gold" />
              <div className="font-display text-2xl font-bold">2.4M</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">likes</div>
            </div>
            <div className="flex-1 rounded-sm border border-border bg-card/60 p-4 backdrop-blur">
              <Users className="mb-2 h-4 w-4 text-gold" />
              <div className="font-display text-2xl font-bold">180K</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">followers</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-border/50 bg-background py-5">
        <div className="ticker-fade overflow-hidden">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl italic">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12">
                {["Instagram", "TikTok", "YouTube", "LinkedIn", "Pinterest", "Meta Ads", "Google SEA"].map(
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

function WhatWeDo() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10">
      <motion.div {...fadeUp} className="mb-16">
        <SlideTag n="02 / 10" label="What we do" />
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        <motion.div {...fadeUp} className="col-span-12 md:col-span-7">
          <h2 className="font-display text-6xl font-black leading-[0.95] tracking-tighter md:text-8xl">
            Wij helpen <br />
            ondernemers <br />
            <span className="italic gold-gradient-text">het juiste pad</span> <br />
            te vinden.
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 flex flex-col justify-end gap-8 md:col-span-5"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            In een wereld vol noise, bouwen wij signal. Van eerste post tot
            conversie — een strategie die past bij jouw merk, jouw doelgroep en
            jouw ambities.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Target, label: "Strategie" },
              { icon: Layers, label: "Content" },
              { icon: BarChart3, label: "Groei" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-sm border border-border bg-card p-5 transition hover:border-gold"
              >
                <Icon className="h-6 w-6 text-gold" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    desc: "Dagelijks beheer, community management en groei op alle relevante platforms.",
    n: "01",
  },
  {
    icon: Camera,
    title: "Content Creation",
    desc: "Cinematic photo & video shoots. Scroll-stoppende creatives die converteren.",
    n: "02",
  },
  {
    icon: Megaphone,
    title: "Social Ads",
    desc: "Meta, TikTok & LinkedIn campaigns met focus op meetbare ROAS.",
    n: "03",
  },
  {
    icon: Search,
    title: "SEO & SEA",
    desc: "Hoger ranken in Google. Slimme campagnes voor zoekintentie die telt.",
    n: "04",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Authentieke samenwerkingen met creators die jouw doelgroep bewegen.",
    n: "05",
  },
];

function Services() {
  return (
    <section id="services" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <motion.div {...fadeUp} className="mb-16 flex items-end justify-between">
          <div>
            <SlideTag n="03 / 10" label="Services" />
            <h2 className="mt-6 font-display text-6xl font-black leading-none tracking-tighter md:text-7xl">
              Wat wij <span className="italic gold-gradient-text">leveren</span>
            </h2>
          </div>
          <div className="hidden font-mono text-xs uppercase tracking-wider text-muted-foreground md:block">
            05 disciplines
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-px overflow-hidden rounded-sm bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative flex flex-col justify-between bg-background p-8 transition hover:bg-card ${
                i === 0 ? "col-span-12 md:col-span-6 md:row-span-2" : "col-span-12 md:col-span-6 lg:col-span-3"
              }`}
            >
              <div className="flex items-start justify-between">
                <s.icon
                  className={`text-gold transition group-hover:scale-110 ${
                    i === 0 ? "h-16 w-16" : "h-10 w-10"
                  }`}
                  strokeWidth={1.2}
                />
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              </div>
              <div className={i === 0 ? "mt-32" : "mt-16"}>
                <h3
                  className={`font-display font-bold tracking-tight ${
                    i === 0 ? "text-5xl" : "text-2xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Calendar, title: "Blijf up to date", desc: "Altijd vooraan trends & algoritmes." },
    { icon: Eye, title: "Meer bezoekers", desc: "Verkeer dat doorklikt en blijft." },
    { icon: Users, title: "Meer volgers", desc: "Echte fans, geen lege cijfers." },
    { icon: Sparkles, title: "Kwalitatieve content", desc: "Premium visuals, on-brand." },
  ];
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10">
      <motion.div {...fadeUp} className="mb-16">
        <SlideTag n="04 / 10" label="Why Arix" />
        <h2 className="mt-6 font-display text-6xl font-black leading-none tracking-tighter md:text-7xl">
          De <span className="italic gold-gradient-text">voordelen</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((b, i) => (
          <motion.div
            key={b.title}
            {...fadeUp}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card p-6 transition hover:border-gold"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{ background: "var(--gradient-radial-gold)" }}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <b.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Strategy() {
  const questions = [
    "Welke platformen passen bij mijn merk?",
    "Hoe vaak moet ik posten?",
    "Wat is mijn content strategie?",
    "Wie is mijn ideale doelgroep?",
    "Welke KPI's tellen écht?",
    "Hoe meet ik ROI?",
  ];
  return (
    <section id="strategy" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <motion.div {...fadeUp} className="col-span-12 md:col-span-5">
            <SlideTag n="05 / 10" label="Strategy" />
            <h2 className="mt-6 font-display text-6xl font-black leading-[0.95] tracking-tighter md:text-7xl">
              De juiste <br />
              <span className="italic gold-gradient-text">vragen</span> <br />
              eerst.
            </h2>
            <p className="mt-8 max-w-sm text-muted-foreground">
              Voor we content maken, bouwen we het fundament. Helderheid creëert resultaat.
            </p>
          </motion.div>

          <div className="col-span-12 md:col-span-7">
            <div className="space-y-px overflow-hidden rounded-sm border border-border">
              {questions.map((q, i) => (
                <motion.div
                  key={q}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group flex items-center justify-between gap-6 bg-background p-6 transition hover:bg-card md:p-8"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-gold">
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium tracking-tight md:text-3xl">
                      {q}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-gold" />
                </motion.div>
              ))}
            </div>
          </div>
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
      className={`relative flex flex-col rounded-sm border p-8 ${
        highlight
          ? "border-gold bg-gradient-to-b from-gold/15 to-transparent glow-gold"
          : "border-border bg-card"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {badge}
        </span>
      )}
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className={`font-display text-xl font-medium ${highlight ? "text-gold" : ""}`}>
          {name}
        </h3>
      </div>
      <div className="mb-8">
        <div className="font-display text-5xl font-black tracking-tighter md:text-6xl">
          {price}
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          per maand
        </div>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${highlight ? "text-gold" : "text-foreground"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:info@arixmarketing.nl"
        className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm font-medium uppercase tracking-wider transition ${
          highlight
            ? "bg-gold text-primary-foreground hover:opacity-90"
            : "border border-border hover:border-gold hover:text-gold"
        }`}
      >
        Start nu <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10">
      <motion.div {...fadeUp} className="mb-16">
        <SlideTag n="06 / 10" label="Pricing — Social" />
        <h2 className="mt-6 font-display text-6xl font-black leading-none tracking-tighter md:text-7xl">
          Social media <span className="italic gold-gradient-text">pakketten</span>
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Tot 3 platforms inbegrepen. Extra platform: <span className="text-gold">+€250/mnd</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PricingCard
          name="Test traject"
          price="€150"
          badge="Try"
          features={[
            "1 post per week",
            "1 maandelijkse phone shoot",
            "Basis analytics",
            "Ideaal om te proeven",
          ]}
        />
        <PricingCard
          name="Starter"
          price="€750"
          features={[
            "3 posts per week",
            "Maandelijkse content shoot",
            "Community management",
            "Maandelijks rapport",
          ]}
        />
        <PricingCard
          name="Growth"
          price="€1050"
          highlight
          badge="Most popular"
          features={[
            "5 posts per week",
            "2 content shoots / mnd",
            "Reels & video editing",
            "Strategie sessie",
            "Premium reporting",
          ]}
        />
        <PricingCard
          name="Premium"
          price="€2300"
          features={[
            "Daily posting",
            "Wekelijkse shoots",
            "Volledige creatieve directie",
            "Ads management included",
            "Dedicated account manager",
          ]}
        />
      </div>

      {/* Add-ons */}
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <SlideTag n="07 / 10" label="Website" />
          <h3 className="mt-6 font-display text-4xl font-black tracking-tighter md:text-5xl">
            Website <span className="italic gold-gradient-text">design</span>
          </h3>
          <div className="mt-8 space-y-3">
            {[
              { p: "€350", t: "Landing page", d: "1 pagina, mobile first" },
              { p: "€550", t: "Business site", d: "Tot 5 pagina's, CMS" },
              { p: "€1050", t: "Premium build", d: "Custom design + animaties" },
            ].map((w) => (
              <div
                key={w.p}
                className="flex items-center justify-between rounded-sm border border-border bg-card p-5 transition hover:border-gold"
              >
                <div>
                  <div className="font-display text-xl font-semibold">{w.t}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {w.d}
                  </div>
                </div>
                <div className="font-display text-3xl font-black text-gold">{w.p}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }}>
          <SlideTag n="08 / 10" label="AI Search" />
          <h3 className="mt-6 font-display text-4xl font-black tracking-tighter md:text-5xl">
            AI Search <span className="italic gold-gradient-text">Optimization</span>
          </h3>
          <div className="mt-8 flex h-[calc(100%-7rem)] flex-col justify-between rounded-sm border border-gold bg-gradient-to-br from-gold/15 via-card to-card p-8 glow-gold">
            <div>
              <Sparkles className="h-10 w-10 text-gold" strokeWidth={1.2} />
              <p className="mt-6 max-w-md text-muted-foreground">
                Word zichtbaar in ChatGPT, Perplexity, Google AI Overviews & Gemini.
                De volgende generatie SEO — vandaag.
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="font-display text-6xl font-black tracking-tighter md:text-7xl">
                  €1000
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  per maand
                </div>
              </div>
              <a
                href="mailto:info@arixmarketing.nl"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                Activate <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  const items = [
    { src: p1, label: "Social post", tag: "@luxe.studio", span: "md:col-span-5 md:row-span-2" },
    { src: p2, label: "Behind the scenes", tag: "Production", span: "md:col-span-4" },
    { src: p3, label: "Content creation", tag: "Reels", span: "md:col-span-3" },
    { src: p4, label: "Product shoot", tag: "Editorial", span: "md:col-span-7" },
  ];
  return (
    <section id="work" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <motion.div {...fadeUp} className="mb-16 flex items-end justify-between">
          <div>
            <SlideTag n="09 / 10" label="Recent work" />
            <h2 className="mt-6 font-display text-6xl font-black leading-none tracking-tighter md:text-7xl">
              Recent <span className="italic gold-gradient-text">work</span>
            </h2>
          </div>
          <Youtube className="hidden h-10 w-10 text-gold md:block" strokeWidth={1.2} />
        </motion.div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-12">
          {items.map((it, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative col-span-1 overflow-hidden rounded-sm border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <div className="font-display text-xl font-semibold">{it.label}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {it.tag}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-40 text-center md:px-10">
        <motion.div {...fadeUp}>
          <SlideTag n="10 / 10" label="Let's talk" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-10 max-w-5xl font-display text-6xl font-black leading-[0.9] tracking-tighter md:text-[9rem]"
        >
          Klaar om <br />
          <span className="italic gold-gradient-text">te groeien</span>?
        </motion.h2>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href="mailto:info@arixmarketing.nl"
            className="group inline-flex items-center gap-4 rounded-full bg-gold px-8 py-5 text-base font-semibold uppercase tracking-wider text-primary-foreground transition hover:gap-6 hover:opacity-90"
          >
            <Mail className="h-5 w-5" />
            info@arixmarketing.nl
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            We reply within 24 hours
          </p>
        </motion.div>
      </div>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-black">ARIX</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              ★ marketing
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Arix Marketing — Built with care
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <Instagram className="h-4 w-4 transition hover:text-gold" />
            <Youtube className="h-4 w-4 transition hover:text-gold" />
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
      <WhatWeDo />
      <Services />
      <Benefits />
      <Strategy />
      <Pricing />
      <Work />
      <CTA />
    </main>
  );
}
