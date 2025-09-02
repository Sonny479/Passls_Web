export default function PassLSMainWireframe() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-white/90" />
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
            <button className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-200 transition" data-event="cta_primary_click">무료 맛보기 2강</button>
            <button className="text-sm text-neutral-300 hover:text-white">로그인</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          {/* Media Placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-700 border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-full w-full grid place-items-center text-neutral-300">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">Hero Media</div>
                  <div className="mt-1 text-sm">7–10초 루프 영상 또는 정적 이미지</div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">▶ 무음 자동재생 / 진행바 / 대체 이미지 가능</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              합격은 운이 아니라 <span className="text-white">구조</span>다
            </h1>
            <p className="mt-4 text-neutral-300 md:text-lg">
              LSAT 180이 설계한 <span className="text-white">정석 커리큘럼</span>. 풀이가 아닌 <span className="text-white">사고방식</span>부터 바꿉니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#showcase" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition" data-event="cta_primary_click">무료 맛보기 2강 보기</a>
              <a href="#value" className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-white/20 hover:bg-white/10 transition" data-event="cta_secondary_click">커리큘럼 PDF 받기</a>
            </div>
            {/* Micro Proofs */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">🏛️ LawHub 공식 인증</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">↩️ 유연한 환불 정책</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">⏱️ 롱폼 1–2h × 10+개</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">✍️ 질문 응답 지원</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* PROOF BAR */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm text-neutral-300" id="proof">
          {[
            { label: 'LawHub 공식 인증', href: '#lawhub' },
            { label: '유연한 환불 정책', href: '#refund' },
            { label: '롱폼 1–2h × 10+개', href: '#value' },
            { label: '질문 응답 지원', href: '#faq' },
            { label: '녹화 강의 제공', href: '#showcase' },
          ].map((i) => (
            <a key={i.label} href={i.href} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 hover:bg-white/10 transition text-center">
              {i.label}
            </a>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">대표 강의 쇼케이스</h2>
          <a href="#value" className="text-sm text-neutral-300 hover:text-white">커리큘럼 전체 보기 →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[1,2,3].map((n) => (
            <div key={n} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 overflow-hidden">
              <div className="aspect-video bg-neutral-800 grid place-items-center text-neutral-400">
                <span>썸네일 / 30초 미리보기 ▶</span>
              </div>
              <div className="p-4">
                <div className="text-sm text-neutral-400">LR / RC / AR</div>
                <h3 className="mt-1 font-medium">강의 제목 {n}</h3>
                <p className="mt-2 text-sm text-neutral-300">이 강의로 달라지는 점 3가지 요약 문장. 핵심 가치 제안.</p>
                <button className="mt-4 text-sm rounded-full border border-white/20 px-3 py-1 hover:bg-white/10">30초 샘플 보기</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE (가격=가치) */}
      <section id="value" className="mx-auto max-w-6xl px-4 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">가격이 아니라 <span className="text-white">가치</span>로 설명합니다</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-neutral-300">
            <li>• 1–2시간 롱폼 × 10+개(한 강좌 기준)</li>
            <li>• LawHub 실전 형식 훈련</li>
            <li>• 질문 응답 지원 & 핵심 요약 노트</li>
            <li className="text-neutral-400">한 강좌 평균 총 러닝타임: 약 <span className="text-white">X시간</span></li>
          </ul>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-neutral-400">구성·혜택 요약</div>
            <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-black/30 p-3">멘토링/응답 빈도
                <div className="text-lg font-semibold mt-1">주 N회</div>
              </div>
              <div className="rounded-lg bg-black/30 p-3">총 러닝타임
                <div className="text-lg font-semibold mt-1">X 시간+</div>
              </div>
              <div className="rounded-lg bg-black/30 p-3">커리큘럼 주차
                <div className="text-lg font-semibold mt-1">Y 주</div>
              </div>
              <div className="rounded-lg bg-black/30 p-3">포함 혜택
                <div className="text-lg font-semibold mt-1">LawHub 가이드 등</div>
              </div>
            </div>
            <button className="mt-4 rounded-full px-4 py-2 bg-white text-neutral-900 text-sm font-medium">구성·혜택 자세히</button>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">정석만 남긴 커리큘럼</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { t: '기본기', d: '전제·결론·함정의 구조를 세팅' },
            { t: '적용', d: '유형별 프레임으로 문제를 한 눈에' },
            { t: '실전', d: 'LawHub 기준 리듬·시간 관리' },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <div className="text-sm text-neutral-400">STEP</div>
              <div className="mt-1 text-xl font-semibold">{x.t}</div>
              <p className="mt-2 text-neutral-300">{x.d}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">샘플 30초 보기</button>
      </section>

      {/* LAW HUB */}
      <section id="lawhub" className="mx-auto max-w-6xl px-4 py-16 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-xs uppercase tracking-widest text-neutral-400">Official</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">LawHub 공식 인증으로 연습부터 실전처럼</h2>
          <p className="mt-3 text-neutral-300">실제 시험과 동일한 환경·문항으로 학습합니다. (LawHub Advantage 별도 가입)</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#" className="rounded-full px-4 py-2 bg-white text-neutral-900 text-sm font-medium">LawHub 안내 보기</a>
            <a href="#" className="rounded-full px-4 py-2 border border-white/20 text-sm hover:bg-white/10">계정 연동 가이드</a>
          </div>
        </div>
      </section>

      {/* REFUND */}
      <section id="refund" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">유연한 환불 정책으로 시작 부담을 줄였습니다</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5 text-neutral-900">
          {[{t:'전액 환불',d:'수강 시작 N일 이내'},{t:'부분 환불',d:'이후 M일 이내'},{t:'정책 전문',d:'상세 조건 확인'}].map((x)=> (
            <div key={x.t} className="rounded-2xl bg-white p-5">
              <div className="text-sm text-neutral-500">{x.t}</div>
              <div className="mt-1 text-xl font-semibold">{x.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm text-neutral-400">* 결제수단·프로모션에 따라 정책이 상이할 수 있습니다.</div>
        <button className="mt-5 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 text-neutral-100">환불 정책 전문 보기</button>
      </section>

      {/* FAQ / Q&A & REVIEWS placeholder */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-lg font-semibold">질문 응답 지원</h3>
            <p className="mt-2 text-neutral-300">학습 중 막히는 부분은 질문으로 해소하세요. 핵심 답변은 요약 노트로 정리됩니다.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-lg font-semibold">수강/합격 후기</h3>
            <p className="mt-2 text-neutral-300">후기는 확보되는 대로 업데이트됩니다. 투명하게 공개합니다.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">지금 필요한 건, <span className="text-white">구조</span>입니다</h2>
          <p className="mt-3 text-neutral-300">티저로 먼저 체감하세요. 이어서 커리큘럼 전체를 확인할 수 있습니다.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#showcase" className="inline-flex rounded-full px-6 py-3 bg-white text-neutral-900 font-medium">무료 맛보기 2강 보기</a>
            <a href="#" className="inline-flex rounded-full px-6 py-3 border border-white/20 hover:bg-white/10">상담 예약</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded bg-white/80" />
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

      {/* Floating CTA (Mobile) */}
      <a href="#showcase" className="fixed md:hidden bottom-4 right-4 rounded-full shadow-xl px-5 py-3 bg-white text-neutral-900 text-sm font-medium" data-event="cta_primary_click">
        무료 맛보기 2강
      </a>
    </div>
  );
}
