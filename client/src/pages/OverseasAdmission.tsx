import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  BookOpen,
  Compass,
  Globe2,
  Languages,
  Plane,
  Sparkles,
} from "lucide-react";

interface ProgramItem {
  id: string;
  name: string;
  engName: string;
  category: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  bgImage: string;
  overlay: string;
}

const programs: ProgramItem[] = [
  {
    id: "sat-prep",
    name: "SAT 준비 프로그램",
    engName: "SAT Preparation",
    category: "미국 대학 입시",
    description:
      "미국 대학 진학에 필요한 영어 독해력과 수학적 사고력을 체계적으로 강화합니다.",
    icon: BookOpen,
    bgImage:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#5a3512]/70",
  },
  {
    id: "ap-courses",
    name: "AP 과정",
    engName: "Advanced Placement",
    category: "대학 수준 심화 학습",
    description:
      "대학 수준의 심화 과목을 선행 학습하여 학업 경쟁력과 전공 기초 역량을 갖춥니다.",
    icon: Award,
    bgImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#30276f]/70",
  },
  {
    id: "english-intensive",
    name: "영어 집중 프로그램",
    engName: "English Intensive",
    category: "글로벌 의사소통",
    description:
      "읽기와 쓰기, 듣기와 말하기를 균형 있게 학습하며 실질적인 영어 활용 능력을 높입니다.",
    icon: Languages,
    bgImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#0b5557]/70",
  },
  {
    id: "global-exchange",
    name: "국제 교류 프로그램",
    engName: "Global Exchange",
    category: "세계 문화 체험",
    description:
      "다양한 문화와 국제적 환경을 경험하며 세계를 바라보는 폭넓은 시각을 기릅니다.",
    icon: Plane,
    bgImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#8b3945]/65",
  },
  {
    id: "leadership",
    name: "글로벌 리더십 교육",
    engName: "Global Leadership",
    category: "협력과 책임",
    description:
      "협업과 소통, 책임감을 바탕으로 국제사회에 기여할 수 있는 리더십을 기릅니다.",
    icon: Compass,
    bgImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#176a69]/65",
  },
  {
    id: "research",
    name: "학문 연구 프로젝트",
    engName: "Academic Research",
    category: "탐구와 창의적 사고",
    description:
      "관심 분야를 탐구하고 독립적인 연구를 수행하며 학문적 사고력과 표현력을 키웁니다.",
    icon: Sparkles,
    bgImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#613b83]/65",
  },
];

export default function OverseasAdmission() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements =
      document.querySelectorAll<HTMLElement>(".reveal-program");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          element.classList.remove("opacity-0", "translate-y-10");
          element.classList.add("opacity-100", "translate-y-0");

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[440px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop"
          alt="해외 입시반 수업 모습"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(5,24,42,0.84)]" />

        <div className="container relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#5da2ff]">
              Overseas Admission Track
            </p>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
              해외 입시반
            </h1>

            <div className="mx-auto my-6 h-[3px] w-12 bg-[#5da2ff]" />

            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              세계 명문 대학으로의 진학을 목표로 학생의 가능성과 진로에 맞춘
              국제 수준의 교육을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-[1440px] px-5 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#3071F2]">
              Global Programs
            </p>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#122033] md:text-4xl">
              해외 입시 프로그램 안내
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              영어와 국제 교류, 대학 입시 준비와 연구 활동을 균형 있게
              경험할 수 있도록 교육과정을 구성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={program.id}
                href={`/curriculum/overseas/subjects/${program.id}`}
              >
                <article
                  className="reveal-program group relative h-[420px] translate-y-10 cursor-pointer overflow-hidden rounded-[28px] opacity-0 shadow-md transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <img
                    src={program.bgImage}
                    alt={program.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className={`absolute inset-0 ${program.overlay}`} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-sm">
                        <program.icon className="h-5 w-5 text-[#ffe45c]" />
                      </div>

                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffe45c]">
                        {program.engName}
                      </p>
                    </div>

                    <h3 className="font-serif text-3xl font-bold tracking-tight text-white">
                      {program.name}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-white/90">
                      {program.category}
                    </p>

                    <p className="mt-5 min-h-[84px] text-sm leading-7 text-white/85 md:text-[15px]">
                      {program.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ffe45c]">
                      자세히 보기

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Introduction */}
      <section className="bg-[#F7F9FC] py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="reveal-program translate-y-10 rounded-3xl border border-slate-200 bg-white px-7 py-12 text-center opacity-0 shadow-sm transition-all duration-700 md:px-14 md:py-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#3071F2]">
              <Globe2 className="h-8 w-8" />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#5da2ff]">
              Preparing Global Leaders
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#122033] md:text-4xl">
              학생의 꿈이 세계를 향하도록
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
              학생 한 명 한 명의 학업 수준과 관심 분야, 진학 목표를 세심하게
              살피며 글로벌 대학 진학에 필요한 학업 능력과 인성을 함께
              준비합니다.
            </p>

            <Link href="/admission">
              <span className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#3071F2] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2563db] hover:shadow-lg">
                입학 상담 신청
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}