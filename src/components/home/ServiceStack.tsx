"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SERVICES: {
  id: string;
  title: string;
  description: string;
  points: string[];
  drawing: ReactNode;
}[] = [
  {
    id: "web-app",
    title: "웹·앱 개발",
    description:
      "모던 프레임워크 기반의 고성능 웹 및 모바일 애플리케이션을 구현합니다. React, Next.js, Flutter 등 최신 기술 스택으로 사용자 경험을 극대화합니다.",
    points: ["반응형 웹 서비스 개발", "iOS / Android 앱 개발", "성능 최적화 및 접근성", "디자인 시스템 구축"],
    drawing: (
      <>
        <path d="M20 46H180M34 33h.1M46 33h.1M58 33h.1" />
        <rect x="34" y="62" width="76" height="60" />
        <path d="M126 66h40M126 82h40M126 98h24" />
        <rect x="34" y="138" width="38" height="28" />
        <rect x="82" y="138" width="38" height="28" />
        <rect x="130" y="138" width="38" height="28" />
      </>
    ),
  },
  {
    id: "saas",
    title: "B2B SaaS 솔루션",
    description:
      "비즈니스 자동화를 위한 맞춤형 SaaS 솔루션을 개발합니다. 기업 운영 효율을 높이고, 성장에 맞춰 유연하게 확장 가능한 소프트웨어를 제공합니다.",
    points: ["업무 자동화 솔루션", "멀티 테넌트 아키텍처", "ERP / CRM 커스터마이징", "데이터 파이프라인"],
    drawing: (
      <>
        <rect x="34" y="82" width="40" height="36" />
        <rect x="126" y="38" width="40" height="36" />
        <rect x="126" y="126" width="40" height="36" />
        <path d="M74 100h26M100 56v88M100 56h26M100 144h26" />
        <circle cx="100" cy="100" r="5" />
      </>
    ),
  },
  {
    id: "cloud",
    title: "클라우드 아키텍처",
    description:
      "대규모 트래픽을 견디는 안정적인 백엔드 인프라를 설계합니다. AWS, GCP 기반의 확장 가능한 마이크로서비스 아키텍처를 구축합니다.",
    points: ["클라우드 인프라 설계", "마이크로서비스 / API", "DevOps & CI/CD", "고가용성 아키텍처"],
    drawing: [36, 82, 128].map((y) => (
      <g key={y}>
        <rect x="34" y={y} width="132" height="34" />
        <path d={`M50 ${y + 17}h.1M64 ${y + 17}h.1M112 ${y + 17}h38`} />
      </g>
    )),
  },
];

export default function ServiceStack() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const articles = Array.from(listRef.current?.children ?? []);
    // 화면 중앙선에 걸린 항목 하나만 활성화한다.
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(articles.indexOf(hit.target));
      },
      { rootMargin: "-55% 0px -45% 0px" },
    );
    articles.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 lg:gap-16">
      <div className="sticky top-16 z-10 -mx-6 flex h-60 items-center justify-center bg-background lg:top-[calc(15svh+2rem)] lg:mx-0 lg:h-[70svh]">
        <div className="stack">
          {SERVICES.map((service, i) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              aria-label={`${service.title} 설명으로 이동`}
              className="stack-layer"
              data-active={i === active}
              style={
                {
                  "--level": 1 - i,
                  // 활성 층 위의 층을 들어 올려 활성 층이 가려지지 않게 한다.
                  "--lift": active === 0 ? 0 : i < active ? 0.5 : -0.5,
                } as React.CSSProperties
              }
            >
              <svg viewBox="0 0 200 200" aria-hidden>
                {service.drawing}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div ref={listRef}>
        {SERVICES.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="flex min-h-[60svh] scroll-mt-76 flex-col justify-center py-12 lg:min-h-[70svh] lg:scroll-mt-[calc(15svh+2rem)]"
          >
            <h3 className="text-3xl font-bold sm:text-4xl">{service.title}</h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{service.description}</p>
            <ul className="mt-8 grid max-w-xl gap-x-8 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="border-t border-surface-border py-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
