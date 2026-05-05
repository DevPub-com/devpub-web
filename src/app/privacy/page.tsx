import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${COMPANY.name} 개인정보처리방침`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-surface-border">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            id="privacy-header-logo"
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
        <h1 className="text-3xl font-bold text-foreground">
          개인정보처리방침
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          최종 수정일: 2025년 5월 1일
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">
          <section>
            <p>
              {COMPANY.legalName}(이하 &quot;회사&quot;)는 개인정보보호법,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령에
              따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고
              원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을
              수립·공개합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제1조 (개인정보의 수집 항목 및 수집 방법)
            </h2>
            <p className="mb-3">
              회사는 서비스 제공을 위해 필요한 최소한의 개인정보를
              수집합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-surface-border">
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      구분
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      수집 항목
                    </th>
                    <th className="py-3 text-left font-semibold text-foreground">
                      수집 방법
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-border/50">
                    <td className="py-3 pr-4">회원가입 시</td>
                    <td className="py-3 pr-4">
                      이메일, 비밀번호, 회사명, 담당자명
                    </td>
                    <td className="py-3">웹사이트 회원가입</td>
                  </tr>
                  <tr className="border-b border-surface-border/50">
                    <td className="py-3 pr-4">서비스 이용 시</td>
                    <td className="py-3 pr-4">
                      접속 IP, 쿠키, 서비스 이용 기록, 접속 로그
                    </td>
                    <td className="py-3">자동 수집</td>
                  </tr>
                  <tr className="border-b border-surface-border/50">
                    <td className="py-3 pr-4">유료 결제 시</td>
                    <td className="py-3 pr-4">
                      결제 정보(카드번호는 PG사가 직접 처리)
                    </td>
                    <td className="py-3">결제 페이지</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">문의 시</td>
                    <td className="py-3 pr-4">이메일, 문의 내용</td>
                    <td className="py-3">이메일, 문의 양식</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제2조 (개인정보의 수집 및 이용 목적)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회원 가입 및 관리: 회원 식별, 서비스 제공, 고지사항 전달</li>
              <li>서비스 제공: AI 분석 서비스 제공, 컨설팅 리포트 전달</li>
              <li>요금 결제: 유료 서비스 이용 시 결제 처리</li>
              <li>마케팅 활용: 신규 서비스 안내, 이벤트 정보 제공 (동의 시)</li>
              <li>서비스 개선: 서비스 이용 통계 분석, 품질 향상</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제3조 (개인정보의 보유 및 이용 기간)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회원 탈퇴 시 지체 없이 파기합니다. 다만, 관련 법령에 의해
                보존이 필요한 경우 해당 기간 동안 보관합니다.
              </li>
              <li>
                법령에 따른 보관 기간:
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)
                  </li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>
                    소비자의 불만 또는 분쟁처리에 관한 기록: 3년
                  </li>
                  <li>접속 로그: 3개월 (통신비밀보호법)</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
              않습니다. 다만, 다음의 경우는 예외로 합니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>이용자가 사전에 동의한 경우</li>
              <li>
                법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                절차와 방법에 따라 수사기관의 요구가 있는 경우
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제5조 (개인정보 처리의 위탁)
            </h2>
            <p className="mb-3">
              회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리
              업무를 위탁하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-surface-border">
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      수탁업체
                    </th>
                    <th className="py-3 text-left font-semibold text-foreground">
                      위탁 업무
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-border/50">
                    <td className="py-3 pr-4">클라우드 서비스 제공업체</td>
                    <td className="py-3">데이터 저장 및 서버 운영</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">PG(전자결제대행)사</td>
                    <td className="py-3">결제 처리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제6조 (개인정보의 파기)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등
                개인정보가 불필요하게 되었을 때 지체 없이 해당 개인정보를
                파기합니다.
              </li>
              <li>
                전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로
                분쇄하거나 소각합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제7조 (이용자의 권리와 그 행사 방법)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수
                있습니다.
              </li>
              <li>
                이용자는 회원 탈퇴를 통해 개인정보 처리에 대한 동의를 철회할
                수 있습니다.
              </li>
              <li>
                개인정보의 열람, 정정, 삭제, 처리 정지 요구는 이메일(
                {COMPANY.email})로 연락 주시면 지체 없이 조치하겠습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <p>
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
              있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보 접근 제한</li>
              <li>개인정보 취급 직원의 최소화 및 교육</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제9조 (쿠키의 사용)
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해
                쿠키(cookie)를 사용합니다.
              </li>
              <li>
                이용자는 웹 브라우저 설정을 통해 쿠키 허용, 차단 등의 설정을
                할 수 있습니다. 다만, 쿠키를 차단하면 서비스 이용에 어려움이
                있을 수 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제10조 (개인정보 보호책임자)
            </h2>
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">
                    개인정보 보호책임자
                  </span>
                </p>
                <p>성명: {COMPANY.representative}</p>
                <p>직위: 대표</p>
                <p>이메일: {COMPANY.email}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제11조 (권익침해 구제 방법)
            </h2>
            <p>
              이용자는 개인정보 침해로 인한 피해 구제를 위하여 다음 기관에
              상담 등을 신청할 수 있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
              </li>
              <li>
                개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)
              </li>
              <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
              <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              제12조 (개인정보처리방침 변경)
            </h2>
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에
              따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
              시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
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
            className="transition-colors hover:text-primary-lighter"
          >
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="text-foreground transition-colors hover:text-primary-lighter"
          >
            개인정보처리방침
          </Link>
        </div>
      </footer>
    </div>
  );
}
