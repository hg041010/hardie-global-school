import Layout from "@/components/Layout";
import { Heart, ShieldCheck, Award } from "lucide-react";
import { useEffect } from "react";

export default function EducationGoals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const goals = [
    {
      title: "영적 기초 (Spiritual)",
      subtitle: "하나님의 사랑의 마음을 지닌 영성의 사람",
      icon: Heart,
      details: [
        "매일 드리는 예배와 성경 교육을 통해 예수 그리스도를 개인의 구주로 고백합니다.",
        "삶의 모든 영역에서 하나님을 최우선으로 경외하는 신앙심을 기릅니다.",
        "기도와 말씀 묵상을 통해 성숙한 신앙인으로 성장하도록 돕습니다.",
        "하나님의 사랑을 경험하고 그 사랑을 이웃과 나누는 법을 배웁니다."
      ]
    },
    {
      title: "인성 발달 (Character)",
      subtitle: "예수님의 겸손과 온유한 성품을 닮은 인성의 사람",
      icon: ShieldCheck,
      details: [
        "정직, 배려, 섬김, 책임 등 성경적 가치에 기반한 인성 교육을 실천합니다.",
        "이웃을 내 몸과 같이 사랑하고 공동체에 선한 영향력을 발휘하는 리더십을 키웁니다.",
        "90가지 크리스천 성품을 학습 과정 속에서 자연스럽게 습득합니다.",
        "타인을 존중하고 배려하는 따뜻한 마음을 가진 사람으로 성장하도록 지도합니다."
      ]
    },
    {
      title: "지적 탁월성 (Academic)",
      subtitle: "하디 선교사처럼 꿈과 열정을 가지고 선한 일에 준비된 지성의 사람",
      icon: Award,
      details: [
        "단순 주입식 교육을 탈피하여 비판적 사고력과 문제 해결 능력을 기릅니다.",
        "한국어와 영어를 자유롭게 구사하는 이중언어 교육으로 글로벌 경쟁력을 배양합니다.",
        "개별 맞춤형 학습을 통해 각 학생의 잠재력을 최대한 발휘하도록 돕습니다.",
        "창의적 사고와 자기주도 학습 능력을 통해 미래 사회의 인재로 성장하도록 준비합니다."
      ]
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-primary/5 border-b border-border/40 py-16 sm:py-24 relative overflow-hidden animate-in">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
            Educational Goals
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            교육 목표
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨의 3대 교육 목표는 영성, 인성, 지성의 조화로운 발달을 추구합니다.
          </p>
        </div>
        {/* Background shapes */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Goals Detail */}
      <section className="py-20 bg-background animate-in">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-12">
            {goals.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <div key={idx} className="bg-muted/30 p-8 sm:p-12 rounded-3xl border border-border/60 shadow-sm animate-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-bold text-foreground">{goal.title}</h2>
                      <p className="text-sm text-secondary font-semibold mt-1">{goal.subtitle}</p>
                    </div>
                  </div>

                  <div className="border-t border-border/40 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goal.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                          <p className="text-sm text-muted-foreground leading-relaxed font-light">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 sm:p-12 rounded-3xl border border-primary/20">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              궁극적 목표
            </h3>
            <p className="text-base text-foreground leading-relaxed font-light">
              우리의 궁극적 목표는 <strong className="font-semibold text-primary">하나님의 형상대로 지음 받은 아이들을 세상을 치유하고 변화시키는 전인격적인 하나님의 사람으로 키우는 것</strong>입니다. 
              학생들이 단순히 학문적 성취를 넘어, 신앙 위에 세워진 올바른 가치관과 사명감을 가지고 
              미래 사회에서 소금과 빛의 역할을 감당할 수 있는 그리스도인으로 성장하기를 기원합니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
