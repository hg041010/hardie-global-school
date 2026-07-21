import {
  ArrowLeft,
  Compass,
  Globe2,
  HeartHandshake,
  Map,
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

export default function VisionTrip() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-sky-800 via-cyan-700 to-teal-500 text-white">
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
                VISION TRIP
              </p>

              <h1 className="mt-4 text-5xl font-black">
                비전 트립
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-xl leading-9 text-white/90">
                학생들이 다양한 지역과 문화를 직접 경험하며,
                하나님께서 창조하신 세상을 넓은 시야로 바라보고
                글로벌 리더로 성장하도록 돕는 현장 중심
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
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                  Introduction
                </p>

                <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-slate-900">
                  세상을 배우고,
                  <br />
                  비전을 넓혀갑니다.
                </h2>

                <p className="mt-8 break-keep text-lg leading-8 text-slate-600">
                  비전 트립은 교실을 넘어 실제 현장에서 배우는
                  체험 중심 교육 프로그램입니다.
                </p>

                <p className="mt-6 break-keep text-lg leading-8 text-slate-600">
                  학생들은 국내외 다양한 장소를 방문하며 역사와
                  문화, 자연과 공동체를 경험하고 하나님의 시선으로
                  세상을 바라보는 안목을 기르게 됩니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-3xl bg-cyan-50 p-10">
                <h3 className="text-2xl font-black text-cyan-700">
                  핵심 가치
                </h3>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <Globe2
                      className="mt-0.5 shrink-0 text-cyan-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      세계를 향한 시야 확장
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Compass
                      className="mt-0.5 shrink-0 text-cyan-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      다양한 문화와 삶의 방식 이해
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Users
                      className="mt-0.5 shrink-0 text-cyan-600"
                      size={22}
                    />

                    <span className="break-keep leading-7 text-slate-700">
                      공동체 안에서의 협력과 배려
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                Purpose
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                비전 트립의 목표
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-cyan-700">
                    Experience
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    현장을 직접 경험하며 교실에서 배운 내용을 삶과
                    연결하는 살아있는 배움을 얻습니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-cyan-700">
                    Perspective
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    다양한 문화와 사람을 이해하며 세상을 바라보는
                    시야와 관점을 넓힙니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-cyan-700">
                    Mission
                  </h3>

                  <p className="mt-4 break-keep leading-7 text-slate-600">
                    하나님께서 주신 재능으로 이웃과 세상을 섬기는
                    글로벌 리더의 비전을 품습니다.
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                Main Programs
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                프로그램 구성
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 font-black text-cyan-700">
                    01
                  </div>

                  <Map className="h-8 w-8 text-cyan-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    국내·해외 탐방
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    역사와 문화, 자연과 산업 현장을 직접 방문하며
                    교실 밖의 폭넓은 배움을 경험합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 font-black text-cyan-700">
                    02
                  </div>

                  <Globe2 className="h-8 w-8 text-cyan-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    문화 체험
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    다양한 지역과 문화를 경험하며 서로 다른 삶의
                    모습과 가치를 이해합니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 font-black text-cyan-700">
                    03
                  </div>

                  <HeartHandshake className="h-8 w-8 text-cyan-600" />

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    봉사 및 공동체 활동
                  </h3>

                  <p className="mt-5 break-keep leading-7 text-slate-600">
                    지역사회와 이웃을 섬기는 활동을 통해 사랑과
                    나눔을 실제 삶 속에서 실천합니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

                {/* 기대 효과 */}
        <section className="bg-cyan-800 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                What Students Gain
              </p>

              <h2 className="mt-4 text-4xl font-black">
                비전 트립을 통해
              </h2>

              <p className="mx-auto mt-8 max-w-3xl break-keep text-lg leading-8 text-cyan-50">
                학생들은 다양한 세상을 직접 경험하며 넓은 세계관과
                공동체 정신을 배우고, 하나님께서 주신 비전을 삶 속에서
                발견하는 시간을 갖게 됩니다.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Global Mind
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    세상을 바라보는 넓은 시야와 국제적인 감각을
                    기릅니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Leadership
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    협력과 배려를 배우며 공동체를 이끄는 리더십을
                    키워갑니다.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h3 className="text-xl font-bold">
                    Faith
                  </h3>

                  <p className="mt-3 break-keep leading-7 text-white/80">
                    하나님의 창조 세계를 경험하며 믿음 안에서 자신의
                    비전을 발견합니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-16">
                <Link
                  href="/curriculum/creative-experience"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-cyan-800 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-xl"
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