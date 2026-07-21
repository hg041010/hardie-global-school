import { useEffect } from "react";
import Layout from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

export default function ChairmanMessage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".chairman-reveal");

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
    "성경 중심 교육",
    "학생 중심 교육",
    "글로벌 리더 양성",
  ];

  return (
    <Layout>
      <style>{`
        .chairman-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .chairman-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .chairman-delay-1 {
          transition-delay: 0.12s;
        }

        .chairman-delay-2 {
          transition-delay: 0.24s;
        }

        .chairman-delay-3 {
          transition-delay: 0.36s;
        }

        @media (prefers-reduced-motion: reduce) {
          .chairman-reveal {
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
            alt="이사장 인사말"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase mb-5">
            Chairman Message
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            이사장 인사말
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            하디글로벌스쿨에 오신 여러분을 진심으로 환영합니다.
          </p>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container max-w-6xl px-4">
          <article className="chairman-reveal">
            <div className="mb-12">
              <p className="text-sm font-extrabold tracking-[0.24em] text-[#3071F2] uppercase mb-4">
                Welcome
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033] leading-[1.3]">
                하디글로벌스쿨에 오신 여러분을 환영합니다.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
              {/* 사진 */}
              <div className="chairman-reveal chairman-delay-1">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
                  <img
                    src="/images/chairman.jpg"
                    alt="문영길 이사장"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="mt-5">
                  <p className="font-serif text-2xl font-extrabold text-[#122033]">
                    문영길
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#3071F2]">
                    하디글로벌스쿨 이사장
                  </p>
                </div>
              </div>

              {/* 첫 구절 + 앞부분 */}
              <div className="chairman-reveal chairman-delay-2">
                <div className="border-l-4 border-[#3071F2] pl-5 py-1 mb-8">
                  <p className="font-bold text-[#122033] text-[17px] leading-8">
                    마땅히 행할 길을 아이에게 가르치라
                  </p>

                  <p className="font-bold text-[#122033] text-[17px] leading-8">
                    그리하면 늙어도 그것을 떠나지 아니하리라
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#3071F2]">
                    &lt;잠언 22:6&gt;
                  </p>
                </div>

                <div className="space-y-5 text-[16px] sm:text-[17px] leading-8 text-slate-700">
                  <p>
                    우리가 어렸을 때는 산으로 들로 뛰어다니면서 놀았습니다.
                    봄이면 아카시아 꽃을 따고, 여름이면 개울에서 물놀이를 하고,
                    가을이면 밤을 따러 산으로 갔습니다. 계절마다 놀 것들로
                    가득했습니다. 그리고 주일학교와 여름성경학교는 어린
                    우리들에게는 특별 이벤트였습니다.
                  </p>

                  <p>
                    요즘 우리 아이들에게는 게임기와 핸드폰이 손에 들려지고,
                    눈이 빨갛게 핸드폰을 들여다보느라 여념이 없는 모습들을 보곤
                    합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 본문 이어지는 부분 */}
            <div className="chairman-reveal chairman-delay-2 mt-10 space-y-5 text-[16px] sm:text-[17px] leading-8 text-slate-700">
              <p>
                세상은 수많은 놀이와 음식과 물건들로 가득합니다. 옛날보다 훨씬
                많은 것들로부터 유혹을 받습니다. 그래서 그 어느 때보다 더 바른
                가치관과 세계관을 가져야 합니다. 우리 아이들이 세상에 눈을 뜨기
                전에 제일 먼저 하나님의 말씀을 가슴에 새기고 생각 속에 가득히
                채울 수 있기를 원합니다.
              </p>

              <p>
                하디 선교사는 지성과 인성과 영성을 갖춘 하나님의 사람이었습니다.
                그의 헌신적인 삶은 한국 교회와 사회에 큰 영향을 끼쳤습니다.
                의사로서 많은 사람을 치유하고, 교육자로서 후진들을 키우고,
                선교사로서 복음을 전했습니다. 무엇보다 1903년 그에게 내린
                성령의 불은 조선 땅에 큰 부흥의 불길로 번져 일본의 억압으로
                고달픈 우리 민족에게 소망을 주었습니다.
              </p>

              <p>
                하디글로벌스쿨은 하디를 기억합니다. 그리고 하디의 꿈과 열정을
                잇고자 합니다. 하디글로벌스쿨에 다니는 학생들은 조국과 세계의
                미래 일꾼들입니다. 사랑을 쏟아붓고 기도로 응원하고 말씀으로
                훈련하며 정성을 기울여 잘 키우려고 합니다. 어린이들과 부모,
                교회와 학교 모두가 행복한 학교가 되려 합니다.
              </p>
            </div>

            <div className="chairman-reveal chairman-delay-3 mt-12 pt-8 border-t border-slate-200 text-right">
              <p className="text-base text-slate-500">
                하디글로벌스쿨 이사장
              </p>

              <p className="mt-2 text-3xl font-serif font-extrabold text-[#122033]">
                문영길
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="container max-w-6xl px-4">
          <div className="chairman-reveal text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase mb-4">
              Educational Philosophy
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
              하디글로벌스쿨이 지향하는 가치
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item, index) => (
              <div
                key={item}
                className={`chairman-reveal chairman-delay-${
                  index + 1
                } bg-[#F7F9FC] rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <CheckCircle2 className="w-11 h-11 text-[#3071F2] mx-auto mb-5" />

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#122033]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}