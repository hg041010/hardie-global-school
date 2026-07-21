import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".home-reveal");

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
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <style>{`
        .home-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .home-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .home-delay-1 {
          transition-delay: 0.12s;
        }

        .home-delay-2 {
          transition-delay: 0.24s;
        }

        .home-delay-3 {
          transition-delay: 0.36s;
        }

        .home-delay-4 {
          transition-delay: 0.48s;
        }
      `}</style>

      {/* 1. 메인 히어로 */}
      <section className="relative h-[650px] lg:h-[750px] overflow-hidden bg-[#0D1B2A] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
            alt="Hardie Global School"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#0D1B2A]/80 to-[#0D1B2A]/90" />
        </div>

        <div className="container relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#79BAF2]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide uppercase font-display">
              Hardie Global School Since 2021
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            하나님의 비전을 품고 <br />
            <span className="text-[#79BAF2]">세상을 변화시키는</span> <br />
            글로벌 리더의 시작
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
            하디글로벌스쿨은 말씀과 기도를 바탕으로 한 확고한 기독교적 가치관 위에서,
            <br className="hidden sm:block" />
            글로벌 역량을 갖춘 창의적이고 지혜로운 인재를 양성하는 명문 대안학교입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/admission">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#3071F2] hover:bg-[#2E83F2] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                입학 상담 신청 <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full transition-all duration-300 hover:scale-[1.03]"
              >
                학교 소개 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Principal Message */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-5 home-reveal">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm font-bold text-slate-500 mb-2">사진 영역</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    추후 교장선생님 사진 또는 학교 학생 사진으로 교체
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 home-reveal home-delay-1">
              <p className="text-sm font-extrabold tracking-[0.25em] text-[#3071F2] uppercase mb-5">
                Principal Message
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0D1B2A] leading-[1.25] tracking-tight mb-8">
                “하나님의 사랑으로 자녀를 품고,
                <br />
                실력과 영성을 겸비한
                <br />
                리더로 키웁니다.”
              </h2>

              <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mb-9" />

              <div className="space-y-6 text-[17px] leading-9 text-slate-700">
                <p>
                  사랑하는 학부모님과 하디글로벌스쿨을 찾아주신 모든 분들께
                  주님의 이름으로 문안드립니다. 저희 하디글로벌스쿨은 단순한
                  지식의 전달을 넘어, 학생들이 삶의 모든 영역에서 하나님의
                  주권을 인정하고 성경적 가치관을 바탕으로 학문적 깊이를
                  더해갈 수 있도록 돕는 기독교 명문 대안학교입니다.
                </p>

                <p>
                  세계적인 기독교 교육과정인{" "}
                  <strong className="font-extrabold text-[#0D1B2A]">
                    A.C.E. 프로그램
                  </strong>
                  을 도입하여 1:1 개인 맞춤형 진도 관리를 실현하고 있으며,
                  한영 이중언어 몰입식 교육을 통해 글로벌 리더로서 필요한
                  탄탄한 실력을 갖추도록 교육하고 있습니다.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/about/principal">
                  <Button
                    variant="outline"
                    className="border-[#3071F2] text-[#3071F2] hover:bg-[#3071F2] hover:text-white rounded-full px-7 py-5 font-bold shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    더 알아보기 <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 3. 협력 및 인증 기관 */}
<section className="py-24 bg-white border-t border-slate-200">
  <div className="container max-w-6xl text-center">

    <p className="home-reveal text-sm font-bold tracking-[0.35em] uppercase text-[#3071F2] mb-5">
      Partnerships
    </p>

    <h2 className="home-reveal home-delay-1 font-serif text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-20">
      하디글로벌스쿨 협력 및 인증 기관
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        ["A.C.E.", "SCHOOL CURRICULUM"],
        ["ACSI", "MEMBER SCHOOL"],
        ["KICS", "ALLIANCE SCHOOL"],
        ["SOT", "SYSTEM EDUCATION"],
      ].map(([name, desc], index) => (
        <div
          key={name}
          className={`home-reveal home-delay-${index + 1}
            flex flex-col items-center
            max-w-[250px]
            w-full
            mx-auto`}
        >
          <h3
            className="
              w-full
              text-center
              font-serif
              text-[40px]
              leading-none
              tracking-normal
              text-[#122033]
            "
          >
            {name}
          </h3>

          <p
            className="
              w-full
              text-center
              mt-5
              text-[14px]
              uppercase
              tracking-[0.22em]
              font-semibold
              text-[#3071F2]
            "
          >
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    </Layout>
  );
}