import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, Target, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function HighCurriculum() {
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
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920" 
            alt="High School Curriculum" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/60 to-slate-950/80" />
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl text-white">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase mb-2.5 block font-display">
            High School
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            고등 교육과정
          </h1>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full animate-pulse" />
          <p className="text-slate-200 mt-4 font-normal text-base sm:text-lg leading-relaxed">
            대학 진학과 소명을 실현하는 단계 (10~12학년)
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
                  고등 단계에서는 대학 진학을 위한 심화 학업과 함께, 학생들의 소명을 발견하고 실현하도록 돕습니다. 국내 및 해외 대학 진학을 위한 맞춤형 지도와 포트폴리오 작성을 지원합니다.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-foreground">주요 목표</h3>
                <ul className="space-y-2">
                  {[
                    "대학 진학 준비 (국내/해외)",
                    "심화 학업 능력 개발",
                    "개인 포트폴리오 구축",
                    "소명 발견 및 리더십 양성"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 border border-accent/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">학년 구성</p>
                    <p className="text-muted-foreground text-xs">10학년 ~ 12학년</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">진학 준비</p>
                    <p className="text-muted-foreground text-xs">국내/해외 대학</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">1:1 상담</p>
                    <p className="text-muted-foreground text-xs">진로 지도</p>
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
                items: ["기독교 철학", "한국 문학", "세계사", "윤리와 소명"]
              },
              {
                title: "수학 & 과학",
                items: ["고급 수학", "물리학", "화학", "생명과학"]
              },
              {
                title: "영어 & 외국어",
                items: ["AP 영어", "영어 문학", "제2언어", "국제 이해"]
              },
              {
                title: "선택 과목",
                items: ["예술 & 음악", "사회과학", "기술", "체육"]
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
                icon: Target,
                title: "학생부종합전형 대비",
                description: "국내 대학 입시를 위한 학생부 관리, 자소서 작성, 면접 준비를 체계적으로 지도합니다."
              },
              {
                icon: Globe,
                title: "해외 대학 진학 준비",
                description: "SAT/ACT 준비, 에세이 작성, 대학 선택 상담 등 해외 진학을 위한 맞춤형 지도를 제공합니다."
              },
              {
                icon: Award,
                title: "포트폴리오 개발",
                description: "학생의 학업, 활동, 프로젝트를 종합한 개인 포트폴리오를 구축하여 대학 입시에 활용합니다."
              },
              {
                icon: BookOpen,
                title: "1:1 진로 상담",
                description: "학생의 적성, 관심, 꿈을 바탕으로 개인 맞춤형 진로 지도를 제공합니다."
              }
            ].map((program, idx) => {
              const Icon = program.icon;
              return (
                <div key={idx} className="flex gap-6 animate-in fade-in slide-in-from-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
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
            <Link href="/curriculum/middle">
              <div className="bg-background p-6 rounded-2xl border border-border/40 hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-secondary font-semibold mb-2">← 이전 단계</p>
                <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">중등 교육과정</h3>
              </div>
            </Link>
            <Link href="/curriculum">
              <div className="bg-background p-6 rounded-2xl border border-border/40 hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-secondary font-semibold mb-2">전체 보기</p>
                <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">교육과정 전체</h3>
              </div>
            </Link>
            <Link href="/admission">
              <div className="bg-gradient-to-r from-accent to-accent/80 text-white p-6 rounded-2xl hover:shadow-lg transition-all cursor-pointer group">
                <p className="text-xs text-white/80 font-semibold mb-2">입학 상담</p>
                <h3 className="font-serif font-bold group-hover:translate-x-1 transition-transform">상담 신청하기</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
