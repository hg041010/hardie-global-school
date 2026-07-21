import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ClipboardCheck,
  Download,
  FileText,
  MessageSquare,
} from "lucide-react";

const admissionSteps = [
  {
    step: "01",
    title: "입학 상담 및 문의",
    description:
      "홈페이지 온라인 신청 또는 유선전화를 통해 1차 개별 상담을 진행합니다.",
  },
  {
    step: "02",
    title: "입학 설명회 참석",
    description:
      "정기 설명회에 참석하여 학교의 교육 철학과 교육과정을 자세히 확인합니다.",
  },
  {
    step: "03",
    title: "서류 접수",
    description:
      "입학 원서와 학생 자기소개서, 학부모 동의서 등 필요한 서류를 제출합니다.",
  },
  {
    step: "04",
    title: "학생·학부모 면접",
    description:
      "학생의 학업과 인성, 가정의 기독교 교육 철학을 확인하는 면담을 진행합니다.",
  },
  {
    step: "05",
    title: "합격 발표 및 등록",
    description:
      "최종 합격 통보 후 등록과 신입생 오리엔테이션을 거쳐 입학을 확정합니다.",
  },
];

const admissionSchedule = [
  {
    title: "정기 1차 설명회",
    date: "2026년 10월 17일(토) 오전 10:30",
    icon: CalendarDays,
  },
  {
    title: "정기 2차 설명회",
    date: "2026년 11월 21일(토) 오전 10:30",
    icon: CalendarDays,
  },
  {
    title: "원서 접수 기간",
    date: "2026년 10월 19일(월) ~ 11월 27일(금)",
    icon: FileText,
  },
];

export default function Admission() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentName: "",
    studentGrade: "",
    message: "",
  });

  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const overviewRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = [
      overviewRef.current,
      processRef.current,
      formRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === overviewRef.current) {
            setIsOverviewVisible(true);
          }

          if (entry.target === processRef.current) {
            setIsProcessVisible(true);
          }

          if (entry.target === formRef.current) {
            setIsFormVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -90px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleGradeChange = (value: string) => {
    setFormData((previous) => ({
      ...previous,
      studentGrade: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !formData.parentName ||
      !formData.phone ||
      !formData.studentName ||
      !formData.studentGrade
    ) {
      toast.error("필수 정보를 모두 입력해 주세요.");
      return;
    }

    toast.success(
      "입학 상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.",
    );

    setFormData({
      parentName: "",
      phone: "",
      email: "",
      studentName: "",
      studentGrade: "",
      message: "",
    });
  };

  return (
    <Layout>
      <main className="min-h-screen bg-[#f4f7fb]">
        {/* Hero Section */}
        <section className="relative h-[420px] overflow-hidden bg-[#071a2d] md:h-[440px]">
          {/* 추후 실제 학교 사진으로 교체할 임시 배경 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=2000')",
              transform: "scale(1.03)",
            }}
          />

          {/* 진한 남색 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 24, 42, 0.84)",
            }}
          />

          {/* 하단 그라데이션 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5, 24, 42, 0.05), rgba(5, 24, 42, 0.46))",
            }}
          />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center md:px-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#5da2ff]">
                ADMISSIONS
              </p>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                입학 안내
              </h1>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#3b82f6]" />

              <p className="mx-auto mt-7 max-w-2xl break-keep text-sm leading-8 text-white/90 drop-shadow-md md:text-base">
                하디글로벌스쿨은 하나님이 맡기신 자녀를 믿음과 지성으로
                함께 키워갈 동역자 가정을 기다립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Overview */}
        <section
          ref={overviewRef}
          className="min-h-[720px] bg-[#f4f7fb] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            {/* Section Heading */}
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isOverviewVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                WELCOME TO HARDIE
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                함께 세워가는 교육 공동체
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                학교의 교육 철학과 입학 일정을 확인하고, 하디글로벌스쿨과
                함께할 첫걸음을 시작해 주세요.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Introduction */}
              <article
                className={`rounded-2xl border border-[#e1e6ed] bg-white p-8 shadow-sm transition-all delay-100 duration-700 ease-out md:p-10 ${
                  isOverviewVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                  ADMISSION INFORMATION
                </p>

                <h3 className="font-serif text-2xl font-bold leading-snug text-[#142033] md:text-3xl">
                  하나님의 자녀를 함께 키워갈
                  <br />
                  동역자 가정을 모집합니다
                </h3>

                <div className="mt-7 space-y-5 break-keep text-sm leading-7 text-[#748093] md:text-base">
                  <p>
                    하디글로벌스쿨의 문은 기독교 신앙을 기반으로 자녀를
                    전인적으로 양육하고자 하는 모든 가정에 열려 있습니다.
                    우리는 단순한 지식 전달을 넘어 삶의 예배자로 학생을
                    세워가는 기독교 대안학교입니다.
                  </p>

                  <p>
                    모집 대상은 초등부 1~6학년, 중등부 7~9학년, 고등부
                    10~12학년이며 매년 봄학기와 가을학기에 신입생과
                    편입생을 선발합니다. 입학 전에 학교의 교육 이념과
                    가치를 이해할 수 있도록 입학설명회 참석을 권장합니다.
                  </p>
                </div>

                {/* Downloads */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      toast.success("모집요강 다운로드가 시작되었습니다.")
                    }
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#155b94] px-6 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#104d7f] hover:shadow-md"
                  >
                    <FileText className="h-4 w-4" />
                    모집요강
                    <Download className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      toast.success("입학원서 다운로드가 시작되었습니다.")
                    }
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#d7dee7] bg-white px-6 text-sm font-bold text-[#445064] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#155b94] hover:text-[#155b94] hover:shadow-sm"
                  >
                    <ClipboardCheck className="h-4 w-4" />
                    입학원서
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </article>

              {/* Schedule */}
              <aside
                className={`rounded-2xl border border-[#e1e6ed] bg-white p-8 shadow-sm transition-all delay-200 duration-700 ease-out md:p-9 ${
                  isOverviewVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#3b82f6]">
                  ADMISSION SCHEDULE
                </p>

                <h3 className="font-serif text-2xl font-bold text-[#142033]">
                  입학 전형 일정
                </h3>

                <div className="mt-7 divide-y divide-[#e8ecf1]">
                  {admissionSchedule.map((schedule) => {
                    const Icon = schedule.icon;

                    return (
                      <div
                        key={schedule.title}
                        className="flex gap-4 py-5 first:pt-0 last:pb-0"
                      >
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#2f7df4]">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-[#253044]">
                            {schedule.title}
                          </h4>

                          <p className="mt-1 text-xs leading-6 text-[#8390a2]">
                            {schedule.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-xl bg-[#f4f7fb] p-5 text-xs leading-6 text-[#748093]">
                  개별 방문 상담은 평일 상시 가능합니다. 방문 전 학교로
                  연락하여 상담 일정을 예약해 주세요.
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section
          ref={processRef}
          className="min-h-[680px] border-y border-[#e5eaf0] bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div
              className={`mb-14 text-center transition-all duration-700 ease-out ${
                isProcessVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                ADMISSION PROCESS
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                입학 절차 5단계
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                상담부터 최종 등록까지 학생과 가정이 학교를 충분히
                이해할 수 있도록 단계별로 진행합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
              {admissionSteps.map((step, index) => (
                <article
                  key={step.step}
                  style={{
                    transitionDelay: isProcessVisible
                      ? `${150 + index * 100}ms`
                      : "0ms",
                  }}
                  className={`group relative flex min-h-[300px] flex-col rounded-2xl border border-[#e1e6ed] bg-[#f9fbfd] p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#b9cee2] hover:bg-white hover:shadow-lg ${
                    isProcessVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <span className="text-4xl font-black text-[#d9e8f7] transition-colors group-hover:text-[#bfd8ef]">
                    {step.step}
                  </span>

                  <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2ff] text-[#2f7df4] transition-all group-hover:bg-[#155b94] group-hover:text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-lg font-bold leading-7 text-[#142033] transition-colors group-hover:text-[#155b94]">
                    {step.title}
                  </h3>

                  <p className="mt-4 break-keep text-sm leading-6 text-[#748093]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section
          ref={formRef}
          className="min-h-[900px] bg-[#f4f7fb] py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div
              className={`mb-12 text-center transition-all duration-700 ease-out ${
                isFormVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf2ff] text-[#2f7df4]">
                <MessageSquare className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#3b82f6]">
                ONLINE CONSULTATION
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#142033] md:text-4xl">
                온라인 입학 상담 신청
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-keep text-sm leading-7 text-[#748093] md:text-base">
                자녀 교육과 입학에 관한 궁금한 내용을 남겨주시면 담당자가
                확인 후 연락드리겠습니다.
              </p>
            </div>

            <div
              className={`overflow-hidden rounded-2xl border border-[#e1e6ed] bg-white p-7 shadow-sm transition-all delay-150 duration-700 ease-out sm:p-10 ${
                isFormVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    label="학부모 성함"
                    required
                  >
                    <Input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="예: 홍길동"
                      className="h-12 rounded-xl border-[#dfe5ec]"
                    />
                  </FormField>

                  <FormField label="연락처" required>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="예: 010-1234-5678"
                      className="h-12 rounded-xl border-[#dfe5ec]"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <FormField label="학생 이름" required>
                    <Input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="학생 이름"
                      className="h-12 rounded-xl border-[#dfe5ec]"
                    />
                  </FormField>

                  <FormField label="희망 학년" required>
                    <Select
                      value={formData.studentGrade}
                      onValueChange={handleGradeChange}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-[#dfe5ec]">
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="초등부">
                          초등부 (1~6학년)
                        </SelectItem>
                        <SelectItem value="중등부">
                          중등부 (7~9학년)
                        </SelectItem>
                        <SelectItem value="고등부">
                          고등부 (10~12학년)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>

                  <FormField label="이메일 주소">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className="h-12 rounded-xl border-[#dfe5ec]"
                    />
                  </FormField>
                </div>

                <FormField label="상담 및 문의 내용">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="자녀의 성향, 교육적 고민 또는 입학 전형에 관해 궁금한 내용을 적어주세요."
                    className="min-h-[150px] resize-none rounded-xl border-[#dfe5ec]"
                  />
                </FormField>

                <Button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#155b94] text-base font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#104d7f] hover:shadow-md"
                >
                  상담 신청서 제출하기
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({
  label,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-[#344054]">
        {label}

        {required && (
          <span className="ml-1 text-[#2f7df4]">*</span>
        )}
      </label>

      {children}
    </div>
  );
}