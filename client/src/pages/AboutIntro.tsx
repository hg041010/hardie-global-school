import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutIntro() {
  useEffect(() => {
    const elements = document.querySelectorAll(".intro-reveal");

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
        threshold: 0.14,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const introItems = [
    {
      title: "이사장 인사말",
      subtitle: "Chairman Message",
      description:
        "하디글로벌스쿨이 세워진 교육 철학과 다음 세대를 향한 비전을 이사장 인사말을 통해 소개합니다.",
      path: "/about/chairman",
      icon: BriefcaseBusiness,
      imageLabel: "이사장 사진 영역",
    },
    {
      title: "교장 인사말",
      subtitle: "Principal Message",
      description:
        "학생 한 사람 한 사람을 사랑으로 품고, 믿음과 실력을 함께 키우는 하디글로벌스쿨의 교육 방향을 전합니다.",
      path: "/about/principal",
      icon: GraduationCap,
      imageLabel: "교장선생님 사진 영역",
    },
    {
      title: "교직원 소개",
      subtitle: "Our Faculty",
      description:
        "학생들의 신앙과 배움, 성장을 위해 함께 동행하는 하디글로벌스쿨 교직원을 소개합니다.",
      path: "/about/staff",
      icon: Users,
      imageLabel: "교직원 사진 영역",
    },
  ];

  return (
    <Layout>
      <style>{`
        .intro-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .intro-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-delay-1 {
          transition-delay: 0.12s;
        }

        .intro-delay-2 {
          transition-delay: 0.24s;
        }

        .intro-delay-3 {
          transition-delay: 0.36s;
        }

        .intro-delay-4 {
          transition-delay: 0.48s;
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-reveal {
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 소개"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl text-center text-white px-4">
          <p className="text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase mb-5">
            School Introduction
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            소개
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] mx-auto mt-6 rounded-full" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            하디글로벌스쿨을 이끌어가는 교육 리더와 교직원 공동체를
            한눈에 소개합니다.
          </p>
        </div>
      </section>

      {/* 소개 전체보기 */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="container max-w-6xl px-4">
          <div className="intro-reveal text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase mb-4">
              Meet Hardie
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] mb-5">
              하디글로벌스쿨을 함께 세워가는 사람들
            </h2>

            <p className="text-slate-600 leading-8 text-[17px]">
              학교의 비전을 세우고 교육 현장에서 학생들과 함께하는
              하디글로벌스쿨의 리더와 교직원을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {introItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.path}
                  className={`intro-reveal intro-delay-${index + 1} group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    <div className="text-center px-6 transition-transform duration-300 group-hover:scale-[1.03]">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white text-[#3071F2] shadow-sm flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7" />
                      </div>

                      <p className="text-sm font-bold text-slate-500 mb-1">
                        {item.imageLabel}
                      </p>

                      <p className="text-xs text-slate-400">
                        추후 실제 사진으로 교체
                      </p>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-xs font-extrabold tracking-[0.22em] text-[#3071F2] uppercase mb-3">
                      {item.subtitle}
                    </p>

                    <h3 className="font-serif text-2xl font-extrabold text-[#122033] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-8 mb-8 flex-1">
                      {item.description}
                    </p>

                    <Link href={item.path}>
                      <Button
                        variant="outline"
                        className="w-full border-[#3071F2] text-[#3071F2] hover:bg-[#3071F2] hover:text-white rounded-full py-5 font-bold transition-all duration-300"
                      >
                        자세히 보기
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

      {/* 하단 안내 */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container max-w-5xl px-4">
          <div className="intro-reveal intro-delay-2 bg-[#153E75] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#3071F2]/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-extrabold tracking-[0.22em] text-[#79BAF2] uppercase mb-4">
                One Community
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold mb-6">
                학생의 성장을 위해 함께하는 교육 공동체
              </h2>

              <p className="max-w-3xl mx-auto text-slate-200 leading-8 text-[17px]">
                하디글로벌스쿨의 모든 교직원은 학생들이 하나님이 주신
                가능성과 달란트를 발견하고, 믿음과 실력을 갖춘 사람으로
                성장하도록 함께 동행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}