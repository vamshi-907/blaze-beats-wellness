import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MapPin, Clock, Sparkles, Flame, HeartPulse, Dumbbell, Salad, Activity,
  ShieldCheck, Star, ArrowRight, Music, Users, Trophy, Quote, MessageCircle, Instagram,
} from "lucide-react";

import bbLogo from "@/assets/bb-logo.png.asset.json";
import justdialTrusted from "@/assets/justdial-trusted.png.asset.json";
import justdialChoice from "@/assets/justdial-choice.png.asset.json";
import trainer from "@/assets/trainer.jpg.asset.json";
import trainerAction from "@/assets/trainer-action.png.asset.json";
import reviewsTrend from "@/assets/reviews-trend.png.asset.json";
import reviewVijaya from "@/assets/review-vijaya.png.asset.json";
import reviewEndira from "@/assets/review-endira.png.asset.json";
import reviewRani from "@/assets/review-rani.png.asset.json";
import heroZumba from "@/assets/hero-zumba.jpg";
import transparencyArt from "@/assets/transparency-art.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blaze Beats Zumba Fitness Studio | Mahbubnagar – Zumba, PCOD, Thyroid & Weight Loss" },
      { name: "description", content: "Energetic Zumba, HIIT, Yoga and transparent weight loss programs for PCOD, Thyroid and lifestyle goals. Certified trainer D. Prashanth, Padmavathi Colony, Mahbubnagar. Call 93983 21142." },
      { property: "og:title", content: "Blaze Beats Zumba Fitness Studio – Mahbubnagar" },
      { property: "og:description", content: "Trusted Justdial business. 4.6★ from 43 reviews. Transparent fat-loss science, PCOD & Thyroid specialised plans." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WA = "https://wa.me/919398321142";
const TEL = "tel:+919398321142";

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Trust />
      <About />
      <Services />
      <Transparency />
      <Reviews />
      <Gallery />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 sm:px-6 ${scrolled ? "glass shadow-glow" : ""}`}>
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img src={bbLogo.url} alt="Blaze Beats logo" className="h-10 w-10 shrink-0 rounded-full object-contain bg-black/40 p-0.5 ring-1 ring-white/10" />
            <div className="min-w-0">
              <p className="truncate font-display text-base sm:text-lg font-bold leading-none">Blaze Beats</p>
              <p className="truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Zumba Fitness Studio</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#services" className="hover:text-foreground transition">Programs</a>
            <a href="#transparency" className="hover:text-foreground transition">Transparency</a>
            <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="md:ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow hover:scale-105 transition">
            <MessageCircle className="h-4 w-4" /> <span className="hidden sm:inline">Book a Trial</span><span className="sm:hidden">Trial</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={heroZumba} alt="" width={1600} height={1200} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-pink" /> Padmavathi Colony · Mahbubnagar
          </span>
          <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1] sm:leading-[0.95]">
            Move with <span className="text-gradient">Blaze.</span><br/>
            Transform with <span className="text-gradient">Truth.</span>
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground">
            Energetic Zumba, HIIT, Yoga & nutrition — engineered for real, transparent results.
            Specialised programs for <strong className="text-foreground">PCOD</strong>, <strong className="text-foreground">Thyroid</strong> and sustainable
            <strong className="text-foreground"> weight loss</strong>. We show you exactly what you lose — muscle, water or fat.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-glow hover:scale-105 transition">
              Book your free trial <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href={TEL} className="inline-flex items-center gap-2 rounded-full glass px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-white/10 transition">
              <Phone className="h-4 w-4" /> 93983 21142
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-md gap-4 sm:gap-6">
            {[
              { k: "4.6★", v: "43 Reviews" },
              { k: "500+", v: "Active Members" },
              { k: "100%", v: "Transparent" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">{s.k}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative perspective-card mx-auto w-full max-w-sm lg:max-w-none px-6 sm:px-10 lg:px-0">
          <div className="absolute -inset-8 rounded-full bg-gradient-radial blur-2xl" />
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
            <div className="relative aspect-square rounded-3xl ring-gradient glass p-4 sm:p-6 tilt">
              <div className="absolute inset-4 sm:inset-6 rounded-2xl overflow-hidden">
                <img src={bbLogo.url} alt="Blaze Beats Zumba Studio logo" className="h-full w-full object-contain animate-spin-slow" style={{ animationDuration: "40s" }} />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass rounded-2xl p-3 sm:p-4 shadow-glow">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Trusted on</p>
                <p className="font-display text-sm sm:text-base font-bold">Justdial 2026</p>
              </div>
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass rounded-2xl p-3 sm:p-4 shadow-pink flex items-center gap-2">
                <Star className="h-4 w-4 fill-pink text-pink" />
                <span className="text-sm sm:text-base font-semibold">Users' Choice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Zumba", "HIIT", "Yoga", "Dance Fitness", "Aerobics", "Nutrition", "Personal Training", "PCOD Care", "Thyroid Plans", "Weight Loss"];
  return (
    <div className="border-y border-border/60 bg-card/30 backdrop-blur overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4 sm:py-5">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-5 sm:mx-8 inline-flex items-center gap-2 sm:gap-3 font-display text-lg sm:text-2xl md:text-3xl font-bold">
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-pink" />
            <span className="text-gradient">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- TRUST ---------------- */
function Trust() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Recognised & Verified" title={<>Trusted business — <span className="text-gradient">officially.</span></>} sub="Independently verified by Justdial. Rated and reviewed by hundreds of real members in Mahbubnagar." />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[justdialTrusted, justdialChoice].map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl ring-gradient glass p-2 tilt">
              <img src={img.url} alt="Justdial trusted business badge for Blaze Beats Zumba Fitness Studio" loading="lazy" className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, label: "Justdial Trusted 2026" },
            { icon: Trophy, label: "Users' Choice Award" },
            { icon: Star, label: "4.6★ · 43 verified reviews" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl glass px-5 py-4">
              <Icon className="h-5 w-5 text-gold" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT TRAINER ---------------- */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative perspective-card order-2 lg:order-1">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden ring-gradient tilt">
              <img src={trainer.url} alt="D. Prashanth — Certified Zumba instructor and nutritionist" loading="lazy" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden ring-gradient tilt mt-10">
              <img src={trainerAction.url} alt="Trainer with sound system at outdoor session" loading="lazy" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHead eyebrow="Meet your coach" title={<>D. Prashanth — <span className="text-gradient">certified to change lives.</span></>} sub="Certified Zumba® Instructor and Diploma in Health Education. A decade of helping members in Mahbubnagar reclaim their energy, confidence and health." align="left" />
          <ul className="mt-8 space-y-3">
            {[
              "Certified Zumba® instructor with international ZIN training",
              "Diploma in Health Education & Nutrition counselling",
              "Specialised plans for PCOD, Thyroid & post-pregnancy goals",
              "Transparent progress tracking — fat, muscle and water mass",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">✓</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <a href={WA} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow hover:scale-105 transition">
            Talk to Prashanth on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Music, title: "Zumba & Dance Fitness", desc: "High-energy choreography on hand-picked tracks. Burn 600–900 kcal per class without it ever feeling like work." },
    { icon: Flame, title: "HIIT & Aerobics", desc: "Short, brutal, effective. Strength + cardio circuits engineered for fat oxidation and lean muscle." },
    { icon: HeartPulse, title: "PCOD / PCOS Care", desc: "Specialised low-impact routines + nutrition designed to regulate hormones, insulin and cycles." },
    { icon: Activity, title: "Thyroid Wellness", desc: "Gentle, structured movement and diet protocols for hypo- and hyperthyroid members." },
    { icon: Dumbbell, title: "Personal Training", desc: "1-on-1 coaching with progress tracked weekly — strength, posture, mobility and form." },
    { icon: Salad, title: "Nutrition Consulting", desc: "Indian, regional, family-friendly meal plans. No fads, no crash diets — only sustainable habits." },
  ];
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Programs" title={<>Every body. <span className="text-gradient">Every goal.</span></>} sub="From first-time dancers to clinical care for PCOD and Thyroid — one studio, every level." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group perspective-card" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="relative h-full rounded-3xl glass ring-gradient p-7 tilt overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-3xl transition duration-700" />
                <Icon className="h-9 w-9 text-pink mb-5" />
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRANSPARENCY ---------------- */
function Transparency() {
  return (
    <section id="transparency" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <img src={transparencyArt} alt="" width={1200} height={1200} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHead eyebrow="Radical transparency" title={<>You'll know <span className="text-gradient">exactly</span> what you lost.</>} sub="Most gyms show you a smaller number on the scale. We show you the breakdown — muscle mass, water weight or actual fat. Real progress, not vanity metrics." align="left" />
          <div className="mt-8 space-y-4">
            {[
              { k: "Fat loss", v: "What you actually came for. Tracked weekly with InBody-style metrics.", c: "from-pink/40 to-pink/10", w: "82%" },
              { k: "Muscle mass", v: "Preserved (and grown) — because losing muscle is losing strength.", c: "from-purple/40 to-purple/10", w: "92%" },
              { k: "Water weight", v: "Honest about water fluctuations so you never get false hope.", c: "from-blue/40 to-blue/10", w: "60%" },
            ].map((row) => (
              <div key={row.k} className="rounded-2xl glass p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-lg font-bold">{row.k}</p>
                  <p className="text-xs text-muted-foreground">Tracked</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{row.v}</p>
                <div className="mt-3 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${row.c}`} style={{ width: row.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative perspective-card">
          <div className="rounded-3xl ring-gradient glass p-8 tilt">
            <Quote className="h-8 w-8 text-pink" />
            <p className="mt-4 font-display text-2xl sm:text-3xl leading-snug">
              "We don't promise <span className="text-gradient">10kg in 10 days.</span> We promise the truth — and a body you'll actually keep."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={trainer.url} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-pink/40" />
              <div>
                <p className="font-semibold">D. Prashanth</p>
                <p className="text-xs text-muted-foreground">Founder · Certified Zumba® Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const quotes = [
    { name: "Vijayalakshmi", date: "27 May", img: reviewVijaya.url, tags: ["Sanitised restrooms", "Well-maintained", "Spacious", "Great atmosphere"], text: "Blaze Beats-Zumba Fitness Studio is excellent! The atmosphere is great and very welcoming. The trainers are knowledgeable and help everyone. The studio is spacious and easy to access. Highly recommend!" },
    { name: "Endira", date: "29 Apr", img: reviewEndira.url, tags: ["Clean area", "Well-priced", "Couple packages", "Air-conditioned"], text: "An excellent place to work out! The personal trainers are very knowledgeable and always ready to help you achieve your fitness goals. Air-conditioned and well-priced. Highly recommend!" },
    { name: "Rani", date: "08 Apr", img: reviewRani.url, tags: ["Extensive options", "Knowledgeable trainers", "Great atmosphere"], text: "An exceptional gym that truly stands out! Extensive options for workouts, knowledgeable trainers, multiple package options. Vibrant, motivating atmosphere — well-priced for the quality." },
  ];
  const short = [
    "Best Trainer and Very good Atmosphere to enjoy the dance and Zumba",
    "I attended a zumba class. it was very good experience.",
    "Good and friendly atmosphere, enthusiastic coach.",
  ];
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Members speak" title={<>Real reviews. <span className="text-gradient">Real ratings.</span></>} sub="4.6★ from 43 verified Justdial reviews. Recent rating trend: nine 5★ in a row." />

        <div className="mt-10 rounded-3xl glass ring-gradient p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Recent rating trend</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-1 rounded-full bg-pink/20 ring-1 ring-white/10 px-3 py-1 text-sm font-semibold">
                5.0 <Star className="h-3 w-3 fill-gold text-gold" />
              </span>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {short.map((s) => (
              <div key={s} className="rounded-2xl bg-card/60 p-4">
                <div className="flex gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <p className="text-sm text-muted-foreground">"{s}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <article key={q.name} className="rounded-3xl glass ring-gradient p-6 tilt perspective-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-brand font-bold text-white">{q.name[0]}</div>
                  <p className="truncate font-semibold">{q.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{q.date}</p>
              </div>
              <div className="mt-2 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {q.tags.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground">{t}</span>)}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{q.text}"</p>
              <img src={q.img} alt={`${q.name} review screenshot`} loading="lazy" className="mt-5 w-full rounded-xl border border-border/60 opacity-90" />
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl glass p-2 overflow-hidden">
          <img src={reviewsTrend.url} alt="Recent rating trend and review highlights" loading="lazy" className="w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const tiles = [
    { icon: Users, k: "500+", v: "Active members" },
    { icon: Music, k: "6 days", v: "Live Zumba classes" },
    { icon: HeartPulse, k: "100+", v: "PCOD success stories" },
    { icon: Trophy, k: "4.6★", v: "Justdial rating" },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiles.map(({ icon: Icon, k, v }) => (
            <div key={v} className="rounded-3xl glass ring-gradient p-6 text-center tilt perspective-card">
              <Icon className="h-7 w-7 mx-auto text-pink" />
              <p className="mt-4 font-display text-4xl font-extrabold text-gradient">{k}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] ring-gradient glass p-8 sm:p-14">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Your first class is on us. <span className="text-gradient">Just show up.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                Walk in, dance once, and decide. No registration fee for trial. We'll measure where you are today —
                muscle, water, fat — and build the honest path forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow hover:scale-105 transition">
                  <MessageCircle className="h-5 w-5" /> WhatsApp 93983 21142
                </a>
                <a href={TEL} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold hover:bg-white/10 transition">
                  <Phone className="h-5 w-5" /> Call now
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <Info icon={MapPin} title="Visit the studio" sub="Ravindranagar, Padmavathi Colony, Mahbubnagar, Telangana 509001" />
              <Info icon={Clock} title="Class timings" sub="Morning 6 AM – 9 AM · Evening 6 PM – 9 PM (Mon–Sat)" />
              <Info icon={Phone} title="Phone & WhatsApp" sub="+91 93983 21142" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, sub }: { icon: any; title: string; sub: string }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-2xl bg-card/60 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-brand text-white"><Icon className="h-5 w-5" /></span>
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-[1.2fr_1fr_1fr] gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={bbLogo.url} alt="" className="h-10 w-10 rounded-full bg-black/40 p-0.5" />
            <div>
              <p className="font-display text-lg font-bold">Blaze Beats</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Zumba Fitness Studio</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Mahbubnagar's most trusted Zumba and transparent weight-loss studio.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-pink transition">About</a></li>
            <li><a href="#services" className="hover:text-pink transition">Programs</a></li>
            <li><a href="#transparency" className="hover:text-pink transition">Transparency</a></li>
            <li><a href="#reviews" className="hover:text-pink transition">Reviews</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={TEL} className="hover:text-pink transition">+91 93983 21142</a></li>
            <li><a href={WA} target="_blank" rel="noreferrer" className="hover:text-pink transition">WhatsApp</a></li>
            <li className="flex items-center gap-2 text-muted-foreground"><Instagram className="h-4 w-4" /> @blazebeatsstudio</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Blaze Beats Zumba Fitness Studio · Padmavathi Colony, Mahbubnagar</p>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow animate-pulse-glow hover:scale-110 transition">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionHead({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: React.ReactNode; sub?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}>
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="h-3 w-3 text-pink" /> {eyebrow}
      </span>
      <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
