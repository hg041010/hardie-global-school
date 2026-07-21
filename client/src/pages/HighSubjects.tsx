import React from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { BookOpen, Globe, Award, ShieldCheck, Landmark, Heart, Compass, Sparkles } from "lucide-react";

interface SubjectItem {
  id: string;
  name: string;
  engName: string;
  description: string;
  icon: React.ComponentType<any>;
  bgImage: string;
  color: string;
}

const subjects: SubjectItem[] = [
  {
    id: "bible",
    name: "성경과 성경적 세계관",
    engName: "Bible & Christian Worldview",
    description: "하나님의 말씀을 중심에 두고, 세상의 지식을 성경적 진리로 바라보는 법을 가르칩니다.",
    icon: Compass,
    bgImage: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-600/60 to-sky-700/60"
  },
  {
    id: "korean",
    name: "국어 (국어와 문학)",
    engName: "Korean Language & Literature",
    description: "우리말과 글의 아름다움을 깊이 깨닫고, 올바른 의사소통과 논리적 표현 능력을 기릅니다.",
    icon: Award,
    bgImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-600/60 to-orange-600/60"
  },
  {
    id: "english",
    name: "영어 (글로벌 이중언어)",
    engName: "English & Global Communication",
    description: "단순 암기가 아닌, 자연스럽게 모국어처럼 체득하여 전 세계와 소통하는 이중언어 리더로 세웁니다.",
    icon: Globe,
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    color: "from-indigo-600/60 to-violet-600/60"
  },
  {
    id: "math",
    name: "수학 (논리적 사고)",
    engName: "Mathematics & Logic",
    description: "우주에 깃든 하나님의 질서와 규칙을 수학적 논리를 통해 탐구하고, 문제해결력을 키웁니다.",
    icon: Sparkles,
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-600/60 to-cyan-600/60"
  },
  {
    id: "social",
    name: "사회 (역사와 세계사)",
    engName: "Social Studies & History",
    description: "인류의 역사와 사회 속에서 일하시는 하나님의 손길을 깨닫고, 선한 영향력을 끼치는 시민으로 자랍니다.",
    icon: Landmark,
    bgImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-600/60 to-pink-600/60"
  },
  {
    id: "science",
    name: "과학 (창조 질서 탐구)",
    engName: "Science & Creation Order",
    description: "신비로운 대자연과 우주의 창조 질서를 직접 실험하고 탐구하며, 지적 호기심을 발현합니다.",
    icon: ShieldCheck,
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-600/60 to-green-600/60"
  },
  {
    id: "arts",
    name: "음악 및 전인 예술",
    engName: "Music & Performing Arts",
    description: "악기 연주와 예술 활동을 통해 정서적 풍요로움을 누리고, 하나님을 온전히 찬양하는 예배자로 자라납니다.",
    icon: Heart,
    bgImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-600/60 to-fuchsia-600/60"
  }
];

export default function HighSubjects() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/70"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full mb-4 border border-accent/30 font-display">
            High School Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-serif text-white">
            고등 교육 과정
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            대학 진학과 영적 성숙을 동시에 추구하며, 사회에 기여하는 지도자로 양성합니다.
          </p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif">
              고등 핵심 교과 과정
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 mb-3"></div>
            <p className="text-slate-700 max-w-lg mx-auto text-base font-medium">
              각 과목 카드를 클릭하시면 해당 교과의 자세한 교육 목표, 교과 구성 및 특색 프로그램을 확인하실 수 있습니다.
            </p>
          </div>

          {/* Grid Layout - 1 Big Hero on Top, 6 Grid Cards below */}
          <div className="space-y-16">
            {/* Top Big Feature Card (Bible) */}
            {subjects.slice(0, 1).map((subject) => (
              <Link key={subject.id} href={`/curriculum/high/subjects/${subject.id}`}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-[320px] md:h-[400px] mb-16 reveal-element">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${subject.bgImage})` }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${subject.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/20 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-amber-300 group-hover:scale-110 transition-transform">
                        <subject.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
                        {subject.engName}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold font-serif mb-4 group-hover:text-amber-200 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-slate-100 text-sm md:text-base max-w-2xl font-light leading-relaxed mb-6">
                      {subject.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-bold text-amber-300 gap-1.5 group-hover:translate-x-1.5 transition-transform">
                      자세히 보기 <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* 6 Grid Cards below */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.slice(1).map((subject, idx) => (
                <Link key={subject.id} href={`/curriculum/high/subjects/${subject.id}`}>
                  <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-[280px] reveal-element" style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${subject.bgImage})` }}
                    ></div>
                    <div className={`absolute inset-0 bg-gradient-to-b ${subject.color} opacity-75`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/10 to-transparent"></div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-amber-300">
                          <subject.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-amber-300 uppercase">
                          {subject.engName}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-serif mb-2 group-hover:text-amber-200 transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-slate-100 text-xs font-light line-clamp-2 leading-relaxed mb-4">
                        {subject.description}
                      </p>
                      <span className="inline-flex items-center text-[10px] font-bold text-amber-300 gap-1 group-hover:translate-x-1 transition-transform">
                        자세히 보기 <span className="text-xs">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
