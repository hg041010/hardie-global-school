import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Mail, MapPin, Navigation, Phone } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

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

  return (
    <Layout>
      <style>{`
        .contact-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .contact-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-delay-1 {
          transition-delay: 0.12s;
        }

        .contact-delay-2 {
          transition-delay: 0.24s;
        }

        .contact-delay-3 {
          transition-delay: 0.36s;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* 상단 배너 */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920"
            alt="하디글로벌스쿨 오시는 길"
            className="w-full h-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/78 to-[#0D1B2A]/95" />
        </div>

        <div className="container relative z-10 max-w-4xl px-4 text-center text-white">
          <p className="mb-5 text-sm font-extrabold tracking-[0.28em] text-[#79BAF2] uppercase">
            Campus Location
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
            오시는 길
          </h1>

          <div className="w-16 h-1.5 bg-[#3071F2] rounded-full mx-auto mt-6" />

          <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed">
            하디글로벌스쿨의 위치와 연락처를 안내해 드립니다.
          </p>
        </div>
      </section>

     {/* 지도 및 연락처 */}
<section className="py-20 sm:py-24 bg-white">
  <div className="container max-w-7xl px-4">
    {/* 섹션 제목 */}
    <div className="contact-reveal max-w-3xl mb-12 sm:mb-14">
      <p className="mb-4 text-sm font-extrabold tracking-[0.24em] text-[#3071F2] uppercase">
        Contact Information
      </p>

      <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#122033]">
        학교 위치 및 연락처
      </h2>

      <div className="w-14 h-1 bg-[#3071F2] mt-6 rounded-full" />
    </div>

    {/* 지도 + 연락처 정보 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* 구글 지도 */}
      <div className="contact-reveal contact-delay-1 lg:col-span-7">
        <div className="relative h-[430px] sm:h-[500px] overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-slate-100">
          <iframe
            title="하디글로벌스쿨 위치"
            src="https://www.google.com/maps?q=청주시%20청원구%20상리로17번길%2027-15&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7 pointer-events-none">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg border border-white/70">
              <div className="w-10 h-10 rounded-xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-[#3071F2] uppercase">
                  Hardie Campus
                </p>

                <p className="mt-1 text-sm font-bold text-[#122033]">
                  하디글로벌스쿨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 연락처 정보 */}
      <div className="contact-reveal contact-delay-2 lg:col-span-5">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {/* 주소 */}
          <div className="flex gap-5 py-7">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#122033]">
                주소
              </h3>

              <p className="mt-2 text-[16px] leading-7 text-slate-600">
                충청북도 청주시 청원구
                <br />
                상리로17번길 27-15 (율량동)
              </p>
            </div>
          </div>

          {/* 전화번호 */}
          <div className="flex gap-5 py-7">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#122033]">
                전화번호
              </h3>

              <a
                href="tel:043-211-2905"
                className="inline-block mt-2 text-[16px] text-slate-600 hover:text-[#3071F2] transition-colors"
              >
                043-211-2905
              </a>
            </div>
          </div>

          {/* 이메일 */}
          <div className="flex gap-5 py-7">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#3071F2]/10 text-[#3071F2] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-extrabold text-[#122033]">
                이메일
              </h3>

              <div className="mt-2 flex flex-col gap-2 text-[15px] sm:text-[16px]">
                <a
                  href="mailto:hardieglobalschool@naver.com"
                  className="break-all text-slate-600 hover:text-[#3071F2] transition-colors"
                >
                  hardieglobalschool@naver.com
                </a>

                <a
                  href="mailto:Hardy.adm@gmail.com"
                  className="break-all text-slate-600 hover:text-[#3071F2] transition-colors"
                >
                  Hardy.adm@gmail.com
                </a>
              </div>

              <p className="mt-3 text-xs leading-6 text-slate-400">
                입학 관련 문의는 입학 전용 이메일로 보내주시면
                더욱 빠르게 안내받으실 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#F7F9FC] border border-slate-100 p-5">
          <p className="text-sm leading-7 text-slate-500">
            방문 전 학교로 연락해 주시면 자세한 위치와 방문 절차를
            안내해 드립니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}