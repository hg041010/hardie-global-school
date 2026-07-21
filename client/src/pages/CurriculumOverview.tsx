import { useEffect } from "react";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { Link } from "wouter";

export default function CurriculumOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const curriculum = [
    {
      title: "초등 교육과정",
      description:
        "기초 학습 능력과 창의력, 올바른 인성을 함께 기르는 초등 교육과정입니다.",
      icon: BookOpen,
      link: "/curriculum/elementary",
    },
    {
      title: "중·고등 교육과정",
      description:
        "학문적 성장과 진로 탐색을 함께 준비하는 중·고등 교육과정입니다.",
      icon: GraduationCap,
      link: "/curriculum/middle-high",
    },
    {
      title: "해외 입시반",
      description:
        "글로벌 대학 진학을 목표로 영어와 전공 역량을 집중적으로 준비합니다.",
      icon: Globe2,
      link: "/curriculum/overseas",
    },
  ];

  return (
    <Layout>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt="하디글로벌스쿨 교과과정"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-[#0D1B2A]/80" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <p className="font-bold uppercase tracking-[0.3em] text-[#79BAF2]">
            Academic Curriculum
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold">
            교과과정
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#3071F2]" />

          <p className="mt-8 text-lg leading-8 text-slate-200">
            학생들의 성장 단계에 맞춘
            <br />
            하디글로벌스쿨의 교과과정을 소개합니다.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container max-w-6xl px-4">
          <div className="fade-up mb-16 text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#3071F2]">
              Curriculum
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#122033]">
              교과과정 안내
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              학년별 교육과정을 선택하여 자세한 내용을 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {curriculum.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="fade-up flex h-full min-h-[430px] flex-col rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    transitionDelay: `${index * 0.12}s`,
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3071F2]/10">
                    <Icon className="h-8 w-8 text-[#3071F2]" />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl font-bold text-[#122033]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 font-bold text-[#3071F2] transition-all"
                  >
                    <span>자세히 보기</span>

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
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