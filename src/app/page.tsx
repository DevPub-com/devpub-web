import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";

// ─── Arrow icon (reused across sections) ─────────────────────────────────────

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-20"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg" />

      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55vh]"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 0%, rgba(52,102,246,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="pointer-events-none absolute right-[12%] top-[22%] h-72 w-72 rounded-full blur-[96px] animate-float-slow"
        style={{ background: "rgba(52,102,246,0.09)" }}
      />
      <div
        className="pointer-events-none absolute left-[6%] bottom-[28%] h-52 w-52 rounded-full blur-[72px] animate-float-slow"
        style={{ background: "rgba(249,115,22,0.07)", animationDelay: "5s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="mb-10 flex items-center gap-4 pt-32">
            <div className="h-px w-10 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Enterprise IT Partner · Est. 2026
            </span>
          </div>
        </ScrollReveal>

        {/* Main grid: headline ← | → copy + CTA */}
        <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-[3fr_2fr]">
          <ScrollReveal delay={80}>
            <h1
              className="font-black leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 8.5vw, 7.8rem)" }}
            >
              <span className="block text-foreground">비즈니스의</span>
              <span className="block text-foreground">로켓 성장을</span>
              <span className="block text-primary">위한 IT</span>
              <span className="block text-foreground">파트너</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-8">
              <p className="text-lg leading-relaxed text-muted">
                단순한 코딩을 넘어, 확장 가능하고 안정적인
                아키텍처를 설계합니다. 기획부터 운영까지
                전 과정을 함께합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:devpub.dev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                >
                  프로젝트 문의하기
                  <ArrowRight />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-surface"
                >
                  서비스 보기
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom stat strip */}
        <ScrollReveal delay={320}>
          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-surface-border pt-8">
            {[
              { sub: "Frontend / Mobile", main: "Web & App Dev" },
              { sub: "Infrastructure",   main: "Cloud Architecture" },
              { sub: "Custom Software",  main: "B2B SaaS" },
            ].map((item) => (
              <div key={item.main}>
                <p className="text-[10px] uppercase tracking-widest text-muted">{item.sub}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{item.main}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border border-surface-border p-1.5">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-muted" />
        </div>
      </div>
    </section>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  "Web Development",
  "Cloud Architecture",
  "B2B SaaS",
  "IT Consulting",
  "Frontend",
  "Backend API",
  "DevOps",
  "Mobile App",
  "DevPub",
];

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-surface-border bg-surface py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {item}
            </span>
            <span className="text-primary">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "🌐",
    title: "Web & App Development",
    subtitle: "Frontend / Mobile",
    description:
      "모던 프레임워크 기반의 고성능 웹 및 모바일 애플리케이션을 구현합니다. React, Next.js, Flutter 등 최신 기술 스택으로 사용자 경험을 극대화합니다.",
    points: [
      "반응형 웹 서비스 개발",
      "iOS / Android 앱 개발",
      "성능 최적화 및 접근성",
      "디자인 시스템 구축",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    subtitle: "Infrastructure / Backend",
    description:
      "대규모 트래픽을 견디는 안정적인 백엔드 인프라를 설계합니다. AWS, GCP 기반의 확장 가능한 마이크로서비스 아키텍처를 구축합니다.",
    points: [
      "클라우드 인프라 설계",
      "마이크로서비스 / API",
      "DevOps & CI/CD",
      "고가용성 아키텍처",
    ],
  },
  {
    icon: "⚙️",
    title: "B2B SaaS Solutions",
    subtitle: "Custom Software",
    description:
      "비즈니스 자동화를 위한 맞춤형 SaaS 솔루션을 개발합니다. 기업 운영 효율을 높이고, 성장에 맞춰 유연하게 확장 가능한 소프트웨어를 제공합니다.",
    points: [
      "업무 자동화 솔루션",
      "멀티 테넌트 아키텍처",
      "ERP / CRM 커스터마이징",
      "데이터 파이프라인",
    ],
  },
] as const;

function ServiceCard({
  service,
  large = false,
}: {
  service: (typeof SERVICES)[number];
  large?: boolean;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-8 transition-all duration-500 hover:border-primary/35 hover:bg-surface-hover">
      <div className="mb-5 text-3xl">{service.icon}</div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
        {service.subtitle}
      </p>
      <h3 className={`mb-3 font-bold text-foreground ${large ? "text-2xl" : "text-xl"}`}>
        {service.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-muted">{service.description}</p>
      <ul className={`mt-auto ${large ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}`}>
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-muted">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 flex items-start gap-5">
            <span
              className="select-none font-black leading-none text-primary/18"
              style={{ fontSize: "clamp(4rem,7vw,6rem)" }}
            >
              01
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Core Expertise
              </p>
              <h2 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
                핵심 기술 영역
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento grid: 3-col, 2 rows */}
        {/* Row 1: Card[0](2col) + Card[1](1col) */}
        {/* Row 2: Card[2](1col) + CTA(2col)     */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ScrollReveal className="md:col-span-2">
            <ServiceCard service={SERVICES[0]} large />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ServiceCard service={SERVICES[1]} />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <ServiceCard service={SERVICES[2]} />
          </ScrollReveal>

          {/* CTA card */}
          <ScrollReveal delay={220} className="md:col-span-2">
            <a
              href="mailto:devpub.dev@gmail.com"
              className="group flex h-full items-center justify-between rounded-2xl bg-primary p-8 transition-all duration-300 hover:bg-primary-light"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  Start a Project
                </p>
                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  프로젝트를 시작할 준비가 됐나요?
                </h3>
              </div>
              <div className="ml-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 flex items-start gap-5">
            <span
              className="select-none font-black leading-none text-primary/18"
              style={{ fontSize: "clamp(4rem,7vw,6rem)" }}
            >
              02
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Contact
              </p>
              <h2 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
                함께 성장합시다
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-surface-border bg-surface">
            <div className="p-10 md:p-16">
              <p
                className="font-black leading-[0.9] text-foreground"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
              >
                성공적인 비즈니스를
                <br />
                위한 첫걸음,
                <br />
                <span className="text-primary">DevPub</span>과 함께하세요.
              </p>

              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted">
                프로젝트 규모에 상관없이 언제든지 문의주세요.
                빠른 시간 내에 담당자가 연락드리겠습니다.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="mailto:devpub.dev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  이메일로 문의하기
                  <ArrowRight />
                </a>
                <span className="text-sm text-muted-foreground">
                  devpub.dev@gmail.com
                </span>
              </div>
            </div>

            {/* Gradient accent bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MarqueeStrip />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
