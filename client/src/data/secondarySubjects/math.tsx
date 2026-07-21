import {
  Calculator,
  Compass,
  Brain,
  Ruler,
  BookOpen,
  PenLine,
  Search,
  Users,
  Sigma,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondaryMathSubject: SubjectData = {
  id:"math",
  name:"수학",
  englishName:"Mathematics",
  subtitle:"Logical Thinking & Problem Solving",

  heroDescription:(<>논리적으로 사고하고,<br className="hidden sm:block"/>수학으로 세상을 이해합니다.</>),
  heroImage:"https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1920&q=88",

  introEyebrow:"Secondary Mathematics",
  introTitle:(<>생각하는 힘을 기르고<br/>문제를 해결합니다</>),
  introParagraphs:[
    "하디글로벌스쿨의 중·고등 수학 교육은 계산을 넘어 논리적으로 사고하고 스스로 문제를 해결하는 힘을 기르는 데 중점을 둡니다.",
    "학생들은 다양한 해결 전략을 탐구하고 자신의 풀이를 설명하며 수학적 의사소통 능력을 함께 키웁니다.",
    "실생활과 연결된 프로젝트를 통해 수학의 가치를 발견하고 활용합니다."
  ],

  quote:(<>수학은 정답을 찾는 과목이 아니라<br/>생각하는 방법을 배우는 과목입니다.</>),
  quoteDescription:"논리와 창의성을 함께 기르는 수학 교육을 지향합니다.",
  tags:["문제해결","논리","함수","기하","통계","수학적 사고"],

  competenciesTitle:"중·고등 수학 교육의 핵심 역량",
  competenciesDescription:"논리적 사고와 문제 해결 능력을 균형 있게 기릅니다.",

  competencies:[
    {number:"01",icon:Brain,title:"논리적 사고",description:"수학적 근거를 바탕으로 사고합니다."},
    {number:"02",icon:Calculator,title:"문제 해결",description:"다양한 전략으로 문제를 해결합니다."},
    {number:"03",icon:PenLine,title:"수학적 표현",description:"풀이 과정을 설명하고 의사소통합니다."},
    {number:"04",icon:Compass,title:"창의적 탐구",description:"새로운 방법을 탐색하고 적용합니다."},
  ],

  learningAreasTitle:"주요 학습 영역",
  learningAreasDescription:"수와 연산부터 함수와 기하까지 통합적으로 학습합니다.",
  learningAreas:[
    {icon:Calculator,eyebrow:"Number",title:"수와 연산",description:"수 체계와 계산 원리를 이해합니다.",points:["실수","지수","연산","비율"]},
    {icon:Sigma,eyebrow:"Algebra",title:"대수·함수",description:"식과 함수를 탐구합니다.",points:["방정식","함수","그래프","모델링"]},
    {icon:Compass,eyebrow:"Geometry",title:"기하",description:"도형의 성질을 이해합니다.",points:["삼각형","원","증명","공간도형"]},
    {icon:Ruler,eyebrow:"Statistics",title:"확률·통계",description:"자료를 분석하고 해석합니다.",points:["자료분석","확률","통계","해석"]},
  ],

  gradeSectionEyebrow:"Grade-Level Curriculum",
  gradeSectionTitle:"학년별 주요 교육사항",
  gradeSectionDescription:"기초 개념에서 심화 문제 해결까지 단계적으로 성장합니다.",
  gradeDetails:[
    {grade:"7학년",title:"기초 수학",description:"수와 식의 기초.",subjects:["정수","분수","비율","기본도형"],activities:["문제해결","게임","탐구","설명"]},
    {grade:"8학년",title:"대수 확장",description:"방정식과 함수.",subjects:["일차방정식","함수","도형"],activities:["그래프","토의","프로젝트","발표"]},
    {grade:"9학년",title:"논리적 추론",description:"함수와 기하 심화.",subjects:["이차식","함수","기하"],activities:["증명","탐구","모델링","토론"]},
    {grade:"10학년",title:"고등수학 기초",description:"수학적 모델링.",subjects:["함수","확률","통계"],activities:["프로젝트","발표","보고서","실생활"]},
    {grade:"11학년",title:"심화 탐구",description:"심화 문제 해결.",subjects:["미적분기초","통계","기하"],activities:["연구","탐구","발표","협력"]},
    {grade:"12학년",title:"대학 준비",description:"종합적 사고.",subjects:["심화함수","확률","응용"],activities:["포트폴리오","프로젝트","세미나","발표"]},
  ],

  featureEyebrow:"Thinking",
  featureTitle:(<>스스로 생각하고<br/>끝까지 해결합니다</>),
  featureDescription:"풀이 과정과 논리를 중요하게 생각하는 수학 수업입니다.",
  featureImage:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=88",
  featureImageAlt:"수학 수업",
  featureBadge:"Think",
  featureBadgeSubtitle:"Reason • Solve • Explain",
  featureItems:[
    {title:"문제 해결",description:"다양한 접근으로 해결합니다."},
    {title:"수학적 토론",description:"풀이를 서로 설명합니다."},
    {title:"실생활 연결",description:"현실 문제를 수학으로 해석합니다."},
  ],

  processTitle:"중·고등 수학 수업의 배움 과정",
  processDescription:"문제를 이해하고 해결하며 설명합니다.",
  process:[
    {number:"01",icon:Search,title:"문제 이해",description:"조건 분석"},
    {number:"02",icon:BookOpen,title:"전략 수립",description:"해결 계획"},
    {number:"03",icon:Calculator,title:"풀이",description:"논리적으로 해결"},
    {number:"04",icon:Users,title:"설명과 성찰",description:"과정 공유"},
  ],

  growthTitle:(<>수학을 통해<br/>생각하는 힘을 기릅니다</>),
  growthDescription:"학생들은 논리와 창의성을 바탕으로 다양한 문제를 해결합니다.",
  growthHighlight:"논리적으로 사고하고 끝까지 해결하는 학습자로 성장합니다.",
  growthPoints:[
    "논리적으로 사고합니다.",
    "다양한 해결 전략을 활용합니다.",
    "풀이를 설명합니다.",
    "실생활에 수학을 적용합니다.",
    "도전하는 태도를 기릅니다."
  ],

  nextSubjectId:"science",
  nextSubjectName:"과학",

  backLink:"/curriculum/middle-high",
  backText:"중·고등 교과목으로 돌아가기",
  backOverviewText:"중·고등 교과목 전체",
  subjectBasePath:"/curriculum/middle-high/subjects",

  theme:{
    accent:"#16a34a",
    accentDark:"#15803d",
    accentLight:"#4ade80",
    accentPale:"#ecfdf5",
    accentBorder:"#bbf7d0",
    heroFrom:"#052e16",
    heroVia:"#166534",
    heroTo:"#16a34a",
    darkSection:"#052e16",
    darkSectionSoft:"#14532d",
    labelText:"#86efac",
  },
};