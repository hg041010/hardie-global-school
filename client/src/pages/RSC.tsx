import {
  ArrowLeft,
  Compass,
  Flag,
  Leaf,
  ShieldCheck,
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

export default function RSC() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-700 to-violet-600 text-white">
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
                RSC PROGRAM
              </p>

              <h1 className="mt-4 text-5xl font-black">
                RSC 체험학습
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-xl leading-9 text-white/90">
                학생들이 다양한 체험 활동에 직접 참여하며 도전정신과
                협동심, 책임감과 문제 해결 능력을 기르는 실천 중심의
                교육 프로그램입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 소개 */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="h-full">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
                  Introduction
                </p>

                <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-slate-900">
                  직접 경험하며,
                  <br />
                  함께 성장합니다.
                </h2>

                <p className="mt-8 break-keep text-lg leading-8 text-slate-600">
                  RSC 체험학습은 다양한 야외 활동과 공동체 프로그램을
                  통해 학생들이 교실에서 배운 내용을 삶 속에서 직접
                  실천하도록 돕는 교육 활동입니다.
                </p>

                <p className="mt-6 break-keep text-lg leading-8 text-slate-600">
                  학생들은 새로운 환경에 도전하고 친구들과 협력하여
                  문제를 해결하는 과정에서 자신감과 책임감, 공동체
                  의식을 자연스럽게 기르게 됩니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-3xl bg-indigo-50 p-10">
                <h3 className="text-2xl font-black text-indigo-700">
                  핵심 가치
                </h3>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <Compass
                      className="mt-0.5 shrink-0 text-indigo-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      새로운 경험을 향한 적극적인 도전
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Users
                      className="mt-0.5 shrink-0 text-indigo-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      서로 돕고 함께 성장하는 협력
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-indigo-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      자신의 역할을 성실히 수행하는 책임
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 목표 */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
                Purpose
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                RSC 체험학습의 목표
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-indigo-700">
                    Challenge
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    익숙하지 않은 환경과 새로운 활동에 적극적으로
                    도전하며 용기와 자신감을 기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-indigo-700">
                    Cooperation
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    친구들과 역할을 나누고 협력하면서 배려와 소통,
                    공동체 의식을 배웁니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-indigo-700">
                    Growth
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    체험과 실천을 통해 자신의 가능성을 발견하고 몸과
                    마음이 균형 있게 성장합니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 프로그램 */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
                Main Programs
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                프로그램 구성
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-black text-indigo-700">
                    01
                  </div>

                  <Users className="h-8 w-8 text-indigo-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    공동체 활동
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    친구들과 함께 과제를 수행하고 서로 돕는 활동을
                    통해 협력과 배려의 가치를 배웁니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-black text-indigo-700">
                    02
                  </div>

                  <Flag className="h-8 w-8 text-indigo-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    리더십 훈련
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    주어진 역할에 책임을 다하고 공동체를 섬기며 바른
                    리더십과 의사소통 능력을 기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 font-black text-indigo-700">
                    03
                  </div>

                  <Leaf className="h-8 w-8 text-indigo-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    자연 체험
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    자연 속에서 다양한 활동을 경험하며 생명의 소중함과
                    창조 세계를 돌보는 태도를 배웁니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 기대 효과 */}
        <section className="bg-indigo-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-200">
                What Students Gain
              </p>

              <h2 className="mt-4 text-4xl font-black">
                RSC 체험학습을 통해
              </h2>

              <p className="mx-auto mt-8 max-w-3xl break-keep text-lg leading-8 text-indigo-50">
                학생들은 새로운 환경에 도전하는 용기와 공동체 안에서
                협력하는 능력을 배우며, 자신의 역할을 책임 있게
                수행하는 성숙한 사람으로 성장합니다.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Courage
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    새로운 상황을 두려워하지 않고 도전하는 용기를
                    기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Teamwork
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    서로 소통하고 협력하여 공동의 목표를 이루는 방법을
                    배웁니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Character
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    배려와 책임을 실천하며 바른 인성과 생활 태도를
                    형성합니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-16">
                <Link
                  href="/curriculum/creative-experience"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-100 hover:shadow-xl"
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