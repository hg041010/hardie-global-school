import {
  Atom,
  Beaker,
  Binoculars,
  Brain,
  FlaskConical,
  Leaf,
  Lightbulb,
  Microscope,
  Search,
  Telescope,
} from "lucide-react";

import type { SubjectData } from "./types";

export const scienceSubject: SubjectData = {
  id: "science",

  name: "과학",
  englishName: "Science & Inquiry",
  subtitle: "탐구와 발견",

  heroDescription: (
    <>
      자연을 관찰하고 탐구하며,
      <br className="hidden sm:block" />
      스스로 질문하고 발견하는 즐거움을 배웁니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Science Education",

  introTitle: (
    <>
      관찰하고 질문하며
      <br />
      스스로 발견하는 과학
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 과학 교육은 지식을 암기하는 것이 아니라 자연을 직접 관찰하고 질문하며 탐구하는 과정에 초점을 둡니다.",
    "학생들은 실험과 탐구 활동을 통해 자연의 원리를 발견하고, 결과를 기록하고 설명하며 과학적 사고력을 키워 갑니다.",
    "실패를 두려워하지 않고 끊임없이 가설을 세우고 검증하는 경험을 통해 호기심과 탐구 정신을 함께 성장시킵니다.",
  ],

  quote: (
    <>
      질문하고,
      <br />
      탐구하고,
      <br />
      스스로 발견합니다.
    </>
  ),

  quoteDescription:
    "과학은 세상을 이해하기 위한 탐구의 과정입니다. 학생들은 자연을 관찰하고 실험하며 스스로 원리를 발견하는 기쁨을 경험합니다.",

  tags: [
    "관찰",
    "실험",
    "탐구",
    "생명",
    "물질",
    "우주",
  ],

  competenciesTitle: "과학 교육의 핵심 역량",

  competenciesDescription:
    "호기심을 바탕으로 질문을 만들고, 탐구하며, 결과를 설명하는 과학적 사고력을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Search,
      title: "관찰력",
      description:
        "자연 현상을 세심하게 관찰하고 변화와 특징을 발견하는 힘을 기릅니다.",
    },
    {
      number: "02",
      icon: Brain,
      title: "과학적 사고",
      description:
        "가설을 세우고 근거를 바탕으로 논리적으로 탐구하는 능력을 기릅니다.",
    },
    {
      number: "03",
      icon: FlaskConical,
      title: "탐구 능력",
      description:
        "실험과 조사 활동을 계획하고 수행하며 결과를 분석하는 능력을 키웁니다.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "문제 해결",
      description:
        "과학적 지식을 활용하여 생활 속 문제를 해결하는 태도를 기릅니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "생명, 물질, 에너지와 우주를 통합적으로 탐구하며 자연을 이해하는 시야를 넓혀 갑니다.",

  learningAreas: [
    {
      icon: Leaf,
      eyebrow: "Life Science",
      title: "생명",
      description:
        "식물과 동물, 사람을 비롯한 다양한 생명체의 특징과 생명의 소중함을 배웁니다.",
      points: [
        "생물의 특징",
        "식물과 동물",
        "생태계",
        "생명의 다양성",
      ],
    },
    {
      icon: Beaker,
      eyebrow: "Matter",
      title: "물질",
      description:
        "물질의 성질과 변화, 혼합과 분리 등 생활 속 다양한 물질의 원리를 이해합니다.",
      points: [
        "물질의 성질",
        "혼합과 분리",
        "상태 변화",
        "용해와 용액",
      ],
    },
    {
      icon: Atom,
      eyebrow: "Energy",
      title: "에너지",
      description:
        "빛과 소리, 전기와 자석, 힘과 운동 등 다양한 에너지 현상을 탐구합니다.",
      points: [
        "빛과 그림자",
        "소리",
        "전기와 자석",
        "힘과 운동",
      ],
    },
    {
      icon: Telescope,
      eyebrow: "Earth & Space",
      title: "지구와 우주",
      description:
        "지구와 날씨, 계절의 변화와 태양계, 우주를 탐구하며 자연 현상을 이해합니다.",
      points: [
        "날씨와 계절",
        "지층과 화석",
        "태양계",
        "우주의 모습",
      ],
    },
  ],
    gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 관찰과 탐구를 바탕으로 생명, 물질, 에너지, 지구와 우주를 단계적으로 이해하며 과학적 사고력을 키워 갑니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "주변 자연을 관찰하며 과학과 친해지기",
      description:
        "생활 속 다양한 자연 현상을 관찰하며 과학적 호기심을 기릅니다. 오감을 활용하여 생물과 물체를 살펴보고 관찰 결과를 표현하는 경험을 시작합니다.",
      subjects: [
        "주변 식물과 동물",
        "계절의 변화",
        "물체의 특징",
        "관찰 방법 익히기",
      ],
      activities: [
        "학교 식물 관찰하기",
        "곤충 찾아보기",
        "계절 변화 기록하기",
        "관찰 일기 쓰기",
      ],
    },
    {
      grade: "2학년",
      title: "생활 속 과학 현상 발견하기",
      description:
        "빛과 소리, 자석 등 주변에서 쉽게 만날 수 있는 과학 현상을 실험하며 원리를 이해합니다. 스스로 질문을 만들고 결과를 비교하는 경험을 합니다.",
      subjects: [
        "빛과 그림자",
        "소리의 성질",
        "자석의 성질",
        "간단한 실험",
      ],
      activities: [
        "그림자 길이 비교하기",
        "소리 전달 실험",
        "자석 놀이",
        "실험 결과 기록하기",
      ],
    },
    {
      grade: "3학년",
      title: "생명과 물질을 탐구하기",
      description:
        "식물과 동물의 특징을 살펴보고, 물질의 여러 가지 성질을 실험을 통해 탐구합니다. 관찰 결과를 표와 그림으로 정리하는 방법도 함께 익힙니다.",
      subjects: [
        "식물의 성장",
        "동물의 특징",
        "물질의 성질",
        "온도와 상태 변화",
      ],
      activities: [
        "식물 키우기",
        "씨앗 관찰",
        "물질 비교 실험",
        "온도 변화 측정하기",
      ],
    },
    {
      grade: "4학년",
      title: "실험으로 원리를 발견하기",
      description:
        "에너지와 힘, 물의 순환 등 다양한 자연 현상을 실험을 통해 이해합니다. 실험 계획을 세우고 결과를 분석하는 과정을 경험합니다.",
      subjects: [
        "전기와 자석",
        "물의 순환",
        "힘과 운동",
        "지층과 화석",
      ],
      activities: [
        "간단한 전기회로 만들기",
        "자석 실험",
        "지층 모형 만들기",
        "화석 조사하기",
      ],
    },
    {
      grade: "5학년",
      title: "자연의 원리를 논리적으로 이해하기",
      description:
        "생태계와 환경, 용해와 혼합, 태양계 등 다양한 과학 개념을 서로 연결하여 이해합니다. 탐구 과정에서 얻은 자료를 분석하고 설명하는 능력을 기릅니다.",
      subjects: [
        "생태계",
        "용해와 용액",
        "태양계",
        "환경과 생물",
      ],
      activities: [
        "생태계 조사",
        "용액 만들기",
        "행성 비교하기",
        "환경 보호 프로젝트",
      ],
    },
    {
      grade: "6학년",
      title: "과학적 사고로 세상을 이해하기",
      description:
        "에너지의 이용과 생명의 다양성, 지구와 우주의 변화를 탐구하며 중학교 과학으로 이어지는 기초를 다집니다. 다양한 자료를 바탕으로 자신의 생각을 설명하고 토론합니다.",
      subjects: [
        "에너지와 생활",
        "생명의 다양성",
        "지구와 우주",
        "과학과 기술",
      ],
      activities: [
        "친환경 에너지 조사",
        "생물 분류하기",
        "별자리 관찰",
        "과학 발표 프로젝트",
      ],
    },
  ],

  featureEyebrow: "Scientific Inquiry",

  featureTitle: (
    <>
      스스로 질문하고
      <br />
      탐구하는 과학 수업
    </>
  ),

  featureDescription:
    "학생들은 교사의 설명만 듣는 것이 아니라 스스로 질문을 만들고 실험과 관찰을 통해 답을 찾아갑니다. 실패와 수정의 과정을 자연스럽게 경험하며 과학적 탐구 능력을 키워 갑니다.",

  featureImage:
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "실험과 탐구 활동",

  featureBadge: "Scientific Inquiry",

  featureBadgeSubtitle: "질문에서 발견까지",

  featureItems: [
    {
      title: "직접 실험하기",
      description:
        "직접 실험하고 관찰하며 자연의 원리를 몸으로 경험합니다.",
    },
    {
      title: "자료 분석하기",
      description:
        "실험 결과를 기록하고 비교하며 근거를 바탕으로 결론을 도출합니다.",
    },
    {
      title: "탐구 중심 수업",
      description:
        "정답을 암기하기보다 스스로 질문하고 해결하는 과정을 중요하게 생각합니다.",
    },
  ],

  processTitle: "과학 수업의 배움 과정",

  processDescription:
    "질문을 만들고 관찰하며 실험을 수행하고, 결과를 분석하여 새로운 탐구로 이어집니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "질문하기",
      description:
        "자연 현상을 보며 궁금한 점을 발견하고 탐구 문제를 설정합니다.",
    },
    {
      number: "02",
      icon: Microscope,
      title: "관찰·실험하기",
      description:
        "직접 관찰하고 실험하며 필요한 자료를 수집합니다.",
    },
    {
      number: "03",
      icon: Binoculars,
      title: "분석하기",
      description:
        "실험 결과를 비교하고 원인을 생각하며 결론을 도출합니다.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "설명하기",
      description:
        "탐구 결과를 친구들과 공유하고 새로운 질문으로 확장합니다.",
    },
  ],

  growthTitle: (
    <>
      과학 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 자연을 호기심 있게 바라보고, 근거를 바탕으로 탐구하며, 스스로 질문하고 발견하는 즐거움을 느끼는 탐구자로 성장하도록 돕습니다.",

  growthHighlight:
    "호기심을 두려워하지 않고 스스로 질문하며, 근거를 통해 세상을 이해하는 탐구자로 성장합니다.",

  growthPoints: [
    "자연 현상을 세심하게 관찰하는 습관을 기릅니다.",
    "실험과 탐구를 통해 과학적 사고력을 키웁니다.",
    "자료를 분석하고 근거를 바탕으로 설명합니다.",
    "생활 속 문제를 과학적으로 해결하려는 태도를 기릅니다.",
    "과학을 즐겁고 흥미로운 탐구 과정으로 경험합니다.",
  ],

  nextSubjectId: "music",
  nextSubjectName: "음악",

  theme: {
    accent: "#2E8B57",
    accentDark: "#206440",
    accentLight: "#4FB07B",
    accentPale: "#EAF8F0",
    accentBorder: "#BFE7CF",

    heroFrom: "#0B2618",
    heroVia: "#1D5B3F",
    heroTo: "#4DAE76",

    darkSection: "#103322",
    darkSectionSoft: "#1B5035",
    labelText: "#BFEFD2",
  },
};