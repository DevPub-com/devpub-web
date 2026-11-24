import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InquiryBuilder from "@/components/home/InquiryBuilder";
import ServiceStack from "@/components/home/ServiceStack";
import TrafficSim from "@/components/home/TrafficSim";
import { PRODUCTS } from "@/constants/products";

// 같은 페이지가 다른 도메인으로도 열려, 검색엔진에 대표 주소를 알린다.
export const metadata: Metadata = { alternates: { canonical: "/" } };

function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-4rem)] flex-col overflow-clip bg-primary text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pt-12 pb-6 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-16">
        <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.12] tracking-tight">
          비즈니스의 <span className="whitespace-nowrap">로켓 성장을</span> 위한 IT 파트너
        </h1>
        <div>
          <p className="text-lg leading-relaxed text-on-primary">
            단순한 코딩을 넘어, 확장 가능하고 안정적인 아키텍처를 설계합니다. 기획부터 운영까지
            전&nbsp;과정을 함께합니다.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-white px-7 py-4 font-bold text-primary transition-colors hover:bg-on-primary"
          >
            프로젝트 문의하기
          </a>
        </div>
      </div>
      <TrafficSim />
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-16 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">직접 만드는 서비스</h2>
        {PRODUCTS.map((product) => (
          <article key={product.name} className="mt-12 grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
            <div>
              <h3 className="text-3xl font-bold">{product.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{product.description}</p>
              {product.url ? (
                <a
                  href={product.url}
                  className="mt-6 inline-block rounded-lg bg-primary px-7 py-4 font-bold text-white transition-colors hover:bg-primary-lighter"
                >
                  {product.name} 열기
                </a>
              ) : (
                <p className="mt-6 font-bold text-primary-lighter">출시 준비 중</p>
              )}
            </div>
            <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {product.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-6 sm:block">
                  <Image
                    src={feature.image}
                    alt=""
                    unoptimized
                    className="h-28 w-28 shrink-0 object-contain object-left sm:h-44 sm:w-full"
                  />
                  <div className="sm:mt-6">
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                    <p className="mt-2 leading-relaxed text-muted">{feature.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 pt-24 lg:pb-[8svh]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          화면부터 인프라까지, 제품의 모든 층을 만듭니다
        </h2>
        <ServiceStack />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-surface py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">함께 성장합시다</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          프로젝트 규모에 상관없이 문의해 주세요. 밑줄 친 부분을 고르면 메일 초안이 완성됩니다.
        </p>
        <InquiryBuilder />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
