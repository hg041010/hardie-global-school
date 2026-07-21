import Layout from "@/components/Layout";
import { Calendar, Users, Building2, BookOpen, Award } from "lucide-react";
import { useEffect } from "react";

export default function SchoolInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const basicInfo = [
    { label: "설립연도", value: "2021년 3월", icon: Calendar },
    { label: "학생정원", value: "32명", icon: Users },
    { label: "교사수", value: "7명", icon: BookOpen },
    { label: "교직원수", value: "13명(강사 포함)", icon: Users }
  ];

  const facilities = [
    { floor: "1층", items: "강당, 식당, ABCs" },
    { floor: "2층", items: "Learning Center 3반" },
    { floor: "3층", items: "Learning Center 1반, 2반" }
  ];

  const history = [
    { year: "2012년 9월", event: "드림비전스쿨 개원" },
    { year: "2013년 9월", event: "솔로몬 영재스쿨 개원" },
    { year: "2019년 3월", event: "두드림돌봄교실 개원" },
    { year: "2021년 3월", event: "하디글로벌스쿨 개교" }
  ];

  return (
    <Layout>
      {/* Subpage Header */}
      <section className="bg-primary/5 border-b border-border/40 py-16 sm:py-24 relative overflow-hidden animate-in">
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">
            School Information
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            학교 기본 정보
          </h1>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 font-light text-sm sm:text-base leading-relaxed">
            하디글로벌스쿨의 기본 정보, 시설 현황, 그리고 설립 연혁을 소개합니다.
          </p>
        </div>
        {/* Background shapes */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Basic Information */}
      <section className="py-20 bg-background animate-in">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              학교 규모
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-muted/30 p-6 rounded-2xl border border-border/40 text-center flex flex-col gap-3 animate-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold">{info.label}</p>
                  <p className="font-serif text-2xl font-bold text-primary">{info.value}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-2xl border border-border/60 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                교육 과정
              </h3>
              <div className="space-y-3 text-sm font-light text-muted-foreground">
                <p><strong className="text-foreground font-semibold">커리큘럼:</strong> A.C.E. 커리큘럼 및 PACE 교재 사용</p>
                <p><strong className="text-foreground font-semibold">수업일수:</strong> 주 5일 수업(월~금)</p>
                <p><strong className="text-foreground font-semibold">수업시간:</strong> 오전 8:50 ~ 오후 4:30</p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border/60 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-secondary" />
                캠퍼스 규모
              </h3>
              <div className="space-y-3 text-sm font-light text-muted-foreground">
                <p><strong className="text-foreground font-semibold">대지:</strong> 60평</p>
                <p><strong className="text-foreground font-semibold">건평:</strong> 110평</p>
                <p><strong className="text-foreground font-semibold">소유형태:</strong> 자가</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-muted/40 border-t border-border/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              시설 현황
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border/60 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{facility.floor}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {facility.items}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-background p-6 rounded-2xl border border-border/60 shadow-sm">
            <p className="text-sm text-muted-foreground font-light">
              <strong className="text-foreground font-semibold">특징:</strong> 단독 건물입니다. 체육, 미술은 장소를 옮겨 하디기념교회 공간을 사용합니다.
            </p>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight">
              학교 연혁
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-6">
              {history.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
                    {idx < history.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-muted/30 p-6 rounded-xl border border-border/40 flex-1">
                    <p className="font-serif text-lg font-bold text-primary">{item.year}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-light">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/40 border-t border-border/40">
        <div className="container max-w-4xl">
          <div className="bg-background p-8 sm:p-12 rounded-3xl border border-border/60 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              연락처
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2">주소</p>
                <p className="text-sm text-muted-foreground leading-relaxed">충북 청주시 청원구 율봉로201번길 8-8</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2">전화</p>
                <p className="text-sm text-muted-foreground">043-211-2905</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2">팩스</p>
                <p className="text-sm text-muted-foreground">070-4009-4711</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2">블로그</p>
                <p className="text-sm text-muted-foreground">Blog.naver.com/hardieglobalschool</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
