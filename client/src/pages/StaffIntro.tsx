import { useEffect } from "react";
import Layout from "@/components/Layout";
import { GraduationCap, Users, BookOpen } from "lucide-react";

interface StaffMember {
  name: string;
  role: string;
  subject: string;
  image: string;
}

export default function StaffIntro() {
  useEffect(() => {
    const elements = document.querySelectorAll(".staff-reveal");

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

  /*
   * 나중에 실제 교직원 정보가 확정되면
   * name, role, subject, image만 바꾸면 됩니다.
   */
  const teachers: StaffMember[] = [
    {
      name: "교직원 01",
      role: "영어 교사",
      subject: "English",
      image: "/images/staff01.jpg",
    },
    {
      name: "교직원 02",
      role: "수학 교사",
      subject: "Mathematics",
      image: "/images/staff02.jpg",
    },
    {
      name: "교직원 03",
      role: "국어 교사",
      subject: "Korean",
      image: "/images/staff03.jpg",
    },
    {
      name: "교직원 04",
      role: "과학 교사",
      subject: "Science",
      image: "/images/staff04.jpg",
    },
    {
      name: "교직원 05",
      role: "사회 교사",
      subject: "Social Studies",
      image: "/images/staff05.jpg",
    },
    {
      name: "교직원 06",
      role: "성경 교사",
      subject: "Bible",
      image: "/images/staff06.jpg",
    },
    {
      name: "교직원 07",
      role: "예체능 교사",
      subject: "Arts & P.E.",
      image: "/images/staff07.jpg",
    },
    {
      name: "교직원 08",
      role: "생활 지도 교사",
      subject: "Student Guidance",
      image: "/images/staff08.jpg",
    },
    {
      name: "교직원 09",
      role: "행정 담당",
      subject: "Administration",
      image: "/images/staff09.jpg",
    },
    {
      name: "교직원 10",
      role: "교육 지원",
      subject: "Academic Support",
      image: "/images/staff10.jpg",
    },
  ];

  return (
    <Layout>
      <style>{`
        .staff-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .staff-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .staff-delay-1 {
          transition-delay: 0.1s;
        }

        .staff-delay-2 {
          transition-delay: 0.2s;
        }

        .staff-delay-3 {
          transition-delay: 0.3s;
        }

        .staff-delay-4 {
          transition-delay: 0.4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .staff-reveal {
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
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 교직원 소개"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="mb-5 text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase">
            Faculty & Staff
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            교직원 소개
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            학생 한 사람 한 사람의 가능성을 믿고
            <br className="hidden sm:block" />
            사랑과 책임으로 함께 성장하는 교육 공동체입니다.
          </p>
        </div>
      </section>

      {/* 교장 소개 */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container max-w-6xl px-4">
          <div className="staff-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              School Leadership
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              학교를 이끄는 교육 리더
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
              성경적 교육 철학을 바탕으로 학생들의 신앙과 배움,
              성장을 함께 이끌어갑니다.
            </p>
          </div>

          <div className="staff-reveal staff-delay-1 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-9 md:gap-12 items-center bg-[#F7F9FC] rounded-3xl p-6 sm:p-9 border border-slate-100 shadow-sm">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
                <img
                  src="/images/principal.jpg"
                  alt="최복식 교장"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <p className="text-sm font-extrabold tracking-[0.22em] text-[#3071F2] uppercase mb-3">
                  Principal
                </p>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
                  최복식
                </h3>

                <p className="mt-2 text-base font-semibold text-slate-500">
                  하디글로벌스쿨 교장
                </p>

                <blockquote className="mt-7 font-serif text-xl sm:text-2xl font-bold leading-9 text-[#122033]">
                  “학생 한 사람 한 사람이 하나님께 받은 소명과 가능성을
                  발견하도록 함께 동행합니다.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교직원 목록 시작 */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC] border-t border-slate-200">
        <div className="container max-w-7xl px-4">
          <div className="staff-reveal text-center max-w-3xl mx-auto mb-14">
            <div className="w-12 h-12 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center mx-auto mb-5">
              <Users className="w-6 h-6" />
            </div>

            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              Teachers & Staff
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              함께 가르치고 함께 성장하는 사람들
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-8 text-slate-600">
              각자의 전문성과 사랑으로 학생들의 학교생활과 배움을
              세심하게 지원합니다.
            </p>
          </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {teachers.map((teacher, index) => (
              <article
                key={`${teacher.name}-${index}`}
                className={`staff-reveal staff-delay-${
                  (index % 4) + 1
                } group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* 교직원 사진 */}
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name} ${teacher.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />

                  {/* 사진이 아직 없을 때 표시되는 임시 영역 */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white text-[#3071F2] shadow-sm flex items-center justify-center mb-4">
                        <BookOpen className="w-7 h-7" />
                      </div>

                      <p className="text-sm font-bold text-slate-500">
                        교직원 사진
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        추후 실제 사진으로 교체
                      </p>
                    </div>
                  </div>
                </div>

                {/* 교직원 정보 */}
                <div className="p-7 text-center">
                  <p className="text-xs font-extrabold tracking-[0.2em] text-[#3071F2] uppercase mb-3">
                    {teacher.subject}
                  </p>

                  <h3 className="font-serif text-2xl font-extrabold text-[#122033]">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {teacher.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 안내 */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="container max-w-5xl px-4">
          <div className="staff-reveal staff-delay-2 bg-[#153E75] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#3071F2]/20 blur-3xl" />

            <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-[#79BAF2]/10 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-4 text-sm font-extrabold tracking-[0.22em] text-[#79BAF2] uppercase">
                One Community
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-[1.35]">
                학생 한 사람 한 사람을 존중하며
                <br className="hidden sm:block" />
                함께 성장하는 교육 공동체
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-[16px] sm:text-[17px] leading-8 text-slate-200">
                하디글로벌스쿨의 모든 교직원은 학생들이 하나님께 받은
                가능성과 달란트를 발견하고, 믿음과 실력을 갖춘 사람으로
                성장하도록 사랑과 책임으로 함께 동행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}