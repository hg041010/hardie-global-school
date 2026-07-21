import Layout from "@/components/Layout";
import { Eye, Target, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutVision() {
  return (
    <Layout>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 비전과 사명"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl text-center text-white">
          <p className="text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase mb-5">
            Vision & Mission
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            비전과 사명
          </h1>
          <div className="w-16 h-1.5 bg-[#3071F2] mx-auto mt-6 rounded-full" />
          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            “일어나라 빛을 발하라”는 말씀 위에 세워진 하디글로벌스쿨의
            교육 방향과 사명을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center mb-7">
                <Eye className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#3071F2] uppercase mb-3">
                Vision
              </p>
              <h2 className="font-serif text-3xl font-extrabold text-[#122033] mb-6">
                Arise, Shine!
              </h2>
              <p className="text-slate-700 leading-8 text-[17px]">
                하디글로벌스쿨은 성경적인 교육을 바탕으로 미래 사회에 필요한
                창의적인 지식과 경험을 쌓아, 소금과 빛처럼 세상과 이웃에 선한
                영향력을 끼치며 사람을 사랑하고 공감하는 그리스도인을 키웁니다.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-[#79BAF2]/20 text-[#153E75] flex items-center justify-center mb-7">
                <Target className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#3071F2] uppercase mb-3">
                Mission
              </p>
              <h2 className="font-serif text-3xl font-extrabold text-[#122033] mb-6">
                크리스천 리더 양성
              </h2>
              <p className="text-slate-700 leading-8 text-[17px]">
                말씀과 기도를 통해 기독교 가치관을 확립하고, 이중언어 교육과
                1:1 맞춤형 지도를 통해 글로벌 소통 능력을 함양하며, 예수님의
                성품을 닮은 균형 잡힌 크리스천 리더를 기르는 것을 사명으로 합니다.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#153E75] rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#3071F2]/20 rounded-full blur-3xl translate-x-20 -translate-y-20" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-6 h-6 text-[#79BAF2]" />
                <p className="text-sm font-bold tracking-[0.22em] text-[#79BAF2] uppercase">
                  Educational Direction
                </p>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold mb-6">
                말씀 위에 세워진 지성과 성품의 교육
              </h3>
              <p className="text-slate-200 leading-8 text-[17px]">
                하디글로벌스쿨은 학생들이 지식을 배우는 것을 넘어, 하나님이 주신
                소명과 달란트를 발견하고 세상 속에서 선한 영향력을 발휘하는 삶을
                준비하도록 돕습니다.
              </p>

              <div className="mt-9">
                <Link href="/about/education">
                  <Button className="bg-white text-[#153E75] hover:bg-[#F7F9FC] rounded-full px-7 py-5 font-bold">
                    하디의 교육 보기 <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}