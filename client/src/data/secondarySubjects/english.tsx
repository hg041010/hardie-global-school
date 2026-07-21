import {
  BookMarked,
  BookOpen,
  Globe,
  Languages,
  MessageCircle,
  Mic2,
  PenLine,
  Search,
  Users,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondaryEnglishSubject: SubjectData = {
  id: "english",

  name: "영어",
  englishName: "English Language",
  subtitle: "Global Communication",

  heroDescription: (
    <>
      세계를 이해하고,
      <br className="hidden sm:block" />
      영어로 자신 있게 소통합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Secondary English Education",

  introTitle: (
    <>
      영어를 배우는 것을 넘어
      <br />
      영어로 배우고 소통합니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 중·고등 영어 교육은 학생들이 실제 상황에서 자신 있게 영어로 소통하도록 돕습니다.",
    "읽기·쓰기·듣기·말하기를 통합적으로 익히며 비판적 사고와 글로벌 의사소통 능력을 함께 기릅니다.",
    "프로젝트와 발표, 토론 중심의 활동을 통해 대학과 국제사회에서 필요한 영어 역량을 키웁니다."
  ],

  quote: <>영어는 시험 과목이 아니라<br/>세상과 연결되는 언어입니다.</>,
  quoteDescription: "학생들은 영어를 통해 다양한 문화와 사람들을 이해하며 세계 시민으로 성장합니다.",
  tags: ["Speaking","Reading","Writing","Presentation","Debate","Global"],

  competenciesTitle: "중·고등 영어 교육의 핵심 역량",
  competenciesDescription: "실제 의사소통과 학문적 영어 능력을 균형 있게 발전시킵니다.",

  competencies: [
    {number:"01",icon:Mic2,title:"의사소통",description:"실생활에서 자연스럽게 영어로 대화하고 발표합니다."},
    {number:"02",icon:BookOpen,title:"읽기",description:"다양한 영어 자료를 읽고 핵심 내용을 이해합니다."},
    {number:"03",icon:PenLine,title:"쓰기",description:"논리적인 문단과 에세이를 작성합니다."},
    {number:"04",icon:Globe,title:"글로벌 이해",description:"영어권 문화를 이해하고 다양한 관점을 존중합니다."},
  ],

  learningAreasTitle:"주요 학습 영역",
  learningAreasDescription:"네 가지 언어 기능을 통합하여 실제 활용 능력을 기릅니다.",

  learningAreas:[
    {icon:Mic2,eyebrow:"Speaking",title:"듣기·말하기",description:"발표와 토론, 회화를 통해 자신 있게 소통합니다.",points:["Conversation","Presentation","Discussion","Listening"]},
    {icon:BookMarked,eyebrow:"Reading",title:"읽기",description:"문학과 비문학을 읽고 내용을 분석합니다.",points:["Novel","Article","Essay","Information Text"]},
    {icon:PenLine,eyebrow:"Writing",title:"쓰기",description:"문단부터 에세이까지 단계적으로 작성합니다.",points:["Paragraph","Essay","Research","Editing"]},
    {icon:Languages,eyebrow:"Language",title:"문법·어휘",description:"문법과 표현을 실제 의사소통에 활용합니다.",points:["Grammar","Vocabulary","Expressions","Application"]},
  ],

  gradeSectionEyebrow:"Grade-Level Curriculum",
  gradeSectionTitle:"학년별 주요 교육사항",
  gradeSectionDescription:"7학년부터 12학년까지 단계적으로 영어 의사소통 능력을 확장합니다.",

  gradeDetails:[
    {grade:"7학년",title:"영어 의사소통 기초",description:"기초 회화와 읽기.",subjects:["회화","기본문법","읽기","쓰기"],activities:["역할극","자기소개","영어일기","읽기활동"]},
    {grade:"8학년",title:"표현력 확장",description:"발표와 다양한 표현.",subjects:["시제","설명문","Paragraph","Presentation"],activities:["인터뷰","발표","독후활동","토론기초"]},
    {grade:"9학년",title:"비판적 읽기",description:"기사와 토론.",subjects:["기사","에세이","주장","Debate"],activities:["Opinion Essay","뉴스분석","발표","토론"]},
    {grade:"10학년",title:"Academic English",description:"학문적 영어.",subjects:["Literature","Reading","Essay","Research"],activities:["소설분석","에세이","발표","프로젝트"]},
    {grade:"11학년",title:"심화 영어",description:"연구와 발표.",subjects:["Research","Writing","Presentation","Discussion"],activities:["비평문","Debate","프로젝트","발표"]},
    {grade:"12학년",title:"대학 및 글로벌 준비",description:"대학 수준 영어.",subjects:["Academic Reading","Essay","Communication","Global Issues"],activities:["TED 발표","연구보고서","토론","포트폴리오"]},
  ],

  featureEyebrow:"Communication",
  featureTitle:(<>영어를 배우는 것이 아니라<br/>영어로 배우는 수업</>),
  featureDescription:"프로젝트와 토론 중심으로 실제 영어 사용 경험을 제공합니다.",
  featureImage:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=88",
  featureImageAlt:"영어 토론 수업",
  featureBadge:"English in Action",
  featureBadgeSubtitle:"Learn • Communicate • Grow",
  featureItems:[
    {title:"영어 토론",description:"근거를 바탕으로 자신의 의견을 표현합니다."},
    {title:"프로젝트 수업",description:"협력하며 실제 문제를 해결합니다."},
    {title:"글로벌 소통",description:"국제 사회에 필요한 의사소통 능력을 기릅니다."},
  ],

  processTitle:"중·고등 영어 수업의 배움 과정",
  processDescription:"읽고, 이해하고, 표현하며 실제로 활용합니다.",
  process:[
    {number:"01",icon:Search,title:"읽기",description:"다양한 영어 자료 읽기"},
    {number:"02",icon:BookOpen,title:"이해하기",description:"내용과 표현 이해"},
    {number:"03",icon:Users,title:"말하고 쓰기",description:"토론과 글쓰기"},
    {number:"04",icon:MessageCircle,title:"실제 활용",description:"프로젝트와 발표"},
  ],

  growthTitle:(<>영어를 통해<br/>세계와 연결됩니다</>),
  growthDescription:"학생들은 영어를 통해 자신 있게 소통하며 세계 시민으로 성장합니다.",
  growthHighlight:"영어를 도구로 배우고, 생각하고, 세상과 연결됩니다.",
  growthPoints:[
    "영어로 자신 있게 의사소통합니다.",
    "다양한 문화를 이해합니다.",
    "비판적으로 읽고 분석합니다.",
    "논리적으로 글을 씁니다.",
    "글로벌 역량을 기릅니다."
  ],

  nextSubjectId:"math",
  nextSubjectName:"수학",

  backLink:"/curriculum/middle-high",
  backText:"중·고등 교과목으로 돌아가기",
  backOverviewText:"중·고등 교과목 전체",
  subjectBasePath:"/curriculum/middle-high/subjects",

  theme:{
    accent:"#2563eb",
    accentDark:"#1d4ed8",
    accentLight:"#60a5fa",
    accentPale:"#eff6ff",
    accentBorder:"#bfdbfe",
    heroFrom:"#07142d",
    heroVia:"#123d7a",
    heroTo:"#2563eb",
    darkSection:"#0f172a",
    darkSectionSoft:"#1e293b",
    labelText:"#93c5fd",
  },
};