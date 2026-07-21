import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Newspaper,
} from "lucide-react";

export default function MediaNews() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentSectionRef = useRef<HTMLElement | null>(null);

  const mediaArticles = [
    {
      id: 1,
      title: "하디글로벌스쿨, 기독교 세계관 기반 대안교육으로 주목",
      media: "교육신문",
      date: "2026-05-22",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
      summary:
        "하디글로벌스쿨이 학생 중심의 교육과 기독교 세계관을 바탕으로 한 통합적 교육과정으로 주목받고 있습니다.",
      link: "#",
    },
    {
      id: 2,
      title: "학생의 가능성을 키우는 하디글로벌스쿨의 교육 철학",
      media: "크리스천교육저널",
      date: "2026-05-10",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      summary:
        "신앙과 학업, 공동체성을 함께 키우는 하디글로벌스쿨의 교육 철학과 실제 교육 현장이 소개되었습니다.",
      link: "#",
    },
    {
      id: 3,
      title: "글로벌 인재를 길러내는 하디글로벌스쿨",
      media: "지역교육뉴스",
      date: "2026-04-28",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      summary:
        "영어 토론과 프로젝트형 수업, 다양한 체험 활동을 통해 글로벌 역량을 키우는 학교의 교육과정이 소개되었습니다.",
      link: "#",
    },
    {
      id: 4,
      title: "하디글로벌스쿨 봄 컨퍼런스 현장",
      media: "교육문화매거진",
      date: "2026-04-15",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200",
      summary:
        "학생과 교사, 학부모가 함께 참여한 봄 컨퍼런스의 주요 프로그램과 현장 분위기를 담았습니다.",
      link: "#",
    },
    {
      id: 5,
      title: "대안교육의 새로운 방향을 제시하는 하디글로벌스쿨",
      media: "미래교육포럼",
      date: "2026-03-30",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
      summary:
        "학생 개개인의 진로와 재능을 존중하는 하디글로벌스쿨의 맞춤형 교육 방식이 소개되었습니다.",
      link: "#",
    },
    {
      id: 6,
      title: "지역사회와 함께 성장하는 학교 공동체",
      media: "청주지역신문",
      date: "2026-03-18",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
      summary:
        "지역사회 봉사와 협력 활동을 통해 공동체 의식을 키워가는 하디글로벌스쿨 학생들의 이야기를 전합니다.",
      link: "#",
    },
  ];

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

  return (
    <Layout>
      <main className="min-h-screen bg-[#f4f7fb]">
        {/* Hero Section */}
        <section className="relative min-h-[420px] overflow-hidden bg-[#071a2d] md:min-h-[440px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1800')",
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
                HARDIE IN THE MEDIA
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                언론에서 본 하디
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                언론과 다양한 매체에 소개된 하디글로벌스쿨의 교육 활동과
                이야기를 전해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Media Articles Section */}
        <section
          ref={contentSectionRef}
          className="min-h-[760px] py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Section Heading */}
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isContentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#3b82f6]">
                MEDIA COVERAGE
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                하디글로벌스쿨 언론 보도
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#748093] md:text-base">
                학교의 교육 철학과 활동이 소개된 언론 기사와 보도 내용을
                확인해 보세요.
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {mediaArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    transitionDelay: isContentVisible
                      ? `${180 + index * 100}ms`
                      : "0ms",
                  }}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-[#e1e6ed] bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#b9cee2] hover:shadow-lg ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#071a2d]/0 transition-colors duration-300 group-hover:bg-[#071a2d]/45">
                      <div className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-[#155b94] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#edf4fb] px-2.5 py-1 text-[11px] font-bold text-[#155b94]">
                        <Newspaper className="h-3.5 w-3.5" />
                        {article.media}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#8a95a5]">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold leading-7 text-[#142033] transition-colors group-hover:text-[#155b94]">
                      {article.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#748093]">
                      {article.summary}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#155b94]">
                        기사 보기
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}