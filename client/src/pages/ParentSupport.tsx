import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bus,
  CalendarDays,
  FileText,
  FolderOpen,
  MessageCircle,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const supportItems = [
  {
    title: "증명서 발급 신청",
    description:
      "재학증명서, 생활기록부 등 필요한 각종 증명서를 신청할 수 있습니다.",
    icon: FileText,
    href: "/parent-support/certificate",
  },
  {
    title: "교칙과 각종 자료",
    description:
      "학교 교칙과 학부모 안내문, 교육과 관련된 각종 자료를 확인할 수 있습니다.",
    icon: FolderOpen,
    href: "/parent-support/resources",
  },
  {
    title: "학부모 교실",
    description:
      "학부모 교육과 세미나, 학교 공동체 프로그램에 관한 소식을 안내합니다.",
    icon: Users,
    href: "/parent-support/parent-class",
  },
  {
    title: "학사 일정과 시간표",
    description:
      "연간 학사일정과 주요 행사 일정, 학기별 시간표를 확인할 수 있습니다.",
    icon: CalendarDays,
    href: "/parent-support/calendar",
  },
  {
    title: "셔틀버스 노선",
    description:
      "등·하교 셔틀버스 운행 시간과 노선에 관한 정보를 확인할 수 있습니다.",
    icon: Bus,
    href: "/parent-support/shuttle-bus",
  },
  {
    title: "상담 신청",
    description:
      "학생의 학교생활과 학습에 관한 상담을 학교에 신청할 수 있습니다.",
    icon: MessageCircle,
    href: "/parent-support/counseling",
  },
];

export default function ParentSupport() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentSectionRef = useRef<HTMLElement | null>(null);

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
          {/* 추후 학교 사진으로 교체할 배경 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1800')",
              transform: "scale(1.03)",
            }}
          />

          {/* 진한 남색 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.86)",
            }}
          />

          {/* 아래쪽 그라데이션 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.06), rgba(5, 24, 42, 0.42))",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-24 text-center md:min-h-[440px] md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#5da2ff]">
                PARENT SUPPORT
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                학부모 지원
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨 학부모님들을 위한 각종 안내와 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Support Cards Section */}
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                SUPPORT SERVICE
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                학부모 지원 안내
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#748093] md:text-base">
                필요한 항목을 선택하여 자세한 내용을 확인해 주세요.
              </p>
            </div>

            {/* Support Cards */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {supportItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{
                      transitionDelay: isContentVisible
                        ? `${180 + index * 100}ms`
                        : "0ms",
                    }}
                    className={`group flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#e1e6ed] bg-white p-8 text-center shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#b9cee2] hover:shadow-lg md:p-10 ${
                      isContentVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                  >
                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf2ff] text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 font-serif text-2xl font-bold text-[#142033] transition-colors duration-300 group-hover:text-[#155b94]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 break-keep text-sm leading-7 text-[#748093]">
                      {item.description}
                    </p>

                    {/* Link */}
                    <div className="mt-auto pt-8">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#155b94]">
                        자세히 보기
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