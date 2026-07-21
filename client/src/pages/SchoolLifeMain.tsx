import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Eye, X } from "lucide-react";

export default function SchoolLifeMain() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  const galleryContentRef = useRef<HTMLDivElement | null>(null);

  const categories = ["전체", "예배", "학습", "동아리", "행사"];

  const schoolLifeItems = [
    {
      title: "봄 학기 야외 예배 및 찬양",
      category: "예배",
      image:
        "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1200",
      desc: "푸르른 자연 속에서 창조주 하나님을 찬양하며 영성을 다지는 봄 학기 야외 채플 시간입니다.",
    },
    {
      title: "글로벌 모의 UN 토론 대회",
      category: "학습",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      desc: "세계적 이슈에 대해 영어로 토론하며 국제적 시각과 리더십 역량을 기르는 모의 UN 현장입니다.",
    },
    {
      title: "창의 로봇 과학 동아리 발표회",
      category: "동아리",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
      desc: "학생들이 스스로 설계하고 프로그래밍한 로봇을 시연하고 작동 원리를 설명하는 창의 탐구 시간입니다.",
    },
    {
      title: "오케스트라 가을 정기 연주회",
      category: "행사",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200",
      desc: "전교생이 참여하는 오케스트라가 가을날 아름다운 성가와 클래식 선율을 선사합니다.",
    },
    {
      title: "매일 아침 학급 큐티(QT) 시간",
      category: "예배",
      image:
        "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=1200",
      desc: "아침 등교 후 말씀 묵상과 기도로 하루를 준비하는 하디글로벌스쿨의 아침 풍경입니다.",
    },
    {
      title: "과학 실험 협동 프로젝트",
      category: "학습",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
      desc: "이론으로 배운 과학적 지식을 직접 실험하고 조원들과 함께 탐구 보고서를 작성하는 수업입니다.",
    },
  ];

  const filteredItems =
    activeFilter === "전체"
      ? schoolLifeItems
      : schoolLifeItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const galleryContent = galleryContentRef.current;

    if (!galleryContent) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsGalleryVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(galleryContent);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isGalleryVisible) return;

    setIsGalleryVisible(false);

    const animationTimer = window.setTimeout(() => {
      setIsGalleryVisible(true);
    }, 40);

    return () => {
      window.clearTimeout(animationTimer);
    };
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedImage]);

  return (
    <Layout>
      <main className="min-h-screen bg-[#f4f7fb]">
        {/* Hero Section */}
        <section className="relative min-h-[420px] overflow-hidden bg-[#071a2d] md:min-h-[440px]">
          {/* 임시 배경 사진 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=85&w=2000')",
              transform: "scale(1.03)",
            }}
          />

          {/* 진한 남색 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.8)",
            }}
          />

          {/* 아래쪽을 조금 더 어둡게 만드는 그라데이션 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.05), rgba(5, 24, 42, 0.42))",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-24 text-center md:min-h-[440px] md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[#5da2ff]">
                SCHOOL LIFE
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                학교생활
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨 학생들의 예배와 학습, 동아리와 다양한 행사
                현장을 사진으로 소개합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="min-h-[760px] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* 페이지 진입 시 바로 보이는 제목 영역 */}
            <div className="mb-12 animate-in text-center fade-in slide-in-from-bottom-5 duration-700">
              <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#3b82f6]">
                SCHOOL LIFE GALLERY
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                하디글로벌스쿨의 일상
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#748093] md:text-base">
                학생들이 함께 예배하고 배우며 성장하는 학교생활의 순간들을
                만나보세요.
              </p>
            </div>

            {/* 이 지점이 화면에 들어오면 아래 요소 애니메이션 시작 */}
            <div ref={galleryContentRef}>
              {/* Category Filter */}
              <div
                className={`mb-12 flex flex-wrap justify-center gap-3 transition-all duration-700 ease-out ${
                  isGalleryVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                {categories.map((category) => {
                  const isActive = activeFilter === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`min-w-[84px] rounded-lg border px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "border-[#155b94] bg-[#155b94] text-white shadow-md shadow-[#155b94]/15"
                          : "border-[#dfe5ec] bg-white text-[#788496] hover:-translate-y-0.5 hover:border-[#155b94] hover:text-[#155b94] hover:shadow-sm"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item, index) => (
                  <article
                    key={`${activeFilter}-${item.title}-${index}`}
                    onClick={() => setSelectedImage(item.image)}
                    style={{
                      transitionDelay: isGalleryVisible
                        ? `${120 + index * 100}ms`
                        : "0ms",
                    }}
                    className={`group cursor-pointer overflow-hidden rounded-2xl border border-[#e1e6ed] bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${
                      isGalleryVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-[rgba(5,24,42,0.45)]">
                        <div className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-[#155b94] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <Eye className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="mb-3 text-[11px] font-bold tracking-[0.16em] text-[#3b82f6]">
                        {item.category}
                      </p>

                      <h3 className="font-serif text-lg font-bold leading-7 text-[#142033] transition-colors group-hover:text-[#155b94]">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#758194]">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="rounded-2xl border border-[#e1e6ed] bg-white px-6 py-16 text-center text-sm text-[#758194]">
                  해당 카테고리의 학교생활 사진이 아직 없습니다.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="학교생활 이미지 확대 보기"
          className="fixed inset-0 z-50 flex animate-in items-center justify-center bg-black/90 p-4 fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="이미지 닫기"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="max-h-[85vh] max-w-5xl animate-in overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl zoom-in-95 duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="확대된 학교생활 이미지"
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}