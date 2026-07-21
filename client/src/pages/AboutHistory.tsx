import Layout from "@/components/Layout";
import { CalendarDays, Sparkles, School, Users, Globe2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutHistory() {
  const timeline = [
    {
      year: "2021",
      title: "하디글로벌스쿨의 시작",
      desc: "성경적 가치관과 글로벌 교육을 바탕으로 다음 세대를 세우기 위한 하디글로벌스쿨의 교육 여정이 시작되었습니다.",
      icon: Sparkles,
    },
    {
      year: "2022",
      title: "기독교 대안교육 기반 확립",
      desc: "말씀과 기도를 중심으로 한 학교 문화와 학생 개인의 성장을 돕는 교육 체계를 세워가기 시작했습니다.",
      icon: School,
    },
    {
      year: "2023",
      title: "A.C.E. 교육과정 운영 강화",
      desc: "개별 진도 관리와 자기주도 학습을 중심으로 학생의 수준과 속도에 맞춘 맞춤형 교육을 확장했습니다.",
      icon: CalendarDays,
    },
    {
      year: "2024",
      title: "공동체 중심 교육 성장",
      desc: "예배, 학습, 동아리, 체험 활동을 통해 학생들이 신앙과 인성, 실력을 함께 키워갈 수 있는 학교 문화를 넓혀갔습니다.",
      icon: Users,
    },
    {
      year: "현재",
      title: "글로벌 크리스천 리더 양성",
      desc: "하디글로벌스쿨은 학생들이 하나님이 주신 소명과 달란트를 발견하고 세상 속에서 선한 영향력을 발휘하도록 돕고 있습니다.",
      icon: Globe2,
    },
  ];

  return (
    <Layout>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 시작과 역사"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl text-center text-white">
          <p className="text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase mb-5">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            시작과 역사
          </h1>
          <div className="w-16 h-1.5 bg-[#3071F2] mx-auto mt-6 rounded-full" />
          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            하디글로벌스쿨이 걸어온 교육의 여정과 앞으로 나아갈 방향을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase mb-4">
              History Timeline
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] mb-5">
              믿음으로 시작하여 비전으로 자라가는 학교
            </h2>
            <p className="text-slate-600 leading-8 text-[17px]">
              하디글로벌스쿨은 기독교 교육의 본질을 지키며, 학생 한 사람 한 사람이
              하나님 안에서 성장하도록 돕는 교육 공동체로 세워져 왔습니다.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <div
                      className={`ml-16 md:ml-0 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                        <p className="text-[#3071F2] text-sm font-extrabold tracking-[0.2em] mb-3">
                          {item.year}
                        </p>
                        <h3 className="font-serif text-2xl font-extrabold text-[#122033] mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-8">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#153E75] text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-sm font-extrabold tracking-[0.22em] text-[#3071F2] uppercase mb-3">
                Next Vision
              </p>
              <h3 className="font-serif text-3xl font-extrabold text-[#122033] mb-4">
                앞으로의 하디글로벌스쿨
              </h3>
              <p className="text-slate-600 leading-8 max-w-2xl">
                하디글로벌스쿨은 앞으로도 성경적 세계관 위에 세워진 교육을 통해
                학생들이 믿음과 실력을 갖춘 글로벌 크리스천 리더로 성장하도록 돕겠습니다.
              </p>
            </div>

            <Link href="/about/education">
              <Button className="bg-[#3071F2] hover:bg-[#2E83F2] text-white rounded-full px-7 py-5 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                하디의 교육 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}