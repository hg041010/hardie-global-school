import { useEffect } from "react";
import Layout from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

export default function PrincipalMessage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".principal-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "영성의 사람",
      description: "하나님의 사랑의 마음을 지닌 사람",
    },
    {
      title: "인성의 사람",
      description: "예수님의 겸손과 온유한 성품을 닮은 사람",
    },
    {
      title: "지성의 사람",
      description: "꿈과 열정으로 선한 일에 준비된 사람",
    },
  ];

  return (
    <Layout>
      <style>{`
        .principal-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .principal-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .principal-delay-1 {
          transition-delay: 0.12s;
        }

        .principal-delay-2 {
          transition-delay: 0.24s;
        }

        .principal-delay-3 {
          transition-delay: 0.36s;
        }

        @media (prefers-reduced-motion: reduce) {
          .principal-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
            alt="교장 인사말"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="mb-5 text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase">
            Principal Message
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            교장 인사말
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            하나님의 말씀과 기도로 다음 세대를 세워갑니다.
          </p>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container max-w-6xl px-4">
          <article className="principal-reveal">
            <div className="mb-12">
              <p className="mb-4 text-sm font-extrabold tracking-[0.24em] text-[#3071F2] uppercase">
                Welcome
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] leading-[1.3]">
                하디글로벌스쿨에 오신 여러분을 환영합니다.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
              {/* 사진 */}
              <div className="principal-reveal principal-delay-1">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
                  <img
                    src="/images/principal.jpg"
                    alt="최복식 교장"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="mt-5">
                  <p className="font-serif text-2xl font-extrabold text-[#122033]">
                    최복식
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#3071F2]">
                    하디글로벌스쿨 교장
                  </p>
                </div>
              </div>

              {/* 첫 부분 */}
              <div className="principal-reveal principal-delay-2 space-y-5 text-[16px] sm:text-[17px] leading-8 text-slate-700">
                <p>
                  하디글로벌스쿨은 작은 학교입니다. 2021년에 시작되어 아직
                  역사는 짧지만, 하나님이 동행하시는 꿈과 가능성이 무한한
                  학교입니다.
                </p>

                <div className="border-l-4 border-[#3071F2] pl-5 py-1">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#122033] leading-9">
                    꿈은 유정란과 같습니다.
                    <br />
                    유정란에는 생명이 있습니다.
                  </p>
                </div>

                <p>
                  다음 세대는 유정란과 같은 꿈이요, 생명이요, 희망입니다.
                  그런데 요즈음 희망과 꿈인 다음 세대가 ‘다른 세대’로
                  변해가고 있습니다.
                </p>

                <p>
                  가치관의 혼란, 하나님의 창조 질서를 파괴하는 현상들,
                  하나님의 말씀에 대적하는 시대적인 죄악들로 인해 세상에 다음
                  세대들을 빼앗기고 있는 실정입니다.
                </p>
              </div>
            </div>

            {/* 이어지는 본문 */}
            <div className="principal-reveal principal-delay-2 mt-10 space-y-5 text-[16px] sm:text-[17px] leading-8 text-slate-700">
              <p>
                이러한 시대적 상황이 다음 세대를 하나님의 자녀로 세우고자 하는
                하디글로벌스쿨을 세우게 했습니다.
              </p>

              <p>
                하디글로벌스쿨은 “일어나라 빛을 발하라”라는 교훈 아래
                하나님의 사랑의 마음을 지닌 영성의 사람, 예수님의 겸손과
                온유한 성품을 닮은 인성의 사람, 하디 선교사처럼 꿈과 열정을
                가지고 선한 일에 준비된 지성의 사람을 키우기 위해 설립된
                학교입니다.
              </p>

              <p>
                하디글로벌스쿨은 하나님의 말씀과 기도로 다음 세대를 양육하며,
                모든 교과 및 생활이 성경적 가치관에 따라 이루어집니다.
              </p>

              <p>
                학생끼리 비교하거나 경쟁하는 것이 아니라 하나님 앞에서 자신의
                길을 발견하고, 그 은사적 부르심에 충실한 삶을 살도록 돕는
                학교입니다.
              </p>

              <p>
                우리의 궁극적인 목표는 하나님의 형상대로 지음 받은 아이들을
                세상을 치유하고 변화시키는 전인격적인 하나님의 사람으로 키우는
                것입니다.
              </p>

              <p>
                ‘생명’이 꿈틀거리고 세상을 진동시킬 영성과 인성과 지성을
                겸비한 글로벌 리더를 길러내는 일에 온 힘을 기울이겠습니다.
                하디글로벌스쿨이 모두에게 자랑이요, 기쁨이 될 수 있도록 함께
                기도해 주시기 바랍니다.
              </p>
            </div>

            <div className="principal-reveal principal-delay-3 mt-12 pt-8 border-t border-slate-200 text-right">
              <p className="text-base text-slate-500">
                하디글로벌스쿨 교장
              </p>

              <p className="mt-2 text-3xl font-serif font-extrabold text-[#122033]">
                최복식
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Educational Values */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="container max-w-6xl px-4">
          <div className="principal-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase">
              Educational Vision
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              하디글로벌스쿨의 3대 인재상
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`principal-reveal principal-delay-${
                  index + 1
                } bg-[#F7F9FC] rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <CheckCircle2 className="w-11 h-11 text-[#3071F2] mx-auto mb-5" />

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#122033]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}