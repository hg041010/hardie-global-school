import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Search, Eye, Pin, ArrowRight, ArrowLeft } from "lucide-react";

export default function Notice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  const contentSectionRef = useRef<HTMLElement | null>(null);

  const allNotices = [
    {
      id: 1,
      title: "2027학년도 신입생 및 편입생 1차 입학설명회 개최 안내",
      date: "2026-05-25",
      views: 142,
      isPinned: true,
      category: "입학",
      content:
        "하디글로벌스쿨 2027학년도 입학설명회가 오는 10월 17일(토) 오전 10시 30분 본교 대강당에서 개최됩니다. 관심 있으신 학부모님들의 많은 참석 부탁드립니다.",
    },
    {
      id: 2,
      title: "하디글로벌스쿨 교사 초빙 공고 (영어, 수학 분야)",
      date: "2026-05-20",
      views: 89,
      isPinned: true,
      category: "채용",
      content:
        "기독교 교육 철학을 가지고 사랑으로 학생들을 가르칠 영어, 수학 담당 교사를 초빙합니다. 상세 요강은 첨부파일을 확인해 주시기 바랍니다.",
    },
    {
      id: 3,
      title:
        "여름방학 신앙 성장 캠프 '하나님의 자녀로 살아가기' 참가 신청 안내",
      date: "2026-05-18",
      views: 110,
      isPinned: false,
      category: "행사",
      content:
        "2026학년도 여름방학 신앙 캠프가 7월 20일부터 22일까지 가평 수련원에서 개최됩니다. 학생들의 많은 참여와 기도 부탁드립니다.",
    },
    {
      id: 4,
      title: "2026학년도 1학기 학부모 상담 주간 일정 안내",
      date: "2026-05-10",
      views: 76,
      isPinned: false,
      category: "학사",
      content:
        "담임 교사와의 1:1 진로 및 인성 상담을 위한 학부모 상담 주간이 운영됩니다. 각 가정으로 발송된 안내문을 참고하셔서 신청해 주세요.",
    },
    {
      id: 5,
      title: "봄 학기 야외 현장학습(숲 체험 활동) 안전 수칙 및 준비물 안내",
      date: "2026-04-28",
      views: 95,
      isPinned: false,
      category: "학사",
      content:
        "오는 5월 4일 진행되는 숲 체험 야외 활동과 관련하여 학생 준비물 및 안전 수칙을 공지하오니 학부모님들께서는 지도 부탁드립니다.",
    },
  ];

  type NoticeItem = (typeof allNotices)[number];

  const [selectedNotice, setSelectedNotice] =
    useState<NoticeItem | null>(null);

  const normalizedQuery = submittedQuery.trim().toLowerCase();

  const filteredNotices = allNotices.filter((notice) => {
    if (!normalizedQuery) return true;

    return (
      notice.title.toLowerCase().includes(normalizedQuery) ||
      notice.category.toLowerCase().includes(normalizedQuery)
    );
  });

  useEffect(() => {
    const contentSection = contentSectionRef.current;

    if (!contentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsContentVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    observer.observe(contentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSearch = () => {
    setSubmittedQuery(searchQuery);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleNoticeClick = (notice: NoticeItem) => {
    setSelectedNotice(notice);

    window.setTimeout(() => {
      contentSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  return (
    <Layout>
      <main className="min-h-screen bg-[#f4f7fb]">
        {/* Hero Section */}
        <section className="relative min-h-[420px] overflow-hidden bg-[#071a2d] md:min-h-[440px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1800')",
              transform: "scale(1.03)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.86)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.06), rgba(5, 24, 42, 0.42))",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-24 text-center md:min-h-[440px] md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[#5da2ff]">
                SCHOOL ANNOUNCEMENTS
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                공지사항
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨의 주요 학사 일정과 행사 소식, 입학 정보 등을
                가장 신속하게 전해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Notice Section */}
        <section
          ref={contentSectionRef}
          className="min-h-[760px] scroll-mt-24 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            {!selectedNotice ? (
              <>
                {/* Section Heading */}
                <div
                  className={`mb-12 text-center transition-all duration-700 ease-out ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#3b82f6]">
                    NOTICE BOARD
                  </p>

                  <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                    학교 공지
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#748093] md:text-base">
                    학교생활과 학사 운영에 필요한 주요 안내사항을 확인해
                    주세요.
                  </p>
                </div>

                {/* Search */}
                <div
                  className={`mb-10 flex flex-col justify-end gap-3 transition-all delay-100 duration-700 ease-out sm:flex-row ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8390a2]" />

                    <input
                      type="text"
                      placeholder="검색어를 입력하세요 (예: 입학, 학사)"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      className="h-12 w-full rounded-xl border border-[#dfe5ec] bg-white pl-11 pr-4 text-sm text-[#142033] outline-none transition-all placeholder:text-[#9aa4b2] focus:border-[#2f7df4] focus:ring-4 focus:ring-[#2f7df4]/10"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSearch}
                    className="h-12 rounded-xl bg-[#155b94] px-7 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#104d7f] hover:shadow-md"
                  >
                    검색
                  </button>
                </div>

                {/* Notice List */}
                <div
                  className={`overflow-hidden rounded-2xl border border-[#dfe5ec] bg-white shadow-sm transition-all delay-200 duration-700 ease-out ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  {/* Desktop Header */}
                  <div className="hidden grid-cols-12 items-center border-b border-[#e5eaf0] bg-[#f8fafc] px-7 py-4 text-xs font-bold text-[#657286] sm:grid">
                    <div className="col-span-1 text-center">구분</div>
                    <div className="col-span-7">제목</div>
                    <div className="col-span-2 text-center">작성일</div>
                    <div className="col-span-1 text-center">조회</div>
                    <div className="col-span-1" />
                  </div>

                  <div className="divide-y divide-[#edf0f4]">
                    {filteredNotices.map((notice, index) => (
                      <button
                        key={notice.id}
                        type="button"
                        onClick={() => handleNoticeClick(notice)}
                        style={{
                          transitionDelay: isContentVisible
                            ? `${250 + index * 70}ms`
                            : "0ms",
                        }}
                        className={`group grid w-full grid-cols-12 items-center px-5 py-5 text-left transition-all duration-300 hover:bg-[#f7faff] sm:px-7 ${
                          notice.isPinned ? "bg-[#f4f8fd]" : "bg-white"
                        }`}
                      >
                        {/* Pin / Category */}
                        <div className="col-span-2 flex justify-start sm:col-span-1 sm:justify-center">
                          {notice.isPinned ? (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0f9] text-[#1f6db2]">
                              <Pin
                                className="h-5 w-5 fill-[#1f6db2]"
                                strokeWidth={2}
                              />
                            </div>
                          ) : (
                            <span className="rounded-md bg-[#f0f3f7] px-2.5 py-1 text-[11px] font-semibold text-[#718096]">
                              {notice.category}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <div className="col-span-9 min-w-0 pr-3 sm:col-span-7">
                          <p className="truncate text-sm font-medium leading-6 text-[#253044] transition-colors group-hover:text-[#155b94] sm:text-[15px]">
                            {notice.title}
                          </p>

                          <div className="mt-2 flex items-center gap-3 text-[11px] text-[#8a95a5] sm:hidden">
                            <span>{notice.category}</span>
                            <span>{notice.date}</span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {notice.views}
                            </span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="hidden text-center text-xs text-[#8390a2] sm:col-span-2 sm:block">
                          {notice.date}
                        </div>

                        {/* Views */}
                        <div className="hidden items-center justify-center gap-1 text-xs text-[#8390a2] sm:col-span-1 sm:flex">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{notice.views}</span>
                        </div>

                        {/* Arrow */}
                        <div className="col-span-1 flex justify-end">
                          <ArrowRight className="h-4 w-4 -translate-x-1 text-[#a5afbd] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#155b94] group-hover:opacity-100" />
                        </div>
                      </button>
                    ))}

                    {filteredNotices.length === 0 && (
                      <div className="px-6 py-20 text-center">
                        <Search className="mx-auto h-8 w-8 text-[#b1bac6]" />

                        <p className="mt-4 text-sm font-medium text-[#657286]">
                          검색 조건에 맞는 공지사항이 없습니다.
                        </p>

                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("");
                            setSubmittedQuery("");
                          }}
                          className="mt-4 text-sm font-semibold text-[#155b94] hover:underline"
                        >
                          전체 공지 다시 보기
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-right text-xs text-[#8a95a5]">
                  총 {filteredNotices.length}개의 공지사항
                </p>
              </>
            ) : (
              /* Detail View */
              <article className="animate-in overflow-hidden rounded-2xl border border-[#dfe5ec] bg-white shadow-sm fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-[#e8ecf1] px-6 py-5 sm:px-10">
                  <button
                    type="button"
                    onClick={handleBackToList}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#657286] transition-colors hover:text-[#155b94]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    목록으로
                  </button>
                </div>

                <div className="px-6 py-8 sm:px-10 sm:py-10">
                  <div className="border-b border-[#e8ecf1] pb-8">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      {selectedNotice.isPinned && (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0f9] text-[#1f6db2]">
                          <Pin
                            className="h-5 w-5 fill-[#1f6db2]"
                            strokeWidth={2}
                          />
                        </div>
                      )}

                      <span className="rounded-md bg-[#edf4fb] px-3 py-1.5 text-xs font-bold text-[#155b94]">
                        {selectedNotice.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold leading-snug text-[#142033] sm:text-3xl">
                      {selectedNotice.title}
                    </h2>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#8390a2]">
                      <span>{selectedNotice.date}</span>

                      <span className="h-3 w-px bg-[#d8dee6]" />

                      <span className="flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" />
                        조회 {selectedNotice.views}
                      </span>
                    </div>
                  </div>

                  <div className="min-h-[260px] border-b border-[#e8ecf1] py-10 text-sm leading-8 text-[#566274] sm:text-base">
                    <p>{selectedNotice.content}</p>

                    <p className="mt-8">
                      본 공지사항과 관련된 추가 문의 사항은 행정실 또는 학교
                      대표 이메일로 연락해 주시면 안내해 드리겠습니다.
                    </p>

                    <p className="mt-8">
                      감사합니다.
                      <br />
                      하디글로벌스쿨 행정실 드림.
                    </p>
                  </div>

                  <div className="flex justify-center pt-8">
                    <button
                      type="button"
                      onClick={handleBackToList}
                      className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-xl border border-[#d7dee7] bg-white px-6 py-3 text-sm font-bold text-[#445064] transition-all hover:border-[#155b94] hover:text-[#155b94] hover:shadow-sm"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      목록으로
                    </button>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}