import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Code2,
  Compass,
  Cpu,
  FolderKanban,
  Lightbulb,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import type { SubjectData } from "./types";

export const characterSubject: SubjectData = {
  id: "liberal-it",

  name: "교양수업",
  englishName: "Career & Information Technology",
  subtitle: "진로와 IT",

  heroDescription: (
    <>
      자신의 가능성을 발견하고,
      <br className="hidden sm:block" />
      디지털 기술로 미래를 준비합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Career & IT Education",

  introTitle: (
    <>
      나를 이해하고
      <br />
      미래를 스스로 설계합니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 교양수업은 진로와 IT 교육을 통해 학생들이 자신의 흥미와 강점을 발견하고 미래 사회에 필요한 기초 역량을 기르도록 돕습니다.",
    "진로수업에서는 자신을 이해하고 다양한 직업과 삶의 모습을 탐색하며, 현재의 배움이 자신의 미래와 어떻게 연결되는지 생각합니다.",
    "IT수업에서는 컴퓨터와 디지털 도구를 안전하고 책임 있게 활용하고, 정보를 탐색하고 표현하며 간단한 코딩과 프로젝트 활동을 통해 문제 해결 능력을 키웁니다.",
  ],

  quote: (
    <>
      나를 발견하고,
      <br />
      기술을 배우며,
      <br />
      미래를 만들어 갑니다.
    </>
  ),

  quoteDescription:
    "교양수업은 정해진 하나의 답을 찾는 시간이 아니라 자신의 가능성을 발견하고, 변화하는 세상에서 필요한 도구와 태도를 익히는 과정입니다.",

  tags: [
    "자기이해",
    "진로탐색",
    "직업세계",
    "디지털 리터러시",
    "코딩",
    "프로젝트",
  ],

  competenciesTitle: "교양수업의 핵심 역량",

  competenciesDescription:
    "자신을 이해하고 미래를 탐색하며, 디지털 기술을 안전하고 창의적으로 활용하는 힘을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Compass,
      title: "자기 이해",
      description:
        "자신의 흥미와 강점, 가치와 성향을 발견하고 긍정적인 자아상을 형성합니다.",
    },
    {
      number: "02",
      icon: Target,
      title: "진로 설계",
      description:
        "다양한 삶과 직업을 탐색하고 자신의 관심과 배움을 미래의 목표로 연결합니다.",
    },
    {
      number: "03",
      icon: MonitorSmartphone,
      title: "디지털 활용",
      description:
        "컴퓨터와 디지털 도구의 기본 원리를 이해하고 학습과 표현에 적절하게 활용합니다.",
    },
    {
      number: "04",
      icon: Brain,
      title: "문제 해결",
      description:
        "문제를 작은 단계로 나누고 논리적으로 생각하며 기술을 활용해 해결 방법을 만듭니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "자기 이해와 진로 탐색, 디지털 기초와 코딩, 정보 윤리를 연결하여 미래를 준비하는 실천 역량을 기릅니다.",

  learningAreas: [
    {
      icon: Compass,
      eyebrow: "Self Discovery",
      title: "자기 이해",
      description:
        "자신이 좋아하는 것과 잘하는 것, 중요하게 생각하는 가치를 발견하며 자신을 긍정적으로 이해합니다.",
      points: [
        "흥미와 강점 발견",
        "감정과 성향 이해",
        "가치와 선택",
        "성장 경험 돌아보기",
      ],
    },
    {
      icon: BriefcaseBusiness,
      eyebrow: "Career Exploration",
      title: "진로 탐색",
      description:
        "다양한 직업과 삶의 모습을 알아보고 학교에서의 배움이 미래와 어떻게 연결되는지 탐색합니다.",
      points: [
        "다양한 직업의 세계",
        "일과 삶의 의미",
        "직업인과의 만남",
        "진로 목표와 실천",
      ],
    },
    {
      icon: Cpu,
      eyebrow: "Digital Literacy",
      title: "디지털 기초",
      description:
        "컴퓨터와 디지털 기기의 기본 기능을 익히고 정보를 탐색하고 정리하며 자신의 생각을 효과적으로 표현합니다.",
      points: [
        "컴퓨터와 파일 관리",
        "문서와 발표 자료",
        "정보 검색과 활용",
        "디지털 협업 도구",
      ],
    },
    {
      icon: Code2,
      eyebrow: "Computational Thinking",
      title: "코딩과 문제 해결",
      description:
        "순서와 규칙, 조건과 반복을 이해하고 간단한 코딩 활동을 통해 논리적 사고와 창의적인 문제 해결 능력을 기릅니다.",
      points: [
        "알고리즘과 순서",
        "블록 코딩",
        "조건과 반복",
        "디지털 프로젝트",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 자신과 주변의 일에 관심을 가지는 단계에서 시작하여, 진로를 탐색하고 디지털 기술로 자신의 아이디어를 구현하는 단계까지 성장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "나의 모습과 관심사 발견하기",
      description:
        "내가 좋아하는 활동과 잘하는 일을 이야기하며 자신을 긍정적으로 이해합니다. 컴퓨터와 디지털 기기를 안전하게 사용하는 기본 습관도 함께 익힙니다.",
      subjects: [
        "내가 좋아하는 것",
        "나의 장점과 소중함",
        "우리 주변의 다양한 일",
        "디지털 기기 사용 약속",
      ],
      activities: [
        "나를 소개하는 그림 카드 만들기",
        "좋아하는 활동 발표하기",
        "학교에서 일하는 사람 찾아보기",
        "컴퓨터 바른 사용법 익히기",
      ],
    },
    {
      grade: "2학년",
      title: "다양한 역할과 직업 알아보기",
      description:
        "가정과 학교, 지역사회에서 사람들이 맡고 있는 다양한 역할을 살펴봅니다. 마우스와 키보드, 그림과 글자 도구를 활용하여 간단한 디지털 결과물을 만듭니다.",
      subjects: [
        "가정과 학교의 역할",
        "우리 동네의 직업",
        "키보드와 마우스 활용",
        "그림과 글자 표현",
      ],
      activities: [
        "우리 동네 직업 지도 만들기",
        "관심 있는 직업 그리기",
        "키보드로 짧은 문장 입력하기",
        "디지털 그림 카드 제작하기",
      ],
    },
    {
      grade: "3학년",
      title: "나의 강점과 직업 세계 연결하기",
      description:
        "자신의 흥미와 강점을 구체적으로 살펴보고 여러 직업에 필요한 능력과 태도를 알아봅니다. 파일을 만들고 저장하며 정보를 검색하고 정리하는 기초 기능을 익힙니다.",
      subjects: [
        "흥미와 강점 탐색",
        "직업에 필요한 능력",
        "파일과 폴더 관리",
        "기초 정보 검색",
      ],
      activities: [
        "나의 강점 나무 만들기",
        "관심 직업 조사하기",
        "파일과 폴더 정리하기",
        "조사 내용을 문서로 작성하기",
      ],
    },
    {
      grade: "4학년",
      title: "진로를 탐색하고 코딩의 원리 이해하기",
      description:
        "다양한 직업인의 삶과 진로 선택 과정을 살펴보고 자신의 관심 분야를 넓혀 갑니다. 순서와 규칙, 조건과 반복을 활용한 블록 코딩으로 간단한 프로그램을 만듭니다.",
      subjects: [
        "직업과 삶의 다양성",
        "진로 선택의 과정",
        "알고리즘과 순서",
        "조건과 반복",
      ],
      activities: [
        "직업인 인터뷰 질문 만들기",
        "관심 분야 진로 카드 제작하기",
        "블록 코딩으로 캐릭터 움직이기",
        "간단한 퀴즈 프로그램 만들기",
      ],
    },
    {
      grade: "5학년",
      title: "정보를 판단하고 디지털 프로젝트 만들기",
      description:
        "인터넷에서 찾은 정보의 출처와 신뢰성을 살펴보고 개인정보와 저작권을 존중하는 태도를 배웁니다. 진로와 사회 문제를 주제로 디지털 자료를 기획하고 제작합니다.",
      subjects: [
        "정보의 신뢰성과 출처",
        "개인정보와 저작권",
        "진로 정보 탐색",
        "디지털 콘텐츠 제작",
      ],
      activities: [
        "온라인 정보 비교하기",
        "올바른 이미지 사용법 익히기",
        "관심 직업 소개 자료 만들기",
        "모둠별 디지털 캠페인 제작하기",
      ],
    },
    {
      grade: "6학년",
      title: "미래를 계획하고 기술로 아이디어 구현하기",
      description:
        "자신의 성장 과정과 관심 분야를 돌아보며 중학교 생활과 미래의 진로를 계획합니다. 생활 속 문제를 발견하고 코딩과 디지털 도구를 활용하여 해결책을 설계하는 프로젝트를 수행합니다.",
      subjects: [
        "나의 성장과 진로 계획",
        "미래 사회와 직업 변화",
        "프로젝트 기획과 협업",
        "코딩을 활용한 문제 해결",
      ],
      activities: [
        "나의 진로 포트폴리오 만들기",
        "미래 직업 조사하고 발표하기",
        "생활 문제 해결 아이디어 기획하기",
        "디지털 결과물 제작하고 공유하기",
      ],
    },
  ],

  featureEyebrow: "Future Readiness",

  featureTitle: (
    <>
      진로를 발견하고
      <br />
      기술로 가능성을 펼칩니다
    </>
  ),

  featureDescription:
    "교양수업에서는 직업의 이름을 외우거나 컴퓨터 기능만 연습하지 않습니다. 학생들은 자신의 관심과 강점을 실제 문제와 연결하고, 디지털 도구를 활용해 아이디어를 계획하고 표현하며 미래를 준비합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "디지털 도구를 활용해 프로젝트를 진행하는 학생들",

  featureBadge: "Career & Digital Project",

  featureBadgeSubtitle: "발견한 가능성을 결과물로",

  featureItems: [
    {
      title: "경험 중심 진로 탐색",
      description:
        "검사 결과에만 의존하지 않고 관찰과 체험, 조사와 대화를 통해 자신의 관심과 강점을 발견합니다.",
    },
    {
      title: "생활과 연결된 IT 교육",
      description:
        "기능을 따로 암기하지 않고 실제 학습과 생활 문제를 해결하는 과정에서 디지털 도구를 활용합니다.",
    },
    {
      title: "진로·IT 융합 프로젝트",
      description:
        "관심 있는 직업과 사회 문제를 조사하고 디지털 콘텐츠와 코딩 결과물로 표현합니다.",
    },
  ],

  processTitle: "교양수업의 배움 과정",

  processDescription:
    "자신을 이해하고 세상을 탐색한 뒤, 디지털 기술을 배우고 프로젝트를 통해 미래의 가능성을 구체화합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "나를 발견하기",
      description:
        "자신의 흥미와 강점, 가치와 경험을 살펴보며 현재의 나를 이해합니다.",
    },
    {
      number: "02",
      icon: Compass,
      title: "세상을 탐색하기",
      description:
        "다양한 직업과 삶의 모습을 조사하고 미래 사회의 변화와 필요한 역량을 알아봅니다.",
    },
    {
      number: "03",
      icon: Code2,
      title: "기술을 익히기",
      description:
        "정보 탐색과 문서 작성, 코딩과 디지털 제작에 필요한 기초 기능을 익힙니다.",
    },
    {
      number: "04",
      icon: FolderKanban,
      title: "프로젝트로 실천하기",
      description:
        "진로와 생활의 문제를 주제로 아이디어를 계획하고 디지털 결과물로 완성하여 공유합니다.",
    },
  ],

  growthTitle: (
    <>
      교양수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 자신의 가능성을 다른 사람과 비교하지 않고 꾸준히 발견하며, 디지털 기술을 책임 있게 활용하여 자신의 배움과 미래를 능동적으로 설계하도록 돕습니다.",

  growthHighlight:
    "자신의 강점과 관심을 이해하고, 디지털 기술을 지혜롭게 활용하여 미래의 가능성을 스스로 만들어 가는 사람으로 성장합니다.",

  growthPoints: [
    "자신의 흥미와 강점, 가치와 성장 과정을 긍정적으로 이해합니다.",
    "다양한 직업과 삶의 모습을 열린 태도로 탐색합니다.",
    "컴퓨터와 디지털 도구를 학습과 표현에 적절하게 활용합니다.",
    "정보의 신뢰성을 판단하고 개인정보와 저작권을 존중합니다.",
    "코딩과 프로젝트 활동을 통해 논리적이고 창의적으로 문제를 해결합니다.",
  ],

  nextSubjectId: "korean",
  nextSubjectName: "국어",

  theme: {
    accent: "#5368b5",
    accentDark: "#3c4e91",
    accentLight: "#7a8bd1",
    accentPale: "#f0f2fc",
    accentBorder: "#cbd2f0",

    heroFrom: "#131a3d",
    heroVia: "#354789",
    heroTo: "#7385cf",

    darkSection: "#182047",
    darkSectionSoft: "#29366c",
    labelText: "#d3d9fa",
  },
};