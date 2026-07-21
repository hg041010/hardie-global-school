import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CurriculumMain() {
  useEffect(() => {
    const elements = document.querySelectorAll(".curriculum-reveal");

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

  const curriculumItems = [
    {
      title: "교과과정",
      subtitle: "Academic Curriculum",
      description:
        "초등 교육과정, 중·고등 교육과정, 해외 입시반으로 구성된 하디글로벌스쿨의 교과과정을 소개합니다.",
      path: "/curriculum/overview",
      icon: BookOpen,
    },
    {
      title: "창의적 체험학습",
      subtitle: "Creative Experience",
      description:
        "봄 컨퍼런스, 가을 컨퍼런스, 비전 트립과 체험학습, RSC 등 교실 밖에서 이루어지는 다양한 교육 활동을 소개합니다.",
      path: "/curriculum/creative-experience",
      icon: Sparkles,
    },
  ];

  return (
    <Layout>
      <style>{`
        .curriculum-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .curriculum-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .curriculum-delay-1 {
          transition-delay: 0.12s;
        }

        .curriculum-delay-2 {
          transition-delay: 0.24s;
        }

        @media (prefers-reduced-motion: reduce) {
          .curriculum-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

{/* 상단 배너 */}
<section className="relative h-[420px] overflow-hidden bg-[#071a2d] md:h-[440px]">
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920"
      alt="하디글로벌스쿨 교육과정"
      className="h-full w-full object-cover"
    />

    <div
      className="absolute inset-0"
      style={{
        backgroundColor: "rgba(5, 24, 42, 0.84)",
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, rgba(5, 24, 42, 0.05), rgba(5, 24, 42, 0.46))",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center text-white md:px-10">
    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#5da2ff]">
        CURRICULUM
      </p>

      <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
        교육과정
      </h1>

      <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

      <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
        학생의 신앙과 실력, 가능성을 함께 키우는
        <br className="hidden sm:block" />
        하디글로벌스쿨의 교육과정을 소개합니다.
      </p>
    </div>
  </div>
</section>

      {/* 교육과정 전체보기 */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="container max-w-6xl px-4">
          <div className="curriculum-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              Curriculum Overview
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              하디글로벌스쿨의 교육
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
              교과 학습과 다양한 체험 활동을 통해 학생들이 지식과 성품,
              공동체 의식을 균형 있게 키워가도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curriculumItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.path}
                  className={`curriculum-reveal curriculum-delay-${
                    index + 1
                  } group bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center mb-7">
                    <Icon className="w-7 h-7" />
                  </div>

                  <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-[#3071F2] uppercase">
                    {item.subtitle}
                  </p>

                  <h3 className="font-serif text-3xl font-extrabold text-[#122033]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-8 text-slate-600 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-8">
                    <Link href={item.path}>
                      <Button
                        variant="outline"
                        className="border-[#3071F2] text-[#3071F2] hover:bg-[#3071F2] hover:text-white rounded-full px-6 py-5 font-bold"
                      >
                        전체보기
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}