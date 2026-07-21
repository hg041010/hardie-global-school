import Layout from "@/components/Layout";
import { BookOpen, Globe, Music, Users, Shield, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Curriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTrack, setSelectedTrack] = useState<'domestic' | 'international'>('domestic');

  // Curriculum data by level and track
  const curriculumData = {
    domestic: [
      {
        level: "초등 교육과정",
        grade: "1~6학년",
        icon: Lightbulb,
        overview: "신앙적 기초와 학습 습관 형성",
        subjects: ["국어", "수학", "영어", "과학", "사회", "성경", "음악", "미술", "체육"],
        features: [
          "기독교 세계관 기초 형성",
          "자기주도적 학습 습관 개발",
          "1인 1악기 교육",
          "한영 이중언어 기초",
          "체험 중심 학습"
        ],
        pathway: "국내 중학교 진학 준비"
      },
      {
        level: "중등 교육과정",
        grade: "7~9학년",
        icon: BookOpen,
        overview: "학문적 깊이와 인성 발달",
        subjects: ["국어", "영어", "수학", "과학", "사회", "기술", "성경", "음악", "미술", "체육"],
        features: [
          "기독교 세계관 통합 교육",
          "영어 몰입식 회화 교육",
          "창의 융합 프로젝트",
          "진로 탐색 시작",
          "토론 및 발표 능력 강화"
        ],
        pathway: "국내 고등학교 진학 준비"
      },
      {
        level: "고등 교육과정",
        grade: "10~12학년",
        icon: Globe,
        overview: "대학 진학과 소명 실현",
        subjects: ["국어", "영어", "수학", "과학", "사회", "한국사", "성경", "음악", "미술", "체육"],
        features: [
          "학생부종합전형 대비",
          "심화 학업 능력 개발",
          "포트폴리오 작성",
          "1:1 진로 상담",
          "사회봉사 및 소명 프로젝트"
        ],
        pathway: "국내 명문대 진학"
      }
    ],
    international: [
      {
        level: "초등 교육과정",
        grade: "1~6학년",
        icon: Lightbulb,
        overview: "영어 기초와 글로벌 마인드셋",
        subjects: ["English", "Math", "Science", "Social Studies", "Bible", "Music", "Art", "PE", "Korean"],
        features: [
          "영어 몰입식 교육 (80%)",
          "국제 표준 커리큘럼",
          "한국어 문화 교육",
          "1인 1악기 프로그램",
          "국제 학생 커뮤니티"
        ],
        pathway: "국제 중학교 진학 준비"
      },
      {
        level: "중등 교육과정",
        grade: "7~9학년",
        icon: BookOpen,
        overview: "AP 기초 및 글로벌 역량",
        subjects: ["English", "Math", "Science", "History", "Bible", "Korean", "Art", "Music", "PE"],
        features: [
          "AP 과정 기초 (Pre-AP)",
          "영어 학술 능력 강화",
          "국제 프로젝트 참여",
          "해외 문화 교류",
          "TOEFL/IELTS 준비"
        ],
        pathway: "미국/영국/캐나다 고등학교 진학"
      },
      {
        level: "고등 교육과정",
        grade: "10~12학년",
        icon: Globe,
        overview: "AP/IB 심화 및 대학 입시",
        subjects: ["AP English", "AP Math", "AP Science", "AP History", "Bible", "Korean", "Electives"],
        features: [
          "AP 과정 심화 (15개 과목)",
          "SAT/ACT 준비",
          "대학 진학 상담",
          "해외 대학 입시 포트폴리오",
          "글로벌 리더십 프로그램"
        ],
        pathway: "미국 Ivy League 및 세계 명문대 진학"
      }
    ]
  };

  const currentData = curriculumData[selectedTrack];

  const features = [
    {
      title: "이중언어 몰입 교육 (Bilingual)",
      desc: "영어와 한국어를 공용어로 사용하여 글로벌 소통 능력을 일상화합니다.",
      icon: Globe
    },
    {
      title: "기독교 세계관 통합 (Christian Integration)",
      desc: "모든 교과 과정에 성경적 가치를 녹여내어 올바른 시각으로 학문을 바라봅니다.",
      icon: Shield
    },
    {
      title: "예술 및 전인 교육 (Arts & Character)",
      desc: "오케스트라, 미술, 스포츠 등 예체능 교육으로 정서와 체력을 조화롭게 기릅니다.",
      icon: Music
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-primary/5 border-b border-border/40 py-16 sm:py-24 relative overflow-hidden animate-in">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
            Academic Programs
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            교육과정
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 국내 진학과 해외 진학 두 가지 트랙으로 각 학생의 꿈을 실현시킵니다.
          </p>
        </div>
        {/* Background shapes */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Track Selection */}
      <section className="py-12 bg-background border-b border-border/40">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedTrack('domestic')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                selectedTrack === 'domestic'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              국내 진학 트랙
            </button>
            <button
              onClick={() => setSelectedTrack('international')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                selectedTrack === 'international'
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Globe className="w-5 h-5" />
              해외 진학 트랙
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum by Levels - Card Layout */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
              Grade Level Programs
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              단계별 맞춤 교육 프로그램
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentData.map((level, idx) => {
              const Icon = level.icon;
              return (
                <div
                  key={idx}
                  className="bg-background border border-border/60 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom flex flex-col"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Header */}
                  <div className={`p-6 sm:p-8 ${selectedTrack === 'domestic' ? 'bg-gradient-to-r from-primary to-primary/80' : 'bg-gradient-to-r from-secondary to-secondary/80'} text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-1">{level.level}</h3>
                    <p className="text-white/90 text-sm font-light">{level.grade}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6">
                    {/* Overview */}
                    <div>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {level.overview}
                      </p>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h4 className="font-serif text-sm font-bold text-foreground mb-3">주요 교과목</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((subject, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <h4 className="font-serif text-sm font-bold text-foreground mb-3">교육 특징</h4>
                      <ul className="space-y-2">
                        {level.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pathway */}
                    <div className="border-t border-border/40 pt-4 mt-auto">
                      <p className="text-xs font-semibold text-secondary mb-2">진학 경로</p>
                      <p className="text-sm text-foreground font-medium">{level.pathway}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Features Overview */}
      <section className="py-20 bg-muted/40 border-y border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
              Our Strengths
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              하디 교육과정의 차별성
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-background p-8 rounded-2xl border border-border/40 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
              Track Comparison
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              국내 vs 해외 진학 트랙 비교
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/60 shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border/40">
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">구분</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-primary">국내 진학 트랙</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-secondary">해외 진학 트랙</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">교육 언어</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">한국어 중심 (영어 병행)</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">영어 중심 (한국어 병행)</td>
                </tr>
                <tr className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">교육 과정</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">국내 표준 교육과정</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">AP/IB 국제 표준 과정</td>
                </tr>
                <tr className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">입시 준비</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">수능, 학생부종합전형</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">SAT/ACT, 해외 대학 입시</td>
                </tr>
                <tr className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">진학 대학</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">국내 명문대 (서울대, 연대, 고대 등)</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">미국 Ivy League, 영국 Russell Group</td>
                </tr>
                <tr className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">졸업 자격</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">고등학교 졸업장</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">고등학교 졸업장 + 국제 자격증</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white shadow-lg shadow-primary/20">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              자녀의 꿈을 함께 이루세요
            </h2>
            <p className="text-lg text-white/90 mb-8 font-light">
              국내 진학과 해외 진학, 두 가지 경로 모두 준비된 하디글로벌스쿨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-base font-medium flex items-center gap-2 group transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]">
                  입학 상담 신청 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button className="bg-white/20 text-white hover:bg-white/30 rounded-full px-10 py-6 text-base font-medium backdrop-blur-sm border border-white/30 transition-all duration-300">
                  자세히 알아보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
