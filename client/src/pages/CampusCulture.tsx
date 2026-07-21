import Layout from "@/components/Layout";
import { Sparkles, Heart, Compass, Shield } from "lucide-react";

export default function CampusCulture() {
  const cultures = [
    {
      title: "영성 수련회 및 야외 캠프",
      desc: "매 학기 시작 시 전교생이 참여하는 수련회와 캠프를 통해 공동체 결속력을 다지고, 서로를 깊이 이해하며 배려하는 공동체 훈련을 가집니다.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "지역 사회 봉사 및 선교 아웃리치",
      desc: "하나님이 주신 이웃 사랑의 마음을 몸소 실천하기 위해, 정기적으로 지역 사회 요양원이나 선교지를 방문하여 재능 기부와 따뜻한 나눔을 진행합니다.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "패밀리 멘토링 프로그램",
      desc: "선후배가 한 패밀리(Family)로 매칭되어 일상적인 학교생활을 서로 격려하고, 선배가 후배의 멘토가 되어 정서적인 안정감과 공동체 적응을 돕습니다.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "체육 대회 및 레크리에이션",
      desc: "공동체 모두가 함께 참여하는 신나는 체육 대회와 레크리에이션을 통해 협동심을 기르고, 건강한 에너지를 발산하며 잊지 못할 추억을 만듭니다.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent border-b border-border/40 py-16 sm:py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
            Campus Culture
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            캠퍼스 문화
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 사랑과 격려, 나눔이 일상화된 따뜻하고 건강한 학교 문화를 만들어 나갑니다.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Campus Culture */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
              Warm Community
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              서로 사랑하고 배려하는 동행
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {cultures.map((culture, idx) => {
              const Icon = culture.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={culture.image} 
                      alt={culture.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-3">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {culture.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {culture.desc}
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
