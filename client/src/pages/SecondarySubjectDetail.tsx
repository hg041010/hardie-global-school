import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, GraduationCap } from "lucide-react";

import Layout from "@/components/Layout";
import SubjectPage from "@/components/subject/SubjectPage";
import { secondarySubjects } from "@/data/secondarySubjects";

type SubjectParams = {
  id?: string;
};

export default function SecondarySubjectDetail() {
  const params = useParams<SubjectParams>();
  const subjectId = params.id ?? "";

  const subject =
    secondarySubjects[subjectId as keyof typeof secondarySubjects];

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".subject-detail-reveal");

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
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [subjectId]);

  if (!subject) {
    return <ComingSoonSubject subjectId={subjectId} />;
  }

  return <SubjectPage subject={subject} />;
}

function ComingSoonSubject({ subjectId }: { subjectId: string }) {
  const subjectNames: Record<string, string> = {
    korean: "국어",
    english: "영어",
    math: "수학",
    social: "사회",
    science: "과학",
    music: "음악",
    art: "미술",
    "physical-education": "체육",
    "liberal-it": "교양수업·진로·IT",
  };

  const subjectName = subjectNames[subjectId] ?? "교과목";

  return (
    <Layout>
      <section className="flex min-h-[70vh] items-center bg-[#f6f9fa] py-24">
        <div className="container max-w-3xl px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e9f6f3] text-[#168b7a]">
            <GraduationCap className="h-8 w-8" />
          </div>

          <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.24em] text-[#168b7a]">
            Secondary Subject Curriculum
          </p>

          <h1 className="mt-4 font-serif text-4xl font-extrabold text-[#122033] sm:text-5xl">
            {subjectName}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            해당 교과목의 상세 교육과정 페이지를 준비하고 있습니다.
          </p>

          <Link href="/curriculum/middle-high">
            <button
              type="button"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#168b7a] px-7 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1 hover:bg-[#117969]"
            >
              <ArrowLeft className="h-4 w-4" />
              중·고등 교과목으로 돌아가기
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}