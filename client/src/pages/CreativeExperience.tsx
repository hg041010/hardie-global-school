import { useEffect } from "react";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

export default function CreativeExperience() {
  useEffect(() => {
    const elements = document.querySelectorAll(".creative-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      title: "봄 컨퍼런스",
      subtitle: "Spring Conference",
      description:
        "봄의 새로운 시작과 함께 학생들이 배움과 공동체의 의미를 나누는 특별 프로그램입니다.",
      path: "/creative-experience/spring-conference",
      icon: Leaf,
    },
    {
      title: "가을 컨퍼런스",
      subtitle: "Fall Conference",
      description:
        "한 해의 배움과 성장을 돌아보고 다양한 발표와 활동을 통해 서로의 경험을 나누는 시간입니다.",
      path: "/creative-experience/fall-conference",
      icon: CalendarDays,
    },
    {
      title: "비전 트립과 체험학습",
      subtitle: "Vision Trip",
      description:
        "교실 밖의 현장에서 새로운 문화를 경험하고 학생들의 시야와 진로 비전을 넓히는 체험 중심 프로그램입니다.",
      path: "/creative-experience/vision-trip",
      icon: Compass,
    },
    {
      title: "RSC",
      subtitle: "RSC Program",
      description:
        "학생들이 협력과 도전을 통해 자신의 가능성을 발견하고 공동체 안에서 성장하도록 돕는 특별 활동입니다.",
      path: "/creative-experience/rsc",
      icon: Sparkles,
    },
  ];

  return (
    <Layout>
      <style>{`
        .creative-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .creative-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .creative-delay-1 {
          transition-delay: 0.12s;
        }

        .creative-delay-2 {
          transition-delay: 0.24s;
        }

        .creative-delay-3 {
          transition-delay: 0.36s;
        }

        .creative-delay-4 {
          transition-delay: 0.48s;
        }

        @media (prefers-reduced-motion: reduce) {
          .creative-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* 상단 배너 */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 창의적 체험학습"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="mb-5 text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase">
            Creative Experience
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            창의적 체험학습
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            교실 밖의 다양한 경험을 통해
            <br className="hidden sm:block" />
            학생들의 시야와 가능성을 넓혀갑니다.
          </p>
        </div>
      </section>

      {/* 활동 전체보기 */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="container max-w-6xl px-4">
          <div className="creative-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              Program Overview
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              창의적 체험학습 프로그램
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
              학생들이 새로운 환경에서 직접 보고, 느끼고, 협력하며
              배움의 의미를 확장할 수 있도록 다양한 프로그램을 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <article
                  key={activity.path}
                  className={`creative-reveal creative-delay-${
                    index + 1
                  } group bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center mb-7">
                    <Icon className="w-7 h-7" />
                  </div>

                  <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-[#3071F2] uppercase">
                    {activity.subtitle}
                  </p>

                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#122033]">
                    {activity.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-8 text-slate-600 flex-1">
                    {activity.description}
                  </p>

                  <Link href={activity.path}>
                    <button className="mt-8 inline-flex items-center gap-2 font-bold text-[#3071F2] hover:gap-3 transition-all">
                      자세히 보기
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}