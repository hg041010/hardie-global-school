import {
  ArrowLeft,
  Calendar,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SpringConference() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-500 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-24 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white" />
            <div className="absolute -bottom-60 left-1/3 h-[420px] w-[420px] rounded-full border-[60px] border-white" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <div className="animate-[fadeInUp_0.8s_ease-out_both]">
              <Link
                href="/curriculum/creative-experience"
                className="mb-8 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <ArrowLeft size={18} />
                창의적 체험학습으로 돌아가기
              </Link>

              <p className="text-sm font-bold uppercase tracking-[0.3em]">
                SPRING CONFERENCE
              </p>

              <h1 className="mt-4 text-5xl font-black">
                봄 컨퍼런스
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-xl leading-9 text-white/90">
                학생들이 하나님 안에서 자신의 비전을 발견하고,
                공동체와 함께 배우며 성장하는 특별한 학기
                프로그램입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 소개 */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="h-full">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
                  Introduction
                </p>

                <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-slate-900">
                  새로운 한 해를
                  <br />
                  함께 시작합니다.
                </h2>

                <p className="mt-8 break-keep text-lg leading-8 text-slate-600">
                  봄 컨퍼런스는 학생들이 한 해의 시작을 하나님께
                  맡기며, 공동체와 함께 비전과 목표를 세우는
                  프로그램입니다.
                </p>

                <p className="mt-6 break-keep text-lg leading-8 text-slate-600">
                  예배와 강의, 팀 활동, 다양한 체험을 통해 서로를
                  이해하고 협력하며, 앞으로의 학교생활을 준비하게
                  됩니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-3xl bg-emerald-50 p-10">
                <h3 className="text-2xl font-black text-emerald-700">
                  핵심 가치
                </h3>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <Sparkles
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={22}
                    />
                    <span className="break-keep leading-7 text-slate-700">
                      하나님 안에서 자신의 비전 발견
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Users
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={22}
                    />
                    <span className="break-keep leading-7 text-slate-700">
                      공동체와 함께 배우고 성장
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Calendar
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={22}
                    />
                    <span className="break-keep leading-7 text-slate-700">
                      새 학년의 목표와 계획 수립
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 목적 */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
                Purpose
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                봄 컨퍼런스의 목표
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-emerald-700">
                    Vision
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    하나님께서 각 학생에게 주신 비전과 삶의 방향을
                    함께 고민합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-emerald-700">
                    Community
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    서로를 이해하고 협력하며 건강한 공동체 문화를
                    만들어 갑니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-emerald-700">
                    Growth
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    다양한 활동을 통해 도전 정신과 리더십을
                    기릅니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 주요 프로그램 */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
                Main Programs
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                프로그램 구성
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 font-black text-emerald-700">
                    01
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    예배 및 말씀
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    함께 예배드리며 하나님과의 관계를 돌아보고
                    믿음을 세워갑니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 font-black text-emerald-700">
                    02
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    팀 프로젝트
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    다양한 팀 활동을 통해 협동심과 문제 해결 능력을
                    기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 font-black text-emerald-700">
                    03
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    레크리에이션
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    다양한 체험과 활동으로 즐겁게 공동체를
                    경험합니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 기대 효과 */}
        <section className="bg-emerald-700 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-200">
                What Students Gain
              </p>

              <h2 className="mt-4 text-4xl font-black">
                봄 컨퍼런스를 통해
              </h2>

              <p className="mx-auto mt-8 max-w-3xl break-keep text-lg leading-8 text-emerald-50">
                학생들은 하나님 안에서 자신의 비전을 발견하고,
                공동체와 협력하는 기쁨을 배우며, 새로운 학기를
                더욱 의미 있게 시작하게 됩니다.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Faith
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    믿음을 삶 속에서 실천하는 태도를 기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Leadership
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    다양한 활동을 통해 리더십과 책임감을
                    키웁니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Community
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    서로를 존중하며 함께 성장하는 공동체를
                    경험합니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-16">
                <Link
                  href="/curriculum/creative-experience"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-100 hover:shadow-xl"
                >
                  창의적 체험학습 전체 보기
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(32px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </main>
    </Layout>
  );
}