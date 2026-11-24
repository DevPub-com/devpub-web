import Link from "next/link";
import LogoMark from "@/components/shared/LogoMark";
import { COMPANY } from "@/constants/company";
import { PRODUCTS } from "@/constants/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <LogoMark className="h-9 w-9 text-primary" />
              <span className="text-lg font-bold text-foreground">
                {COMPANY.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {COMPANY.description}
            </p>

            {/* 통신판매업 심사용 사업자 정보 */}
            <div className="mt-8 space-y-1.5 text-xs text-muted-foreground">
              <p>
                <span className="text-foreground">상호명</span>{" "}
                {COMPANY.legalName}
              </p>
              <p>
                <span className="text-foreground">대표자</span>{" "}
                {COMPANY.representative}
              </p>
              <p>
                <span className="text-foreground">사업장 소재지</span>{" "}
                {COMPANY.address}
              </p>
              <p>
                <span className="text-foreground">사업자등록번호</span>{" "}
                {COMPANY.businessRegistrationNumber}
              </p>
              <p>
                <span className="text-foreground">통신판매업신고번호</span>{" "}
                {COMPANY.mailOrderRegistrationNumber}
              </p>
              <p>
                <span className="text-foreground">이메일</span>{" "}
                {COMPANY.email}
              </p>
            </div>
          </div>

          {/* Service and legal links */}
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-foreground">자체 서비스</h3>
              <ul className="mt-4 space-y-3">
                {PRODUCTS.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.url ?? "/#products"}
                      className="text-sm text-muted transition-colors duration-200 hover:text-primary-lighter"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="text-sm font-semibold text-foreground">법적 고지</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted transition-colors duration-200 hover:text-primary-lighter"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted transition-colors duration-200 hover:text-primary-lighter"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {COMPANY.nameKorean}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
