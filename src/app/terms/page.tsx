import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${COMPANY.name} 서비스 이용약관`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-surface-border">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            id="terms-header-logo"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <span className="text-base font-bold text-white">D</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {COMPANY.name}
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← 홈으로
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground">이용약관</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          최종 수정일: 2025년 5월 1일
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제1조 (목적)
            </h2>
            <p>
              이 약관은 {COMPANY.legalName}(이하 &quot;회사&quot;)가 제공하는 서비스의
              이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을
              규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제2조 (정의)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                &quot;서비스&quot;란 회사가 제공하는 AI 기반 디지털 가시성 분석 솔루션
                (AEO Scanner, Signal Stock 등)을 포함한 일체의 온라인 서비스를
                의미합니다.
              </li>
              <li>
                &quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는
                자를 의미합니다.
              </li>
              <li>
                &quot;회원&quot;이란 회사에 개인정보를 제공하고 회원 등록을 한 이용자로,
                서비스의 정보를 지속적으로 제공받으며 이용할 수 있는 자를
                의미합니다.
              </li>
              <li>
                &quot;컨설팅 리포트&quot;란 공개된 기업 데이터를 분석·가공하여 작성된
                보고서를 의미합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제3조 (약관의 효력 및 변경)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
                공지함으로써 효력이 발생합니다.
              </li>
              <li>
                회사는 합리적인 사유가 발생할 경우 관련 법령에 위반되지 않는
                범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은
                방법으로 공지합니다.
              </li>
              <li>
                이용자가 변경된 약관에 동의하지 않는 경우, 이용자는 서비스
                이용을 중단하고 회원 탈퇴를 할 수 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제4조 (서비스의 제공 및 변경)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사는 다음과 같은 서비스를 제공합니다.
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>AI 검색 엔진 가시성 분석 서비스 (AEO Scanner)</li>
                  <li>공개 기업 데이터 기반 구매 신호 분석 서비스 (Signal Stock)</li>
                  <li>디지털 가시성 전략 컨설팅 서비스</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </li>
              <li>
                회사는 서비스의 내용을 변경하는 경우 변경 사유 및 내용을
                이용자에게 통지합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제5조 (서비스 이용료 및 결제)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                서비스 이용료는 회사가 별도로 정한 요금표에 따릅니다.
              </li>
              <li>
                유료 서비스의 결제 방식은 신용카드, 계좌이체, 전자결제 등
                회사가 정한 방식에 따릅니다.
              </li>
              <li>
                이용자는 결제 시 본인 명의의 결제 수단을 사용하여야 하며,
                타인의 결제 수단을 임의로 사용해서는 안 됩니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제6조 (청약철회 및 환불)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                이용자는 서비스 구매일로부터 7일 이내에 청약을 철회할 수
                있습니다. 다만, 이미 서비스가 제공된 경우에는 제공된 부분에
                대한 비용을 공제한 후 환불합니다.
              </li>
              <li>
                환불은 결제 시 사용한 결제 수단으로 처리되며, 결제 수단에
                따라 3~7영업일이 소요될 수 있습니다.
              </li>
              <li>
                컨설팅 리포트 등 이미 제공 완료된 디지털 콘텐츠에 대해서는
                전자상거래 등에서의 소비자보호에 관한 법률에 따라 청약철회가
                제한될 수 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제7조 (회사의 의무)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사는 관련 법령과 이 약관에서 금지하는 행위를 하지 않으며,
                지속적이고 안정적인 서비스 제공에 최선을 다합니다.
              </li>
              <li>
                회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을
                수립하고 이를 준수합니다.
              </li>
              <li>
                회사는 서비스 이용과 관련한 이용자의 불만 또는 피해 구제
                요청을 적절하게 처리합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제8조 (이용자의 의무)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                이용자는 서비스 이용 시 관련 법령, 이 약관의 규정, 이용 안내
                등을 준수하여야 합니다.
              </li>
              <li>
                이용자는 서비스를 통해 얻은 정보를 회사의 사전 동의 없이
                영리 목적으로 복제, 배포, 방송 등에 사용하거나 제3자에게
                제공해서는 안 됩니다.
              </li>
              <li>
                이용자는 회사의 서비스에 대해 역설계(reverse engineering),
                디컴파일, 분해 등의 행위를 해서는 안 됩니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제9조 (지적재산권)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                서비스 및 관련 콘텐츠에 대한 지적재산권은 회사에 귀속됩니다.
              </li>
              <li>
                회사가 제공하는 컨설팅 리포트의 저작권은 회사에 있으며,
                이용자는 구매한 리포트를 자사 내부 목적으로만 사용할 수
                있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제10조 (면책사항)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등
                불가항력적 사유로 서비스를 제공할 수 없는 경우 책임이
                면제됩니다.
              </li>
              <li>
                회사가 제공하는 분석 결과 및 컨설팅 리포트는 참고 자료이며,
                이용자의 최종 의사결정에 대한 책임은 이용자에게 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제11조 (분쟁해결)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사와 이용자 간에 발생한 분쟁에 대해서는 대한민국 법을
                준거법으로 합니다.
              </li>
              <li>
                서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우,
                회사의 본사 소재지를 관할하는 법원을 전속 관할 법원으로
                합니다.
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border border-surface-border bg-surface p-6">
            <h2 className="mb-4 text-base font-bold text-foreground">
              사업자 정보
            </h2>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>상호: {COMPANY.legalName}</p>
              <p>대표: {COMPANY.representative}</p>
              <p>사업자등록번호: {COMPANY.businessRegistrationNumber}</p>
              <p>통신판매업신고: {COMPANY.mailOrderRegistrationNumber}</p>
              <p>주소: {COMPANY.address}</p>
              <p>이메일: {COMPANY.email}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-surface-border py-8 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <Link
            href="/terms"
            className="text-foreground transition-colors hover:text-primary-lighter"
          >
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-primary-lighter"
          >
            개인정보처리방침
          </Link>
        </div>
      </footer>
    </div>
  );
}
