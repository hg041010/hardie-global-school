import {
  Atom,
  Beaker,
  BookOpen,
  Brain,
  Dna,
  FlaskConical,
  Microscope,
  Search,
  Sprout,
  Users,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondaryScienceSubject: SubjectData = {
  id: "science",

  name: "과학",
  englishName: "Science",
  subtitle: "Inquiry · Discovery · Application",

  heroDescription: (
    <>
      질문하고 탐구하며,
      <br className="hidden sm:block" />
      과학으로 세상의 원리를 발견합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Secondary Science Education",

  introTitle: (
    <>
      호기심에서 출발해
      <br />
      증거로 답을 찾아갑니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 중·고등 과학 교육은 학생들이 자연과 일상에서 질문을 발견하고, 관찰과 실험을 통해 스스로 답을 찾아가도록 돕습니다.",
    "물리·화학·생명과학·지구과학의 핵심 개념을 서로 연결하여 배우며 과학적 사고력과 문제 해결 능력을 기릅니다.",
    "학생들은 실험 결과를 분석하고 근거에 따라 결론을 설명하며, 과학과 기술이 사회와 환경에 미치는 영향을 책임 있게 판단합니다.",
  ],

  quote: (
    <>
      질문하고,
      <br />
      실험하며,
      <br />
      증거로 설명합니다.
    </>
  ),

  quoteDescription:
    "과학은 외운 지식을 확인하는 교과가 아니라, 현상을 관찰하고 검증 가능한 근거로 세상을 이해하는 탐구의 과정입니다.",

  tags: ["과학적 탐구", "실험", "분석", "생명", "물질", "환경"],

  competenciesTitle: "중·고등 과학 교육의 핵심 역량",

  competenciesDescription:
    "과학적 질문을 만들고 탐구를 설계하며, 자료와 증거를 바탕으로 합리적인 결론을 도출하는 능력을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Search,
      title: "과학적 탐구",
      description:
        "자연 현상에서 질문을 발견하고 관찰과 실험을 통해 검증 가능한 답을 찾아갑니다.",
    },
    {
      number: "02",
      icon: Brain,
      title: "자료 분석과 추론",
      description:
        "측정 결과와 다양한 자료를 해석하고 증거를 바탕으로 원인과 관계를 설명합니다.",
    },
    {
      number: "03",
      icon: FlaskConical,
      title: "실험 설계와 수행",
      description:
        "변인을 고려하여 탐구 절차를 계획하고 안전 수칙을 지키며 실험을 수행합니다.",
    },
    {
      number: "04",
      icon: Sprout,
      title: "과학·사회·환경 이해",
      description:
        "과학기술이 인간과 환경에 미치는 영향을 살펴보고 책임 있는 선택을 고민합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "물질과 에너지, 생명, 지구와 우주를 통합적으로 탐구하며 과학적 개념과 실제 현상을 연결합니다.",

  learningAreas: [
    {
      icon: Atom,
      eyebrow: "Physics",
      title: "물리",
      description:
        "운동과 힘, 에너지, 파동과 전기 현상을 탐구하며 자연을 설명하는 기본 원리를 이해합니다.",
      points: [
        "운동과 힘의 관계",
        "일과 에너지의 전환",
        "빛과 소리의 성질",
        "전기와 자기의 원리",
      ],
    },
    {
      icon: Beaker,
      eyebrow: "Chemistry",
      title: "화학",
      description:
        "물질의 구조와 성질, 변화의 원리를 실험을 통해 탐구하고 화학 반응을 설명합니다.",
      points: [
        "원자와 분자의 구조",
        "물질의 상태와 성질",
        "화학 반응과 에너지",
        "산과 염기 및 용액",
      ],
    },
    {
      icon: Dna,
      eyebrow: "Biology",
      title: "생명과학",
      description:
        "세포와 유전, 생태계와 생명 활동을 탐구하며 생명 현상의 공통 원리를 이해합니다.",
      points: [
        "세포의 구조와 기능",
        "유전과 생명의 연속성",
        "항상성과 생명 활동",
        "생태계와 생물 다양성",
      ],
    },
    {
      icon: Microscope,
      eyebrow: "Earth & Space",
      title: "지구과학",
      description:
        "지구의 시스템과 기후, 지질 변화와 우주를 탐구하며 지구 환경의 상호작용을 이해합니다.",
      points: [
        "지권과 지질 변화",
        "대기와 해양의 순환",
        "기후와 환경 변화",
        "태양계와 우주의 구조",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "7학년부터 12학년까지 관찰과 기초 실험에서 출발하여 통합적 개념 이해, 심화 탐구와 과학적 연구로 배움을 확장합니다.",

  gradeDetails: [
    {
      grade: "7학년",
      title: "관찰과 탐구의 기초 다지기",
      description:
        "주변의 물질과 생명, 지구 현상을 자세히 관찰하고 측정하며 과학적 질문을 만드는 기초를 익힙니다.",
      subjects: [
        "과학적 관찰과 측정",
        "물질의 상태와 변화",
        "생물의 구조와 기능",
        "지구와 환경의 기초",
      ],
      activities: [
        "관찰 기록 작성하기",
        "기초 측정 실험 수행하기",
        "현미경으로 세포 관찰하기",
        "생활 속 과학 현상 조사하기",
      ],
    },
    {
      grade: "8학년",
      title: "물질과 에너지의 관계 이해하기",
      description:
        "힘과 운동, 열과 에너지, 물질의 특성을 실험으로 확인하고 결과를 그래프와 표로 정리합니다.",
      subjects: [
        "힘과 운동",
        "열과 에너지",
        "물질의 성질과 분리",
        "생태계의 구성과 상호작용",
      ],
      activities: [
        "운동 자료 측정·분석하기",
        "열에너지 전달 실험하기",
        "혼합물 분리 실험하기",
        "학교 주변 생태계 조사하기",
      ],
    },
    {
      grade: "9학년",
      title: "과학적 관계를 분석하고 설명하기",
      description:
        "전기와 자기, 화학 반응, 유전과 지질 변화를 학습하며 변수 사이의 관계를 분석하고 과학적으로 설명합니다.",
      subjects: [
        "전기와 자기",
        "화학 반응의 원리",
        "유전과 생식",
        "지질 변화와 지구 역사",
      ],
      activities: [
        "간단한 전기 회로 설계하기",
        "화학 반응 전후의 변화 측정하기",
        "유전 형질 자료 분석하기",
        "암석과 지층 관찰하기",
      ],
    },
    {
      grade: "10학년",
      title: "통합과학의 핵심 개념 연결하기",
      description:
        "물질과 에너지, 생명 시스템, 지구 환경의 관계를 통합적으로 이해하고 복합적인 자연 현상을 설명합니다.",
      subjects: [
        "물질의 규칙성과 결합",
        "에너지와 역학적 시스템",
        "생명 시스템과 항상성",
        "지구 시스템과 환경",
      ],
      activities: [
        "과학 개념 연결 지도 만들기",
        "에너지 전환 실험 설계하기",
        "생명 시스템 모형 제작하기",
        "기후 자료 분석 보고서 작성하기",
      ],
    },
    {
      grade: "11학년",
      title: "분야별 심화 탐구 수행하기",
      description:
        "물리·화학·생명·지구과학의 심화 개념을 배우고 관심 분야의 탐구 문제를 설정하여 실험과 자료 분석을 수행합니다.",
      subjects: [
        "운동과 에너지의 심화",
        "화학 평형과 반응",
        "유전과 생명공학",
        "대기·해양과 천체",
      ],
      activities: [
        "심화 실험 계획서 작성하기",
        "변인을 통제한 탐구 수행하기",
        "과학 논문과 자료 해석하기",
        "분야별 연구 결과 발표하기",
      ],
    },
    {
      grade: "12학년",
      title: "과학적 연구와 사회적 책임 확장하기",
      description:
        "관심 있는 과학 주제를 장기적으로 탐구하고, 과학기술과 생명윤리, 환경 문제를 근거 중심으로 판단합니다.",
      subjects: [
        "과학 연구 방법",
        "융합 과학과 기술",
        "생명윤리와 과학 윤리",
        "기후·에너지와 지속가능성",
      ],
      activities: [
        "개인 또는 팀 연구 프로젝트 수행",
        "실험 결과 통계 처리하기",
        "과학 연구 보고서 작성하기",
        "과학기술 관련 쟁점 토론하기",
      ],
    },
  ],

  featureEyebrow: "Experiment & Discovery",

  featureTitle: (
    <>
      직접 실험하고
      <br />
      증거로 설명합니다
    </>
  ),

  featureDescription:
    "중·고등 과학 수업은 개념을 암기하는 데 그치지 않습니다. 학생들은 관찰과 실험, 자료 분석을 통해 가설을 검증하고 자신의 결론을 과학적 근거로 설명합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "과학 실험을 수행하는 학생들",

  featureBadge: "Science in Action",

  featureBadgeSubtitle: "Observe • Experiment • Explain",

  featureItems: [
    {
      title: "탐구 중심 실험",
      description:
        "정해진 절차만 따라가기보다 질문과 가설을 세우고 탐구 방법을 직접 계획합니다.",
    },
    {
      title: "자료와 증거 분석",
      description:
        "실험 결과를 표와 그래프로 정리하고 오차와 한계를 고려하여 결론을 도출합니다.",
    },
    {
      title: "과학과 삶의 연결",
      description:
        "환경과 에너지, 건강과 기술 등 실제 문제를 과학적 관점으로 이해하고 해결책을 탐색합니다.",
    },
  ],

  processTitle: "중·고등 과학 수업의 배움 과정",

  processDescription:
    "현상을 관찰하여 질문을 만들고, 탐구를 설계한 뒤 실험과 분석을 통해 근거 있는 결론을 완성합니다.",

  process: [
    {
      number: "01",
      icon: Search,
      title: "관찰하고 질문하기",
      description:
        "자연과 일상의 현상을 자세히 관찰하고 탐구할 문제를 발견합니다.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "가설과 계획 세우기",
      description:
        "예상되는 결과를 가설로 세우고 변인과 절차를 고려하여 탐구를 계획합니다.",
    },
    {
      number: "03",
      icon: FlaskConical,
      title: "실험하고 분석하기",
      description:
        "안전하게 실험을 수행하고 측정 자료를 정리하여 의미 있는 관계를 찾습니다.",
    },
    {
      number: "04",
      icon: Users,
      title: "설명하고 공유하기",
      description:
        "증거를 바탕으로 결론을 설명하고 다른 결과와 비교하며 탐구를 개선합니다.",
    },
  ],

  growthTitle: (
    <>
      과학을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 호기심을 잃지 않고 스스로 질문하며, 자료와 증거를 통해 합리적으로 판단하는 과학적 탐구자로 성장하도록 돕습니다.",

  growthHighlight:
    "질문을 발견하고 증거를 탐색하며, 과학적 사고로 삶과 세상의 문제를 해결하는 사람으로 성장합니다.",

  growthPoints: [
    "자연 현상에서 의미 있는 과학적 질문을 발견합니다.",
    "가설을 세우고 적절한 탐구와 실험을 설계합니다.",
    "자료와 실험 결과를 정확하게 분석하고 해석합니다.",
    "증거를 바탕으로 과학적 결론을 논리적으로 설명합니다.",
    "과학기술과 환경 문제를 책임 있는 관점으로 판단합니다.",
  ],

  nextSubjectId: "social",
  nextSubjectName: "사회",

  backLink: "/curriculum/middle-high",
  backText: "중·고등 교과목으로 돌아가기",
  backOverviewText: "중·고등 교과목 전체",
  subjectBasePath: "/curriculum/middle-high/subjects",

  theme: {
    accent: "#0f9f86",
    accentDark: "#087665",
    accentLight: "#35c7ad",
    accentPale: "#e8fbf6",
    accentBorder: "#a8e8da",

    heroFrom: "#041d23",
    heroVia: "#075f62",
    heroTo: "#0f9f86",

    darkSection: "#06282b",
    darkSectionSoft: "#0b4546",
    labelText: "#8df0da",
  },
};