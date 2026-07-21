import Layout from "@/components/Layout";
import { Heart, Compass, Shield, Award } from "lucide-react";
import { useEffect } from "react";

export default function SpiritualLife() {
  const activities = [
    {
      title: "매일 아침 예배와 큐티(QT)",
      desc: "하루의 첫 시간을 하나님께 찬양과 말씀으로 드립니다. 모든 학생과 교사가 함께 모여 삶의 예배자로 결단하고, 학급별 큐티 나눔을 통해 일상 속에서 말씀을 묵상하는 훈련을 합니다.",
      image: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=600",
      icon: Heart
    },
    {
      title: "정기 영성 수련회 및 아웃리치",
      desc: "매 학기 영성 수련회를 통해 신앙을 점검하고 뜨겁게 기도하는 시간을 가집니다. 방학 기간에는 국내외 미자립 교회와 선교지를 방문하여 복음을 전하고 사랑을 실천하는 아웃리치를 진행합니다.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
      icon: Compass
    }
  ];

  const rules = [
    {
      title: "디지털 디톡스 (No Smartphone)",
      desc: "등교 시 스마트폰을 반납하고, 일과 중에는 오롯이 배움과 친구들과의 대화에 집중합니다.",
      icon: Shield
    },
    {
      title: "존중과 섬김의 언어 (Respectful Language)",
      desc: "비방이나 비속어가 아닌 서로를 축복하고 격려하는 긍정의 언어 사용을 생활화합니다.",
      icon: Heart
    },
    {
      title: "친환경 그린 라이프 (Eco-friendly)",
      desc: "하나님이 만드신 지구를 보존하기 위해 일회용품 사용을 지양하고 쓰레기 분리배출을 실천합니다.",
      icon: Award
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent border-b border-border/40 py-16 sm:py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
            Spiritual Life
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            신앙 활동
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 매일의 예배와 신앙 훈련을 통해 하나님을 사랑하고 이웃을 섬기는 성숙한 그리스도인을 길러냅니다.
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
              Faith & Worship
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              말씀과 기도의 훈련
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

      {/* Rules */}
      <section className="py-20 bg-muted/40 border-t border-border/40">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
              Christian Lifestyle
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              공동체 생활 문화
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-3">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{rule.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
