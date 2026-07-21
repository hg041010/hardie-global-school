import Layout from "@/components/Layout";
import { BookOpen, Users, Lightbulb, Heart, Target } from "lucide-react";
import { useEffect } from "react";

export default function EducationMethodology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const methodologies = [
    {
      title: "성경중심 교과",
      subtitle: "Integration of Biblical Principles",
      icon: BookOpen,
      description: "모든 교과목 내용이 성경에 기반하고 있습니다.",
      details: [
        "하나님께서 만물의 창조주이시며, 역사의 주관자라는 진리에 입각하여 학습내용이 전개됩니다.",
        "별도로 성경과목이 있지만, 모든 교과목들이 성경의 내용들을 다루고 있습니다.",
        "학생들은 철저한 신본주의 입장에서 각 교과목을 학습하게 됩니다.",
        "수학, 과학, 사회, 역사 등 모든 학문이 하나님의 창조와 섭리 속에서 이해됩니다."
      ]
    },
    {
      title: "개별 학습",
      subtitle: "Individualized Learning",
      icon: Users,
      description: "각 학생의 수준에 맞춘 맞춤형 교육을 제공합니다.",
      details: [
        "먼저, 진단평가를 실시하여 학생이 가장 잘 할 수 있는 수준에서 시작합니다.",
        "전통적 학습은 태어난 년도가 학년으로 직결되지만, S.O.T. 프로그램은 같은 나이의 학생이라도 각기 다른 진도를 학습할 수 있습니다.",
        "교사는 한 번에 한 학생에게만 다가가서, 해당 학생이 자신의 학습역량을 가장 잘 발휘할 수 있도록 도와줍니다.",
        "학생의 강점과 약점을 파악하여 개인별 학습 계획을 수립하고 실행합니다."
      ]
    },
    {
      title: "자기주도 학습",
      subtitle: "Self-Instructional Learning",
      icon: Lightbulb,
      description: "학생이 스스로 답을 찾아가는 학습 방식입니다.",
      details: [
        "학생들이 각 교과목을 학습할 때, 먼저 설명하는 내용을 읽고, 해당 내용에 대해 스스로 답을 찾아가는 방식으로 학습합니다.",
        "학생은 자신이 성취할 수 있는 학습 분량을 Goal Card에 작성한 후 책임을 갖고, 자신이 세운 Goal을 완수해 나갑니다.",
        "학습에 대한 Scoring도 학생 자신이 함으로써 어떤 것을 실수했는지 스스로 깨닫고 정정합니다.",
        "이 과정을 통해 책임감과 함께 정직성을 훈련받게 됩니다."
      ]
    },
    {
      title: "성품훈련",
      subtitle: "Character Building",
      icon: Heart,
      description: "90가지 크리스천 성품이 학습 과정에 통합되어 있습니다.",
      details: [
        "90가지 크리스천 성품이 학습과정 안에 녹아져 있습니다.",
        "캐릭터들이 등장하여 카툰과 스토리가 진행되고, 학생은 해당 내용을 읽으며 성품에 대해 배워갑니다.",
        "성품과 관련된 성경 말씀을 암송하여 마음에 새기도록 합니다.",
        "일상 생활 속에서 배운 성품을 실천하고 적용하는 훈련을 합니다."
      ]
    },
    {
      title: "완전학습",
      subtitle: "Mastery-based Learning",
      icon: Target,
      description: "완전한 이해를 바탕으로 다음 단계로 진행합니다.",
      details: [
        "전통적인 학교에서는 교과목에 대한 이해를 하지 못해도 다음 학년으로 진급하는데 전혀 문제가 되지 않습니다.",
        "하지만, S.O.T. 프로그램은 시험에서 일정 수준의 점수를 획득해야 다음 진도를 진행할 수 있습니다.",
        "Checkup, Self Test, PACE Test를 통해 학습을 강화하고, 완전히 이해할 수 있도록 도와줍니다.",
        "학생이 완전히 숙달할 때까지 반복 학습하고 개별 지도를 제공합니다."
      ]
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-primary/5 border-b border-border/40 py-16 sm:py-24 relative overflow-hidden animate-in">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
            Teaching Methods
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            교육 방법론
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 A.C.E. School of Tomorrow 프로그램을 기반으로 5가지 교육 방법론을 실천합니다.
          </p>
        </div>
        {/* Background shapes */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Methodologies Detail */}
      <section className="py-20 bg-background animate-in">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-12">
            {methodologies.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="bg-background border border-border/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-10 border-b border-border/40">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-serif text-2xl font-bold text-foreground">{method.title}</h2>
                        <p className="text-sm text-secondary font-semibold mt-1">{method.subtitle}</p>
                        <p className="text-sm text-muted-foreground mt-2 font-light">{method.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {method.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2.5" />
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

          {/* About S.O.T */}
          <div className="mt-16 bg-muted/30 p-8 sm:p-12 rounded-3xl border border-border/60">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              S.O.T. 프로그램이란?
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-light mb-4">
              <strong className="text-foreground font-semibold">School of Tomorrow®(SofT) 프로그램</strong>은 미국 A.C.E. Ministries®에서 제작한 K-12 교육 커리큘럼입니다. 
              현재 140여개 국가에서 활용되고 있으며, 미국 교육가관에 인증 받은 커리큘럼입니다.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              <strong className="text-foreground font-semibold">PACE</strong>는 Packet of Accelerated Christian Education의 줄임말로 A.C.E.에서 만든 교재입니다. 
              이 교재는 학생의 개별 진도에 맞춰 자기주도적 학습을 가능하게 하며, 성경적 가치관을 모든 교과에 통합시킵니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
