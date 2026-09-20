import { useEffect, useRef, useState } from "react";

const ACADEMY = "Noor Academy";

const NAV = [
  { label: "Quran Courses", href: "#quran" },
  { label: "Academic Courses", href: "#academic" },
  { label: "Teachers", href: "#teachers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP = "https://wa.me/923356334912";

/* ---------- small building blocks ---------- */

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-ink-soft">
      <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-green">
        {n}
      </span>
      <span className="h-px w-8 bg-line" />
      <span className="font-[var(--font-body)] text-xs tracking-[0.28em] uppercase">
        {children}
      </span>
    </div>
  );
}

function GoldButton({
  children,
  href = "#book",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-[var(--font-body)] text-sm font-semibold text-green-forest shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] transition-all duration-300 hover:bg-green hover:text-cream hover:shadow-lg ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

/* ---------- header ---------- */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 bg-green text-cream">
            <span className="font-[var(--font-arabic)] text-lg leading-none">ن</span>
          </span>
          <span className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-green-forest">
            {ACADEMY}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-[var(--font-body)] text-sm text-ink-soft transition-colors hover:text-green"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GoldButton href="#book" className="hidden sm:inline-flex">
            Book Free Trial
          </GoldButton>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line lg:hidden"
          >
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 font-[var(--font-body)] text-sm text-ink-soft hover:bg-cream-deep"
              >
                {n.label}
              </a>
            ))}
            <GoldButton href="#book" className="mt-2 justify-center">
              Book Free Trial
            </GoldButton>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* soft decorative arch */}
      <div className="pointer-events-none absolute -right-40 -top-20 size-[34rem] rounded-full bg-green/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 size-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <p className="font-[var(--font-arabic)] text-2xl text-gold" dir="rtl">
            بِسْمِ اللَّهِ
          </p>
          <p className="mt-2 font-[var(--font-body)] text-xs tracking-[0.28em] uppercase text-ink-soft">
            Online Quran &amp; Academic Learning
          </p>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl leading-[1.05] tracking-tight text-green-forest sm:text-5xl lg:text-6xl">
            Give your child the gift of{" "}
            <span className="italic text-green">Quran</span> &amp; a strong education
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-[var(--font-body)] text-lg leading-relaxed text-ink-soft">
            Live one-on-one classes in Quran recitation, Hifz and Tajweed, plus
            school subjects for Class 1–10, taught by caring, qualified tutors,
            wherever in the world you are.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GoldButton href="#book">Book a Free Trial Class</GoldButton>
            <a
              href="#quran"
              className="font-[var(--font-body)] text-sm font-medium text-green underline-offset-4 hover:underline"
            >
              Explore our courses
            </a>
          </div>

          <p className="mt-5 font-[var(--font-body)] text-sm text-ink-soft">
            ✓ No card required &nbsp;·&nbsp; ✓ Male &amp; female tutors &nbsp;·&nbsp; ✓ All time zones
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-line bg-cream-deep shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1758612898312-708f2ffdcd53?w=900&h=1000&fit=crop&auto=format"
              alt="A young boy attending a live online lesson at a laptop with his notebook at home"
              className="h-[26rem] w-full object-cover lg:h-[32rem]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-cream px-5 py-4 shadow-lg sm:block">
            <p className="font-[var(--font-display)] text-2xl font-semibold text-green">4.9★</p>
            <p className="font-[var(--font-body)] text-xs text-ink-soft">Average parent rating</p>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-gold/40 bg-green px-5 py-4 text-cream shadow-lg sm:block">
            <p className="font-[var(--font-display)] text-2xl font-semibold">500+</p>
            <p className="font-[var(--font-body)] text-xs text-cream/80">Happy students</p>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}

function TrustBar() {
  const items = [
    ["500+", "Students taught"],
    ["20+ yrs", "Founder’s experience"],
    ["Verified", "Male & female tutors"],
    ["4.9★", "Parent rating"],
  ];
  return (
    <div className="border-y border-line bg-cream-deep/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
        {items.map(([big, small], i) => (
          <div key={i} className="px-2 py-6 text-center md:py-8">
            <p className="font-[var(--font-display)] text-2xl font-semibold text-green-forest md:text-3xl">
              {big}
            </p>
            <p className="mt-1 font-[var(--font-body)] text-sm text-ink-soft">{small}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- why choose us ---------- */

function WhyUs() {
  const points = [
    ["Qualified, verified tutors", "Every Quran and academic tutor is background-checked and interviewed before they ever meet your child."],
    ["One-on-one attention", "Private or small-group classes so lessons move at your child’s own pace."],
    ["Flexible scheduling", "Book classes around school, work and prayer times, across every time zone."],
    ["Aligned to your syllabus", "Academic tutoring follows your child’s actual school curriculum, from Class 1 to 10."],
    ["Affordable monthly plans", "Simple, honest pricing with local and international payment options."],
    ["Free trial, no card", "Meet the teacher and see a real class before you decide anything."],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <SectionLabel n="01">Why families choose us</SectionLabel>
      <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl leading-tight tracking-tight text-green-forest sm:text-4xl">
        Trusted with the two things that matter most:{" "}
        <span className="italic text-green">faith and future.</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {points.map(([title, body], i) => (
          <div key={i} className="bg-cream p-7 transition-colors hover:bg-cream-deep/60">
            <span className="font-[var(--font-body)] text-xs font-semibold text-gold">
              0{i + 1}
            </span>
            <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-green-forest">
              {title}
            </h3>
            <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-ink-soft">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- courses ---------- */

function CourseCard({
  name,
  detail,
  tone,
}: {
  name: string;
  detail: string;
  tone: "green" | "sky";
}) {
  return (
    <div className="flex items-start gap-4 border-b border-line py-5 last:border-b-0">
      <span
        className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          tone === "green" ? "bg-green/10 text-green" : "bg-sky/15 text-sky"
        }`}
      >
        ﷽
      </span>
      <div>
        <h4 className="font-[var(--font-display)] text-lg font-semibold text-green-forest">
          {name}
        </h4>
        <p className="mt-0.5 font-[var(--font-body)] text-sm text-ink-soft">{detail}</p>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <section className="bg-green-forest py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-3 text-cream/60">
          <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-gold">02</span>
          <span className="h-px w-8 bg-cream/30" />
          <span className="font-[var(--font-body)] text-xs tracking-[0.28em] uppercase">
            Two clear tracks
          </span>
        </div>
        <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          Choose Quran, academics, or both under one caring roof.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Quran */}
          <div id="quran" className="scroll-mt-24 rounded-3xl border border-cream/10 bg-cream p-8 text-ink">
            <p className="font-[var(--font-arabic)] text-xl text-green" dir="rtl">
              القرآن الكريم
            </p>
            <h3 className="mt-1 font-[var(--font-display)] text-2xl font-semibold text-green-forest">
              Quran Track
            </h3>
            <p className="mt-2 font-[var(--font-body)] text-sm text-ink-soft">
              From first letters to complete memorization.
            </p>
            <div className="mt-6">
              <CourseCard tone="green" name="Noorani Qaida" detail="Foundations for beginners: letters, sounds and rules." />
              <CourseCard tone="green" name="Quran Reading (Nazra)" detail="Fluent recitation with correct Tajweed." />
              <CourseCard tone="green" name="Hifz Program" detail="Structured memorization with regular revision." />
              <CourseCard tone="green" name="Tafseer of the Quran" detail="Understand the meaning and message behind the verses." />
              <CourseCard tone="green" name="Islamic Studies & Duas" detail="Everyday supplications, manners and basics of deen." />
            </div>
          </div>

          {/* Academic */}
          <div id="academic" className="scroll-mt-24 rounded-3xl border border-cream/10 bg-cream p-8 text-ink">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Class 1 – 10
            </p>
            <h3 className="mt-1 font-[var(--font-display)] text-2xl font-semibold text-green-forest">
              Academic Track
            </h3>
            <p className="mt-2 font-[var(--font-body)] text-sm text-ink-soft">
              School subjects, aligned to your child’s syllabus.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6">
              <div>
                <CourseCard tone="sky" name="Mathematics" detail="Concept-first, exam-ready." />
                <CourseCard tone="sky" name="Science" detail="Physics, Chemistry, Biology." />
                <CourseCard tone="sky" name="English" detail="Reading, writing & grammar." />
              </div>
              <div>
                <CourseCard tone="sky" name="Urdu" detail="Language & comprehension." />
                <CourseCard tone="sky" name="Islamiyat" detail="Curriculum aligned." />
                <CourseCard tone="sky" name="Social Studies" detail="History & geography." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */

function HowItWorks() {
  const steps = [
    ["Register", "Tell us your child’s age, level and what you’d like them to learn."],
    ["Get matched", "We pair your child with the right tutor, including female teachers on request."],
    ["Free trial class", "Sit in, meet the teacher and see a real lesson. No card, no pressure."],
    ["Start & track", "Begin regular classes with monthly progress updates to your WhatsApp."],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <SectionLabel n="03">How it works</SectionLabel>
      <h2 className="mt-5 font-[var(--font-display)] text-3xl tracking-tight text-green-forest sm:text-4xl">
        From first hello to first lesson, in four gentle steps.
      </h2>

      <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, body], i) => (
          <li key={i} className="relative">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/50 bg-cream font-[var(--font-display)] text-lg font-semibold text-green">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-line lg:block" />
              )}
            </div>
            <h3 className="mt-4 font-[var(--font-display)] text-xl font-semibold text-green-forest">
              {title}
            </h3>
            <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-ink-soft">
              {body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- teachers ---------- */

function Teachers() {
  const list = [
    {
      name: "Hafiza Ayesha Siddiqa",
      qual: "Ijazah in Tajweed · 6 years teaching",
      note: "Specialises in Hifz and gentle beginner Qaida for young learners.",
      img: "https://images.unsplash.com/photo-1634451784126-b9f7282edb1b?w=500&h=600&fit=crop&auto=format",
    },
    {
      name: "Qari Bilal Ahmed",
      qual: "Certified Qari · 8 years teaching",
      note: "Nazra and Tajweed with a calm, patient teaching style.",
      img: "https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?w=500&h=600&fit=crop&auto=format",
    },
    {
      name: "Ustadha Maryam Khan",
      qual: "M.Sc Mathematics · 5 years teaching",
      note: "Class 6–10 Math & Science, aligned to school syllabus.",
      img: "https://images.unsplash.com/photo-1654729504239-8c2abeb26d96?w=500&h=600&fit=crop&auto=format",
    },
  ];
  return (
    <section id="teachers" className="scroll-mt-24 bg-cream-deep/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="04">Meet the teachers</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl tracking-tight text-green-forest sm:text-4xl">
          Qualified, kind, and chosen with your child in mind.
        </h2>

        {/* Founder / CEO highlight */}
        <div className="mt-12 grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-line bg-green-forest text-cream md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-green-deep">
            <img
              src="https://images.unsplash.com/photo-1627091908405-30bd51eec537?w=600&h=700&fit=crop&auto=format"
              alt="Portrait of Afaaq Ahmed, founder and CEO of Noor Academy"
              className="h-72 w-full object-cover md:h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Founder & CEO
            </span>
            <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              Afaaq Ahmed
            </h3>
            <p className="mt-1 font-[var(--font-body)] text-sm font-medium text-gold-soft">
              20 years of teaching experience · Quran, Tafseer &amp; Tajweed
            </p>
            <p className="mt-4 max-w-lg font-[var(--font-body)] text-cream/85 leading-relaxed">
              With two decades spent teaching the Quran and its meaning, Afaaq founded
              Noor Academy on one belief: every child, anywhere in the world, deserves
              a patient, qualified teacher. He personally trains and mentors every tutor
              on our team.
            </p>
            <p className="mt-6 font-[var(--font-display)] text-4xl font-semibold text-gold">
              20+ <span className="font-[var(--font-body)] text-sm font-medium text-cream/70">years of experience</span>
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-3xl border border-line bg-cream transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-cream-deep">
                <img
                  src={t.img}
                  alt={`Portrait of ${t.name}`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-green-forest">
                  {t.name}
                </h3>
                <p className="mt-1 font-[var(--font-body)] text-xs font-medium uppercase tracking-wide text-gold">
                  {t.qual}
                </p>
                <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-ink-soft">
                  {t.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing ---------- */

function Pricing() {
  const tiers = [
    {
      name: "Quran Only",
      price: "$29",
      popular: false,
      features: ["3 classes / week", "30 min per class", "Qaida, Nazra or Hifz", "Monthly progress report"],
    },
    {
      name: "Combo: Quran + Academics",
      price: "$59",
      popular: true,
      features: ["5 classes / week", "40 min per class", "Any Quran + 2 school subjects", "Priority tutor matching", "Monthly progress report"],
    },
    {
      name: "Academic Only",
      price: "$35",
      popular: false,
      features: ["3 classes / week", "40 min per class", "Up to 2 school subjects", "Syllabus-aligned homework help"],
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:py-28">
      <SectionLabel n="05">Simple pricing</SectionLabel>
      <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl tracking-tight text-green-forest sm:text-4xl">
        Honest monthly plans, cancel anytime.
      </h2>
      <p className="mt-3 font-[var(--font-body)] text-sm text-ink-soft">
        Pay locally with JazzCash, Easypaisa or bank transfer, or by card / PayPal internationally.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              t.popular
                ? "border-green bg-green text-cream shadow-xl lg:-translate-y-3"
                : "border-line bg-cream text-ink"
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 font-[var(--font-body)] text-xs font-semibold text-green-forest">
                Most popular
              </span>
            )}
            <h3
              className={`font-[var(--font-display)] text-xl font-semibold ${
                t.popular ? "text-cream" : "text-green-forest"
              }`}
            >
              {t.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-[var(--font-display)] text-4xl font-semibold">{t.price}</span>
              <span className={`font-[var(--font-body)] text-sm ${t.popular ? "text-cream/70" : "text-ink-soft"}`}>
                / month
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 font-[var(--font-body)] text-sm">
                  <span className={t.popular ? "text-gold-soft" : "text-gold"}>✓</span>
                  <span className={t.popular ? "text-cream/90" : "text-ink-soft"}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-[var(--font-body)] text-sm font-semibold transition-colors ${
                t.popular
                  ? "bg-gold text-green-forest hover:bg-cream"
                  : "border border-green text-green hover:bg-green hover:text-cream"
              }`}
            >
              Start free trial
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */

function Testimonials() {
  const quotes = [
    ["My daughter looks forward to her Quran class every day. Her teacher is patient and kind, and I finally found a female tutor I trust.", "Sana Malik", "Lahore, Pakistan"],
    ["Living in the UK, I worried my son would lose his Urdu and Quran. Noor Academy made it effortless, and his Math grades went up too.", "Ahmed R.", "Manchester, UK"],
    ["The free trial sold us. No pressure, real teaching. Three months in and my kids are thriving.", "Fatima Zahra", "Toronto, Canada"],
  ];
  return (
    <section className="bg-green-deep py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-3 text-cream/60">
          <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-gold">06</span>
          <span className="h-px w-8 bg-cream/30" />
          <span className="font-[var(--font-body)] text-xs tracking-[0.28em] uppercase">From parents</span>
        </div>
        <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          Words from the families we serve.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map(([q, name, city], i) => (
            <figure key={i} className="flex flex-col rounded-3xl border border-cream/10 bg-cream/5 p-7">
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-4 flex-1 font-[var(--font-display)] text-lg italic leading-relaxed text-cream/95">
                “{q}”
              </blockquote>
              <figcaption className="mt-6 font-[var(--font-body)] text-sm">
                <span className="font-semibold text-cream">{name}</span>
                <span className="block text-cream/60">{city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const faqs = [
    ["What app do you use for classes?", "Classes run live over Zoom or Google Meet with a shared digital whiteboard. We send a simple link before every lesson, no complicated setup."],
    ["Are your teachers qualified and verified?", "Yes. Every tutor is interviewed, has their credentials checked, and completes a background check before teaching. Quran tutors hold Tajweed certification or Ijazah."],
    ["Can I choose my child’s class timing?", "Absolutely. We schedule around your family and time zone: mornings, evenings or weekends, and can adjust as your routine changes."],
    ["Is the trial class really free?", "Completely free, and no card is required. It’s a real class so you and your child can meet the teacher before deciding."],
    ["What happens if my child misses a class?", "Just let us know in advance and we’ll reschedule the class at no extra cost. Life happens, and we’re flexible."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
      <SectionLabel n="07">Questions parents ask</SectionLabel>
      <h2 className="mt-5 font-[var(--font-display)] text-3xl tracking-tight text-green-forest sm:text-4xl">
        Everything you might be wondering.
      </h2>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map(([q, a], i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-[var(--font-display)] text-lg font-medium text-green-forest">{q}</span>
              <span
                className={`shrink-0 text-xl text-gold transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-[var(--font-body)] text-sm leading-relaxed text-ink-soft">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- booking / final CTA ---------- */

function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="scroll-mt-24 bg-green-forest py-20 text-cream lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="font-[var(--font-arabic)] text-xl text-gold-soft" dir="rtl">
            ابدأ اليوم
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
            Ready to begin your child’s journey with the Quran and a stronger education?
          </h2>
          <p className="mt-5 max-w-md font-[var(--font-body)] text-cream/80">
            Book a free trial class today, no obligation, no card. We’ll reach out
            on WhatsApp to arrange a time that suits you.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 font-[var(--font-body)] text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-cream/10 bg-cream p-7 text-ink shadow-2xl sm:p-8">
          {sent ? (
            <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-green/10 text-2xl text-green">✓</span>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-green-forest">
                JazakAllah Khair!
              </h3>
              <p className="mt-2 max-w-xs font-[var(--font-body)] text-sm text-ink-soft">
                Your request is in. We’ll message you on WhatsApp shortly to confirm
                your free trial class.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-green-forest">
                Book a free trial
              </h3>
              <Field label="Parent’s name">
                <input required type="text" placeholder="e.g. Ayesha Khan" className={inputCls} />
              </Field>
              <Field label="WhatsApp number">
                <input required type="tel" placeholder="+92 300 1234567" className={inputCls} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Child’s class / age">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Quran (any age)</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i}>Class {i + 1}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred time">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Weekend</option>
                  </select>
                </Field>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gold px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-green-forest transition-colors hover:bg-green hover:text-cream"
              >
                Book my free trial class
              </button>
              <p className="text-center font-[var(--font-body)] text-xs text-ink-soft">
                No card required · We reply within a few hours
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 font-[var(--font-body)] text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green focus:ring-2 focus:ring-green/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-[var(--font-body)] text-xs font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line bg-cream py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 bg-green text-cream">
                <span className="font-[var(--font-arabic)] text-lg leading-none">ن</span>
              </span>
              <span className="font-[var(--font-display)] text-xl font-semibold text-green-forest">
                {ACADEMY}
              </span>
            </div>
            <p className="mt-4 max-w-xs font-[var(--font-body)] text-sm text-ink-soft">
              Nurturing the next generation with the Quran and a strong education,
              from the comfort of home, wherever you are.
            </p>
            <p className="mt-4 font-[var(--font-body)] text-xs text-ink-soft">
              Serving families in Pakistan, UK, USA, Canada, UAE &amp; beyond.
            </p>
          </div>

          <div>
            <h4 className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-[var(--font-body)] text-sm text-ink-soft hover:text-green">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 font-[var(--font-body)] text-sm text-ink-soft">
              <li>
                <a href={WHATSAPP} className="hover:text-green">WhatsApp: +92 335 6334912</a>
              </li>
              <li>
                <a href="mailto:hello@nooracademy.com" className="hover:text-green">hello@nooracademy.com</a>
              </li>
              <li className="flex gap-3 pt-2">
                {["Facebook", "Instagram", "YouTube"].map((s) => (
                  <a key={s} href="#" className="rounded-full border border-line px-3 py-1 text-xs hover:border-green hover:text-green">
                    {s}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-[var(--font-body)] text-xs text-ink-soft">
            © {new Date().getFullYear()} {ACADEMY}. All rights reserved.
          </p>
          <p className="font-[var(--font-arabic)] text-sm text-green" dir="rtl">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- floating whatsapp ---------- */

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden font-[var(--font-body)] text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}

/* ---------- page ---------- */

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Courses />
        <HowItWorks />
        <Teachers />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
