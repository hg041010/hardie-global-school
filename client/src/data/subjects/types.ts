import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type SubjectTheme = {
  accent: string;
  accentDark: string;
  accentLight: string;
  accentPale: string;
  accentBorder: string;

  heroFrom: string;
  heroVia: string;
  heroTo: string;

  darkSection: string;
  darkSectionSoft: string;
  labelText: string;
};

export type CompetencyItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type LearningArea = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export type GradeDetail = {
  grade: string;
  title: string;
  description: string;
  subjects?: string[];
  activities?: string[];
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SubjectData = {
  id: string;

  name: string;
  englishName: string;
  subtitle: string;

  heroDescription: ReactNode;
  heroImage: string;

  introEyebrow: string;
  introTitle: ReactNode;
  introParagraphs: string[];

  quote: ReactNode;
  quoteDescription: string;
  tags: string[];

  competenciesTitle: string;
  competenciesDescription: string;
  competencies: CompetencyItem[];

  learningAreasTitle: string;
  learningAreasDescription: string;
  learningAreas: LearningArea[];

  gradeSectionEyebrow: string;
  gradeSectionTitle: string;
  gradeSectionDescription: string;
  gradeDetails: GradeDetail[];

  featureEyebrow: string;
  featureTitle: ReactNode;
  featureDescription: string;
  featureImage: string;
  featureImageAlt: string;
  featureBadge: string;
  featureBadgeSubtitle: string;
  featureItems: FeatureItem[];

  processTitle: string;
  processDescription: string;
  process: ProcessStep[];

  growthTitle: ReactNode;
  growthDescription: string;
  growthHighlight: string;
  growthPoints: string[];

  nextSubjectId: string;
  nextSubjectName: string;

  backLink?: string;
  backText?: string;
  backOverviewText?: string;
  subjectBasePath?: string;

  theme: SubjectTheme;
};