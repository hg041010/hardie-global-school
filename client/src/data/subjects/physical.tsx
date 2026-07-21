import {
  Activity,
  Dumbbell,
  Goal,
  Heart,
  Medal,
  Move,
  Shield,
  Smile,
  Timer,
  Users,
} from "lucide-react";

import type { SubjectData } from "./types";

export const physicalSubject: SubjectData = {
  id: "physical",

  name: "체육",
  englishName: "Physical Education & Wellness",
  subtitle: "건강과 협력",

  heroDescription: (
    <>
      몸을 움직이며 건강을 키우고,
      <br className="hidden sm:block" />
      함께 배우며 성장하는 즐거움을 경험합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Physical Education",

  introTitle: (
    <>
      건강한 몸과 마음으로
      <br />
      함께 성장하는 체육
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 체육 교육은 단순히 운동 기능을 익히는 것을 넘어 건강한 생활 습관과 협력하는 태도를 함께 기르는 데 목적이 있습니다.",
    "학생들은 다양한 신체 활동을 경험하며 자신의 몸을 이해하고, 친구들과 함께 도전하고 협력하는 과정 속에서 자신감과 책임감을 키워 갑니다.",
    "승패보다 과정과 배려를 중요하게 생각하며, 평생 즐길 수 있는 건강한 신체 활동 문화를 만들어 갑니다.",
  ],

  quote: (
    <>
      움직이며 배우고,
      <br />
      함께 도전하며,
      <br />
      건강하게 성장합니다.
    </>
  ),

  quoteDescription:
    "체육은 몸을 단련하는 시간을 넘어 서로를 존중하고 협력하며 건강한 삶의 습관을 만들어 가는 과정입니다.",

  tags: [
    "건강",
    "협력",
    "도전",
    "운동",
    "스포츠",
    "생활습관",
  ],

  competenciesTitle: "체육 교육의 핵심 역량",

  competenciesDescription:
    "신체 활동을 통해 건강한 생활 습관을 형성하고 협력과 도전 정신을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Heart,
      title: "건강 관리",
      description:
        "규칙적인 신체 활동과 올바른 생활 습관을 통해 건강을 스스로 관리합니다.",
    },
    {
      number: "02",
      icon: Activity,
      title: "운동 수행",
      description:
        "기초 체력과 다양한 운동 기능을 익히며 몸을 효과적으로 움직이는 능력을 기릅니다.",
    },
    {
      number: "03",
      icon: Users,
      title: "협력과 스포츠맨십",
      description:
        "규칙을 지키고 친구들과 협력하며 서로를 존중하는 태도를 기릅니다.",
    },
    {
      number: "04",
      icon: Goal,
      title: "도전 정신",
      description:
        "새로운 활동에 적극적으로 참여하며 실패를 두려워하지 않고 꾸준히 도전합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "기초 체력부터 스포츠 활동, 건강한 생활 습관까지 균형 있게 배우며 몸과 마음을 함께 성장시킵니다.",

  learningAreas: [
    {
      icon: Dumbbell,
      eyebrow: "Fitness",
      title: "기초 체력",
      description:
        "유연성, 근력, 지구력, 균형감각 등 건강한 신체 활동의 기초를 다집니다.",
      points: [
        "유연성",
        "근력과 근지구력",
        "평형성",
        "심폐지구력",
      ],
    },
    {
      icon: Medal,
      eyebrow: "Sports",
      title: "스포츠 활동",
      description:
        "다양한 스포츠와 게임을 경험하며 규칙과 협력의 중요성을 배웁니다.",
      points: [
        "구기 활동",
        "뉴스포츠",
        "팀 스포츠",
        "개인 스포츠",
      ],
    },
    {
      icon: Move,
      eyebrow: "Movement",
      title: "표현 활동",
      description:
        "신체 움직임을 활용하여 리듬과 창의적인 표현 활동을 경험합니다.",
      points: [
        "리듬 운동",
        "신체 표현",
        "창작 움직임",
        "협동 활동",
      ],
    },
    {
      icon: Shield,
      eyebrow: "Safety & Wellness",
      title: "건강과 안전",
      description:
        "운동 안전 수칙과 올바른 생활 습관을 익혀 건강한 삶을 실천합니다.",
      points: [
        "운동 안전",
        "응급처치 기초",
        "생활 습관",
        "건강 관리",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 놀이 중심 신체 활동에서 시작하여 협동 스포츠와 건강 관리까지 단계적으로 성장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "몸을 즐겁게 움직이기",
      description:
        "달리기와 뛰기, 던지기 등 기초 움직임을 다양한 놀이 속에서 익히며 신체 활동의 즐거움을 경험합니다.",
      subjects: [
        "기초 움직임",
        "놀이 활동",
        "균형 잡기",
        "안전한 운동",
      ],
      activities: [
        "장애물 놀이",
        "공 던지고 받기",
        "균형 잡기 게임",
        "신체 놀이",
      ],
    },
    {
      grade: "2학년",
      title: "다양한 움직임 익히기",
      description:
        "신체를 여러 방식으로 움직이며 협동 놀이를 통해 친구들과 함께 활동하는 즐거움을 경험합니다.",
      subjects: [
        "달리기",
        "점프",
        "협동 놀이",
        "기초 체력",
      ],
      activities: [
        "이어달리기",
        "줄넘기",
        "협동 게임",
        "기초 체조",
      ],
    },
    {
      grade: "3학년",
      title: "기초 스포츠 경험하기",
      description:
        "간단한 스포츠 규칙을 이해하고 다양한 운동 기능을 익히며 스포츠의 기본을 배웁니다.",
      subjects: [
        "축구 기초",
        "농구 기초",
        "배드민턴",
        "체력 운동",
      ],
      activities: [
        "드리블 연습",
        "패스 게임",
        "라켓 다루기",
        "체력 측정",
      ],
    },
    {
      grade: "4학년",
      title: "협력하며 운동하기",
      description:
        "팀 스포츠를 경험하며 역할을 나누고 협력하는 방법과 스포츠맨십을 배웁니다.",
      subjects: [
        "팀 스포츠",
        "전략",
        "협동",
        "리듬 운동",
      ],
      activities: [
        "미니 경기",
        "작전 세우기",
        "협동 미션",
        "리듬 체조",
      ],
    },
    {
      grade: "5학년",
      title: "건강한 생활 습관 기르기",
      description:
        "체력 향상과 건강 관리의 중요성을 이해하고 스스로 운동 계획을 세우는 경험을 합니다.",
      subjects: [
        "체력 관리",
        "운동 계획",
        "생활 습관",
        "뉴스포츠",
      ],
      activities: [
        "운동 일지 작성",
        "체력 향상 프로그램",
        "뉴스포츠 체험",
        "건강 캠페인",
      ],
    },
    {
      grade: "6학년",
      title: "평생 즐기는 운동 문화 만들기",
      description:
        "다양한 스포츠를 경험하며 자신의 건강을 관리하고 평생 실천할 수 있는 운동 습관을 형성합니다.",
      subjects: [
        "평생 스포츠",
        "리더십",
        "건강 관리",
        "스포츠 문화",
      ],
      activities: [
        "학급 스포츠 리그",
        "운동 계획 발표",
        "팀 프로젝트",
        "건강 생활 실천",
      ],
    },
  ],

  featureEyebrow: "Healthy Lifestyle",

  featureTitle: (
    <>
      경쟁보다 성장,
      <br />
      승리보다 건강을 배웁니다
    </>
  ),

  featureDescription:
    "체육 수업에서는 기록과 승패보다 학생 한 명 한 명이 자신의 몸을 이해하고 건강하게 성장하는 과정을 중요하게 생각합니다. 다양한 스포츠와 협동 활동을 통해 자신감과 배려를 함께 키웁니다.",

  featureImage:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "학생들의 체육 활동",

  featureBadge: "Healthy Growth",

  featureBadgeSubtitle: "몸과 마음이 함께 자라는 시간",

  featureItems: [
    {
      title: "다양한 신체 활동",
      description:
        "학생들의 흥미와 수준을 고려한 다양한 운동과 스포츠를 경험합니다.",
    },
    {
      title: "협력 중심 수업",
      description:
        "경쟁보다 협력과 배려를 배우며 함께 성장하는 문화를 만듭니다.",
    },
    {
      title: "평생 건강 습관",
      description:
        "학교를 넘어 일상에서도 실천할 수 있는 건강한 생활 습관을 기릅니다.",
    },
  ],

  processTitle: "체육 수업의 배움 과정",

  processDescription:
    "몸을 준비하고 운동을 익힌 뒤 함께 활동하며 자신의 건강을 돌아보는 과정을 반복합니다.",

  process: [
    {
      number: "01",
      icon: Smile,
      title: "준비하기",
      description:
        "스트레칭과 준비 운동을 통해 안전하게 몸을 준비합니다.",
    },
    {
      number: "02",
      icon: Activity,
      title: "배우기",
      description:
        "기초 동작과 운동 기술을 익히며 몸의 움직임을 이해합니다.",
    },
    {
      number: "03",
      icon: Users,
      title: "함께 활동하기",
      description:
        "친구들과 협력하며 스포츠와 다양한 신체 활동을 경험합니다.",
    },
    {
      number: "04",
      icon: Timer,
      title: "돌아보기",
      description:
        "활동을 되돌아보며 건강한 생활 습관과 다음 목표를 세웁니다.",
    },
  ],

  growthTitle: (
    <>
      체육 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 운동을 즐거운 경험으로 받아들이고, 건강한 몸과 마음을 바탕으로 다른 사람과 함께 성장하는 태도를 기르도록 돕습니다.",

  growthHighlight:
    "건강한 몸과 마음을 바탕으로 도전하고 협력하며 평생 운동을 즐기는 사람으로 성장합니다.",

  growthPoints: [
    "규칙적인 신체 활동을 생활화합니다.",
    "기초 체력과 운동 기능을 균형 있게 기릅니다.",
    "규칙과 스포츠맨십을 실천합니다.",
    "협력과 배려의 가치를 배웁니다.",
    "건강한 생활 습관을 스스로 실천합니다.",
  ],

  nextSubjectId: "character",
  nextSubjectName: "교양",

  theme: {
    accent: "#2e8b57",
    accentDark: "#206442",
    accentLight: "#54b97f",
    accentPale: "#eefbf3",
    accentBorder: "#bfe7d0",

    heroFrom: "#0d2b1c",
    heroVia: "#226f49",
    heroTo: "#53b87e",

    darkSection: "#123624",
    darkSectionSoft: "#1c5035",
    labelText: "#c8f0d8",
  },
};