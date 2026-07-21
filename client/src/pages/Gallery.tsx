import { useState } from "react";
import Layout from "@/components/Layout";
import { Eye, X } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["전체", "예배", "학술", "동아리", "행사"];

  const galleryItems = [
    {
      title: "봄 학기 야외 예배 및 찬양",
      category: "예배",
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=800",
      desc: "푸르른 자연 속에서 창조주 하나님을 찬양하며 영성을 다지는 봄 학기 야외 채플 시간입니다."
    },
    {
      title: "글로벌 모의 UN 토론 대회",
      category: "학술",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      desc: "세계적 이슈에 대해 영어로 토론하며 국제적 시각과 리더십 역량을 기르는 모의 UN 현장입니다."
    },
    {
      title: "창의 로봇 과학 동아리 발표회",
      category: "동아리",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      desc: "학생들이 스스로 설계하고 프로그래밍한 로봇을 시연하고 작동 원리를 설명하는 창의 탐구 시간입니다."
    },
    {
      title: "오케스트라 가을 정기 연주회",
      category: "행사",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800",
      desc: "전교생이 참여하는 오케스트라가 가을날 아름다운 성가와 클래식 선율을 선사합니다."
    },
    {
      title: "매일 아침 학급 큐티(QT) 시간",
      category: "예배",
      image: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=800",
      desc: "아침 등교 후 말씀 묵상과 기도로 하루를 준비하는 경건한 하디글로벌스쿨의 아침 풍경입니다."
    },
    {
      title: "과학 실험 협동 프로젝트",
      category: "학술",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
      desc: "이론으로 배운 과학적 지식을 직접 실험하고 조원들과 함께 탐구 보고서를 작성하는 수업입니다."
    }
  ];

  const filteredItems = activeFilter === "전체"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-primary/5 border-b border-border/40 py-16 sm:py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
            School Gallery
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            갤러리
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨의 행복하고 은혜로운 교육 현장과 생생한 학교 생활의 순간들을 사진으로 공유합니다.
          </p>
        </div>
        {/* Background shapes */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10 font-semibold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(item.image)}
                className="group bg-background rounded-3xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-md">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-secondary tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img 
              src={selectedImage} 
              alt="확대된 이미지" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
