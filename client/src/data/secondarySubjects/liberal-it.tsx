import {
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Compass,
  Laptop,
  Lightbulb,
  PenLine,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondaryLiberalItSubject: SubjectData = {
  id: "liberal-it",

  name: "교양수업",
  englishName: "Career & IT Education",
  subtitle: "Career · Digital Literacy · Future Readiness",

  heroDescription: (
    <>
      자신의 가능성을 발견하고,
      <br className="hidden sm:block" />
      디지털 기술로 미래를 준비합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Career & IT Education",

  introTitle: (
    <>
      나를 이해하고
      <br />
      미래를 스스로 설계합니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 중·고등 교양수업은 진로와 IT 교육을 연결하여 학생들이 자신의 흥미와 강점을 발견하고 미래 사회에 필요한 역량을 기르도록 돕습니다.",
    "진로수업에서는 다양한 전공과 직업, 삶의 모습을 탐색하고 자신의 관심과 배움을 구체적인 진로 계획으로 발전시킵니다.",
    "IT수업에서는 디지털 도구와 정보를 안전하고 책임 있게 활용하며, 코딩과 프로젝트 활동을 통해 논리적 사고와 창의적인 문제 해결 능력을 기릅니다.",
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
    "교양수업은 하나의 정답을 찾는 시간이 아니라 자신의 가능성을 발견하고 변화하는 세상을 준비하는 과정입니다.",

  tags: [
    "자기 이해",
    "진로 탐색",
    "진로 설계",
    "디지털 리터러시",
    "코딩",
    "프로젝트",
  ],

  competenciesTitle: "중·고등 교양수업의 핵심 역량",

  competenciesDescription:
    "자신을 이해하고 미래를 탐색하며, 디지털 기술을 안전하고 창의적으로 활용하는 힘을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Compass,
      title: "자기 이해",
      description:
        "자신의 흥미와 강점, 가치와 성향을 발견하고 긍정적인 자아 정체성을 형성합니다.",
    },
    {
      number: "02",
      icon: BriefcaseBusiness,
      title: "진로 설계",
      description:
        "다양한 전공과 직업을 탐색하고 자신의 배움과 경험을 미래의 목표로 연결합니다.",
    },
    {
      number: "03",
      icon: Laptop,
      title: "디지털 활용",
      description:
        "디지털 도구의 특성을 이해하고 학습과 표현, 협업에 적절하게 활용합니다.",
    },
    {
      number: "04",
      icon: BrainCircuit,
      title: "문제 해결",
      description:
        "문제를 분석하고 논리적으로 사고하며 기술을 활용해 새로운 해결 방법을 만듭니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "자기 이해와 진로 설계, 디지털 활용과 코딩, 정보 윤리를 연결하여 미래 사회를 준비합니다.",

  learningAreas: [
    {
      icon: Compass,
      eyebrow: "Self Discovery",
      title: "자기 이해와 진로 설계",
      description:
        "자신의 흥미와 강점, 가치와 경험을 이해하고 구체적인 진로 목표와 실천 계획을 세웁니다.",
      points: [
        "흥미와 강점 탐색",
        "가치와 성향 이해",
        "진로 목표 설정",
        "진로 포트폴리오",
      ],
    },
    {
      icon: BriefcaseBusiness,
      eyebrow: "Career Exploration",
      title: "전공과 직업 탐색",
      description:
        "다양한 전공과 직업 세계를 조사하고 사회 변화에 따라 새롭게 등장하는 진로를 탐색합니다.",
      points: [
        "전공과 학과 탐색",
        "직업 세계의 변화",
        "직업인과의 만남",
        "진학 및 진로 정보",
      ],
    },
    {
      icon: Laptop,
      eyebrow: "Digital Literacy",
      title: "디지털 리터러시",
      description:
        "정보를 탐색하고 판단하며 문서와 발표 자료, 디지털 콘텐츠를 효과적으로 제작합니다.",
      points: [
        "정보 검색과 분석",
        "문서와 발표 자료",
        "디지털 협업",
        "미디어 제작",
      ],
    },
    {
      icon: BrainCircuit,
      eyebrow: "Computational Thinking",
      title: "코딩과 문제 해결",
      description:
        "알고리즘과 프로그래밍의 기초를 배우고 실제 문제를 해결하는 디지털 프로젝트를 수행합니다.",
      points: [
        "알고리즘과 논리",
        "코딩 기초",
        "데이터와 인공지능",
        "디지털 프로젝트",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "중학교의 자기 탐색과 디지털 기초에서 시작하여 고등학교의 진로 설계와 융합 프로젝트까지 단계적으로 성장합니다.",

  gradeDetails: [
    {
      grade: "7학년",
      title: "나를 이해하고 디지털 기초 익히기",
      description:
        "자신의 흥미와 강점, 학습 습관을 살펴보고 컴퓨터와 디지털 도구를 안전하게 사용하는 기본 능력을 익힙니다.",
      subjects: [
        "흥미와 강점 탐색",
        "학습 습관 돌아보기",
        "파일과 폴더 관리",
        "디지털 시민의식",
      ],
      activities: [
        "나를 소개하는 디지털 카드 만들기",
        "강점과 관심 분야 발표하기",
        "파일과 폴더 체계적으로 정리하기",
        "디지털 사용 약속 만들기",
      ],
    },
    {
      grade: "8학년",
      title: "직업 세계와 디지털 표현 탐색하기",
      description:
        "다양한 직업과 삶의 모습을 조사하고 문서와 발표 도구를 활용해 자신의 생각과 조사 결과를 표현합니다.",
      subjects: [
        "직업 세계 탐색",
        "일과 삶의 의미",
        "정보 검색",
        "문서와 발표 자료 제작",
      ],
      activities: [
        "관심 직업 조사하기",
        "직업인 인터뷰 질문 만들기",
        "진로 소개 발표 자료 제작하기",
        "온라인 정보 출처 비교하기",
      ],
    },
    {
      grade: "9학년",
      title: "진로 목표와 코딩 기초 연결하기",
      description:
        "고등학교 진학과 미래의 진로를 구체적으로 탐색하고 알고리즘과 코딩의 기본 원리를 익힙니다.",
      subjects: [
        "진로 목표 설정",
        "고등학교 과정 탐색",
        "알고리즘과 순서",
        "조건과 반복",
      ],
      activities: [
        "중학교 진로 포트폴리오 만들기",
        "관심 분야 학습 계획 세우기",
        "블록 코딩 프로젝트",
        "간단한 퀴즈 프로그램 만들기",
      ],
    },
    {
      grade: "10학년",
      title: "전공을 탐색하고 디지털 프로젝트 기획하기",
      description:
        "자신의 관심과 학업을 대학 전공 및 직업과 연결하고 실제 문제를 주제로 프로젝트를 기획합니다.",
      subjects: [
        "전공과 학과 탐색",
        "진로 정보 분석",
        "프로젝트 기획",
        "디지털 콘텐츠 제작",
      ],
      activities: [
        "관심 전공 비교 조사하기",
        "진로 로드맵 작성하기",
        "사회 문제 해결 프로젝트 기획하기",
        "디지털 콘텐츠 제작하기",
      ],
    },
    {
      grade: "11학년",
      title: "정보를 분석하고 기술로 문제 해결하기",
      description:
        "신뢰할 수 있는 정보를 선별하고 데이터와 코딩, 디지털 도구를 활용해 실제 문제의 해결책을 만듭니다.",
      subjects: [
        "정보의 신뢰성과 출처",
        "데이터 이해와 표현",
        "코딩과 자동화",
        "인공지능의 활용과 윤리",
      ],
      activities: [
        "온라인 정보 검증하기",
        "데이터를 표와 그래프로 표현하기",
        "생활 문제 해결 프로그램 제작하기",
        "AI 활용 원칙 토론하기",
      ],
    },
    {
      grade: "12학년",
      title: "미래를 설계하고 결과물로 완성하기",
      description:
        "고등학교에서의 성장과 경험을 정리하고 진학과 진로를 위한 포트폴리오 및 융합 프로젝트를 완성합니다.",
      subjects: [
        "진학 및 진로 계획",
        "개인 포트폴리오",
        "프로젝트 협업",
        "디지털 결과물 발표",
      ],
      activities: [
        "진로 포트폴리오 완성하기",
        "학업 및 진로 계획 발표하기",
        "개인 또는 팀 프로젝트 수행하기",
        "디지털 결과물 전시 및 공유하기",
      ],
    },
  ],

  featureEyebrow: "Career & Digital Project",

  featureTitle: (
    <>
      진로를 발견하고
      <br />
      기술로 가능성을 펼칩니다
    </>
  ),

  featureDescription:
    "교양수업에서는 직업의 이름이나 컴퓨터 기능만 암기하지 않습니다. 자신의 관심과 강점을 실제 문제에 연결하고, 디지털 기술을 활용해 아이디어를 결과물로 발전시킵니다.",

  featureImage:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "학생들이 디지털 도구를 활용해 프로젝트를 진행하는 모습",

  featureBadge: "Future Readiness",

  featureBadgeSubtitle: "Career • Digital • Project",

  featureItems: [
    {
      title: "경험 중심 진로 탐색",
      description:
        "검사 결과에만 의존하지 않고 조사와 체험, 대화를 통해 자신의 가능성을 발견합니다.",
    },
    {
      title: "생활과 연결된 IT 교육",
      description:
        "기능을 따로 암기하지 않고 실제 학습과 생활 문제를 해결하며 디지털 기술을 익힙니다.",
    },
    {
      title: "진로·IT 융합 프로젝트",
      description:
        "관심 있는 전공과 직업, 사회 문제를 조사하고 디지털 콘텐츠와 코딩 결과물로 표현합니다.",
    },
  ],

  processTitle: "중·고등 교양수업의 배움 과정",

  processDescription:
    "자신을 이해하고 세상을 탐색한 뒤, 디지털 기술을 익히고 프로젝트를 통해 미래의 가능성을 구체화합니다.",

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
      icon: BriefcaseBusiness,
      title: "세상을 탐색하기",
      description:
        "다양한 전공과 직업, 미래 사회의 변화와 필요한 역량을 조사합니다.",
    },
    {
      number: "03",
      icon: BookOpen,
      title: "기술을 익히기",
      description:
        "정보 탐색과 문서 작성, 코딩과 디지털 제작에 필요한 기능을 익힙니다.",
    },
    {
      number: "04",
      icon: PenLine,
      title: "프로젝트로 실천하기",
      description:
        "진로와 생활의 문제를 주제로 아이디어를 디지털 결과물로 완성하고 공유합니다.",
    },
  ],

  growthTitle: (
    <>
      교양수업을 통해
      <br />
      미래를 스스로 설계합니다
    </>
  ),

  growthDescription:
    "학생들이 자신의 가능성을 다른 사람과 비교하지 않고 꾸준히 발견하며, 디지털 기술을 책임 있게 활용하여 자신의 배움과 미래를 능동적으로 설계하도록 돕습니다.",

  growthHighlight:
    "자신의 강점과 관심을 이해하고 디지털 기술을 지혜롭게 활용하여 미래의 가능성을 스스로 만들어 가는 사람으로 성장합니다.",

  growthPoints: [
    "자신의 흥미와 강점, 가치와 성장 과정을 긍정적으로 이해합니다.",
    "다양한 전공과 직업, 삶의 모습을 열린 태도로 탐색합니다.",
    "디지털 도구를 학습과 표현, 협업에 적절하게 활용합니다.",
    "정보의 신뢰성을 판단하고 개인정보와 저작권을 존중합니다.",
    "코딩과 프로젝트 활동을 통해 논리적이고 창의적으로 문제를 해결합니다.",
  ],

  nextSubjectId: "bible",
  nextSubjectName: "성경",

  backLink: "/curriculum/middle-high",
  backText: "중·고등 교과목으로 돌아가기",
  backOverviewText: "중·고등 교과목 전체",
  subjectBasePath: "/curriculum/middle-high/subjects",

  theme: {
    accent: "#0f766e",
    accentDark: "#115e59",
    accentLight: "#2dd4bf",
    accentPale: "#f0fdfa",
    accentBorder: "#99f6e4",
    heroFrom: "#042f2e",
    heroVia: "#115e59",
    heroTo: "#0d9488",
    darkSection: "#042f2e",
    darkSectionSoft: "#134e4a",
    labelText: "#99f6e4",
  },
};