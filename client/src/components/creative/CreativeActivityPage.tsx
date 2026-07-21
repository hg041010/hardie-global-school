import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";

export type ActivityCard = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export type ActivityStep = {
  number: string;
  title: string;
  description: string;
};

export type CreativeActivityData = {
  name: string;
  englishName: string;
  subtitle: string;

  heroDescription: string;
  heroImage: string;

  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];

  quote: string;
  quoteDescription: string;
  tags: string[];

  purposeTitle: string;
  purposeDescription: string;
  purposes: ActivityCard[];

  programTitle: string;
  programDescription: string;
  programs: ActivityCard[];

  featureEyebrow: string;
  featureTitle: string;
  featureDescription: string;
  featureImage: string;
  featureImageAlt: string;

  processTitle: string;
  processDescription: string;
  process: ActivityStep[];

  growthTitle: string;
  growthDescription: string;
  growthPoints: string[];

  nextLink?: string;
  nextName?: string;

  backLink?: string;
  backText?: string;

  theme: {
    accent: string;
    accentDark: string;
    accentPale: string;
    accentBorder: string;

    heroFrom: string;
    heroVia: string;
    heroTo: string;

    darkSection: string;
    labelText: string;
  };
};

type CreativeActivityPageProps = {
  data: CreativeActivityData;
};

export default function CreativeActivityPage({
  data,
}: CreativeActivityPageProps) {
  const backLink =
    data.backLink ?? "/curriculum/creative-activities";

  const backText =
    data.backText ?? "창의적 체험학습으로 돌아가기";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          background: `linear-gradient(
            135deg,
            ${data.theme.heroFrom},
            ${data.theme.heroVia},
            ${data.theme.heroTo}
          )`,
        }}
      >
        <img
          src={data.heroImage}
          alt={data.name}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 -z-10 bg-black/30" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <Link
            href={backLink}
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            {backText}
          </Link>

          <p
            className="mb-5 text-sm font-bold uppercase tracking-[0.28em]"
            style={{
              color: data.theme.labelText,
            }}
          >
            {data.englishName}
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            {data.name}
          </h1>

          <p className="mt-5 text-lg font-semibold text-white/75 md:text-xl">
            {data.subtitle}
          </p>

          <p className="mt-10 max-w-3xl whitespace-pre-line text-xl leading-9 text-white/90 md:text-2xl">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div>
          <p
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{
              color: data.theme.accent,
            }}
          >
            {data.introEyebrow}
          </p>

          <h2 className="mt-5 whitespace-pre-line text-4xl font-black leading-tight md:text-5xl">
            {data.introTitle}
          </h2>

          <div className="mt-9 space-y-5 text-lg leading-8 text-slate-600">
            {data.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div
          className="rounded-[2rem] border p-9 md:p-12"
          style={{
            backgroundColor: data.theme.accentPale,
            borderColor: data.theme.accentBorder,
          }}
        >
          <p
            className="whitespace-pre-line text-3xl font-black leading-snug"
            style={{
              color: data.theme.accentDark,
            }}
          >
            {data.quote}
          </p>

          <p className="mt-6 text-base leading-7 text-slate-600">
            {data.quoteDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border bg-white px-4 py-2 text-sm font-bold"
                style={{
                  color: data.theme.accentDark,
                  borderColor: data.theme.accentBorder,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{
              color: data.theme.accent,
            }}
          >
            Purpose
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {data.purposeTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {data.purposeDescription}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.purposes.map(
              ({
                icon: Icon,
                eyebrow,
                title,
                description,
                points,
              }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: data.theme.accentPale,
                      color: data.theme.accent,
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <p
                    className="mt-7 text-xs font-black uppercase tracking-[0.24em]"
                    style={{
                      color: data.theme.accent,
                    }}
                  >
                    {eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2
                          size={17}
                          style={{
                            color: data.theme.accent,
                          }}
                        />

                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <p
          className="text-sm font-bold uppercase tracking-[0.25em]"
          style={{
            color: data.theme.accent,
          }}
        >
          Main Programs
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          {data.programTitle}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {data.programDescription}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.programs.map(
            ({
              icon: Icon,
              eyebrow,
              title,
              description,
              points,
            }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  size={30}
                  style={{
                    color: data.theme.accent,
                  }}
                />

                <p
                  className="mt-6 text-xs font-black uppercase tracking-[0.24em]"
                  style={{
                    color: data.theme.accent,
                  }}
                >
                  {eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Feature */}
      <section
        className="overflow-hidden text-white"
        style={{
          backgroundColor: data.theme.darkSection,
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <img
            src={data.featureImage}
            alt={data.featureImageAlt}
            className="h-full min-h-[420px] w-full object-cover"
          />

          <div className="px-6 py-20 lg:px-16 lg:py-24">
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: data.theme.labelText,
              }}
            >
              {data.featureEyebrow}
            </p>

            <h2 className="mt-5 whitespace-pre-line text-4xl font-black leading-tight md:text-5xl">
              {data.featureTitle}
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/75">
              {data.featureDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{
              color: data.theme.accent,
            }}
          >
            Learning Process
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {data.processTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {data.processDescription}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.5rem] bg-white p-7 shadow-sm"
              >
                <p
                  className="text-sm font-black"
                  style={{
                    color: data.theme.accent,
                  }}
                >
                  STEP {step.number}
                </p>

                <h3 className="mt-5 text-xl font-black">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <h2 className="whitespace-pre-line text-4xl font-black leading-tight md:text-5xl">
          {data.growthTitle}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {data.growthDescription}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {data.growthPoints.map((point, index) => (
            <div
              key={point}
              className="flex gap-4 rounded-2xl border border-slate-200 p-5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                style={{
                  backgroundColor: data.theme.accent,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="pt-1 font-semibold leading-7 text-slate-700">
                {point}
              </p>
            </div>
          ))}
        </div>

        {data.nextLink && data.nextName && (
          <Link
            href={data.nextLink}
            className="mt-16 inline-flex items-center gap-3 text-lg font-black"
            style={{
              color: data.theme.accent,
            }}
          >
            다음 프로그램: {data.nextName}
            <ArrowRight size={22} />
          </Link>
        )}
      </section>
    </main>
  );
}