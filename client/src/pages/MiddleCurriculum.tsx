import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, Lightbulb, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function MiddleCurriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden reveal-element bg-slate-900">
        {/* 헤더 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920" 
            alt="Middle School Curriculum" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/60 to-slate-950/80" />
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl text-white">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase mb-2.5 block font-display">
            Middle School
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            중등 교육과정
          </h1>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full animate-pulse" />
          <p className="text-slate-200 mt-4 font-normal text-base sm:text-lg leading-relaxed">
            학문적 깊이와 인성을 발달시키는 단계 (7~9학년)
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background reveal-element">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">교육 목표</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  중등 단계에서는 학문적 깊이를 심화하고, 기독교 세계관을 다양한 교과에 통합합니다. 영어 몰입식 회화 교육과 창의 융합 프로젝트를 통해 글로벌 리더십을 양성합니다.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-foreground">주요 목표</h3>
                <ul className="space-y-2">
                  {[
                    "기독교 세계관 통합 교육",
                    "학문적 깊이 심화",
                    "영어 의사소통 능력 강화",
                    "창의적 문제 해결 능력 개발"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 border border-secondary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">학년 구성</p>
                    <p className="text-muted-foreground text-xs">7학년 ~ 9학년</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">창의 융합</p>
                    <p className="text-muted-foreground text-xs">프로젝트 기반 학습</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">영어 몰입</p>
                    <p className="text-muted-foreground text-xs">회화 중심 교육</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-20 bg-muted/40 border-y border-border/40 reveal-element">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">교육과정 구성</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "기독교 & 인문",
                items: ["기독교 세계관", "국어 문학", "사회 & 역사", "윤리 & 철학"]
              },
              {
                title: "수학 & 과학",
                items: ["심화 수학", "물리 & 화학", "생물학", "지구과학"]
              },
              {
                title: "영어 & 외국어",
                items: ["영어 몰입 회화", "영어 문학", "제2언어", "문화 이해"]
              },
              {
                title: "예술 & 체육",
                items: ["음악 & 미술", "체육 & 건강", "공연 예술", "스포츠"]
              }
            ].map((subject, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border/40 animate-in fade-in slide-in-from-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="font-serif font-bold text-foreground mb-4">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">특색 프로그램</h2>
          
          <div className="space-y-6">
            {[
              {
                icon: Lightbulb,
                title: "창의 융합 프로젝트",
                description: "다양한 교과를 통합한 프로젝트 기반 학습으로 창의적 사고와 협력 능력을 개발합니다."
              },
              {
                icon: Globe,
                title: "영어 몰입식 회화",
                description: "원어민 교사와의 상호작용을 통해 실생활 영어 의사소통 능력을 강화합니다."
              },
              {
                icon: Zap,
                title: "진로 탐색 프로그램",
                description: "다양한 직업 체험과 멘토링을 통해 학생의 적성과 꿈을 발견하도록 돕습니다."
              },
              {
                icon: BookOpen,
                title: "기독교 세계관 통합",
                description: "모든 교과에 성경적 가치를 녹여내어 올바른 학문관을 형성합니다."
              }
            ].map((program, idx) => {
              const Icon = program.icon;
              return (
                <div key={idx} className="flex gap-6 animate-in fade-in slide-in-from-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{program.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-muted/40 border-t border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/curriculum/elementary">
              <div className="bg-background p-6 rounded-2xl border border-border/40 hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-secondary font-semibold mb-2">← 이전 단계</p>
                <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">초등 교육과정</h3>
              </div>
            </Link>
            <Link href="/curriculum">
              <div className="bg-background p-6 rounded-2xl border border-border/40 hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-secondary font-semibold mb-2">전체 보기</p>
                <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">교육과정 전체</h3>
              </div>
            </Link>
            <Link href="/curriculum/high">
              <div className="bg-background p-6 rounded-2xl border border-border/40 hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-secondary font-semibold mb-2">다음 단계 →</p>
                <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">고등 교육과정</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
