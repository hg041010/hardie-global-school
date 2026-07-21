import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, ChevronRight, ArrowUp, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import DropdownMenu from "@/components/DropdownMenu";
import { navigationItems, SubMenuItem } from "@/const/navigation";
import hadiLogo from "@/assets/hadi-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  const toggleMobileDropdown = (path: string) => {
    setActiveMobileDropdown(activeMobileDropdown === path ? null : path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] font-sans relative">
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container max-w-[1400px] h-[80px] grid grid-cols-[auto_1fr_auto] items-center px-4 lg:px-8">
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0 w-fit transition-transform duration-300 hover:scale-[1.03]">
              <img
                src={hadiLogo}
                alt="하디글로벌스쿨 로고"
                className="h-14 w-14 object-contain bg-white/95 p-2 rounded-xl shadow-md"
              />
              <div className="leading-tight whitespace-nowrap">
                <div className="text-[13px] font-bold text-slate-700">
                  대안교육기관
                </div>
                <div className="text-[25px] font-extrabold text-[#122033] tracking-tight">
                  하디글로벌스쿨
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navigationItems.map((item) => {
              const isActive =
                location === item.path || location.startsWith(item.path + "/");
              return (
                <DropdownMenu key={item.path} item={item} isActive={isActive} />
              );
            })}
          </nav>

          <div className="hidden lg:flex justify-self-end ml-8 pl-6 border-l border-slate-200">
            <Link href="/admission">
              <Button className="bg-[#3071F2] hover:bg-[#2E83F2] text-white shadow-lg hover:shadow-xl rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 hover:scale-[1.03]">
                입학상담 신청
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#153E75] hover:bg-slate-100 transition-colors justify-self-end"
            aria-label="메뉴 열기/닫기"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-white lg:hidden border-t border-border">
          <div className="container py-6 flex flex-col gap-4 h-[calc(100vh-80px)] overflow-y-auto">
            {navigationItems.map((item) => {
              const hasSubMenu = item.submenu && item.submenu.length > 0;
              const isDropdownOpen = activeMobileDropdown === item.path;

              return (
                <div key={item.path} className="border-b border-border/40 pb-2">
                  {hasSubMenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.path)}
                        className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-bold text-[#122033] hover:bg-slate-50"
                      >
                        <span>{item.name}</span>
                        <ChevronRight
                          className={`w-4 h-4 text-muted-foreground transition-transform ${
                            isDropdownOpen ? "rotate-90 text-[#3071F2]" : ""
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="mt-1 ml-4 pl-4 border-l-2 border-[#3071F2]/20 flex flex-col gap-2">
                          {item.submenu?.map((sub: SubMenuItem) => (
                            <div key={sub.path} className="flex flex-col gap-1">
                              <Link href={sub.path}>
                                <span className="block px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-[#3071F2] hover:bg-slate-50 rounded-lg cursor-pointer">
                                  {sub.name}
                                </span>
                              </Link>

                              {sub.children?.map((child: SubMenuItem) => (
                                <Link key={child.path} href={child.path}>
                                  <span className="block ml-4 px-4 py-2 text-sm text-muted-foreground hover:text-[#3071F2] hover:bg-slate-50 rounded-lg cursor-pointer">
                                    {child.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <span className="block px-4 py-3 rounded-xl text-base font-bold text-[#122033] hover:bg-slate-50 cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      <footer className="bg-gradient-to-b from-[#0a326e] to-[#082a5d] text-white pt-20 pb-14 border-t border-white/10">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={hadiLogo}
                  alt="하디글로벌스쿨 로고"
                  className="h-14 w-14 object-contain bg-white/95 p-2 rounded-xl shadow-md"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-tight text-white">
                    하디글로벌스쿨
                  </span>
                  <span className="text-[10px] tracking-[0.22em] text-[#79BAF2] uppercase font-bold">
                    Hardie Global School
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                하나님을 경외하고 이웃을 사랑하며 세상에 선한 영향력을 끼치는
                글로벌 기독교 인재를 양성하는 명문 기독교 대안학교입니다.
              </p>

              <div className="flex flex-col gap-3 mt-1 text-sm text-slate-300">
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#79BAF2] shrink-0" />
                  충북 청주시 청원구 율봉로201번길 8-8
                </span>
                <span className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#79BAF2] shrink-0" />
                  043-211-2905
                </span>
                <span className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#79BAF2] shrink-0" />
                  Blog.naver.com/hardieglobalschool
                </span>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-5">
              <h3 className="font-serif text-lg font-semibold tracking-wide text-white border-b border-white/15 pb-3">
                주요 메뉴
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-300">
                {navigationItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <span className="hover:text-[#79BAF2] transition-colors duration-200 cursor-pointer flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#79BAF2]" />
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-5">
              <h3 className="font-serif text-lg font-semibold tracking-wide text-white border-b border-white/15 pb-3">
                기독교 교육 비전
              </h3>
              <div className="bg-white/6 backdrop-blur-sm p-6 rounded-2xl border border-white/15 flex flex-col gap-4">
                <div>
                  <p className="text-[#79BAF2] text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    Spiritual Foundation
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    말씀과 기도 위에 세워진 기독교 교육을 바탕으로,
                    학생들이 글로벌 리더로 성장하도록 돕습니다.
                  </p>
                </div>

                <div>
                  <p className="text-[#79BAF2] text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    Academic Excellence
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    세계 수준의 교육과정과 맞춤형 학습을 통해 지성과 영성을
                    함께 갖춘 인재를 양성합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>하디글로벌스쿨 대안학교</span>
            <span>© 2026 Hardie Global School. All rights reserved.</span>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#153E75] text-white hover:bg-[#3071F2] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          showScrollTop
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
        aria-label="맨 위로 가기"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}