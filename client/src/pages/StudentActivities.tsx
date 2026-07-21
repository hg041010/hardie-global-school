import Layout from "@/components/Layout";
import { Users, Compass, Shield, Award } from "lucide-react";

export default function StudentActivities() {
  const activities = [
    {
      title: "학생 자치회 활동",
      desc: "학생들이 주도적으로 자치회를 구성하여 학교 행사를 직접 기획하고 운영합니다. 이를 통해 소통과 협력, 책임감을 갖춘 리더십을 경험합니다.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "창의적 학술 및 연구 동아리",
      desc: "영어 토론, 과학 탐구, 글로벌 시사 포럼 등 학생들이 관심 있는 주제를 깊이 있게 탐구하고 발표하는 학술 동아리가 활발히 운영됩니다.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "스포츠 및 체력 단련",
      desc: "농구, 축구, 배드민턴 등 건강한 체력을 기르고 협동심을 키우는 체육 소그룹 및 클럽 활동을 통해 전인적인 성장을 돕습니다.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "미디어 및 코딩 창작 동아리",
      desc: "유튜브 영상 제작, 학교 소식지 발간, 파이썬 코딩 등 디지털 미디어 시대를 선도할 실용적인 역량을 키우는 창작 동아리입니다.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent border-b border-border/40 py-16 sm:py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
            Student Leadership
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            학생 자치
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 학생들이 주도적으로 협력하고 배움을 확장할 수 있도록 다채로운 동아리와 자치 활동을 지원합니다.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Activities */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
              Leadership & Cooperation
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              스스로 생각하고 함께 성장하는 배움
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={act.image} 
                      alt={act.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-3">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {act.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {act.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
