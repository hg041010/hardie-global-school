import Layout from "@/components/Layout";
import {
  BookOpen,
  Globe2,
  UserCheck,
  Target,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HardieEducation() {
  const educationFeatures = [
    {
      title: "성경 중심 교육",
      subtitle: "Biblical Worldview",
      desc: "모든 배움의 중심에 하나님의 말씀을 두고, 학생들이 삶의 모든 영역에서 성경적 가치관으로 생각하고 선택하도록 돕습니다.",
      icon: BookOpen,
    },
    {
      title: "A.C.E. 프로그램",
      subtitle: "Individualized Curriculum",
      desc: "학생의 수준과 속도에 맞춰 학습 목표를 세우고, 자기주도적으로 진도를 관리하며 책임감 있게 성장하도록 지도합니다.",
      icon: Target,
    },
    {
      title: "1:1 맞춤형 학습",
      subtitle: "Personalized Learning",
      desc: "학생마다 다른 강점과 필요를 세밀하게 살피며, 각자의 진도와 이해도에 맞춘 개별 지도를 제공합니다.",
      icon: UserCheck,
    },
    {
      title: "이중언어 교육",
      subtitle: "Bilingual Education",
      desc: "한국어와 영어를 함께 사용하는 교육 환경을 통해 글로벌 소통 능력과 국제적 감각을 키워갑니다.",
      icon: Globe2,
    },
    {
      title: "전인적 성품 교육",
      subtitle: "Christian Character",
      desc: "지식뿐 아니라 예배, 공동체 생활, 섬김과 책임을 통해 예수님의 성품을 닮아가는 균형 잡힌 인재를 양성합니다.",
      icon: HeartHandshake,
    },
  ];

  return (
    <Layout>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 하디의 교육"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl text-center text-white">
          <p className="text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase mb-5">
            Hardie Education
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            하디의 교육
          </h1>
          <div className="w-16 h-1.5 bg-[#3071F2] mx-auto mt-6 rounded-full" />
          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            학생 한 사람 한 사람을 하나님의 방법으로 세우는,
            하디글로벌스쿨의 교육 철학과 방법을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase mb-4">
              Educational Features
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] mb-5">
              믿음과 실력을 함께 키우는 교육
            </h2>
            <p className="text-slate-600 leading-8 text-[17px]">
              하디글로벌스쿨은 성경적 세계관, 자기주도 학습, 이중언어 교육,
              전인적 성품 교육을 통해 학생들이 세상 속에서 선한 영향력을
              발휘하는 크리스천 리더로 성장하도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {educationFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    index === 4 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-xs font-extrabold tracking-[0.2em] text-[#3071F2] uppercase mb-2">
                        {item.subtitle}
                      </p>
                      <h3 className="font-serif text-2xl font-extrabold text-[#122033] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-8 text-[16px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm aspect-[4/3] flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-sm font-bold text-slate-500 mb-2">사진 영역</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    추후 수업 사진, 학생 활동 사진, 또는 학교 전경 사진으로 교체
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#153E75] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#3071F2]/20 rounded-full blur-3xl translate-x-20 -translate-y-20" />

                <div className="relative z-10">
                  <p className="text-sm font-extrabold tracking-[0.22em] text-[#79BAF2] uppercase mb-4">
                    Our Educational Promise
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold mb-6">
                    학생은 모두 다릅니다.
                    <br />
                    그래서 교육도 달라야 합니다.
                  </h3>
                  <p className="text-slate-200 leading-8 text-[17px] mb-8">
                    하디글로벌스쿨은 한 학생의 속도와 가능성을 존중합니다.
                    단순히 같은 내용을 같은 속도로 배우는 것이 아니라, 학생이
                    이해하고 성장할 수 있는 방식으로 끝까지 동행합니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                    {[
                      "성경적 세계관 중심 교육",
                      "개별 진도와 맞춤형 지도",
                      "A.C.E. 기반 자기주도 학습",
                      "글로벌 소통을 위한 이중언어 교육",
                    ].map((text) => (
                      <div key={text} className="flex items-center gap-2.5 text-sm text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#79BAF2] shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/curriculum">
                    <Button className="bg-white text-[#153E75] hover:bg-[#F7F9FC] rounded-full px-7 py-5 font-bold shadow-lg">
                      교육과정 보러가기 <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}