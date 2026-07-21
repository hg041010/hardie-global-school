import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Church,
  Languages,
  Lightbulb,
  Music,
  School,
  Sparkles,
  Users,
} from "lucide-react";

import Layout from "@/components/Layout";

export default function ElementaryCurriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".elementary-reveal");

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

  const educationGoals = [
    {
      number: "01",
      icon: Church,
      title: "기독교 세계관",
      description:
        "성경적 가치관을 바탕으로 자신과 이웃, 세상을 바라보는 올바른 시선을 형성합니다.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "기초 학습 역량",
      description:
        "읽기, 쓰기, 수리 능력을 균형 있게 익히고 이후의 배움을 위한 탄탄한 기초를 세웁니다.",
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "창의적 탐구",
      description:
        "정답을 암기하는 데 그치지 않고 질문하고 탐구하며 스스로 해결하는 힘을 기릅니다.",
    },
    {
      number: "04",
      icon: Users,
      title: "공동체적 성장",
      description:
        "서로의 차이를 존중하고 협력하며 공동체 안에서 책임 있게 행동하는 태도를 배웁니다.",
    },
  ];

  const subjects = [
    {
      id: "korean",
      category: "Korean Language & Literature",
      title: "국어",
      subtitle: "국어와 문학",
      description:
        "읽기와 쓰기, 말하기와 듣기를 통해 정확하고 풍부하게 생각을 표현하는 힘을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#19130d]/95 via-[#5f340e]/74 to-[#d68925]/28",
    },
    {
      id: "english",
      category: "English & Global Communication",
      title: "영어",
      subtitle: "글로벌 의사소통",
      description:
        "듣기와 말하기 중심의 자연스러운 영어 학습으로 세계와 소통하는 기초를 세웁니다.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#171339]/95 via-[#443398]/76 to-[#7668df]/28",
    },
    {
      id: "math",
      category: "Mathematics & Logic",
      title: "수학",
      subtitle: "논리적 사고",
      description:
        "수와 연산, 도형과 측정 등의 개념을 이해하며 논리적 사고와 문제 해결력을 키웁니다.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#08252d]/95 via-[#08717c]/75 to-[#58c8cb]/25",
    },
    {
      id: "social",
      category: "Social Studies & History",
      title: "사회",
      subtitle: "역사와 세계사",
      description:
        "사람과 사회, 역사와 문화를 이해하며 세상을 넓고 균형 있게 바라보는 시각을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#35101a]/95 via-[#a52f50]/74 to-[#ef6d8b]/28",
    },
    {
      id: "science",
      category: "Science & Creation Order",
      title: "과학",
      subtitle: "창조 질서 탐구",
      description:
        "관찰과 실험, 탐구 활동을 통해 자연과 생명의 원리를 발견하고 과학적으로 사고합니다.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#092d24]/95 via-[#14765b]/74 to-[#47b991]/28",
    },
    {
      id: "music",
      category: "Music & Performing Arts",
      title: "음악",
      subtitle: "음악과 표현",
      description:
        "노래와 연주, 감상 활동을 통해 음악적 감수성과 자신을 표현하는 즐거움을 키웁니다.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#160c36]/95 via-[#53249a]/76 to-[#b64bd4]/30",
    },
    {
      id: "art",
      category: "Art & Visual Expression",
      title: "미술",
      subtitle: "창의적 시각 표현",
      description:
        "다양한 재료와 표현 방식을 경험하며 관찰력과 상상력, 창의적인 시각 언어를 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#3d180b]/95 via-[#b5541d]/74 to-[#f3a14d]/28",
    },
    {
      id: "physical-education",
      category: "Physical Education",
      title: "체육",
      subtitle: "건강과 협력",
      description:
        "다양한 신체 활동을 통해 건강한 생활 습관과 협동심, 도전하는 태도를 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#0a1d3c]/95 via-[#155bad]/74 to-[#5aa6ec]/28",
    },
    {
      id: "liberal-it",
      category: "Liberal Arts · Career · IT",
      title: "교양수업",
      subtitle: "진로·IT",
      description:
        "독서, 진로 탐색과 디지털 소양 교육을 통해 미래 사회에 필요한 폭넓은 역량을 기릅니다.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      overlay:
        "from-[#082823]/95 via-[#0f756a]/74 to-[#58c7ba]/28",
    },
  ];

  const specialPrograms = [
    {
      icon: Music,
      eyebrow: "Music Education",
      title: "1인 1악기 교육",
      description:
        "학생마다 한 가지 이상의 악기를 배우고 꾸준히 연습하며 음악적 감수성과 인내심을 함께 기릅니다.",
      points: ["개인별 악기 학습", "정기 연주 및 발표", "협력과 자신감 향상"],
    },
    {
      icon: Languages,
      eyebrow: "Bilingual Education",
      title: "이중언어 교육",
      description:
        "한국어의 탄탄한 문해력을 바탕으로 영어를 자연스럽게 접하며 글로벌 의사소통의 기초를 세웁니다.",
      points: ["한국어 문해력 강화", "영어 듣기·말하기", "세계 문화 이해"],
    },
    {
      icon: Church,
      eyebrow: "Christian Education",
      title: "신앙 인성 교육",
      description:
        "말씀과 예배, 공동체 생활을 통해 하나님을 사랑하고 이웃을 존중하는 인격으로 성장합니다.",
      points: ["말씀과 예배", "기독교 세계관", "섬김과 공동체 활동"],
    },
    {
      icon: Brain,
      eyebrow: "Self-Directed Learning",
      title: "자기주도 학습",
      description:
        "자신의 학습 과정에 참여하고 목표를 세우며 스스로 배움을 이어가는 습관을 형성합니다.",
      points: ["학습 목표 설정", "과정 중심 피드백", "질문과 탐구 활동"],
    },
  ];

  return (
    <Layout>
      <style>{`
        .elementary-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .elementary-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .elementary-delay-1 {
          transition-delay: 0.08s;
        }

        .elementary-delay-2 {
          transition-delay: 0.16s;
        }

        .elementary-delay-3 {
          transition-delay: 0.24s;
        }

        .elementary-delay-4 {
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
          .elementary-reveal {
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
<section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#0c1728] sm:min-h-[470px]">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=85"
      alt="초등학생들의 배움"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#0b1d34]/82 to-[#0b1d34]/48" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/72 via-transparent to-[#071426]/15" />
  </div>

  <div className="container relative z-10 max-w-6xl px-4 py-20 sm:py-24">
    <div className="elementary-reveal max-w-3xl">
      <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        초등 교육과정
      </h1>

      <div className="mt-6 h-1.5 w-16 rounded-full bg-[#4f8df7]" />

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
        신앙과 배움의 기초를 세우고,
        <br className="hidden sm:block" />
        스스로 생각하며 성장하는 힘을 기릅니다.
      </p>
    </div>
  </div>
</section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="elementary-reveal">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#3071f2]">
                Elementary Education
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-[#122033] sm:text-4xl">
                배움의 첫걸음에서
                <br />
                삶의 든든한 기초를 세웁니다
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-[#3071f2]" />

              <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
                <p>
                  하디글로벌스쿨의 초등 교육과정은 학생들이 하나님 안에서
                  자신의 소중함을 발견하고, 배움의 즐거움과 바른 생활 습관을
                  형성하도록 돕습니다.
                </p>

                <p>
                  국어, 영어, 수학을 비롯한 기초 교과의 탄탄한 학습과 함께
                  과학적 탐구, 예술적 표현, 신체 활동과 공동체 경험을 균형
                  있게 제공합니다.
                </p>

                <p>
                  학생들은 정해진 답을 받아들이는 데 그치지 않고 질문하고,
                  생각하고, 표현하며 자신에게 주어진 가능성을 능동적으로
                  발전시켜 나갑니다.
                </p>
              </div>
            </div>

            <div className="elementary-reveal elementary-delay-2">
              <div className="relative overflow-hidden rounded-[30px] bg-[#eef4ff] p-7 shadow-[0_25px_70px_rgba(20,45,90,0.12)] sm:p-9">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#3071f2]/10" />
                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#83b7ff]/15" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3071f2] text-white shadow-lg shadow-blue-500/20">
                      <Sparkles className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3071f2]">
                        Learning Foundation
                      </p>

                      <h3 className="mt-1 font-serif text-xl font-extrabold text-[#122033]">
                        초등 과정 한눈에 보기
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      {
                        number: "1–6",
                        label: "학년 구성",
                        detail: "초등 1학년부터 6학년",
                      },
                      {
                        number: "9",
                        label: "교과 영역",
                        detail: "기초·탐구·예술 교과",
                      },
                      {
                        number: "2",
                        label: "언어 교육",
                        detail: "한국어와 영어",
                      },
                      {
                        number: "1",
                        label: "학생별 악기",
                        detail: "1인 1악기 교육",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/90 bg-white/85 p-5 backdrop-blur-sm"
                      >
                        <p className="font-serif text-3xl font-extrabold text-[#3071f2]">
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

                  <div className="mt-5 rounded-2xl bg-[#122033] px-6 py-5 text-white">
                    <p className="text-sm font-semibold leading-7 text-white/90">
                      지식과 인성, 신앙과 창의성을 함께 길러 학생마다 가진
                      고유한 가능성이 건강하게 자라도록 돕습니다.
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
          <div className="elementary-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#3071f2]">
              Subject Areas
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              초등 교과목 안내
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              기초 학문부터 예술과 신체 활동, 미래 역량 교육까지 균형 있게
              경험할 수 있도록 교과과정을 구성합니다.
            </p>
          </div>

          <div className="subject-grid mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/curriculum/elementary/subjects/${subject.id}`}
                className="subject-card-wrapper elementary-reveal block"
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
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ffe165]">
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

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#ffe165]">
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
      <section className="border-y border-slate-100 bg-[#f7f9fc] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="elementary-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#3071f2]">
              Educational Goals
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              초등 교육의 네 가지 방향
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              학생들이 믿음 안에서 배우고 생각하며, 자신과 공동체를 함께
              세워가는 사람으로 성장하도록 교육합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationGoals.map((goal, index) => {
              const Icon = goal.icon;

              return (
                <article
                  key={goal.title}
                  className={`elementary-reveal elementary-delay-${
                    index + 1
                  } group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                >
                  <span className="absolute right-5 top-4 font-serif text-5xl font-black text-[#edf2fa] transition-colors group-hover:text-[#e3edff]">
                    {goal.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#3071f2]">
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

      {/* Special Programs */}
      <section className="overflow-hidden bg-[#0e1d32] py-20 text-white sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="elementary-reveal lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#8dbdff]">
                Special Programs
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight sm:text-4xl">
                초등 과정의
                <br />
                특색 교육
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-[#4f8df7]" />

              <p className="mt-7 text-[16px] leading-8 text-slate-300">
                교과 지식뿐 아니라 신앙, 언어, 예술과 자기주도성을 함께
                키워 학생의 삶 전체가 균형 있게 성장하도록 돕습니다.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                  alt="초등학생들의 수업"
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
                    className={`elementary-reveal elementary-delay-${
                      index + 1
                    } rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#70a9fa]/35 hover:bg-white/[0.1]`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#397de3] text-white shadow-lg shadow-blue-950/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.19em] text-[#8dbdff]">
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
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#397de3]/25 text-[#8dbdff]">
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

      {/* Learning Process */}
      <section className="bg-[#f7f9fc] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="elementary-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#3071f2]">
              Learning Process
            </p>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#122033] sm:text-4xl">
              생각하고 표현하는 배움
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
              학생이 배움의 주체가 되어 질문하고 탐구하며, 자신이 발견한
              내용을 다양한 방식으로 표현합니다.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-[#cdddf5] lg:block" />

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "질문하기",
                  description:
                    "수업과 일상에서 궁금한 점을 발견하고 스스로 질문합니다.",
                },
                {
                  number: "02",
                  title: "탐구하기",
                  description:
                    "관찰, 독서, 조사와 실험을 통해 질문의 답을 찾아갑니다.",
                },
                {
                  number: "03",
                  title: "연결하기",
                  description:
                    "새롭게 배운 내용을 이전 경험과 다른 교과에 연결합니다.",
                },
                {
                  number: "04",
                  title: "표현하기",
                  description:
                    "글, 말, 그림과 발표를 통해 자신의 생각을 나누고 발전시킵니다.",
                },
              ].map((step, index) => (
                <article
                  key={step.number}
                  className={`elementary-reveal elementary-delay-${
                    index + 1
                  } relative text-center`}
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f7f9fc] bg-[#3071f2] font-serif text-xl font-extrabold text-white shadow-lg shadow-blue-500/20">
                    {step.number}
                  </div>

                  <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
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
          <div className="elementary-reveal grid gap-5 md:grid-cols-3">
            <Link href="/curriculum/overview">
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3071f2]/30 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Previous
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#122033] transition-colors group-hover:text-[#3071f2]">
                    교과과정 전체보기
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 rotate-180 text-slate-400 transition-all group-hover:-translate-x-1 group-hover:text-[#3071f2]" />
              </div>
            </Link>

            <Link href="/curriculum/middle-high">
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3071f2]/30 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Next
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#122033] transition-colors group-hover:text-[#3071f2]">
                    중·고등 교육과정
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[#3071f2]" />
              </div>
            </Link>

            <Link href="/admission">
              <div className="group flex h-full cursor-pointer items-center justify-between overflow-hidden rounded-3xl bg-[#3071f2] p-7 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2765dd] hover:shadow-xl">
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