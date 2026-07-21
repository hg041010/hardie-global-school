import {
  BookMarked,
  BookOpen,
  Feather,
  Heart,
  Library,
  MessageCircle,
  Mic2,
  PenLine,
  Search,
  Users,
} from "lucide-react";

import type { SubjectData } from "./types";

export const koreanSubject: SubjectData = {
  id: "korean",

  name: "국어",
  englishName: "Korean Language & Literature",
  subtitle: "국어와 문학",

  heroDescription: (
    <>
      언어로 생각하고 소통하며,
      <br className="hidden sm:block" />
      사람과 세상을 깊이 이해하는 힘을 기릅니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Korean Education",

  introTitle: (
    <>
      말과 글을 통해
      <br />
      생각의 깊이를 더합니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 국어 교육은 학생들이 우리말을 바르고 풍부하게 사용하며, 자신의 생각과 감정을 분명하게 표현하도록 돕습니다.",
    "학생들은 다양한 글과 문학 작품을 읽고 의미를 발견하며, 친구들과 생각을 나누고 자신의 언어로 새롭게 표현하는 과정을 경험합니다.",
    "단순히 지식을 암기하는 수업을 넘어 읽기, 쓰기, 듣기, 말하기를 삶과 연결하여 언어를 통해 자신과 이웃, 세상을 이해하는 힘을 기릅니다.",
  ],

  quote: (
    <>
      바르게 읽고,
      <br />
      깊이 생각하며,
      <br />
      따뜻하게 표현합니다.
    </>
  ),

  quoteDescription:
    "국어는 모든 배움의 기초이자 서로의 마음을 이해하는 통로입니다. 학생들이 언어를 통해 지식과 삶을 연결하도록 교육합니다.",

  tags: ["읽기", "쓰기", "듣기", "말하기", "문학", "독서"],

  competenciesTitle: "국어 교육의 핵심 역량",

  competenciesDescription:
    "읽고 이해하며, 생각을 표현하고, 다른 사람과 소통하는 힘을 균형 있게 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: BookOpen,
      title: "읽기와 이해",
      description:
        "다양한 글의 내용과 구조를 이해하고, 글에 담긴 생각과 가치를 깊이 있게 살펴봅니다.",
    },
    {
      number: "02",
      icon: PenLine,
      title: "쓰기와 표현",
      description:
        "자신의 경험과 생각을 글로 정리하고, 목적과 독자를 고려하여 분명하게 표현합니다.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "듣기와 말하기",
      description:
        "상대의 말을 존중하며 듣고, 자신의 생각을 근거와 함께 자신 있게 이야기합니다.",
    },
    {
      number: "04",
      icon: Feather,
      title: "문학과 감수성",
      description:
        "동화와 시, 이야기 속 다양한 삶을 만나며 언어적 감수성과 풍부한 상상력을 기릅니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "읽기, 쓰기, 듣기·말하기와 문학을 서로 연결하여 실제 삶 속에서 언어를 활용하는 능력을 키웁니다.",

  learningAreas: [
    {
      icon: BookMarked,
      eyebrow: "Reading",
      title: "읽기",
      description:
        "문학과 비문학을 두루 읽으며 내용을 정확하게 이해하고, 중요한 정보를 찾아 자신의 생각과 연결합니다.",
      points: [
        "학년 수준에 맞는 문학·비문학 읽기",
        "중심 내용과 세부 정보 파악",
        "글쓴이의 생각과 표현 방식 이해",
        "읽은 내용을 자신의 경험과 연결",
      ],
    },
    {
      icon: PenLine,
      eyebrow: "Writing",
      title: "쓰기",
      description:
        "생각을 떠올리고 내용을 조직한 뒤, 초고를 쓰고 고쳐 쓰는 과정을 통해 완성도 있는 글을 만듭니다.",
      points: [
        "경험과 생각을 담은 생활문",
        "정보를 설명하는 글",
        "의견과 근거를 담은 글",
        "계획하기·쓰기·고쳐 쓰기",
      ],
    },
    {
      icon: Mic2,
      eyebrow: "Communication",
      title: "듣기·말하기",
      description:
        "일상 대화와 발표, 토의 활동에 참여하며 상대를 배려하는 의사소통 태도와 표현력을 기릅니다.",
      points: [
        "상대의 말을 집중하여 듣기",
        "내용을 정리하여 발표하기",
        "질문하고 적절하게 대답하기",
        "서로의 의견을 존중하며 토의하기",
      ],
    },
    {
      icon: Library,
      eyebrow: "Literature",
      title: "문학",
      description:
        "다양한 문학 작품을 감상하고 인물과 사건, 배경을 이해하며 작품이 전하는 의미를 발견합니다.",
      points: [
        "동화·동시·옛이야기 감상",
        "인물의 마음과 행동 이해",
        "작품 속 가치와 주제 발견",
        "상상하여 바꾸어 쓰고 표현하기",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 읽기와 쓰기의 기초를 세우고, 점차 논리적 사고와 창의적 표현으로 배움을 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "말과 글의 기초 세우기",
      description:
        "한글의 소리와 글자 체계를 익히고, 낱말과 짧은 문장을 정확하게 읽고 씁니다. 그림책과 동시를 즐겁게 감상하며 자신의 경험과 감정을 간단한 말과 글로 표현합니다.",
      subjects: [
        "한글 자모와 낱말 읽기",
        "기초 문장 쓰기",
        "그림책과 동시 감상",
        "바르게 듣고 말하기",
      ],
      activities: [
        "소리 내어 책 읽기",
        "그림일기 쓰기",
        "이야기 순서 맞추기",
        "친구에게 경험 말하기",
      ],
    },
    {
      grade: "2학년",
      title: "문장을 읽고 경험을 표현하기",
      description:
        "문장과 짧은 글을 자연스럽게 읽고 중심 내용을 파악합니다. 자신의 경험을 시간의 순서에 맞게 말하고 쓰며, 다양한 동화와 시를 통해 어휘력과 상상력을 넓힙니다.",
      subjects: [
        "짧은 글의 중심 내용",
        "경험을 순서대로 표현하기",
        "낱말과 문장의 관계",
        "동화와 동시 감상",
      ],
      activities: [
        "생활 경험 발표하기",
        "짧은 편지 쓰기",
        "이야기 이어 쓰기",
        "인물의 마음 표현하기",
      ],
    },
    {
      grade: "3학년",
      title: "문단을 이해하고 생각을 나누기",
      description:
        "이야기 글과 설명하는 글의 특징을 이해하고 문단의 중심 문장을 찾습니다. 자신의 생각을 문단으로 구성하며, 질문과 대화를 통해 다른 사람의 관점을 존중하는 태도를 배웁니다.",
      subjects: [
        "문단과 중심 문장",
        "설명하는 글의 구조",
        "의견과 까닭 표현하기",
        "인물과 사건 이해하기",
      ],
      activities: [
        "문단 요약하기",
        "질문 만들고 답하기",
        "관찰한 내용 설명하기",
        "작품 속 인물 인터뷰하기",
      ],
    },
    {
      grade: "4학년",
      title: "정보를 이해하고 논리적으로 표현하기",
      description:
        "글의 구조와 자료의 관계를 파악하고 필요한 정보를 선별합니다. 주장과 근거의 관계를 이해하며, 토의와 발표를 통해 자신의 생각을 논리적으로 표현합니다.",
      subjects: [
        "글의 구조와 요약",
        "주장과 근거",
        "자료를 활용한 글쓰기",
        "문학 작품의 주제 이해",
      ],
      activities: [
        "자료 조사 후 설명문 쓰기",
        "주제에 따라 토의하기",
        "책 소개 발표하기",
        "작품의 장면 재구성하기",
      ],
    },
    {
      grade: "5학년",
      title: "비판적으로 읽고 설득력 있게 쓰기",
      description:
        "글쓴이의 관점과 표현 방법을 살피며 글을 비판적으로 읽습니다. 다양한 자료를 비교하고 자신의 주장을 타당한 근거와 함께 말하고 글로 표현합니다.",
      subjects: [
        "글쓴이의 관점 파악",
        "자료 비교와 해석",
        "주장하는 글쓰기",
        "문학 작품의 가치 탐구",
      ],
      activities: [
        "기사와 광고 비교하기",
        "근거를 들어 토론하기",
        "주장하는 글 작성하기",
        "작품을 다른 형식으로 표현하기",
      ],
    },
    {
      grade: "6학년",
      title: "깊이 읽고 책임 있게 소통하기",
      description:
        "다양한 문학과 비문학 자료를 통합적으로 읽고 핵심 내용을 재구성합니다. 사회적 주제에 대해 근거를 바탕으로 토론하며, 목적과 독자를 고려한 완성도 있는 글을 작성합니다.",
      subjects: [
        "통합적 읽기와 재구성",
        "토론과 논설문",
        "매체 자료의 이해",
        "문학 작품과 삶의 연결",
      ],
      activities: [
        "사회적 주제 토론하기",
        "논설문과 보고서 쓰기",
        "매체 자료 분석하기",
        "책과 삶을 연결한 발표하기",
      ],
    },
  ],

  featureEyebrow: "Reading & Discussion",

  featureTitle: (
    <>
      독서를 통해
      <br />
      더 넓은 세계를 만납니다
    </>
  ),

  featureDescription:
    "독서는 국어 교과의 일부를 넘어 모든 배움의 토대입니다. 학생들은 학년과 발달 단계에 맞는 다양한 책을 읽고, 질문하고, 대화하며 자신만의 생각을 만들어갑니다.",

  featureImage:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "도서관에서 이루어지는 독서 교육",

  featureBadge: "Reading Education",

  featureBadgeSubtitle: "책과 함께 자라는 학생",

  featureItems: [
    {
      title: "꾸준한 독서 습관",
      description:
        "일상 속에서 책을 가까이하며 스스로 읽을 책을 선택하는 습관을 형성합니다.",
    },
    {
      title: "질문이 있는 독서",
      description:
        "내용을 확인하는 데 그치지 않고 인물과 사건, 주제에 대해 질문합니다.",
    },
    {
      title: "함께 나누는 독서",
      description:
        "친구들과 서로 다른 생각을 나누며 작품을 더욱 깊고 넓게 이해합니다.",
    },
  ],

  processTitle: "국어 수업의 배움 과정",

  processDescription:
    "학생이 스스로 질문하고 생각하며 다른 사람과 나눈 뒤, 자신의 언어로 표현하는 수업을 지향합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "관찰하고 질문하기",
      description:
        "글과 이야기를 자세히 살펴보고 궁금한 점을 발견하여 질문합니다.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "읽고 이해하기",
      description:
        "내용과 구조, 표현을 살피며 글이 전하는 의미를 이해합니다.",
    },
    {
      number: "03",
      icon: Users,
      title: "나누고 생각하기",
      description:
        "친구들과 서로의 생각을 나누며 다양한 관점을 발견합니다.",
    },
    {
      number: "04",
      icon: Feather,
      title: "표현하고 다듬기",
      description:
        "말과 글, 그림과 발표를 통해 생각을 표현하고 더욱 분명하게 다듬습니다.",
    },
  ],

  growthTitle: (
    <>
      국어 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 언어를 단순한 교과 지식이 아니라 자신과 다른 사람, 세상을 연결하는 소중한 도구로 사용하도록 돕습니다.",

  growthHighlight:
    "바른 언어를 사용하고 다른 사람의 이야기에 귀 기울이는 따뜻한 소통자로 성장합니다.",

  growthPoints: [
    "책을 즐겨 읽고 스스로 새로운 배움을 찾아갑니다.",
    "자신의 생각을 논리적이고 창의적으로 표현합니다.",
    "다른 사람의 말을 경청하고 존중하며 소통합니다.",
    "문학 작품을 통해 사람과 세상을 깊이 이해합니다.",
    "언어를 바르고 책임 있게 사용하는 태도를 기릅니다.",
  ],

  nextSubjectId: "english",
  nextSubjectName: "영어",

  theme: {
    accent: "#b87418",
    accentDark: "#a26612",
    accentLight: "#d7952d",
    accentPale: "#fff3dd",
    accentBorder: "#e8cc9e",

    heroFrom: "#17100a",
    heroVia: "#39200d",
    heroTo: "#8c4e14",

    darkSection: "#20180f",
    darkSectionSoft: "#2f2418",
    labelText: "#ffd27b",
  },
};