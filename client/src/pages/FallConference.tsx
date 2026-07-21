import {
  ArrowLeft,
  BookOpen,
  Presentation,
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

export default function FallConference() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-800 via-orange-700 to-amber-500 text-white">
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
                FALL CONFERENCE
              </p>

              <h1 className="mt-4 text-5xl font-black">
                가을 컨퍼런스
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-xl leading-9 text-white/90">
                한 해 동안의 배움과 성장을 돌아보고, 학생들이 자신의
                경험과 성과를 공동체 앞에서 나누는 특별한 발표와
                축제의 시간입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 소개 */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="h-full">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
                  Introduction
                </p>

                <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-slate-900">
                  배움의 열매를
                  <br />
                  함께 나눕니다.
                </h2>

                <p className="mt-8 break-keep text-lg leading-8 text-slate-600">
                  가을 컨퍼런스는 학생들이 한 해 동안 배우고 경험한
                  내용을 정리하여 공동체 앞에서 발표하고 나누는
                  프로그램입니다.
                </p>

                <p className="mt-6 break-keep text-lg leading-8 text-slate-600">
                  개인과 팀 프로젝트, 공연과 전시, 다양한 발표를 통해
                  자신의 성장을 돌아보고 서로의 노력과 성취를
                  격려합니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-3xl bg-orange-50 p-10">
                <h3 className="text-2xl font-black text-orange-700">
                  핵심 가치
                </h3>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <Sparkles
                      className="mt-0.5 shrink-0 text-orange-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      한 해 동안의 배움과 성장 발견
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Presentation
                      className="mt-0.5 shrink-0 text-orange-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      자신의 생각과 경험을 표현하는 발표
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Users
                      className="mt-0.5 shrink-0 text-orange-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      서로의 성취를 격려하는 공동체
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
                Purpose
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                가을 컨퍼런스의 목표
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-orange-700">
                    Reflection
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    한 해 동안의 배움과 경험을 돌아보며 자신의 변화와
                    성장을 발견합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-orange-700">
                    Expression
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    발표와 공연, 전시를 통해 자신의 생각과 배움을
                    자신 있게 표현합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-orange-700">
                    Celebration
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    서로의 노력과 성취를 인정하고 함께 기뻐하는
                    공동체 문화를 만들어 갑니다.
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
                Main Programs
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                프로그램 구성
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 font-black text-orange-700">
                    01
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    프로젝트 발표
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    개인과 팀으로 진행한 학습 프로젝트의 과정과 결과를
                    발표합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 font-black text-orange-700">
                    02
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    공연 및 전시
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    음악과 미술, 다양한 창작 활동을 공연과 전시의
                    형태로 소개합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 font-black text-orange-700">
                    03
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    성장 나눔
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    학생들이 자신의 변화와 배움을 이야기하고 서로의
                    성장을 격려합니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 기대 효과 */}
        <section className="bg-orange-800 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200">
                What Students Gain
              </p>

              <h2 className="mt-4 text-4xl font-black">
                가을 컨퍼런스를 통해
              </h2>

              <p className="mx-auto mt-8 max-w-3xl break-keep text-lg leading-8 text-orange-50">
                학생들은 자신의 배움과 성장을 정리하고 자신 있게
                표현하며, 서로의 노력과 성취를 존중하고 축하하는
                공동체의 기쁨을 경험합니다.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Confidence
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    자신의 생각과 결과를 표현하는 자신감을 기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Creativity
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    다양한 방식으로 배움을 표현하며 창의성을
                    발전시킵니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Appreciation
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    서로의 노력과 성장을 존중하고 격려하는 태도를
                    배웁니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-16">
                <Link
                  href="/curriculum/creative-experience"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-orange-800 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-100 hover:shadow-xl"
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