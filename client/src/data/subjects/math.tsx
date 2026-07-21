import {
  BarChart3,
  Brain,
  Calculator,
  CircleDot,
  Lightbulb,
  Puzzle,
  Search,
  Shapes,
  Sigma,
  Target,
} from "lucide-react";

import type { SubjectData } from "./types";

export const mathSubject: SubjectData = {
  id: "math",

  name: "수학",
  englishName: "Mathematics & Logical Thinking",
  subtitle: "논리적 사고",

  heroDescription: (
    <>
      수와 공간의 원리를 탐구하며,
      <br className="hidden sm:block" />
      논리적으로 생각하고 문제를 해결하는 힘을 기릅니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Mathematics Education",

  introTitle: (
    <>
      원리를 이해하고
      <br />
      스스로 해결하는 힘을 기릅니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 수학 교육은 공식을 단순히 암기하고 반복하여 계산하는 데 머무르지 않고, 수와 도형에 담긴 원리를 이해하도록 돕습니다.",
    "학생들은 구체적인 사물과 생활 속 상황을 관찰하고, 다양한 방법으로 문제를 해결하며 자신의 생각과 풀이 과정을 말과 글로 설명합니다.",
    "정답을 찾는 결과뿐 아니라 질문하고 추론하며 시행착오를 통해 해결 방법을 발견하는 과정을 소중히 여기며, 논리적 사고력과 수학적 자신감을 함께 기릅니다.",
  ],

  quote: (
    <>
      원리를 발견하고,
      <br />
      논리적으로 생각하며,
      <br />
      끝까지 해결합니다.
    </>
  ),

  quoteDescription:
    "수학은 숫자를 계산하는 기술을 넘어 세상의 규칙과 관계를 발견하는 언어입니다. 학생들이 스스로 생각하고 설명하는 수학을 경험하도록 교육합니다.",

  tags: [
    "수와 연산",
    "도형",
    "측정",
    "규칙성",
    "자료와 가능성",
    "문제 해결",
  ],

  competenciesTitle: "수학 교육의 핵심 역량",

  competenciesDescription:
    "개념을 정확하게 이해하고, 논리적으로 추론하며, 다양한 방법으로 문제를 해결하고 설명하는 힘을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Brain,
      title: "논리적 사고",
      description:
        "수학적 관계와 규칙을 발견하고, 근거를 바탕으로 생각을 단계적으로 전개합니다.",
    },
    {
      number: "02",
      icon: Puzzle,
      title: "문제 해결",
      description:
        "문제의 조건을 이해하고 적절한 전략을 선택하여 여러 방법으로 해결합니다.",
    },
    {
      number: "03",
      icon: Search,
      title: "추론과 탐구",
      description:
        "관찰과 비교를 통해 규칙을 예상하고, 자신의 생각이 타당한지 확인합니다.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "수학적 표현",
      description:
        "수와 식, 표와 그래프, 그림과 말로 자신의 생각과 해결 과정을 표현합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "수와 연산, 도형과 측정, 규칙성과 자료 영역을 서로 연결하여 수학적 사고와 문제 해결력을 키웁니다.",

  learningAreas: [
    {
      icon: Calculator,
      eyebrow: "Numbers & Operations",
      title: "수와 연산",
      description:
        "수의 의미와 관계를 이해하고 사칙연산의 원리를 익혀 생활 속 문제를 정확하고 효율적으로 해결합니다.",
      points: [
        "수의 크기와 자릿값 이해",
        "덧셈·뺄셈·곱셈·나눗셈",
        "분수와 소수의 개념",
        "연산의 원리와 계산 전략",
      ],
    },
    {
      icon: Shapes,
      eyebrow: "Geometry",
      title: "도형",
      description:
        "평면도형과 입체도형의 특징을 관찰하고 분류하며 공간을 논리적으로 이해하는 힘을 기릅니다.",
      points: [
        "기본 평면도형의 특징",
        "각도와 도형의 관계",
        "합동과 대칭",
        "입체도형과 공간 감각",
      ],
    },
    {
      icon: Target,
      eyebrow: "Measurement",
      title: "측정",
      description:
        "길이와 시간, 들이와 무게, 넓이와 부피를 적절한 단위로 측정하고 생활 속 상황에 활용합니다.",
      points: [
        "길이·시간·들이·무게",
        "각도의 측정",
        "둘레와 넓이",
        "부피와 단위의 관계",
      ],
    },
    {
      icon: BarChart3,
      eyebrow: "Patterns & Data",
      title: "규칙성과 자료",
      description:
        "변화하는 양의 관계와 규칙을 발견하고, 자료를 표와 그래프로 나타내어 해석합니다.",
      points: [
        "수와 모양의 규칙 찾기",
        "두 양의 관계 이해",
        "표와 그래프로 자료 표현",
        "평균과 가능성 탐구",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 수와 연산의 기초를 세우고, 도형과 측정, 자료와 규칙을 통해 논리적 사고와 문제 해결력을 단계적으로 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "수의 기초와 생활 속 수학 만나기",
      description:
        "구체적인 사물과 그림을 활용하여 수의 의미와 순서를 이해하고, 간단한 덧셈과 뺄셈의 원리를 익힙니다. 생활 속 사물의 모양과 길이, 규칙을 관찰하며 수학을 친숙하고 즐거운 언어로 경험합니다.",
      subjects: [
        "100까지의 수와 수의 순서",
        "한 자리 수의 덧셈과 뺄셈",
        "여러 가지 모양과 위치",
        "길이·시각·규칙의 기초",
      ],
      activities: [
        "구체물로 수 세고 묶기",
        "생활 속 덧셈·뺄셈 이야기 만들기",
        "도형으로 새로운 모양 구성하기",
        "반복되는 무늬와 규칙 찾기",
      ],
    },
    {
      grade: "2학년",
      title: "수의 관계를 이해하고 계산하기",
      description:
        "세 자리 수의 자릿값을 이해하고 덧셈과 뺄셈의 계산 원리를 확장합니다. 곱셈의 의미와 구구단을 익히며, 길이와 시간, 표와 그래프를 활용하여 생활 속 문제를 해결합니다.",
      subjects: [
        "세 자리 수와 자릿값",
        "두 자리 수의 덧셈과 뺄셈",
        "곱셈의 의미와 구구단",
        "길이·시간·표와 그래프",
      ],
      activities: [
        "수 모형으로 자릿값 표현하기",
        "곱셈 상황 그림으로 나타내기",
        "교실 물건의 길이 측정하기",
        "자료를 조사하여 표로 정리하기",
      ],
    },
    {
      grade: "3학년",
      title: "연산의 원리를 확장하고 측정하기",
      description:
        "곱셈과 나눗셈의 관계를 이해하고 큰 수의 계산 방법을 익힙니다. 분수와 소수의 기초 개념을 만나며, 길이와 들이, 무게와 시간, 각과 도형의 특징을 탐구합니다.",
      subjects: [
        "곱셈과 나눗셈의 관계",
        "분수와 소수의 기초",
        "들이·무게·시간의 측정",
        "각과 평면도형",
      ],
      activities: [
        "나눗셈 상황을 그림과 식으로 표현하기",
        "생활 속 분수와 소수 찾기",
        "들이와 무게를 예상하고 측정하기",
        "각과 도형을 관찰하여 분류하기",
      ],
    },
    {
      grade: "4학년",
      title: "수학적 관계를 발견하고 설명하기",
      description:
        "큰 수와 여러 자리 수의 곱셈·나눗셈을 이해하고, 분수와 소수의 크기와 연산을 탐구합니다. 각도와 삼각형, 사각형의 성질을 발견하며 자료를 그래프로 표현하고 해석합니다.",
      subjects: [
        "큰 수와 여러 자리 수의 계산",
        "분수와 소수의 관계",
        "각도·삼각형·사각형",
        "막대그래프와 꺾은선그래프",
      ],
      activities: [
        "여러 계산 방법 비교하고 설명하기",
        "분수와 소수를 수직선에 나타내기",
        "도형의 성질을 찾아 분류하기",
        "생활 자료를 그래프로 표현하기",
      ],
    },
    {
      grade: "5학년",
      title: "개념을 연결하고 다양한 전략으로 해결하기",
      description:
        "약수와 배수, 분수의 덧셈과 뺄셈, 소수의 곱셈을 학습하며 수의 구조를 깊이 이해합니다. 합동과 대칭, 다각형의 넓이와 평균을 탐구하고 여러 단계의 문제를 전략적으로 해결합니다.",
      subjects: [
        "약수와 배수",
        "분수의 덧셈·뺄셈과 소수의 곱셈",
        "합동·대칭과 다각형의 넓이",
        "평균과 가능성의 기초",
      ],
      activities: [
        "수의 배열에서 공통된 성질 찾기",
        "실생활 분수 문제 해결하기",
        "대칭을 활용한 무늬 디자인하기",
        "자료의 평균을 구하고 비교하기",
      ],
    },
    {
      grade: "6학년",
      title: "비와 비율로 세상을 해석하고 추론하기",
      description:
        "분수와 소수의 나눗셈, 비와 비율, 비례 관계를 이해하여 실제 문제에 적용합니다. 원의 넓이와 입체도형의 부피를 탐구하고 자료를 비판적으로 해석하며 중등 수학으로 이어지는 사고의 기초를 완성합니다.",
      subjects: [
        "분수와 소수의 나눗셈",
        "비·비율과 비례 관계",
        "원의 넓이와 입체도형의 부피",
        "자료의 해석과 가능성",
      ],
      activities: [
        "비율을 활용한 생활 문제 해결하기",
        "축척을 이용하여 공간 표현하기",
        "원의 넓이 공식을 탐구하여 발견하기",
        "자료를 비교하고 합리적으로 판단하기",
      ],
    },
  ],

  featureEyebrow: "Mathematical Thinking",

  featureTitle: (
    <>
      풀이보다 중요한
      <br />
      생각의 과정을 배웁니다
    </>
  ),

  featureDescription:
    "학생들은 하나의 정답을 빠르게 구하는 데 머무르지 않고, 문제를 이해하고 전략을 세우며 자신의 풀이를 설명합니다. 친구들의 다양한 해결 방법을 비교하며 더 효율적이고 창의적인 사고로 발전시킵니다.",

  featureImage:
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "수학적 사고와 문제 해결을 표현한 수식",

  featureBadge: "Problem Solving",

  featureBadgeSubtitle: "생각하고 설명하는 수학",

  featureItems: [
    {
      title: "원리 중심의 이해",
      description:
        "공식을 외우기 전에 구체물과 그림, 수학적 표현을 통해 개념이 만들어지는 원리를 이해합니다.",
    },
    {
      title: "다양한 해결 전략",
      description:
        "한 가지 풀이만 따르지 않고 여러 방법을 시도하며 자신에게 적절한 해결 전략을 발견합니다.",
    },
    {
      title: "과정을 설명하는 수학",
      description:
        "답뿐 아니라 왜 그렇게 생각했는지 말과 글, 그림과 식으로 표현하며 사고를 더욱 분명하게 다듬습니다.",
    },
  ],

  processTitle: "수학 수업의 배움 과정",

  processDescription:
    "생활 속 문제를 발견하고 수학적 관계를 탐구하며, 해결 방법을 표현하고 다른 방법과 비교하는 과정을 경험합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "문제 이해하기",
      description:
        "문제의 상황과 조건을 살펴보고 무엇을 구해야 하는지 정확하게 파악합니다.",
    },
    {
      number: "02",
      icon: Brain,
      title: "전략 세우기",
      description:
        "그림, 표와 식, 규칙 찾기 등 문제에 알맞은 해결 방법을 계획합니다.",
    },
    {
      number: "03",
      icon: Calculator,
      title: "해결하고 확인하기",
      description:
        "계획한 방법으로 문제를 해결하고 계산과 결과가 타당한지 확인합니다.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "설명하고 확장하기",
      description:
        "풀이 과정을 친구들과 나누고 다른 방법과 비교하며 새로운 문제로 확장합니다.",
    },
  ],

  growthTitle: (
    <>
      수학 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 수학을 정답과 점수를 위한 과목이 아니라, 세상의 관계와 규칙을 이해하고 삶의 문제를 해결하는 유용한 사고 도구로 경험하도록 돕습니다.",

  growthHighlight:
    "어려운 문제 앞에서도 포기하지 않고 근거를 바탕으로 생각하며 해결하는 자신감 있는 탐구자로 성장합니다.",

  growthPoints: [
    "수와 도형에 담긴 개념과 원리를 정확하게 이해합니다.",
    "문제의 조건을 분석하고 적절한 해결 전략을 선택합니다.",
    "자신의 수학적 생각과 풀이 과정을 논리적으로 설명합니다.",
    "여러 가지 해결 방법을 비교하고 더 효율적인 방법을 찾습니다.",
    "생활 속 현상을 수학적으로 바라보고 합리적으로 판단합니다.",
  ],

  nextSubjectId: "social",
  nextSubjectName: "사회",

  theme: {
    accent: "#08717c",
    accentDark: "#075c65",
    accentLight: "#17a1aa",
    accentPale: "#e9f8f8",
    accentBorder: "#b8e2e3",

    heroFrom: "#061e24",
    heroVia: "#075663",
    heroTo: "#26a5ad",

    darkSection: "#08282d",
    darkSectionSoft: "#113b40",
    labelText: "#9de7e8",
  },
};