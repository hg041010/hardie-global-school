import {
  BookOpen,
  Building2,
  Compass,
  Globe2,
  Landmark,
  Map,
  MapPinned,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";

import type { SubjectData } from "./types";

export const socialSubject: SubjectData = {
  id: "social",

  name: "사회",
  englishName: "Social Studies & History",
  subtitle: "역사와 세계사",

  heroDescription: (
    <>
      과거와 현재를 이해하며,
      <br className="hidden sm:block" />
      더 넓은 세상을 바라보는 시야를 기릅니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Social Studies Education",

  introTitle: (
    <>
      세상을 이해하고
      <br />
      함께 살아가는 방법을 배웁니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 사회 교육은 역사적 사실과 지명을 단순히 암기하는 데 머무르지 않고, 사람과 공동체가 살아가는 모습을 깊이 이해하도록 돕습니다.",
    "학생들은 가정과 학교, 지역사회에서 출발하여 대한민국과 세계로 시야를 넓히며, 자연환경과 문화, 역사와 정치, 경제와 사회의 관계를 탐구합니다.",
    "다양한 시대와 문화, 사람들의 삶을 존중하고 공동체의 문제에 관심을 가지며, 책임 있게 참여하는 시민으로 성장하도록 교육합니다.",
  ],

  quote: (
    <>
      과거를 이해하고,
      <br />
      현재를 바라보며,
      <br />
      더 나은 미래를 생각합니다.
    </>
  ),

  quoteDescription:
    "사회는 사람과 장소, 시간과 공동체를 연결하는 배움입니다. 학생들이 세상을 넓고 균형 있게 바라보며 책임 있는 시민으로 성장하도록 돕습니다.",

  tags: [
    "공동체",
    "역사",
    "지리",
    "문화",
    "민주 시민",
    "세계 이해",
  ],

  competenciesTitle: "사회 교육의 핵심 역량",

  competenciesDescription:
    "공동체를 이해하고, 역사와 지리를 탐구하며, 다양한 관점을 존중하는 시민적 역량을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Users,
      title: "공동체 의식",
      description:
        "가정과 학교, 지역사회 안에서 서로의 역할과 책임을 이해하고 협력하는 태도를 기릅니다.",
    },
    {
      number: "02",
      icon: Landmark,
      title: "역사 이해",
      description:
        "과거의 사건과 사람들의 삶을 살펴보며 현재 사회가 형성된 과정을 이해합니다.",
    },
    {
      number: "03",
      icon: Map,
      title: "지리적 사고",
      description:
        "지도와 자료를 활용하여 지역의 위치와 환경, 사람들의 생활 관계를 탐구합니다.",
    },
    {
      number: "04",
      icon: Globe2,
      title: "세계 시민성",
      description:
        "다양한 문화와 관점을 존중하고 세계 공동체의 문제에 책임 있게 참여하는 태도를 배웁니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "공동체, 역사, 지리와 시민 생활을 서로 연결하여 사람과 사회를 폭넓게 이해합니다.",

  learningAreas: [
    {
      icon: Building2,
      eyebrow: "Community",
      title: "공동체",
      description:
        "가정과 학교, 마을과 지역사회의 모습을 살펴보며 구성원의 역할과 함께 살아가는 방법을 배웁니다.",
      points: [
        "가족과 학교 공동체",
        "지역사회의 모습과 기능",
        "다양한 직업과 역할",
        "규칙과 배려, 협력",
      ],
    },
    {
      icon: Landmark,
      eyebrow: "History",
      title: "역사",
      description:
        "과거 사람들의 삶과 주요 사건, 문화유산을 탐구하며 시간의 흐름과 사회의 변화를 이해합니다.",
      points: [
        "생활 모습의 변화",
        "역사 인물과 주요 사건",
        "문화유산과 전통",
        "한국사와 세계사의 연결",
      ],
    },
    {
      icon: Compass,
      eyebrow: "Geography",
      title: "지리",
      description:
        "지도와 다양한 지리 자료를 활용하여 자연환경과 인문환경이 사람들의 생활에 미치는 영향을 탐구합니다.",
      points: [
        "지도와 방위, 축척",
        "지역과 국토의 특징",
        "기후와 자연환경",
        "인구·도시·산업의 분포",
      ],
    },
    {
      icon: MessageCircle,
      eyebrow: "Citizenship",
      title: "시민 생활",
      description:
        "민주주의와 경제생활, 사회 문제를 살펴보며 자신의 생각을 근거와 함께 표현하고 참여하는 태도를 기릅니다.",
      points: [
        "민주적 의사결정",
        "경제 활동과 선택",
        "사회 문제와 해결",
        "인권·평화·문화 다양성",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 가까운 생활 공동체에서 출발하여 지역과 국가, 세계를 이해하는 시야로 배움을 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "나와 가족, 학교 공동체 이해하기",
      description:
        "자신과 가족, 친구와 학교생활을 살펴보며 공동체의 기초를 이해합니다. 서로 다른 모습과 생각을 존중하고, 함께 생활하기 위해 필요한 약속과 배려의 태도를 배웁니다.",
      subjects: [
        "나와 가족의 모습",
        "학교생활과 친구 관계",
        "생활 속 약속과 규칙",
        "우리 주변의 장소",
      ],
      activities: [
        "우리 가족 소개하기",
        "학교 공간 지도 그리기",
        "친구 인터뷰하기",
        "학급 약속 함께 만들기",
      ],
    },
    {
      grade: "2학년",
      title: "우리 동네와 지역사회 살펴보기",
      description:
        "우리 동네의 장소와 시설, 다양한 직업과 사람들의 역할을 살펴봅니다. 과거와 현재의 생활 모습을 비교하고 지역사회를 위해 서로 협력하는 방법을 배웁니다.",
      subjects: [
        "우리 동네의 장소와 시설",
        "지역사회의 다양한 직업",
        "옛날과 오늘날의 생활",
        "마을의 전통과 문화",
      ],
      activities: [
        "우리 동네 지도 만들기",
        "지역 직업 조사하기",
        "옛날 생활 모습 비교하기",
        "마을 문화 소개하기",
      ],
    },
    {
      grade: "3학년",
      title: "지역의 환경과 생활 이해하기",
      description:
        "지도에서 지역의 위치를 찾고 자연환경과 인문환경의 특징을 살펴봅니다. 지역마다 생활 모습과 문화가 다른 이유를 탐구하며 대한민국의 다양한 지역을 이해합니다.",
      subjects: [
        "지도와 방위의 기초",
        "지역의 자연환경",
        "고장의 생활과 문화",
        "교통과 지역의 변화",
      ],
      activities: [
        "지도 기호와 방위 활용하기",
        "우리 지역의 특징 조사하기",
        "지역별 생활 모습 비교하기",
        "가상 지역 여행 계획하기",
      ],
    },
    {
      grade: "4학년",
      title: "역사와 문화의 흐름 발견하기",
      description:
        "우리 지역과 나라의 역사, 문화유산과 인물을 살펴보며 과거의 삶을 이해합니다. 세계 여러 지역의 생활과 문화를 비교하고 문화적 차이를 존중하는 태도를 기릅니다.",
      subjects: [
        "지역의 역사와 인물",
        "문화유산과 전통",
        "시대에 따른 생활 변화",
        "세계 여러 지역의 문화",
      ],
      activities: [
        "역사 연표 만들기",
        "문화유산 조사 발표하기",
        "역사 인물 역할극",
        "세계 문화 비교 프로젝트",
      ],
    },
    {
      grade: "5학년",
      title: "대한민국과 민주 시민의 역할 배우기",
      description:
        "우리나라의 국토와 역사, 정치와 경제의 기본 원리를 이해합니다. 민주적 의사결정과 시민의 권리와 책임을 배우고, 사회 문제를 다양한 관점에서 바라봅니다.",
      subjects: [
        "대한민국의 국토와 지역",
        "한국사의 주요 흐름",
        "민주주의와 국가기관",
        "생산·소비와 경제생활",
      ],
      activities: [
        "우리나라 지역 비교하기",
        "역사 사건 신문 만들기",
        "모의 선거와 학급 회의",
        "생활 속 경제 선택 체험하기",
      ],
    },
    {
      grade: "6학년",
      title: "세계와 연결된 시민으로 성장하기",
      description:
        "세계 여러 나라와 국제사회의 관계를 이해하고, 인권과 평화, 환경과 지속가능성 등 공동의 문제를 탐구합니다. 근거를 바탕으로 의견을 나누며 책임 있는 세계 시민의 역할을 고민합니다.",
      subjects: [
        "세계 여러 나라와 지역",
        "국제사회와 상호 의존",
        "인권·평화와 문화 다양성",
        "환경과 지속가능한 발전",
      ],
      activities: [
        "세계 이슈 조사 발표하기",
        "국제회의 역할극",
        "문화 다양성 캠페인",
        "지속가능발전 프로젝트",
      ],
    },
  ],

  featureEyebrow: "Social Studies in Action",

  featureTitle: (
    <>
      세상과 연결되는
      <br />
      살아 있는 사회 수업
    </>
  ),

  featureDescription:
    "학생들은 교과서 속 지식을 읽는 데 그치지 않고, 지도와 사진, 뉴스와 역사 자료를 분석하며 실제 사회의 모습을 탐구합니다. 토론과 프로젝트, 발표와 현장 체험을 통해 공동체의 문제를 자신의 삶과 연결합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "지도와 자료를 활용하는 사회 수업",

  featureBadge: "Community & World",

  featureBadgeSubtitle: "지역에서 세계로 확장되는 배움",

  featureItems: [
    {
      title: "자료를 활용한 탐구",
      description:
        "지도와 사진, 통계와 역사 자료를 살펴보고 정보를 비교하며 사회 현상을 이해합니다.",
    },
    {
      title: "토론과 의사결정",
      description:
        "다양한 관점을 존중하고 근거를 들어 의견을 나누며 공동의 해결책을 찾아갑니다.",
    },
    {
      title: "지역사회와 연결",
      description:
        "우리 지역의 역사와 환경, 공동체 문제를 조사하고 삶 속에서 실천할 방법을 고민합니다.",
    },
  ],

  processTitle: "사회 수업의 배움 과정",

  processDescription:
    "사회 현상에 질문을 만들고 자료를 조사하며, 다양한 관점을 토론한 뒤 공동체의 삶과 연결합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "질문하기",
      description:
        "사람과 지역, 역사와 사회 현상을 살펴보며 궁금한 점과 탐구 문제를 발견합니다.",
    },
    {
      number: "02",
      icon: MapPinned,
      title: "조사하기",
      description:
        "지도와 문헌, 사진과 통계 등 다양한 자료를 활용하여 필요한 정보를 찾습니다.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "토론하기",
      description:
        "자료를 근거로 자신의 의견을 표현하고 친구들의 다양한 관점을 존중하며 나눕니다.",
    },
    {
      number: "04",
      icon: Globe2,
      title: "삶에 적용하기",
      description:
        "배운 내용을 공동체의 실제 문제와 연결하고 책임 있게 실천할 방법을 고민합니다.",
    },
  ],

  growthTitle: (
    <>
      사회 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 자신이 속한 공동체와 사회의 모습을 이해하고, 다양한 사람과 문화를 존중하며 더 나은 세상을 만들어가는 책임 있는 시민으로 성장하도록 돕습니다.",

  growthHighlight:
    "역사와 현재를 연결하고 서로 다른 관점을 존중하며 공동체의 문제에 책임 있게 참여하는 시민으로 성장합니다.",

  growthPoints: [
    "가정과 학교, 지역사회 구성원의 역할과 책임을 이해합니다.",
    "역사적 사건과 인물의 삶을 통해 현재 사회를 바라봅니다.",
    "지도와 다양한 자료를 활용하여 지역과 세계를 이해합니다.",
    "서로 다른 문화와 관점을 존중하며 열린 태도로 소통합니다.",
    "사회 문제에 관심을 가지고 근거를 바탕으로 판단하고 참여합니다.",
  ],

  nextSubjectId: "science",
  nextSubjectName: "과학",

  theme: {
    accent: "#2f6fb2",
    accentDark: "#24598f",
    accentLight: "#4a8fd2",
    accentPale: "#edf5fc",
    accentBorder: "#bfd8ee",

    heroFrom: "#0b1d34",
    heroVia: "#193f68",
    heroTo: "#4a83b9",

    darkSection: "#102943",
    darkSectionSoft: "#1b3b59",
    labelText: "#b9dcf7",
  },
};