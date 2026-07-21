import { useEffect } from "react";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Church,
  MapPin,
  Presentation,
  Sparkles,
  Trees,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CampusFacility {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Building2;
}

export default function CampusInfo() {
  useEffect(() => {
    const elements = document.querySelectorAll(".campus-reveal");

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

  const facilities: CampusFacility[] = [
    {
      title: "일반 교실",
      subtitle: "Classroom",
      description:
        "학생들이 편안하게 학습하고 소통할 수 있도록 마련된 기본 수업 공간입니다.",
      image: "/images/campus-classroom.jpg",
      icon: Presentation,
    },
    {
      title: "개별 학습 공간",
      subtitle: "Learning Center",
      description:
        "학생 각자의 진도와 학습 속도에 맞춰 집중할 수 있는 자기주도 학습 공간입니다.",
      image: "/images/campus-learning.jpg",
      icon: BookOpen,
    },
    {
      title: "예배 공간",
      subtitle: "Worship Space",
      description:
        "말씀과 기도로 하루를 시작하며 학교 공동체가 함께 예배드리는 공간입니다.",
      image: "/images/campus-worship.jpg",
      icon: Church,
    },
    {
      title: "교류 및 활동 공간",
      subtitle: "Community Space",
      description:
        "학생들이 함께 대화하고 협력하며 다양한 공동체 활동을 이어가는 공간입니다.",
      image: "/images/campus-community.jpg",
      icon: Sparkles,
    },
    {
      title: "도서 및 휴게 공간",
      subtitle: "Reading Lounge",
      description:
        "책을 읽거나 조용히 쉬며 생각을 정리할 수 있도록 준비된 편안한 공간입니다.",
      image: "/images/campus-library.jpg",
      icon: BookOpen,
    },
    {
      title: "야외 활동 공간",
      subtitle: "Outdoor Space",
      description:
        "신체 활동과 체험학습, 공동체 행사를 진행할 수 있는 야외 공간입니다.",
      image: "/images/campus-outdoor.jpg",
      icon: Trees,
    },
  ];

  return (
    <Layout>
      <style>{`
        .campus-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .campus-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .campus-delay-1 {
          transition-delay: 0.1s;
        }

        .campus-delay-2 {
          transition-delay: 0.2s;
        }

        .campus-delay-3 {
          transition-delay: 0.3s;
        }

        .campus-delay-4 {
          transition-delay: 0.4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .campus-reveal {
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
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 캠퍼스 안내"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="mb-5 text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase">
            Campus Guide
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            캠퍼스 안내
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            학생들이 배우고 예배하며 함께 성장하는
            <br className="hidden sm:block" />
            하디글로벌스쿨의 교육 공간을 소개합니다.
          </p>
        </div>
      </section>

      {/* 캠퍼스 소개 */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* 대표 전경 사진 */}
            <div className="campus-reveal lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg group">
                <img
                  src="/images/campus-main.jpg"
                  alt="하디글로벌스쿨 캠퍼스 전경"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />

                <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white text-[#3071F2] shadow-sm flex items-center justify-center mb-5">
                      <Building2 className="w-8 h-8" />
                    </div>

                    <p className="font-bold text-slate-600">
                      캠퍼스 대표 전경 사진
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      추후 실제 학교 사진으로 교체
                    </p>
                  </div>
                </div>

                <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                  <p className="text-xs font-extrabold tracking-[0.2em] text-[#3071F2] uppercase">
                    Hardie Campus
                  </p>

                  <p className="mt-1 font-serif text-lg sm:text-xl font-extrabold text-[#122033]">
                    하디글로벌스쿨
                  </p>
                </div>
              </div>
            </div>

            {/* 소개 글 */}
            <div className="campus-reveal campus-delay-1 lg:col-span-5">
              <p className="mb-4 text-sm font-extrabold tracking-[0.24em] text-[#3071F2] uppercase">
                Our Campus
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] leading-[1.35]">
                배움과 신앙,
                <br />
                공동체의 성장을 담은 공간
              </h2>

              <div className="w-14 h-1 bg-[#3071F2] mt-6 mb-7 rounded-full" />

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
                <p>
                  하디글로벌스쿨의 캠퍼스는 학생들이 편안하고 안전한 환경에서
                  배움에 집중할 수 있도록 구성되어 있습니다.
                </p>

                <p>
                  교과 학습뿐 아니라 예배, 독서, 교류와 다양한 체험 활동이
                  자연스럽게 이어지도록 각 공간을 활용하고 있습니다.
                </p>

                <p>
                  규모보다 학생 한 사람 한 사람에게 필요한 교육 환경을 세심하게
                  마련하는 것을 중요하게 생각합니다.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#F7F9FC] p-5 border border-slate-100">
                <MapPin className="w-5 h-5 mt-0.5 text-[#3071F2] shrink-0" />

                <div>
                  <p className="text-sm font-bold text-[#122033]">
                    캠퍼스 위치
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    충북 청주시 청원구 율봉로201번길 8-8
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 시설 소개 */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC] border-t border-slate-200">
        <div className="container max-w-7xl px-4">
          <div className="campus-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              Campus Facilities
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              주요 교육 시설
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
              학생들의 학습과 신앙, 휴식과 공동체 활동을 지원하는
              다양한 공간을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className={`campus-reveal campus-delay-${
                    (index % 3) + 1
                  } group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
                >
                  {/* 시설 사진 */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.classList.remove(
                          "hidden"
                        );
                      }}
                    />

                    <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-white text-[#3071F2] shadow-sm flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7" />
                        </div>

                        <p className="text-sm font-bold text-slate-500">
                          {facility.title} 사진
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          추후 실제 사진으로 교체
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 시설 설명 */}
                  <div className="p-7">
                    <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-[#3071F2] uppercase">
                      {facility.subtitle}
                    </p>

                    <h3 className="font-serif text-2xl font-extrabold text-[#122033]">
                      {facility.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {facility.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 방문 안내 */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="container max-w-5xl px-4">
          <div className="campus-reveal campus-delay-2 bg-[#153E75] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#3071F2]/20 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="mb-4 text-sm font-extrabold tracking-[0.22em] text-[#79BAF2] uppercase">
                  Visit Our Campus
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-[1.35]">
                  하디글로벌스쿨을
                  <br className="hidden sm:block" />
                  직접 만나보세요.
                </h2>

                <p className="max-w-2xl mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-200">
                  학교 위치와 방문 관련 안내는 오시는 길 페이지에서
                  확인하실 수 있습니다.
                </p>
              </div>

              <Link href="/contact">
                <Button className="shrink-0 bg-white text-[#153E75] hover:bg-[#F7F9FC] rounded-full px-7 py-6 font-bold shadow-lg">
                  오시는 길 확인
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}