import Layout from "@/components/Layout";
import {
  Award,
  Compass,
  Heart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SchoolLife() {
  const activities = [
    {
      title: "매일 아침 예배와 큐티(QT)",
      desc: "하루의 첫 시간을 하나님께 찬양과 말씀으로 드립니다. 모든 학생과 교사가 함께 모여 삶의 예배자로 결단하고, 학급별 큐티 나눔을 통해 일상 속에서 말씀을 묵상하는 훈련을 합니다.",
      image:
        "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=900",
      icon: Heart,
    },
    {
      title: "정기 영성 수련회 및 아웃리치",
      desc: "매 학기 영성 수련회를 통해 신앙을 점검하고 뜨겁게 기도하는 시간을 가집니다. 방학 기간에는 국내외 미자립 교회와 선교지를 방문하여 복음을 전하고 사랑을 실천하는 아웃리치를 진행합니다.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=900",
      icon: Compass,
    },
    {
      title: "1인 1악기 및 예술 오케스트라",
      desc: "풍부한 감성과 예술적 소양을 기르기 위해 초등부터 전교생이 1인 1악기 교육을 받습니다. 매년 가을 정기 음악회를 개최하여 함께 하나의 아름다운 하모니를 만드는 기쁨을 배웁니다.",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=900",
      icon: Sparkles,
    },
    {
      title: "창의적 학생 자치 및 동아리 활동",
      desc: "학생들이 주도적으로 이끄는 학생 자치회와 로봇 코딩, 영어 토론, 농구, 연극 등 다채로운 동아리가 활성화되어 있습니다. 스스로 기획하고 협력하며 민주적이고 창의적인 리더십을 발휘합니다.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900",
      icon: Users,
    },
  ];

  const rules = [
    {
      title: "디지털 디톡스",
      english: "No Smartphone",
      desc: "등교 시 스마트폰을 반납하고, 일과 중에는 오롯이 배움과 친구들과의 대화에 집중합니다.",
      icon: Shield,
    },
    {
      title: "존중과 섬김의 언어",
      english: "Respectful Language",
      desc: "비방이나 비속어가 아닌 서로를 축복하고 격려하는 긍정의 언어 사용을 생활화합니다.",
      icon: Heart,
    },
    {
      title: "친환경 그린 라이프",
      english: "Eco-friendly Life",
      desc: "하나님이 만드신 지구를 보존하기 위해 일회용품 사용을 줄이고 쓰레기 분리배출을 실천합니다.",
      icon: Award,
    },
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-blue-800 to-cyan-600 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-24 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white" />

            <div className="absolute -bottom-60 left-1/3 h-[420px] w-[420px] rounded-full border-[60px] border-white" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <div className="animate-[fadeInUp_0.8s_ease-out_both] text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-100">
                School Life
              </p>

              <h1 className="mt-4 text-5xl font-black">
                학교생활
              </h1>

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-white/80" />

              <p className="mx-auto mt-7 max-w-3xl break-keep text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
                하디글로벌스쿨은 신앙과 학업, 공동체와 예술이 조화를
                이루는 따뜻한 학교입니다. 학생들은 매일의 삶 속에서
                배움과 성장, 섬김을 함께 경험합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 활동 소개 */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                  Joyful Campus Activities
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900">
                  신앙과 배움의 일상
                </h2>

                <p className="mx-auto mt-6 max-w-2xl break-keep text-lg leading-8 text-slate-600">
                  예배와 학습, 예술과 공동체 활동이 균형을 이루며
                  학생들의 하루와 한 해를 풍성하게 채워갑니다.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <Reveal
                    key={activity.title}
                    delay={index * 120}
                    className="h-full"
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-blue-700 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <h3 className="break-keep text-2xl font-black text-slate-900">
                          {activity.title}
                        </h3>

                        <p className="mt-5 break-keep text-base leading-8 text-slate-600">
                          {activity.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 공동체 문화 */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                  Campus Culture
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900">
                  아름다운 배움터를 위한 약속
                </h2>

                <p className="mt-6 break-keep text-lg leading-8 text-slate-600">
                  우리는 하나님의 사랑을 학교 공동체 안에서 실천하며,
                  서로 존중하고 책임 있게 살아가기 위한 건강한 약속을
                  함께 지킵니다.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {rules.map((rule, index) => {
                const Icon = rule.icon;

                return (
                  <Reveal
                    key={rule.title}
                    delay={index * 120}
                    className="h-full"
                  >
                    <article className="group flex min-h-[340px] h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>

                      <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                        {rule.english}
                      </p>

                      <h3 className="mt-3 break-keep text-2xl font-black text-slate-900">
                        {rule.title}
                      </h3>

                      <div className="mt-5 h-px w-full bg-slate-200" />

                      <p className="mt-5 break-keep text-base leading-8 text-slate-600">
                        {rule.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 마무리 */}
        <section className="bg-blue-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
                Growing Together
              </p>

              <h2 className="mt-4 text-4xl font-black">
                함께 배우고 함께 성장합니다
              </h2>

              <p className="mx-auto mt-8 max-w-3xl break-keep text-lg leading-8 text-blue-50">
                하디글로벌스쿨의 학교생활은 단순한 교과 학습을 넘어,
                믿음과 인격, 창의성과 공동체성을 함께 키워가는
                성장의 여정입니다.
              </p>
            </Reveal>
          </div>
        </section>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(32px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </main>
    </Layout>
  );
}