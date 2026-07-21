import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import {
  Award,
  BookOpen,
  Heart,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const coreValues = [
  {
    title: "영적 기초",
    englishTitle: "SPIRITUAL",
    desc: "하나님의 사랑의 마음을 지닌 영성의 사람",
    details:
      "매일 드리는 예배와 성경 교육을 통해 예수 그리스도를 개인의 구주로 고백하고, 삶의 모든 영역에서 하나님을 최우선으로 경외하는 성숙한 신앙인을 기릅니다.",
    icon: Heart,
  },
  {
    title: "인성 발달",
    englishTitle: "CHARACTER",
    desc: "예수님의 겸손과 온유한 성품을 닮은 인성의 사람",
    details:
      "정직, 배려, 섬김, 책임 등 성경적 가치에 기반한 인성 교육을 생활화하여 이웃을 내 몸과 같이 사랑하고 공동체에 선한 영향력을 발휘하는 리더를 키웁니다.",
    icon: ShieldCheck,
  },
  {
    title: "지적 탁월성",
    englishTitle: "ACADEMIC",
    desc: "하디 선교사처럼 꿈과 열정을 가지고 선한 일에 준비된 지성의 사람",
    details:
      "단순 주입식 교육을 탈피하여 비판적 사고력과 문제 해결 능력을 기르고, 한국어와 영어를 자유롭게 구사하는 이중언어 교육을 통해 글로벌 무대에서 당당히 경쟁할 수 있는 실력을 배양합니다.",
    icon: Award,
  },
];

const educationApproaches = [
  {
    title: "성경중심 교과",
    englishTitle: "Integration of Biblical Principles",
    desc: "모든 교과목 내용이 성경에 기반하고 있습니다. 하나님께서 만물의 창조주이시며 역사의 주관자라는 진리에 입각하여 학습 내용이 전개됩니다.",
  },
  {
    title: "개별 학습",
    englishTitle: "Individualized Learning",
    desc: "진단평가를 실시하여 학생이 가장 잘할 수 있는 수준에서 시작합니다. 각 학생이 자신의 학습 역량을 충분히 발휘할 수 있도록 개별 지도합니다.",
  },
  {
    title: "자기주도 학습",
    englishTitle: "Self-Instructional Learning",
    desc: "학생들이 스스로 답을 찾아가는 방식으로 학습하며, Goal Card에 학습 분량을 작성하고 책임을 가지고 완수해 나갑니다.",
  },
  {
    title: "성품훈련",
    englishTitle: "Character Building",
    desc: "90가지 크리스천 성품이 학습 과정 안에 녹아 있으며, 성품과 관련된 성경 말씀을 암송하여 마음과 생활 속에 새깁니다.",
  },
  {
    title: "완전학습",
    englishTitle: "Mastery-based Learning",
    desc: "시험에서 일정 수준의 점수를 획득해야 다음 진도를 진행할 수 있으며, Checkup, Self Test, PACE Test를 통해 학습 내용을 완전히 이해하도록 돕습니다.",
  },
];

export default function About() {
  const [isCoreValuesVisible, setIsCoreValuesVisible] = useState(false);
  const [isMethodologyVisible, setIsMethodologyVisible] = useState(false);

  const coreValuesRef = useRef<HTMLElement | null>(null);
  const methodologyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const coreValuesSection = coreValuesRef.current;
    const methodologySection = methodologyRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === coreValuesSection) {
            setIsCoreValuesVisible(true);
          }

          if (entry.target === methodologySection) {
            setIsMethodologyVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -90px 0px",
      },
    );

    if (coreValuesSection) {
      observer.observe(coreValuesSection);
    }

    if (methodologySection) {
      observer.observe(methodologySection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-[#f4f7fb]">
        {/* Hero Section */}
        <section className="relative h-[420px] overflow-hidden bg-[#071a2d] md:h-[440px]">
          {/* 추후 학교 사진으로 교체할 임시 배경 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=85&w=2000')",
              transform: "scale(1.03)",
            }}
          />

          {/* 진한 남색 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.84)",
            }}
          />

          {/* 하단 그라데이션 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.05), rgba(5, 24, 42, 0.46))",
            }}
          />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#5da2ff]">
                ABOUT HARDIE GLOBAL SCHOOL
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                학교 소개
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-3xl break-keep text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨은 “일어나라 빛을 발하라”는 교훈 아래
                성경적 가치관과 창의적 교육으로 미래의 글로벌 리더를
                양성하는 기독교 대안학교입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#f4f7fb] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            {/* 페이지 진입 시 바로 보이는 제목 */}
            <div className="mb-14 animate-in text-center fade-in slide-in-from-bottom-5 duration-700">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                VISION &amp; MISSION
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                하디글로벌스쿨이 세우는 사람
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                성경적 가치관을 바탕으로 세상에 빛을 비추며 사랑과 실력을
                갖춘 크리스천 리더를 세워갑니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
              {/* Vision */}
              <article className="group flex min-h-[380px] flex-col rounded-2xl border border-[#e1e6ed] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cee2] hover:shadow-lg md:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                  <Zap className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                  OUR VISION
                </p>

                <h3 className="font-serif text-2xl font-bold text-[#142033] transition-colors group-hover:text-[#155b94]">
                  비전
                </h3>

                <strong className="mt-5 block text-lg font-bold tracking-wide text-[#155b94]">
                  ARISE, SHINE!
                </strong>

                <p className="mt-5 break-keep text-sm leading-7 text-[#748093]">
                  하디글로벌스쿨은 성경적인 교육을 바탕으로 미래 사회에
                  필요한 창의적인 지식과 경험을 쌓아, 소금과 빛처럼 세상과
                  이웃에 선한 영향력을 끼치며 사람을 사랑하고 공감하는
                  그리스도인을 키웁니다.
                </p>
              </article>

              {/* Mission */}
              <article className="group flex min-h-[380px] flex-col rounded-2xl border border-[#e1e6ed] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cee2] hover:shadow-lg md:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                  <BookOpen className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                  OUR MISSION
                </p>

                <h3 className="font-serif text-2xl font-bold text-[#142033] transition-colors group-hover:text-[#155b94]">
                  사명
                </h3>

                <strong className="mt-5 block text-lg font-bold text-[#155b94]">
                  크리스천 리더 양성
                </strong>

                <p className="mt-5 break-keep text-sm leading-7 text-[#748093]">
                  하디글로벌스쿨은 말씀과 기도를 통해 기독교 가치관을
                  확립하고, 이중언어 교육과 1:1 맞춤형 지도를 통해 글로벌
                  소통 능력을 함양하며, 예체능 및 전인 교육으로 예수님의
                  성품을 닮은 균형 잡힌 크리스천 리더를 기르는 것을
                  사명으로 합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section
          ref={coreValuesRef}
          className="min-h-[700px] border-y border-[#e5eaf0] bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isCoreValuesVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                CORE VALUES
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                핵심 가치와 3대 인재상
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                신앙과 인성, 지성을 균형 있게 갖춘 하나님의 사람을
                길러갑니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {coreValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    style={{
                      transitionDelay: isCoreValuesVisible
                        ? `${150 + index * 120}ms`
                        : "0ms",
                    }}
                    className={`group flex min-h-[440px] flex-col rounded-2xl border border-[#e1e6ed] bg-[#f9fbfd] p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#b9cee2] hover:bg-white hover:shadow-lg ${
                      isCoreValuesVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                  >
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                      {value.englishTitle}
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#142033] transition-colors group-hover:text-[#155b94]">
                      {value.title}
                    </h3>

                    <p className="mt-4 break-keep text-sm font-semibold leading-6 text-[#155b94]">
                      {value.desc}
                    </p>

                    <p className="mt-5 break-keep text-sm leading-7 text-[#748093]">
                      {value.details}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Methodology */}
        <section
          ref={methodologyRef}
          className="min-h-[760px] bg-[#f4f7fb] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isMethodologyVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                EDUCATION METHODOLOGY
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                하디의 교육 방법론
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                학생 한 사람의 가능성과 성장을 존중하며 성경적 원리를
                바탕으로 깊이 있는 배움을 만들어갑니다.
              </p>
            </div>

            <div className="space-y-5">
              {educationApproaches.map((approach, index) => (
                <article
                  key={approach.title}
                  style={{
                    transitionDelay: isMethodologyVisible
                      ? `${140 + index * 90}ms`
                      : "0ms",
                  }}
                  className={`group grid grid-cols-1 gap-5 rounded-2xl border border-[#e1e6ed] bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-[#b9cee2] hover:shadow-md sm:grid-cols-[72px_1fr] sm:p-8 ${
                    isMethodologyVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2ff] text-lg font-bold text-[#2f7df4] transition-all duration-300 group-hover:bg-[#155b94] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
                      {approach.englishTitle.toUpperCase()}
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#142033] transition-colors group-hover:text-[#155b94]">
                      {approach.title}
                    </h3>

                    <p className="mt-4 break-keep text-sm leading-7 text-[#748093] sm:text-base">
                      {approach.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Closing Message */}
            <div
              style={{
                transitionDelay: isMethodologyVisible ? "650ms" : "0ms",
              }}
              className={`mt-12 rounded-2xl bg-[#10273f] px-7 py-10 text-center text-white transition-all duration-700 ease-out sm:px-12 ${
                isMethodologyVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Sparkles className="mx-auto h-7 w-7 text-[#5da2ff]" />

              <p className="mx-auto mt-5 max-w-3xl break-keep font-serif text-xl font-bold leading-8 sm:text-2xl">
                성경적 가치와 창의적인 배움을 통해
                <br className="hidden sm:block" />
                세상을 밝히는 글로벌 리더를 세워갑니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}