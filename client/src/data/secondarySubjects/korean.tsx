import {
  BookMarked,
  BookOpen,
  Feather,
  FileText,
  Library,
  MessageCircle,
  Mic2,
  PenLine,
  Search,
  Users,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondaryKoreanSubject: SubjectData = {
  id: "korean",

  name: "국어",
  englishName: "Korean Language & Literature",
  subtitle: "언어·문학·비판적 사고",

  heroDescription: (
    <>
      다양한 말과 글을 깊이 이해하고,
      <br className="hidden sm:block" />
      자신의 생각을 논리적이고 책임 있게 표현합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Secondary Korean Education",

  introTitle: (
    <>
      언어를 깊이 이해하고
      <br />
      세상을 비판적으로 읽습니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 중·고등 국어 교육은 학생들이 다양한 문학과 비문학 자료를 정확하게 이해하고, 자신의 생각을 논리적인 말과 글로 표현하도록 돕습니다.",
    "학생들은 작품과 매체에 담긴 관점과 가치, 표현 방식을 살펴보며 내용을 그대로 받아들이는 데서 벗어나 질문하고 판단하는 힘을 기릅니다.",
    "읽기와 쓰기, 듣기와 말하기, 문학과 문법을 서로 연결하여 학업과 일상, 공동체 안에서 언어를 바르고 책임 있게 사용하는 소통자로 성장합니다.",
  ],

  quote: (
    <>
      깊이 읽고,
      <br />
      논리적으로 생각하며,
      <br />
      책임 있게 표현합니다.
    </>
  ),

  quoteDescription:
    "국어는 모든 교과 학습의 기초이자 사람과 사회를 이해하는 중요한 도구입니다. 학생들이 언어를 통해 생각을 확장하고 공동체와 소통하도록 교육합니다.",

  tags: ["비판적 읽기", "논리적 쓰기", "토론", "문학", "문법", "매체"],

  competenciesTitle: "중·고등 국어 교육의 핵심 역량",

  competenciesDescription:
    "복잡한 글과 매체를 이해하고 분석하며, 자신의 생각을 논리적이고 창의적으로 표현하는 능력을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: BookOpen,
      title: "비판적 읽기",
      description:
        "다양한 글의 내용과 구조, 관점과 근거를 분석하고 정보의 타당성과 신뢰성을 판단합니다.",
    },
    {
      number: "02",
      icon: PenLine,
      title: "논리적 쓰기",
      description:
        "목적과 독자를 고려하여 자료를 조직하고 자신의 주장과 생각을 설득력 있는 글로 표현합니다.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "의사소통과 토론",
      description:
        "상대의 의견을 경청하고 근거를 바탕으로 자신의 생각을 분명하게 말하며 공동의 결론을 찾아갑니다.",
    },
    {
      number: "04",
      icon: Feather,
      title: "문학적 감수성",
      description:
        "다양한 시대와 문화의 문학 작품을 감상하며 인간과 사회, 삶에 대한 이해와 감수성을 넓힙니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "읽기와 쓰기, 듣기·말하기, 문학과 언어·매체를 통합하여 실제 학업과 사회생활에 필요한 언어 역량을 발전시킵니다.",

  learningAreas: [
    {
      icon: BookMarked,
      eyebrow: "Critical Reading",
      title: "읽기",
      description:
        "문학, 설명문, 논설문과 다양한 매체 자료를 읽고 핵심 내용과 구조, 글쓴이의 관점과 의도를 분석합니다.",
      points: [
        "문학·비문학의 구조와 핵심 내용 분석",
        "주장과 근거의 타당성 평가",
        "자료의 출처와 신뢰성 판단",
        "여러 자료를 비교하고 종합하기",
      ],
    },
    {
      icon: PenLine,
      eyebrow: "Academic Writing",
      title: "쓰기",
      description:
        "자료를 조사하고 내용을 체계적으로 조직하여 설명문, 논설문, 보고서와 창작 글을 완성합니다.",
      points: [
        "목적과 독자를 고려한 글쓰기",
        "주장과 근거를 갖춘 논설문",
        "자료를 활용한 보고서 작성",
        "계획·초고·수정·편집의 과정",
      ],
    },
    {
      icon: Mic2,
      eyebrow: "Discussion & Presentation",
      title: "듣기·말하기",
      description:
        "발표, 토의와 토론에 참여하며 다른 사람의 의견을 정확히 이해하고 자신의 생각을 논리적으로 전달합니다.",
      points: [
        "핵심 내용을 정리하여 발표하기",
        "근거를 활용한 토의와 토론",
        "질문과 반론에 적절히 대응하기",
        "상대의 관점을 존중하며 경청하기",
      ],
    },
    {
      icon: Library,
      eyebrow: "Literature & Media",
      title: "문학·언어·매체",
      description:
        "문학 작품과 언어의 원리, 다양한 매체의 표현 방식을 탐구하며 언어가 개인과 사회에 미치는 영향을 이해합니다.",
      points: [
        "시·소설·수필·극 작품 감상",
        "작품의 주제와 표현 방식 분석",
        "문법과 언어생활의 원리 이해",
        "뉴스·광고·영상 등 매체 비평",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "7학년부터 12학년까지 읽기와 표현의 기초를 다지고, 점차 비판적 분석과 학문적 글쓰기, 문학과 매체에 대한 심화 탐구로 배움을 확장합니다.",

  gradeDetails: [
    {
      grade: "7학년",
      title: "중등 국어 학습의 기초 다지기",
      description:
        "다양한 글의 중심 내용과 구조를 파악하고 자신의 경험과 생각을 문단으로 표현합니다. 문학 작품 속 인물과 사건을 이해하며 발표와 대화의 기본 태도를 익힙니다.",
      subjects: [
        "글의 중심 내용과 구조",
        "문단 구성과 기본 글쓰기",
        "문학 작품의 인물과 사건",
        "대화와 발표의 기본 원리",
      ],
      activities: [
        "글의 핵심 내용 요약하기",
        "경험을 담은 글 작성하기",
        "작품 속 인물의 선택 토의하기",
        "짧은 주제 발표하기",
      ],
    },
    {
      grade: "8학년",
      title: "관점과 근거를 이해하기",
      description:
        "글쓴이의 관점과 주장, 이를 뒷받침하는 근거를 구분합니다. 설명과 설득의 방식을 익히고 다양한 문학 작품의 주제와 표현 방식을 살펴봅니다.",
      subjects: [
        "글쓴이의 관점과 의도",
        "주장과 근거의 관계",
        "설명문과 설득하는 글",
        "문학의 주제와 표현 방식",
      ],
      activities: [
        "주장과 근거 구분하기",
        "자료를 활용한 설명문 쓰기",
        "찬반 토의에 참여하기",
        "시와 소설의 표현 비교하기",
      ],
    },
    {
      grade: "9학년",
      title: "비판적으로 읽고 논리적으로 표현하기",
      description:
        "여러 자료의 정보와 관점을 비교하고 내용의 타당성과 신뢰성을 판단합니다. 사회적 문제에 대한 자신의 입장을 근거와 함께 말하고 글로 표현합니다.",
      subjects: [
        "정보의 신뢰성과 타당성",
        "자료 비교와 종합",
        "논설문과 토론",
        "문학 작품과 사회의 관계",
      ],
      activities: [
        "기사와 온라인 자료 비교하기",
        "사회적 주제로 토론하기",
        "근거를 갖춘 논설문 쓰기",
        "작품의 사회적 배경 조사하기",
      ],
    },
    {
      grade: "10학년",
      title: "문학과 언어를 깊이 탐구하기",
      description:
        "다양한 갈래의 문학 작품을 시대적·사회적 배경과 연결하여 이해합니다. 언어의 구조와 사용 원리를 살펴보고 학업에 필요한 설명과 논증의 표현을 발전시킵니다.",
      subjects: [
        "문학 갈래와 작품 해석",
        "작품의 시대적·사회적 맥락",
        "언어의 구조와 문법 원리",
        "설명과 논증의 글쓰기",
      ],
      activities: [
        "시대별 문학 작품 비교하기",
        "작품 비평문 작성하기",
        "언어 사용 사례 분석하기",
        "교과 연계 설명문 작성하기",
      ],
    },
    {
      grade: "11학년",
      title: "학문적 읽기와 쓰기 확장하기",
      description:
        "복합적인 학술·사회 자료를 읽고 핵심 개념과 논리 구조를 분석합니다. 다양한 자료를 인용하고 종합하여 보고서와 비평문, 논증문을 작성합니다.",
      subjects: [
        "학술적 글의 구조와 논리",
        "자료 인용과 출처 활용",
        "비평문과 보고서 작성",
        "매체의 관점과 표현 전략",
      ],
      activities: [
        "학술 자료 요약·분석하기",
        "주제 탐구 보고서 작성하기",
        "문학·문화 비평문 쓰기",
        "광고와 뉴스 매체 분석하기",
      ],
    },
    {
      grade: "12학년",
      title: "통합적으로 사고하고 책임 있게 소통하기",
      description:
        "문학과 비문학, 인쇄 자료와 디지털 매체를 통합적으로 읽고 자신의 관점을 정교하게 표현합니다. 대학과 사회에서 필요한 학문적 의사소통과 책임 있는 언어생활을 준비합니다.",
      subjects: [
        "복합 자료의 통합적 읽기",
        "심화 논증과 학문적 글쓰기",
        "문학 작품의 종합적 해석",
        "디지털 매체와 언어 윤리",
      ],
      activities: [
        "여러 자료를 종합한 에세이 작성",
        "심화 주제 발표와 질의응답",
        "문학 작품 비교 비평하기",
        "미디어 윤리와 표현 토론하기",
      ],
    },
  ],

  featureEyebrow: "Reading, Debate & Writing",

  featureTitle: (
    <>
      읽고 토론하며
      <br />
      자신의 생각을 세웁니다
    </>
  ),

  featureDescription:
    "중·고등 국어 수업은 정해진 답을 찾는 데 그치지 않습니다. 학생들은 문학과 사회의 다양한 주제를 읽고 질문하며, 근거를 가지고 토론하고 자신의 언어로 생각을 완성합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "책을 읽고 토론하는 중·고등 학생들",

  featureBadge: "Reading & Debate",

  featureBadgeSubtitle: "읽고 질문하며 성장하는 학생",

  featureItems: [
    {
      title: "깊이 있는 독서",
      description:
        "문학과 비문학, 사회와 학문 분야의 다양한 글을 읽으며 생각의 폭과 깊이를 확장합니다.",
    },
    {
      title: "근거가 있는 토론",
      description:
        "서로 다른 관점을 존중하며 자료와 근거를 바탕으로 자신의 의견을 분명하게 말합니다.",
    },
    {
      title: "과정 중심 글쓰기",
      description:
        "자료 조사와 계획, 초고 작성과 수정 과정을 거쳐 완성도 높은 글을 작성합니다.",
    },
  ],

  processTitle: "중·고등 국어 수업의 배움 과정",

  processDescription:
    "자료를 읽고 질문을 발견한 뒤, 분석과 토론을 거쳐 자신의 관점을 논리적인 말과 글로 완성합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "읽고 질문하기",
      description:
        "글과 작품을 자세히 읽으며 핵심 내용과 궁금한 점, 탐구할 문제를 발견합니다.",
    },
    {
      number: "02",
      icon: FileText,
      title: "분석하고 판단하기",
      description:
        "내용과 구조, 관점과 근거를 분석하고 정보의 타당성과 의미를 판단합니다.",
    },
    {
      number: "03",
      icon: Users,
      title: "토론하고 확장하기",
      description:
        "다른 사람의 관점을 듣고 자신의 생각을 근거와 함께 나누며 이해를 확장합니다.",
    },
    {
      number: "04",
      icon: Feather,
      title: "표현하고 다듬기",
      description:
        "발표와 글쓰기로 관점을 표현하고 피드백을 반영하여 더욱 정교하게 다듬습니다.",
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
    "학생들이 다양한 정보와 관점을 분별하고 자신의 생각을 책임 있게 표현하며, 언어를 통해 타인과 사회를 깊이 이해하도록 돕습니다.",

  growthHighlight:
    "깊이 읽고 스스로 판단하며, 근거 있는 언어로 세상과 소통하는 사람으로 성장합니다.",

  growthPoints: [
    "복잡한 글과 다양한 매체의 핵심 내용을 정확하게 이해합니다.",
    "정보와 주장의 타당성 및 신뢰성을 비판적으로 판단합니다.",
    "자신의 생각을 논리적이고 설득력 있는 말과 글로 표현합니다.",
    "문학 작품을 통해 인간과 사회, 삶의 가치를 깊이 이해합니다.",
    "다른 관점을 존중하고 언어를 책임 있게 사용하는 태도를 기릅니다.",
  ],

  nextSubjectId: "english",
  nextSubjectName: "영어",

  backLink: "/curriculum/middle-high",
  backText: "중·고등 교과목으로 돌아가기",
  backOverviewText: "중·고등 교과목 전체",
  subjectBasePath: "/curriculum/middle-high/subjects",

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