import {
  BookMarked,
  BookOpen,
  Globe2,
  Headphones,
  MessageCircle,
  Mic2,
  PenLine,
  Sparkles,
} from "lucide-react";

import type { SubjectData } from "./types";

export const englishSubject: SubjectData = {
  id: "english",

  name: "영어",
  englishName: "English & Global Communication",
  subtitle: "글로벌 이중언어",

  heroDescription: (
    <>
      영어를 자연스럽게 듣고 표현하며,
      <br className="hidden sm:block" />
      세계와 소통하는 자신감을 기릅니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "English Education",

  introTitle: (
    <>
      언어를 배우며
      <br />
      더 넓은 세계와 연결됩니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 영어 교육은 시험을 위한 지식 습득에 머무르지 않고, 학생들이 영어를 실제 의사소통의 도구로 자연스럽게 활용하도록 돕습니다.",
    "학생들은 영어 노래와 이야기, 대화와 발표 등 다양한 활동을 통해 듣기와 말하기의 기초를 쌓고 읽기와 쓰기로 배움을 확장합니다.",
    "한국어를 바탕으로 영어를 함께 익히며 서로 다른 언어와 문화를 존중하고, 세계를 향해 자신 있게 생각을 표현하는 힘을 기릅니다.",
  ],

  quote: (
    <>
      즐겁게 듣고,
      <br />
      자신 있게 말하며,
      <br />
      세계와 소통합니다.
    </>
  ),

  quoteDescription:
    "영어는 학생들에게 새로운 사람과 문화, 지식을 만날 수 있는 창입니다. 언어에 대한 두려움보다 소통의 즐거움을 먼저 경험하도록 교육합니다.",

  tags: [
    "Listening",
    "Speaking",
    "Reading",
    "Writing",
    "Presentation",
    "Culture",
  ],

  competenciesTitle: "영어 교육의 핵심 역량",

  competenciesDescription:
    "듣기, 말하기, 읽기, 쓰기를 실제 상황 속에서 균형 있게 익히며 영어 의사소통의 자신감을 키웁니다.",

  competencies: [
    {
      number: "01",
      icon: Headphones,
      title: "듣고 이해하기",
      description:
        "친숙한 낱말과 표현, 이야기와 대화를 듣고 중요한 내용과 상황을 이해합니다.",
    },
    {
      number: "02",
      icon: Mic2,
      title: "말하고 소통하기",
      description:
        "일상적인 상황에서 자신의 생각과 감정을 영어로 자연스럽고 자신 있게 표현합니다.",
    },
    {
      number: "03",
      icon: BookOpen,
      title: "읽고 발견하기",
      description:
        "다양한 영어 글과 이야기를 읽으며 어휘와 문장 구조를 익히고 의미를 발견합니다.",
    },
    {
      number: "04",
      icon: PenLine,
      title: "쓰고 표현하기",
      description:
        "낱말과 문장에서 시작하여 자신의 경험과 생각을 영어 글로 차근차근 표현합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "듣기, 말하기, 읽기와 쓰기를 서로 연결하여 실제 생활 속에서 영어를 사용하는 능력을 키웁니다.",

  learningAreas: [
    {
      icon: Headphones,
      eyebrow: "Listening",
      title: "듣기",
      description:
        "영어 노래와 이야기, 일상 대화를 반복해서 들으며 영어의 소리와 의미를 자연스럽게 연결합니다.",
      points: [
        "친숙한 낱말과 표현 이해",
        "영어 노래와 챈트 듣기",
        "이야기의 흐름과 핵심 내용 파악",
        "상황에 맞는 지시와 질문 이해",
      ],
    },
    {
      icon: Mic2,
      eyebrow: "Speaking",
      title: "말하기",
      description:
        "교실과 생활 속 다양한 상황에서 영어를 사용하며 정확성보다 먼저 표현하는 용기를 기릅니다.",
      points: [
        "인사와 자기소개",
        "질문하고 대답하기",
        "역할극과 상황 대화",
        "짧은 발표와 이야기 나누기",
      ],
    },
    {
      icon: BookMarked,
      eyebrow: "Reading",
      title: "읽기",
      description:
        "그림책과 단계별 영어책, 다양한 주제의 글을 읽으며 어휘력과 영어 문해력을 함께 확장합니다.",
      points: [
        "영어 소리와 철자 연결",
        "그림책과 단계별 영어책 읽기",
        "중심 내용과 세부 정보 찾기",
        "문맥을 활용하여 의미 추론하기",
      ],
    },
    {
      icon: PenLine,
      eyebrow: "Writing",
      title: "쓰기",
      description:
        "낱말과 문장을 정확하게 쓰고 자신의 일상과 생각을 짧은 영어 글로 표현하는 경험을 쌓습니다.",
      points: [
        "낱말과 기본 문장 쓰기",
        "일기와 간단한 편지 쓰기",
        "경험과 생각을 문단으로 표현하기",
        "창의적인 영어 글쓰기",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 영어의 소리와 기본 표현에 익숙해지고, 점차 읽기와 쓰기, 발표와 프로젝트 활동으로 배움을 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "영어의 소리와 친해지기",
      description:
        "영어 노래와 챈트, 그림책을 통해 영어의 소리와 리듬에 자연스럽게 익숙해집니다. 인사와 자기소개, 교실에서 사용하는 간단한 표현을 듣고 따라 말하며 영어에 대한 흥미와 자신감을 기릅니다.",
      subjects: [
        "알파벳의 모양과 소리",
        "기본 인사와 자기소개",
        "색깔·숫자·가족 관련 낱말",
        "노래와 그림책 듣기",
      ],
      activities: [
        "영어 노래와 챈트 따라 하기",
        "알파벳 카드 놀이",
        "그림 보고 낱말 말하기",
        "간단한 인사 역할극",
      ],
    },
    {
      grade: "2학년",
      title: "낱말과 기본 표현 익히기",
      description:
        "친숙한 생활 주제의 낱말과 짧은 문장을 듣고 말합니다. 알파벳과 소리의 관계를 이해하며 간단한 낱말을 읽고 쓰고, 질문과 대답을 주고받는 기초적인 의사소통을 경험합니다.",
      subjects: [
        "낱말의 소리와 철자",
        "좋아하는 것 묻고 답하기",
        "학교·음식·동물 관련 표현",
        "간단한 문장 읽기와 쓰기",
      ],
      activities: [
        "낱말 카드 분류하기",
        "친구와 질문하고 답하기",
        "그림책 문장 따라 읽기",
        "좋아하는 것을 영어로 소개하기",
      ],
    },
    {
      grade: "3학년",
      title: "기본 문장으로 소통하기",
      description:
        "일상생활에서 자주 사용하는 기본 문장을 이해하고 상황에 맞게 말합니다. 짧은 영어 글과 그림책을 읽으며 주요 내용을 파악하고, 자신과 가족, 학교생활에 관한 간단한 문장을 씁니다.",
      subjects: [
        "일상생활 기본 문장",
        "현재의 상태와 행동 표현",
        "짧은 이야기 읽기",
        "자신과 가족 소개 글쓰기",
      ],
      activities: [
        "상황별 대화 연습",
        "그림책 내용 순서 맞추기",
        "간단한 영어 일기 쓰기",
        "자기소개 발표하기",
      ],
    },
    {
      grade: "4학년",
      title: "상황에 맞게 표현하기",
      description:
        "학교와 가정, 지역사회에서 일어나는 다양한 상황에 맞게 영어로 질문하고 대답합니다. 짧은 글의 중심 내용을 이해하며, 자신의 경험과 계획을 여러 문장으로 연결하여 표현합니다.",
      subjects: [
        "과거 경험과 미래 계획",
        "장소와 방향 안내",
        "글의 중심 내용 찾기",
        "연결된 문장으로 글쓰기",
      ],
      activities: [
        "길 안내 역할극",
        "주말 경험 이야기하기",
        "짧은 영어책 요약하기",
        "미래 계획 포스터 만들기",
      ],
    },
    {
      grade: "5학년",
      title: "읽고 생각하며 발표하기",
      description:
        "다양한 주제의 영어 글을 읽고 중심 생각과 세부 정보를 구분합니다. 자신의 의견과 이유를 영어로 설명하고, 조사한 내용을 정리하여 짧은 발표와 프로젝트 활동에 참여합니다.",
      subjects: [
        "중심 생각과 세부 정보",
        "의견과 이유 표현하기",
        "비교와 설명",
        "문단 단위의 영어 글쓰기",
      ],
      activities: [
        "영어 기사와 정보 글 읽기",
        "좋아하는 주제 발표하기",
        "의견을 담은 문단 쓰기",
        "모둠 영어 프로젝트 진행하기",
      ],
    },
    {
      grade: "6학년",
      title: "영어로 생각을 확장하고 소통하기",
      description:
        "여러 문단으로 이루어진 영어 글을 읽고 내용을 요약하거나 자신의 생각과 연결합니다. 다양한 주제에 대해 의견을 나누고, 목적과 독자를 고려하여 글을 쓰며 발표와 협력 프로젝트에서 영어를 적극적으로 활용합니다.",
      subjects: [
        "글의 요약과 정보 재구성",
        "의견과 근거를 담은 말하기",
        "문단을 연결한 글쓰기",
        "세계 문화와 글로벌 주제",
      ],
      activities: [
        "영어책 독후 활동",
        "주제에 관한 의견 발표",
        "영어 편지와 보고서 쓰기",
        "글로벌 문화 프로젝트",
      ],
    },
  ],

  featureEyebrow: "English in Action",

  featureTitle: (
    <>
      영어를 사용하는
      <br />
      살아 있는 배움
    </>
  ),

  featureDescription:
    "영어는 교과서 안에서만 배우는 지식이 아닙니다. 학생들은 발표, 역할극, 노래, 게임과 프로젝트를 통해 영어를 실제로 사용하며 자연스럽게 자신감을 쌓습니다.",

  featureImage:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "함께 대화하고 활동하는 학생들",

  featureBadge: "English Communication",

  featureBadgeSubtitle: "영어로 연결되는 교실",

  featureItems: [
    {
      title: "영어 사용 환경",
      description:
        "수업 속 인사와 질문, 간단한 교실 표현을 영어로 사용하며 언어에 자연스럽게 익숙해집니다.",
    },
    {
      title: "발표와 역할극",
      description:
        "상황극과 짧은 발표를 통해 실제 맥락 안에서 영어로 표현하는 경험을 쌓습니다.",
    },
    {
      title: "문화와 세계 이해",
      description:
        "다양한 나라와 문화를 만나며 차이를 존중하고 세계를 바라보는 시야를 넓힙니다.",
    },
  ],

  processTitle: "영어 수업의 배움 과정",

  processDescription:
    "충분히 듣고 따라 하며 의미를 이해한 뒤, 자신의 언어로 표현하고 실제 상황에 활용합니다.",

  process: [
    {
      number: "01",
      icon: Headphones,
      title: "듣고 익숙해지기",
      description:
        "노래와 이야기, 대화를 반복하여 들으며 영어의 소리와 리듬에 익숙해집니다.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "따라 하고 말하기",
      description:
        "배운 표현을 따라 말하고 친구들과 주고받으며 영어 말하기의 자신감을 기릅니다.",
    },
    {
      number: "03",
      icon: BookOpen,
      title: "읽고 이해하기",
      description:
        "그림과 문맥을 활용하여 영어 글의 의미와 핵심 내용을 이해합니다.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "표현하고 활용하기",
      description:
        "글쓰기와 발표, 역할극과 프로젝트에서 배운 영어를 적극적으로 활용합니다.",
    },
  ],

  growthTitle: (
    <>
      영어 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 영어를 틀리지 않아야 하는 어려운 과목이 아니라, 다른 사람과 연결되고 새로운 세계를 만나는 즐거운 언어로 경험하도록 돕습니다.",

  growthHighlight:
    "영어를 두려워하지 않고 자신의 생각을 자신 있게 표현하는 글로벌 소통자로 성장합니다.",

  growthPoints: [
    "영어의 소리와 표현을 즐겁고 자연스럽게 받아들입니다.",
    "일상적인 상황에서 영어로 질문하고 대답할 수 있습니다.",
    "학년 수준에 맞는 영어 글을 읽고 핵심 내용을 이해합니다.",
    "자신의 경험과 생각을 영어 문장과 글로 표현합니다.",
    "다른 언어와 문화를 존중하며 세계를 열린 시선으로 바라봅니다.",
  ],

  nextSubjectId: "math",
  nextSubjectName: "수학",

  theme: {
    accent: "#4f46e5",
    accentDark: "#4338ca",
    accentLight: "#6366f1",
    accentPale: "#eef2ff",
    accentBorder: "#c7d2fe",

    heroFrom: "#111138",
    heroVia: "#29236b",
    heroTo: "#6155cf",

    darkSection: "#17163d",
    darkSectionSoft: "#242251",
    labelText: "#c7d2fe",
  },
};