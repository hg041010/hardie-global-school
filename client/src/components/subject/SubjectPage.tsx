import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Heart,
  Quote,
} from "lucide-react";

import Layout from "@/components/Layout";
import type { SubjectData } from "@/data/subjects/types";

type SubjectPageProps = {
  subject: SubjectData;
};

export default function SubjectPage({ subject }: SubjectPageProps) {
  const theme = subject.theme;
  const backLink = subject.backLink ?? "/curriculum/elementary";
  const backText = subject.backText ?? "초등 교과목으로 돌아가기";
  const backOverviewText = subject.backOverviewText ?? "초등 교과목 전체";
  const subjectBasePath =
    subject.subjectBasePath ?? "/curriculum/elementary/subjects";

  return (
    <Layout>
      <style>{`
        .subject-detail-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .subject-detail-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .subject-detail-delay-1 {
          transition-delay: 0.08s;
        }

        .subject-detail-delay-2 {
          transition-delay: 0.16s;
        }

        .subject-detail-delay-3 {
          transition-delay: 0.24s;
        }

        .subject-detail-delay-4 {
          transition-delay: 0.32s;
        }

        @media (prefers-reduced-motion: reduce) {
          .subject-detail-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden sm:min-h-[560px]">
        <div className="absolute inset-0">
          <img
            src={subject.heroImage}
            alt={`${subject.name} 교육`}
            className="h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${theme.heroFrom}f5, ${theme.heroVia}d9, ${theme.heroTo}70)`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
        </div>

        <div className="container relative z-10 max-w-6xl px-4 py-24 sm:py-28">
          <div className="subject-detail-reveal max-w-3xl">
            <Link href={backLink}>
              <div className="mb-12 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                <span>{backText}</span>
              </div>
            </Link>

            <h1 className="font-serif text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              {subject.name}
            </h1>

            <p
              className="mt-4 font-serif text-xl font-semibold sm:text-2xl"
              style={{ color: theme.labelText }}
            >
              {subject.subtitle}
            </p>

            <div
              className="mt-7 h-1.5 w-16 rounded-full"
              style={{ backgroundColor: theme.accentLight }}
            />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              {subject.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <div className="subject-detail-reveal">
              <p
                className="text-sm font-extrabold uppercase tracking-[0.24em]"
                style={{ color: theme.accent }}
              >
                {subject.introEyebrow}
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-[#202737] sm:text-4xl">
                {subject.introTitle}
              </h2>

              <div
                className="mt-6 h-1 w-14 rounded-full"
                style={{ backgroundColor: theme.accentLight }}
              />

              <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
                {subject.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="subject-detail-reveal subject-detail-delay-2">
              <div
                className="relative overflow-hidden rounded-[32px] p-8 shadow-[0_25px_70px_rgba(25,35,90,0.13)] sm:p-10"
                style={{ backgroundColor: theme.accentPale }}
              >
                <div
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-10"
                  style={{ backgroundColor: theme.accent }}
                />

                <div
                  className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full opacity-15"
                  style={{ backgroundColor: theme.accentLight }}
                />

                <div className="relative">
                  <Quote
                    className="h-11 w-11 opacity-40"
                    style={{ color: theme.accent }}
                  />

                  <blockquote className="mt-6 font-serif text-2xl font-extrabold leading-[1.65] text-[#252b3b] sm:text-[28px]">
                    {subject.quote}
                  </blockquote>

                  <div
                    className="mt-8 border-t pt-6"
                    style={{ borderColor: theme.accentBorder }}
                  >
                    <p className="text-sm leading-7 text-slate-600">
                      {subject.quoteDescription}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {subject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-white/80 px-4 py-2 text-sm font-semibold"
                        style={{
                          borderColor: theme.accentBorder,
                          color: theme.accentDark,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="border-y border-slate-100 bg-[#f7f8fb] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <SectionHeading
            eyebrow="Core Competencies"
            title={subject.competenciesTitle}
            description={subject.competenciesDescription}
            accent={theme.accent}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subject.competencies.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`subject-detail-reveal subject-detail-delay-${
                    index + 1
                  } group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                >
                  <span
                    className="absolute right-5 top-4 font-serif text-5xl font-black opacity-[0.08]"
                    style={{ color: theme.accent }}
                  >
                    {item.number}
                  </span>

                  <div className="relative">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: theme.accentPale,
                        color: theme.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 font-serif text-xl font-extrabold text-[#202737]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <SectionHeading
            eyebrow="Learning Areas"
            title={subject.learningAreasTitle}
            description={subject.learningAreasDescription}
            accent={theme.accent}
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {subject.learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className={`subject-detail-reveal subject-detail-delay-${
                    (index % 2) + 1
                  } group rounded-[30px] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(25,38,60,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(25,38,60,0.12)] sm:p-9`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: theme.accentPale,
                        color: theme.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p
                        className="text-[10px] font-extrabold uppercase tracking-[0.2em]"
                        style={{ color: theme.accent }}
                      >
                        {area.eyebrow}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl font-extrabold text-[#202737]">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-[15px] leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <ul className="mt-6 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: theme.accentPale,
                            color: theme.accent,
                          }}
                        >
                          <Check className="h-3 w-3" />
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

            {/* Grade-Level Curriculum */}
      <section className="overflow-hidden border-y border-slate-100 bg-[#f7f8fb] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <SectionHeading
            eyebrow={subject.gradeSectionEyebrow}
            title={subject.gradeSectionTitle}
            description={subject.gradeSectionDescription}
            accent={theme.accent}
          />

          <div className="subject-detail-reveal mt-14 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(25,38,60,0.08)]">
            {subject.gradeDetails.map((grade, index) => (
              <article
                key={grade.grade}
                className={`grid gap-8 px-7 py-10 sm:px-10 sm:py-11 lg:grid-cols-[190px_1fr] lg:gap-12 lg:px-12 lg:py-12 ${
                  index !== subject.gradeDetails.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                {/* Grade */}
                <div>
                  <h3
                    className="font-serif text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl"
                    style={{ color: theme.accent }}
                  >
                    {grade.grade}
                  </h3>

                  <div
                    className="mt-6 h-1 w-12 rounded-full"
                    style={{ backgroundColor: theme.accentLight }}
                  />
                </div>

                {/* Grade details */}
                <div
                  style={{
                    fontFamily:
                      'Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
                  }}
                >
                  <h4 className="text-[24px] font-extrabold leading-[1.45] tracking-[-0.035em] text-[#1f2d42] sm:text-[26px]">
                    {grade.title}
                  </h4>

                  <p className="mt-5 text-[16px] font-normal leading-[2] tracking-[-0.018em] text-[#43536a] sm:text-[17px]">
                    {grade.description}
                  </p>

                  {(grade.subjects?.length || grade.activities?.length) && (
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      {/* Main learning content */}
                      {grade.subjects && grade.subjects.length > 0 && (
                        <div
                          className="rounded-[22px] border px-6 py-6 sm:px-7 sm:py-7"
                          style={{
                            backgroundColor: theme.accentPale,
                            borderColor: theme.accentBorder,
                          }}
                        >
                          <p
                            className="text-[14px] font-extrabold tracking-[0.09em]"
                            style={{ color: theme.accent }}
                          >
                            주요 학습 내용
                          </p>

                          <ul className="mt-5 space-y-3.5">
                            {grade.subjects.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3.5 text-[15px] font-medium leading-7 tracking-[-0.018em] text-[#34445a] sm:text-[16px]"
                              >
                                <span
                                  className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full"
                                  style={{ backgroundColor: theme.accent }}
                                />

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Class activities */}
                      {grade.activities && grade.activities.length > 0 && (
                        <div className="rounded-[22px] border border-slate-200 bg-[#fafbfd] px-6 py-6 sm:px-7 sm:py-7">
                          <p
                            className="text-[14px] font-extrabold tracking-[0.09em]"
                            style={{ color: theme.accent }}
                          >
                            대표 수업 활동
                          </p>

                          <ul className="mt-5 space-y-3.5">
                            {grade.activities.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3.5 text-[15px] font-medium leading-7 tracking-[-0.018em] text-[#34445a] sm:text-[16px]"
                              >
                                <Check
                                  className="mt-1.5 h-4 w-4 shrink-0"
                                  strokeWidth={2.2}
                                  style={{ color: theme.accent }}
                                />

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Feature Program */}
      <section
        className="overflow-hidden py-20 text-white sm:py-24"
        style={{ backgroundColor: theme.darkSection }}
      >
        <div className="container max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="subject-detail-reveal">
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src={subject.featureImage}
                  alt={subject.featureImageAlt}
                  className="h-[440px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/25 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Globe2
                      className="h-6 w-6"
                      style={{ color: theme.labelText }}
                    />

                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-[0.18em]"
                        style={{ color: theme.labelText }}
                      >
                        {subject.featureBadge}
                      </p>

                      <p className="mt-1 font-serif text-lg font-extrabold">
                        {subject.featureBadgeSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="subject-detail-reveal subject-detail-delay-2">
              <p
                className="text-sm font-extrabold uppercase tracking-[0.24em]"
                style={{ color: theme.labelText }}
              >
                {subject.featureEyebrow}
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight sm:text-4xl">
                {subject.featureTitle}
              </h2>

              <div
                className="mt-6 h-1 w-14 rounded-full"
                style={{ backgroundColor: theme.accentLight }}
              />

              <p className="mt-7 text-[16px] leading-8 text-white/80">
                {subject.featureDescription}
              </p>

              <div className="mt-8 space-y-4">
                {subject.featureItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 p-5"
                    style={{ backgroundColor: theme.darkSectionSoft }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${theme.accent}35`,
                          color: theme.labelText,
                        }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>

                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="bg-[#f7f8fb] py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <SectionHeading
            eyebrow="Learning Process"
            title={subject.processTitle}
            description={subject.processDescription}
            accent={theme.accent}
          />

          <div className="relative mt-14">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px lg:block"
              style={{ backgroundColor: theme.accentBorder }}
            />

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {subject.process.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className={`subject-detail-reveal subject-detail-delay-${
                      index + 1
                    } relative text-center`}
                  >
                    <div
                      className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f7f8fb] text-white shadow-lg"
                      style={{ backgroundColor: theme.accent }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <p
                        className="text-xs font-extrabold tracking-[0.18em]"
                        style={{ color: theme.accent }}
                      >
                        STEP {step.number}
                      </p>

                      <h3 className="mt-3 font-serif text-xl font-extrabold text-[#202737]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Student Growth */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="subject-detail-reveal">
              <p
                className="text-sm font-extrabold uppercase tracking-[0.24em]"
                style={{ color: theme.accent }}
              >
                Student Growth
              </p>

              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-[#202737] sm:text-4xl">
                {subject.growthTitle}
              </h2>

              <div
                className="mt-6 h-1 w-14 rounded-full"
                style={{ backgroundColor: theme.accentLight }}
              />

              <p className="mt-7 text-[16px] leading-8 text-slate-600">
                {subject.growthDescription}
              </p>

              <div
                className="mt-8 flex items-center gap-4 rounded-2xl p-5"
                style={{ backgroundColor: theme.accentPale }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  <Heart className="h-6 w-6" />
                </div>

                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {subject.growthHighlight}
                </p>
              </div>
            </div>

            <div className="subject-detail-reveal subject-detail-delay-2">
              <div className="rounded-[32px] border border-slate-100 bg-[#f8f9fc] p-7 sm:p-9">
                <ul className="space-y-4">
                  {subject.growthPoints.map((point, index) => (
                    <li
                      key={point}
                      className="flex items-start gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm"
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-serif text-sm font-extrabold"
                        style={{
                          backgroundColor: theme.accentPale,
                          color: theme.accent,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-[15px] font-medium leading-7 text-slate-700">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-slate-100 bg-[#f7f8fb] py-16 sm:py-20">
        <div className="container max-w-6xl px-4">
          <div className="subject-detail-reveal grid gap-5 md:grid-cols-3">
            <Link href={backLink}>
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Previous
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#202737]">
                    {backOverviewText}
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 rotate-180 text-slate-400 transition-all group-hover:-translate-x-1" />
              </div>
            </Link>

            <Link
              href={`${subjectBasePath}/${subject.nextSubjectId}`}
            >
              <div className="group flex h-full cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Next Subject
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold text-[#202737]">
                    {subject.nextSubjectName}
                  </h3>
                </div>

                <ChevronRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/curriculum/overview">
              <div
                className="group flex h-full cursor-pointer items-center justify-between rounded-3xl p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: theme.accent }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Curriculum
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-extrabold">
                    교과과정 전체보기
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="subject-detail-reveal mx-auto max-w-3xl text-center">
      <p
        className="text-sm font-extrabold uppercase tracking-[0.24em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#202737] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[17px]">
        {description}
      </p>
    </div>
  );
}