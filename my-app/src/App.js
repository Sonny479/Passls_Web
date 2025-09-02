/* App.jsx */
import React from "react";

/* ─────────────────────────────────────────
   색/톤 가이드 (Tailwind 커스텀 없이 기본 유틸로 구성)
   - 배경: neutral-950 / 섹션 카드: white/5, border white/10
   - 포인트: 그라데이션(#60a5fa→#a78bfa) / 텍스트 강조: text-white
   - 호버: bg-white/10, translate-y-*
   ───────────────────────────────────────── */

export default function PassLSMain() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-white/20">
      <GradientBG />

      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              합격은 운이 아니라 <span className="text-white">구조</span>다
            </h1>
            <p className="mt-5 text-neutral-300 md:text-lg">
              LSAT 180이 설계한 <span className="text-white">정석 커리큘럼</span>.
              풀이가 아닌 <span className="text-white">사고방식</span>부터 바꿉니다.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 hover:brightness-110 transition"
              >
                무료 맛보기 2강 보기
              </a>
              <a
                href="#value"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-white/20 hover:bg-white/10 transition"
              >
                커리큘럼 PDF 받기
              </a>
            </div>

            {/* Micro Proofs */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-300">
              <Pill>🏛️ LawHub 공식 인증</Pill>
              <Pill>↩️ 유연한 환불 정책</Pill>
              <Pill>⏱️ 롱폼 1–2h × 10+개</Pill>
              <Pill>✍️ 질문 응답 지원</Pill>
            </div>
          </div>

          {/* Media */}
          <div className="order-1 md:order-2">
            <HeroMedia />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      {/* PROOF BAR */}
      <section className="border-y border-white/10 bg-white/5/20 backdrop-blur">
        <div
          id="proof"
          className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm"
        >
          {proofs.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="group rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center hover:bg-white/10 transition"
            >
              <span className="opacity-80 group-hover:opacity-100 transition">
                {p.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <Section id="showcase" title="대표 강의 쇼케이스" rightLink={{ href: "#value", label: "커리큘럼 전체 보기 →" }}>
        <div className="grid md:grid-cols-2 gap-6">
          {showcases.map((c, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden shadow-lg shadow-black/30 hover:shadow-black/40 transition"
            >
              <div className="relative aspect-video bg-neutral-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 to-violet-500/10" />
                <button className="absolute inset-0 grid place-items-center">
                  <PlayButton />
                </button>
              </div>
              <div className="p-5">
                <div className="text-xs tracking-wider text-neutral-400">
                  {c.tag}
                </div>
                <h3 className="mt-1 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
                <button className="mt-4 text-sm rounded-full border border-white/20 px-3 py-1 hover:bg-white/10 transition">
                  30초 샘플 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VALUE (가격=가치) */}
      <Section id="value" title={<span>가격이 아니라 <span className="text-white">가치</span>로 설명합니다</span>}>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-neutral-300 leading-relaxed">
            <li>• 1–2시간 롱폼 × 10+개(한 강좌 기준)</li>
            <li>• LawHub 실전 형식 훈련</li>
            <li>• 질문 응답 지원 & 핵심 요약 노트</li>
            <li className="text-neutral-400">
              한 강좌 평균 총 러닝타임: 약 <span className="text-white">X시간</span>
            </li>
          </ul>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-neutral-400">구성·혜택 요약</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <StatCard label="멘토링/응답 빈도" value="주 N회" />
              <StatCard label="총 러닝타임" value="X 시간+" />
              <StatCard label="커리큘럼 주차" value="Y 주" />
              <StatCard label="포함 혜택" value="LawHub 가이드 등" />
            </div>
            <button className="mt-4 rounded-full px-4 py-2 bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 text-sm font-medium hover:brightness-110 transition">
              구성·혜택 자세히
            </button>
          </div>
        </div>
      </Section>

      {/* CURRICULUM */}
      <Section title="정석만 남긴 커리큘럼">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "기본기", d: "전제·결론·함정의 구조를 세팅" },
            { t: "적용", d: "유형별 프레임으로 문제를 한 눈에" },
            { t: "실전", d: "LawHub 기준 리듬·시간 관리" },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:bg-white/10 transition"
            >
              <div className="text-xs tracking-wider text-neutral-400">STEP</div>
              <div className="mt-1 text-xl font-semibold">{x.t}</div>
              <p className="mt-2 text-neutral-300">{x.d}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">
          샘플 30초 보기
        </button>
      </Section>

      {/* LAW HUB */}
      <Section id="lawhub">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-xs uppercase tracking-widest text-neutral-400">
            Official
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
            LawHub 공식 인증으로 연습부터 실전처럼
          </h2>
          <p className="mt-3 text-neutral-300">
            실제 시험과 동일한 환경·문항으로 학습합니다. (LawHub Advantage 별도 가입)
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full px-4 py-2 bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 text-sm font-medium hover:brightness-110 transition"
            >
              LawHub 안내 보기
            </a>
            <a
              href="#"
              className="rounded-full px-4 py-2 border border-white/20 text-sm hover:bg-white/10 transition"
            >
              계정 연동 가이드
            </a>
          </div>
        </div>
      </Section>

      {/* REFUND */}
      <Section id="refund" title="유연한 환불 정책으로 시작 부담을 줄였습니다">
        <div className="grid md:grid-cols-3 gap-6 text-neutral-900">
          {[
            { t: "전액 환불", d: "수강 시작 N일 이내" },
            { t: "부분 환불", d: "이후 M일 이내" },
            { t: "정책 전문", d: "상세 조건 확인" },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm text-neutral-500">{x.t}</div>
              <div className="mt-1 text-xl font-semibold">{x.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm text-neutral-400">
          * 결제수단·프로모션에 따라 정책이 상이할 수 있습니다.
        </div>
        <button className="mt-5 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition text-neutral-100">
          환불 정책 전문 보기
        </button>
      </Section>

      {/* Q&A & REVIEWS */}
      <Section id="faq">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold">질문 응답 지원</h3>
            <p className="mt-2 text-neutral-300">
              학습 중 막히는 부분은 질문으로 해소하세요. 핵심 답변은 요약
              노트로 정리됩니다.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold">수강/합격 후기</h3>
            <p className="mt-2 text-neutral-300">
              후기는 확보되는 대로 업데이트됩니다. 투명하게 공개합니다.
            </p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 text-center shadow-xl shadow-black/30">
          <h2 className="text-2xl md:text-4xl font-semibold">
            지금 필요한 건, <span className="text-white">구조</span>입니다
          </h2>
          <p className="mt-3 text-neutral-300">
            티저로 먼저 체감하세요. 이어서 커리큘럼 전체를 확인할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#showcase"
              className="inline-flex rounded-full px-6 py-3 bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 font-medium hover:brightness-110 transition"
            >
              무료 맛보기 2강 보기
            </a>
            <a
              href="#"
              className="inline-flex rounded-full px-6 py-3 border border-white/20 hover:bg-white/10 transition"
            >
              상담 예약
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating CTA (Mobile) */}
      <a
        href="#showcase"
        className="fixed md:hidden bottom-4 right-4 rounded-full shadow-xl px-5 py-3 bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 text-sm font-medium"
      >
        무료 맛보기 2강
      </a>
    </div>
  );
}

/* ───────── Components ───────── */

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-sky-400 to-violet-500 shadow" />
          <span className="font-semibold tracking-wide">PASS LS</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#showcase" className="hover:text-white">강의</a>
          <a href="#value" className="hover:text-white">가치 설명</a>
          <a href="#lawhub" className="hover:text-white">LawHub</a>
          <a href="#refund" className="hover:text-white">환불</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#showcase"
            className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-sky-400 to-violet-500 text-neutral-900 hover:brightness-110 transition"
          >
            무료 맛보기 2강
          </a>
          <button className="text-sm text-neutral-300 hover:text-white">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-gradient-to-br from-sky-400 to-violet-500" />
            <span>© {new Date().getFullYear()} PASS LS</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#refund" className="hover:text-white">환불정책</a>
            <a href="#" className="hover:text-white">문의</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, title, rightLink, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {rightLink && (
          <a href={rightLink.href} className="text-sm text-neutral-300 hover:text-white">
            {rightLink.label}
          </a>
        )}
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 bg-white/5">
      {children}
    </span>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-black/30 p-4 border border-white/10">
      <div className="text-[11px] uppercase tracking-widest text-neutral-400">
        {label}
      </div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

function PlayButton() {
  return (
    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 text-neutral-900 shadow ring-1 ring-black/10 group-hover:scale-105 transition">
      ▶
    </span>
  );
}

function HeroMedia() {
  return (
    <div className="relative">
      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
        {/* 배경 그라데이션 레이어 */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700" />
        {/* 디코 레이어 */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        {/* 안내 텍스트 */}
        <div className="relative h-full w-full grid place-items-center text-neutral-200">
          <div className="text-center px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Hero Media
            </div>
            <div className="mt-1 text-sm opacity-90">
              7–10초 루프 영상 또는 정적 이미지
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              ▶ 무음 자동재생 / 대체 이미지 가능
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const proofs = [
  { label: "LawHub 공식 인증", href: "#lawhub" },
  { label: "유연한 환불 정책", href: "#refund" },
  { label: "롱폼 1–2h × 10+개", href: "#value" },
  { label: "질문 응답 지원", href: "#faq" },
  { label: "녹화 강의 제공", href: "#showcase" },
];

const showcases = [
  {
    title: "Logical Reasoning Core",
    tag: "LR",
    desc: "핵심 논리 구조를 체계화하고 함정 식별 감각을 길러줍니다.",
  },
  {
    title: "Reading Comprehension Drills",
    tag: "RC",
    desc: "문단 구조/관계 프레임으로 지문을 빠르게 모델링합니다.",
  },
 
];

/* 배경 장식 */
function GradientBG() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(800px circle at 10% -10%, rgba(56,189,248,.12), transparent 50%), radial-gradient(800px circle at 110% 10%, rgba(168,85,247,.10), transparent 55%)",
      }}
    />
  );
}
