import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Church,
  Compass,
  Languages,
  Lightbulb,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Layout from "@/components/Layout";

export default function MiddleHighCurriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".middle-high-reveal");

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
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const subjects = [
    {
      id: "korean",
      category: "Korean Language & Literature",
      title: "국어",
      subtitle: "문해력과 비판적 사고",
      description:
        "다양한 글과 문학 작품을 읽고 분석하며 자신의 생각을 논리적이고 설득력 있게 표현하는 힘을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#19130d]/95 via-[#5f340e]/74 to-[#d68925]/28",
    },
    {
      id: "english",
      category: "English & Global Communication",
      title: "영어",
      subtitle: "학문과 세계를 잇는 언어",
      description:
        "읽기와 쓰기, 듣기와 말하기를 균형 있게 발전시키며 국제적인 학업과 의사소통에 필요한 역량을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#171339]/95 via-[#443398]/76 to-[#7668df]/28",
    },
    {
      id: "math",
      category: "Mathematics & Logical Reasoning",
      title: "수학",
      subtitle: "논리와 문제 해결",
      description:
        "수와 식, 함수, 기하와 확률의 개념을 깊이 이해하고 다양한 문제를 논리적으로 해결하는 능력을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#08252d]/95 via-[#08717c]/75 to-[#58c8cb]/25",
    },
    {
      id: "social",
      category: "Social Studies & History",
      title: "사회",
      subtitle: "역사와 세계의 이해",
      description:
        "역사와 사회, 경제와 지리를 통합적으로 이해하며 세계를 균형 있고 책임감 있게 바라보는 시각을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#35101a]/95 via-[#a52f50]/74 to-[#ef6d8b]/28",
    },
    {
      id: "science",
      category: "Science & Inquiry",
      title: "과학",
      subtitle: "탐구와 창조 질서",
      description:
        "물리, 화학, 생명과학과 지구과학의 원리를 실험과 탐구를 통해 이해하고 과학적으로 사고합니다.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#092d24]/95 via-[#14765b]/74 to-[#47b991]/28",
    },
    {
      id: "music",
      category: "Music & Performing Arts",
      title: "음악",
      subtitle: "감상과 창의적 표현",
      description:
        "다양한 시대와 문화의 음악을 이해하고 연주와 창작을 통해 자신의 감정과 생각을 창의적으로 표현합니다.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#160c36]/95 via-[#53249a]/76 to-[#b64bd4]/30",
    },
    {
      id: "art",
      category: "Art & Visual Communication",
      title: "미술",
      subtitle: "시각적 사고와 표현",
      description:
        "다양한 재료와 매체를 탐색하며 관찰력과 창의성을 발전시키고 자신의 생각을 시각 언어로 표현합니다.",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#3d180b]/95 via-[#b5541d]/74 to-[#f3a14d]/28",
    },
    {
      id: "physical-education",
      category: "Physical Education & Wellness",
      title: "체육",
      subtitle: "건강과 협력",
      description:
        "다양한 신체 활동과 스포츠를 통해 건강을 관리하고 협력과 책임, 도전하는 태도를 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#0a1d3c]/95 via-[#155bad]/74 to-[#5aa6ec]/28",
    },
    {
      id: "liberal-it",
      category: "Career · Liberal Arts · IT",
      title: "교양수업",
      subtitle: "진로·IT",
      description:
        "진로 탐색과 디지털 기술 교육을 통해 자신의 미래를 설계하고 변화하는 사회에 필요한 역량을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#082823]/95 via-[#0f756a]/74 to-[#58c7ba]/28",
    },
  ];

  const educationGoals = [
    {
      number: "01",
      icon: Church,
      title: "신앙과 학문의 통합",
      description:
        "기독교 세계관을 바탕으로 교과 지식과 삶의 문제를 연결하며 바른 가치관을 형성합니다.",
    },
    {
      number: "02",
      icon: Brain,
      title: "학문적 성장",
      description:
        "핵심 개념을 깊이 이해하고 분석과 추론, 탐구와 표현의 역량을 체계적으로 발전시킵니다.",
    },
    {
      number: "03",
      icon: Compass,
      title: "진로와 소명 탐색",
      description:
        "자신의 흥미와 재능, 가치와 경험을 발견하며 미래의 진로와 삶의 방향을 구체화합니다.",
    },
    {
      number: "04",
      icon: Users,
      title: "공동체적 책임",
      description:
        "서로의 차이를 존중하고 협력하며 학교와 사회 안에서 책임 있게 행동하는 태도를 기릅니다.",
    },
  ];

  const specialPrograms = [
    {
      icon: Languages,
      eyebrow: "Language Competency",
      title: "한국어·영어 역량 강화",
      description:
        "탄탄한 한국어 문해력과 실질적인 영어 의사소통 능력을 함께 길러 다양한 학문과 세계를 이해하는 기초를 세웁니다.",
      points: [
        "읽기·쓰기·토론 중심 수업",
        "영어 듣기·말하기·발표",
        "학문적 어휘와 표현력 강화",
      ],
    },
    {
      icon: Search,
      eyebrow: "Inquiry-Based Learning",
      title: "탐구와 프로젝트 학습",
      description:
        "정답을 전달받는 데 그치지 않고 질문을 만들고 자료를 조사하며 협력하여 결과물을 완성합니다.",
      points: [
        "교과 융합 프로젝트",
        "조사·실험·토론 활동",
        "과정 중심 피드백",
      ],
    },
    {
      icon: Target,
      eyebrow: "Career Guidance",
      title: "진로·진학 설계",
      description:
        "학생의 관심 분야와 학업 성장을 바탕으로 진로를 탐색하고 단계별 학습 및 진학 계획을 수립합니다.",
      points: [
        "흥미와 강점 탐색",
        "개인별 진로 계획",
        "진학 정보와 포트폴리오",
      ],
    },
    {
      icon: Lightbulb,
      eyebrow: "Self-Directed Growth",
      title: "자기주도적 성장",
      description:
        "학습 목표를 세우고 자신의 과정을 점검하며 필요한 도움을 요청하는 독립적인 학습 태도를 기릅니다.",
      points: [
        "학습 목표와 계획 수립",
        "성찰과 자기 평가",
        "시간과 과제 관리",
      ],
    },
  ];

  return (
    <Layout>
      <style>{`
        .middle-high-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .middle-high-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .middle-high-delay-1 {
          transition-delay: 0.08s;
        }

        .middle-high-delay-2 {
          transition-delay: 0.16s;
        }

        .middle-high-delay-3 {
          transition-delay: 0.24s;
        }

        .middle-high-delay-4 {
          transition-delay: 0.32s;
        }

        .subject-card-image {
          transition: transform 0.7s ease;
        }

        .subject-card:hover .subject-card-image {
          transform: scale(1.07);
        }

        .subject-grid .subject-card-wrapper {
          transition-delay: 0s;
        }

        @media (min-width: 768px) {
          .subject-grid .subject-card-wrapper:nth-child(2n + 1) {
            transition-delay: 0s;
          }

          .subject-grid .subject-card-wrapper:nth-child(2n) {
            transition-delay: 0.12s;
          }
        }

        @media (min-width: 1280px) {
          .subject-grid .subject-card-wrapper:nth-child(3n + 1) {
            transition-delay: 0s;
          }

          .subject-grid .subject-card-wrapper:nth-child(3n + 2) {
            transition-delay: 0.12s;
          }

          .subject-grid .subject-card-wrapper:nth-child(3n) {
            transition-delay: 0.24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .middle-high-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .subject-card-image {
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#091725] sm:min-h-[470px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=85"
            alt="중·고등 학생들의 배움"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061525]/95 via-[#0a2436]/84 to-[#10374a]/48" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/75 via-transparent to-[#061525]/18" />
        </div>

        <div className="container relative z-10 max-w-6xl px-4 py-20 sm:py-24">
          <div className="middle-high-reveal max-w-3xl">
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              중·고등 교육과정
            </h1>

            <div className="mt-6 h-1.5 w-16 rounded-full bg-[#42b8a3]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              학문적 깊이와 바른 인성을 함께 세우고,
              <br className="hidden sm:block" />
              자신의 진로와 소명을 발견하며 미래를 준비합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="middle-high-reveal">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#168b7a]">
                Secondary Education
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-[#122033] sm:text-4xl">
                배움의 깊이를 더하고
                <br />
                미래의 방향을 찾아갑니다
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-[#168b7a]" />

              <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
                <p>
                  하디글로벌스쿨의 중·고등 교육과정은 학생들이 교과 지식을
                  깊이 이해하고, 배운 내용을 자신의 삶과 세상의 문제에
                  연결하도록 돕습니다.
                </p>

                <p>
                  7학년부터 12학년까지 각 교과의 기초 개념을 단계적으로
                  심화하며 읽기와 쓰기, 분석과 추론, 탐구와 표현의 능력을
                  균형 있게 발전시킵니다.
                </p>

                <p>
                  학생들은 다양한 교과 활동과 프로젝트, 상담과 진로 탐색을
                  통해 자신의 흥미와 강점을 발견하고 미래를 구체적으로
                  준비합니다.
                </p>
              </div>
            </div>

            <div className="middle-high-reveal middle-high-delay-2">
              <div className="relative overflow-hidden rounded-[30px] bg-[#edf7f5] p-7 shadow-[0_25px_70px_rgba(20,70,75,0.12)] sm:p-9">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#21a790]/10" />
                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#5da3ee]/10" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168b7a] text-white shadow-lg shadow-emerald-600/20">
                      <Sparkles className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168b7a]">
                        Learning Pathway
                      </p>

                      <h3 className="mt-1 font-serif text-xl font-extrabold text-[#122033]">
                        중·고등 과정 한눈에 보기
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      {
                        number: "7–12",
                        label: "학년 구성",
                        detail: "7학년부터 12학년",
                      },
                      {
                        number: "9",
                        label: "교과 영역",
                        detail: "기초·탐구·예술·진로 교육",
                      },
                      {
                        number: "2",
                        label: "언어 역량",
                        detail: "한국어와 영어",
                      },
                      {
                        number: "1",
                        label: "성장 과정",
                        detail: "학업과 진로를 통합 지원",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/90 bg-white/85 p-5 backdrop-blur-sm"
                      >
                        <p className="font-serif text-3xl font-extrabold text-[#168b7a]">
                          {item.number}
                        </p>

                        <p className="mt-2 font-bold text-[#122033]">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#112b38] px-6 py-5 text-white">
                    <p className="text-sm font-semibold leading-7 text-white/90">
                      학생의 학업 성장과 진로 탐색이 분리되지 않고 하나의
                      과정으로 연결되도록 교육합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-white pb-20 pt-4 sm:pb-24">
        <div className="container max-w-7xl px-4">
          <div className="middle-high-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#168b7a]">
              Subject Areas
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              중·고등 교과목 안내
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              7학년부터 12학년까지 각 교과의 기초와 심화 내용을 연속성
              있게 배우며 학문적 역량과 진로 역량을 함께 발전시킵니다.
            </p>
          </div>

          <div className="subject-grid mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/curriculum/middle-high/subjects/${subject.id}`}
                className="subject-card-wrapper middle-high-reveal block"
              >
                <article className="subject-card group relative h-[360px] cursor-pointer overflow-hidden rounded-[26px] bg-slate-900 shadow-[0_14px_35px_rgba(15,30,60,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(15,30,60,0.22)]">
                  <img
                    src={subject.image}
                    alt={`${subject.title} 교과`}
                    className="subject-card-image absolute inset-0 h-full w-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${subject.overlay}`}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8ee4d3]">
                      {subject.category}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-extrabold">
                      {subject.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-white/75">
                      {subject.subtitle}
                    </p>

                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/85">
                      {subject.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#8ee4d3]">
                      <span>자세히 보기</span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education goals */}
      <section className="border-y border-slate-100 bg-[#f6f9fa] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="middle-high-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#168b7a]">
              Educational Goals
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              중·고등 교육의 네 가지 방향
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              지식과 신앙, 개인의 성장과 공동체적 책임을 균형 있게
              연결하며 미래를 준비합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationGoals.map((goal, index) => {
              const Icon = goal.icon;

              return (
                <article
                  key={goal.title}
                  className={`middle-high-reveal middle-high-delay-${
                    index + 1
                  } group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                >
                  <span className="absolute right-5 top-4 font-serif text-5xl font-black text-[#edf3f3] transition-colors group-hover:text-[#e1efec]">
                    {goal.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f6f3] text-[#168b7a]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 font-serif text-xl font-extrabold text-[#122033]">
                      {goal.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {goal.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special programs */}
      <section className="overflow-hidden bg-[#0c2230] py-20 text-white sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="middle-high-reveal lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#71d1c0]">
                Special Programs
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight sm:text-4xl">
                중·고등 과정의
                <br />
                특색 교육
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-[#28aa95]" />

              <p className="mt-7 text-[16px] leading-8 text-slate-300">
                교과의 깊이를 더하는 동시에 언어, 탐구, 진로와
                자기주도성을 함께 길러 학생이 자신의 미래를 능동적으로
                설계하도록 돕습니다.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
                  alt="함께 학습하는 중·고등 학생들"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {specialPrograms.map((program, index) => {
                const Icon = program.icon;

                return (
                  <article
                    key={program.title}
                    className={`middle-high-reveal middle-high-delay-${
                      index + 1
                    } rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#62c8b6]/35 hover:bg-white/[0.1]`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#168b7a] text-white shadow-lg shadow-slate-950/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.19em] text-[#71d1c0]">
                      {program.eyebrow}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-extrabold">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {program.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                      {program.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-200"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#168b7a]/30 text-[#71d1c0]">
                            <Check className="h-3 w-3" />
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Growth process */}
      <section className="bg-[#f6f9fa] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="middle-high-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#168b7a]">
              Growth Path
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              배움에서 진로로 이어지는 성장
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              기초를 다지고, 깊이 탐구하며, 자신의 진로를 발견하고
              구체적인 미래 계획으로 발전시킵니다.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-[#c7ded9] lg:block" />

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "기초 다지기",
                  description:
                    "핵심 개념과 기본 학습 습관을 충실히 익히며 배움의 기반을 세웁니다.",
                },
                {
                  number: "02",
                  title: "깊이 탐구하기",
                  description:
                    "질문과 조사, 토론과 프로젝트를 통해 지식을 깊고 넓게 확장합니다.",
                },
                {
                  number: "03",
                  title: "진로 발견하기",
                  description:
                    "흥미와 강점, 가치와 경험을 돌아보며 자신에게 맞는 방향을 탐색합니다.",
                },
                {
                  number: "04",
                  title: "미래 설계하기",
                  description:
                    "진로와 진학 목표에 맞춰 구체적인 학업 계획과 실천 과정을 세웁니다.",
                },
              ].map((step, index) => (
                <article
                  key={step.number}
                  className={`middle-high-reveal middle-high-delay-${
                    index + 1
                  } relative text-center`}
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f6f9fa] bg-[#168b7a] font-serif text-xl font-extrabold text-white shadow-lg shadow-emerald-600/20">
                    {step.number}
                  </div>

                  <div className="mt-5 h-[190px] rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                    <h3 className="font-serif text-xl font-extrabold text-[#122033]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="container max-w-6xl px-4">
          <div className="middle-high-reveal grid gap-5 md:grid-cols-3">
            <Link href="/curriculum/elementary">
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168b7a]/30 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Previous
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#122033] transition-colors group-hover:text-[#168b7a]">
                    초등 교육과정
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 rotate-180 text-slate-400 transition-all group-hover:-translate-x-1 group-hover:text-[#168b7a]" />
              </div>
            </Link>

            <Link href="/curriculum/overseas">
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168b7a]/30 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Next
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#122033] transition-colors group-hover:text-[#168b7a]">
                    해외 입시반
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[#168b7a]" />
              </div>
            </Link>

            <Link href="/admission">
              <div className="group flex h-full cursor-pointer items-center justify-between overflow-hidden rounded-3xl bg-[#168b7a] p-7 text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#117969] hover:shadow-xl">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Admission
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold">
                    입학 안내 바로가기
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}