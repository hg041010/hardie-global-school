import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Bell, Newspaper } from "lucide-react";

export default function NewsMain() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const contentSectionRef = useRef<HTMLElement | null>(null);

  const newsCategories = [
    {
      title: "공지사항",
      englishTitle: "SCHOOL ANNOUNCEMENTS",
      description:
        "학교의 주요 일정과 행사, 입학 안내 및 학사 관련 소식을 가장 빠르게 확인할 수 있습니다.",
      details: [
        "학교 주요 공지 및 안내",
        "학사 일정과 행사 소식",
        "입학 및 모집 관련 정보",
      ],
      path: "/notice",
      icon: Bell,
    },
    {
      title: "언론에서 본 하디",
      englishTitle: "HARDIE IN THE MEDIA",
      description:
        "언론과 다양한 매체에 소개된 하디글로벌스쿨의 교육 활동과 이야기를 확인할 수 있습니다.",
      details: [
        "언론 보도 및 기사",
        "학교 교육 활동 소개",
        "하디글로벌스쿨 관련 소식",
      ],
      path: "/news/media",
      icon: Newspaper,
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
        threshold: 0.3,
        rootMargin: "0px 0px -120px 0px",
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
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1800')",
              transform: "scale(1.03)",
            }}
          />

          {/* 확실하게 적용되는 진한 남색 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.84)",
            }}
          />

          {/* 아래쪽을 조금 더 진하게 만드는 그라데이션 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.08), rgba(5, 24, 42, 0.42))",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-24 text-center md:min-h-[440px] md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[#5da2ff]">
                SCHOOL NEWS
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                소식
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨의 주요 공지사항과 언론에 소개된 학교의
                다양한 소식을 전해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* News Overview Section */}
        <section
          ref={contentSectionRef}
          className="min-h-[720px] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            {/* Section Heading */}
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isContentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#3b82f6]">
                NEWS OVERVIEW
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                하디글로벌스쿨 소식
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#748093] md:text-base">
                공지사항과 언론 보도를 통해 학교의 새로운 소식과 교육
                현장을 만나보세요.
              </p>
            </div>

            {/* News Cards */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {newsCategories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={category.path}
                    style={{
                      transitionDelay: isContentVisible
                        ? `${180 + index * 160}ms`
                        : "0ms",
                    }}
                    className={`group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[#e1e6ed] bg-white p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#b9cee2] hover:shadow-lg md:p-10 ${
                      isContentVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                      {category.englishTitle}
                    </p>

                    <h3 className="font-serif text-2xl font-bold text-[#142033] transition-colors duration-300 group-hover:text-[#155b94]">
                      {category.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#748093]">
                      {category.description}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {category.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-6 text-[#657286]"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-9">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#155b94]">
                        전체보기
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}