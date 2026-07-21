import Layout from "@/components/Layout";
import { Palette, Music, Sparkles, BookOpen } from "lucide-react";

export default function ArtsEducation() {
  const artsPrograms = [
    {
      title: "1인 1악기 오케스트라 교육",
      desc: "풍부한 감성과 예술적 소양을 기르기 위해 초등부터 전교생이 바이올린, 플루트, 첼로, 비올라 등 1인 1악기 교육을 전문 교사의 지도로 배웁니다.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "정기 음악회 및 예술 페스티벌",
      desc: "매년 가을 전교생이 참여하는 정기 연주회를 통해 하나의 아름다운 하모니를 만드는 협동심과 예술적 성취감을 배웁니다.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "창의 미술 및 공예 창작",
      desc: "다양한 매체를 활용한 미술 창작 활동을 통해 자신의 생각과 감정을 자유롭게 표현하고, 하나님이 주신 예술적 달란트를 발굴합니다.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "연극 및 크리스천 뮤지컬",
      desc: "성경적 메시지를 담은 연극 및 뮤지컬 무대를 학생들이 주도적으로 기획하고 공연하며, 협동심과 표현력을 기릅니다.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent border-b border-border/40 py-16 sm:py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
            Arts & Culture
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            예술 교육
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨은 오케스트라, 미술, 연극 등 다채로운 예체능 교육을 통해 학생들의 감성을 풍요롭게 하고 창의성을 발현하도록 돕습니다.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Arts Programs */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block font-display">
              Creative Programs
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              감성과 창의성의 조화
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {artsPrograms.map((program, idx) => {
              const Icon = program.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-3">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {program.desc}
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
