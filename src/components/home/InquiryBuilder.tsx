"use client";

import { useState } from "react";
import { COMPANY } from "@/constants/company";

const CHOICES = [
  {
    label: "필요한 것",
    after: "프로젝트를",
    options: ["웹·앱 개발", "B2B SaaS", "클라우드 아키텍처", "IT 컨설팅"],
  },
  {
    label: "현재 단계",
    after: "단계에서",
    options: ["아이디어", "기획을 마친", "개발 중인", "운영 중인"],
  },
  {
    label: "시작 시기",
    after: "시작하고 싶습니다.",
    options: ["가능한 한 빨리", "3개월 안에", "일정을 상의해서"],
  },
] as const;

export default function InquiryBuilder() {
  const [picked, setPicked] = useState<string[]>(CHOICES.map((c) => c.options[0]));
  const [copyResult, setCopyResult] = useState("");

  const sentence = CHOICES.map((c, i) => `${picked[i]} ${c.after}`).join(" ");
  const body = `안녕하세요, ${COMPANY.name} 담당자님.\n\n${sentence}\n\n회사/이름: \n연락처: \n프로젝트 소개: \n`;
  const subject = `[프로젝트 문의] ${picked[0]}`;
  const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopyResult("주소를 복사했습니다.");
    } catch {
      setCopyResult("복사하지 못했습니다. 주소를 직접 선택해 복사해 주세요.");
    }
  };

  return (
    <div className="mt-12 grid items-start gap-x-16 gap-y-12 lg:grid-cols-[1fr_24rem]">
      <div>
        <div className="space-y-3 text-lg font-bold leading-normal lg:text-xl">
          {CHOICES.map((choice, i) => (
            <p key={choice.label} className="flex flex-wrap items-baseline gap-x-[0.35em]">
              <select
                aria-label={choice.label}
                value={picked[i]}
                onChange={(e) => setPicked(picked.map((v, j) => (j === i ? e.target.value : v)))}
                className="inquiry-select"
              >
                {choice.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              {choice.after}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={href}
            className="rounded-lg bg-primary px-7 py-4 font-bold text-white transition-colors hover:bg-primary-lighter"
          >
            이 내용으로 메일 쓰기
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="py-3 text-primary underline underline-offset-4 hover:text-primary-lighter"
          >
            {COMPANY.email} 복사
          </button>
          <span role="status" className="text-sm text-muted">
            {copyResult}
          </span>
        </div>
      </div>

      <dl className="hidden rounded-lg bg-background p-8 lg:block">
        <dt className="text-sm text-muted">제목</dt>
        <dd className="mt-1 font-bold">{subject}</dd>
        <dt className="mt-6 text-sm text-muted">내용</dt>
        <dd className="mt-1 whitespace-pre-line leading-relaxed">{body}</dd>
      </dl>
    </div>
  );
}
