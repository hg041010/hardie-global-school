import React from "react";
import Layout from "@/components/Layout";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Compass, Leaf, Plane, Trophy } from "lucide-react";

interface ActivityDetail {
  id: string;
  name: string;
  engName: string;
  description: string;
  icon: React.ComponentType<any>;
  bgImage: string;
  color: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

const activityDetails: Record<string, ActivityDetail> = {
  "spring-conference": {
    id: "spring-conference",
    name: "봄 컨퍼런스",
    engName: "Spring Conference",
    description: "새 학기의 방향을 세우고 영어·독해·수학 역량을 집중적으로 강화합니다.",
    icon: Leaf,
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    color: "from-violet-600/70 to-indigo-700/70",
    fullDescription: "봄 컨퍼런스는 새 학기를 시작하며 학생들이 학업 목표와 생활 태도를 정돈하고, 핵심 교과 역량을 집중적으로 다지는 프로그램입니다.",
    features: ["영어 독해 및 어휘 집중 훈련", "수학 기초·심화 학습", "학습 목표 설정", "발표와 소그룹 활동"],
    benefits: ["자기주도 학습 습관 형성", "기초 학업 역량 강화", "새 학기 적응력 향상", "공동체 의식 함양"],
  },
  "fall-conference": {
    id: "fall-conference",
    name: "가을 컨퍼런스",
    engName: "Fall Conference",
    description: "한 학기의 성장을 점검하고 발표·토론·프로젝트 활동으로 자신감을 키웁니다.",
    icon: Compass,
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    color: "from-teal-600/70 to-cyan-700/70",
    fullDescription: "가을 컨퍼런스는 학생들이 학기 중 쌓아온 배움과 성장을 돌아보고, 프로젝트와 발표 활동을 통해 표현력과 협력 역량을 키우는 과정입니다.",
    features: ["프로젝트 발표", "토론과 피드백", "학업 성장 점검", "팀별 협력 활동"],
    benefits: ["발표 자신감 향상", "비판적 사고력 강화", "협력과 소통 능력 개발", "학업 동기 재정비"],
  },
  "vision-trip": {
    id: "vision-trip",
    name: "비전 트립과 체험학습",
    engName: "Vision Trip & Field Learning",
    description: "현장 경험과 탐방을 통해 국제적 시야와 실제적인 배움의 기회를 넓힙니다.",
    icon: Plane,
    bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    color: "from-amber-600/70 to-orange-700/70",
    fullDescription: "비전 트립과 체험학습은 교실에서 배운 내용을 실제 현장과 연결하며 학생들이 더 넓은 세계를 바라보도록 돕는 프로그램입니다.",
    features: ["국내외 탐방 활동", "문화·역사 체험", "진로 관련 현장 학습", "탐방 후 보고서 및 발표"],
    benefits: ["글로벌 시야 확장", "실제적 문제 해결 능력", "진로 탐색 기회", "문화 이해력 향상"],
  },
  rsc: {
    id: "rsc",
    name: "RSC",
    engName: "Regional Student Convention",
    description: "학생들의 재능과 성취를 발표하고 도전하는 대회형 성장 프로그램입니다.",
    icon: Trophy,
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
    color: "from-rose-600/70 to-pink-700/70",
    fullDescription: "RSC는 학생들이 학업, 예술, 발표, 스포츠 등 다양한 영역에서 자신의 재능과 성장을 나누고 도전하는 장입니다.",
    features: ["학업·예술·스포츠 영역 참여", "개인 및 팀 프로젝트", "발표와 공연", "성취 결과 공유"],
    benefits: ["도전 정신 함양", "재능 발견과 계발", "자신감 향상", "건강한 경쟁과 협력 경험"],
  },
};

export default function CreativeExperienceDetail() {
  const [match, params] = useRoute("/creative-experience/:id");

  if (!match) return null;

  const activity = activityDetails[params?.id as string];

  if (!activity) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900">프로그램을 찾을 수 없습니다.</h1>
          <Link href="/curriculum/creative-experience">
            <span className="text-primary hover:text-primary/80 mt-4 inline-block cursor-pointer">돌아가기</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = activity.icon;

  return (
    <Layout>
      <section className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${activity.bgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-slate-950/80" />
        <div className="container relative z-10 max-w-4xl mx-auto px-4">
          <Link href="/curriculum/creative-experience">
            <span className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 mb-6 font-medium transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              창의적 체험학습으로 돌아가기
            </span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl text-amber-300">
              <Icon className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">{activity.engName}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-serif text-white">{activity.name}</h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">{activity.description}</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-16 reveal-element">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif mb-6">프로그램 소개</h2>
            <p className="text-slate-700 text-lg leading-relaxed font-light">{activity.fullDescription}</p>
          </div>

          <div className="mb-16 reveal-element">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif mb-8">프로그램 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activity.features.map((feature) => (
                <div key={feature} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-element">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif mb-8">기대 효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activity.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
