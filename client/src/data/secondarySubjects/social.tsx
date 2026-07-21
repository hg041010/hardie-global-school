import {
  Globe2,
  Landmark,
  Users,
  Search,
  BookOpen,
  Map,
  MessageCircle,
  PenLine,
  Scale,
} from "lucide-react";

import type { SubjectData } from "@/data/subjects/types";

export const secondarySocialSubject: SubjectData = {
  id:"social",
  name:"사회",
  englishName:"Social Studies",
  subtitle:"History · Geography · Civics",

  heroDescription:(<>사회를 이해하고,<br className="hidden sm:block"/>더 나은 세상을 함께 만들어갑니다.</>),
  heroImage:"https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1920&q=88",

  introEyebrow:"Secondary Social Studies",
  introTitle:(<>사람과 사회를 이해하며<br/>세계 시민으로 성장합니다</>),
  introParagraphs:[
    "사회는 역사·지리·정치·경제를 통합적으로 배우며 세상을 이해하는 교과입니다.",
    "학생들은 다양한 관점을 비교하고 근거를 바탕으로 사회 문제를 탐구합니다.",
    "공동체와 세계를 이해하며 책임 있는 시민의식을 기릅니다."
  ],

  quote:(<>과거를 배우고,<br/>현재를 이해하며,<br/>미래를 준비합니다.</>),
  quoteDescription:"사회는 세상을 바라보는 시야를 넓히는 교과입니다.",
  tags:["역사","지리","경제","정치","세계시민","토론"],

  competenciesTitle:"중·고등 사회 교육의 핵심 역량",
  competenciesDescription:"비판적 사고와 시민 의식을 함께 기릅니다.",
  competencies:[
    {number:"01",icon:Globe2,title:"세계 이해",description:"다양한 문화와 국가를 이해합니다."},
    {number:"02",icon:Landmark,title:"시민 의식",description:"민주사회 구성원의 역할을 배웁니다."},
    {number:"03",icon:Search,title:"탐구",description:"사회 현상을 조사하고 분석합니다."},
    {number:"04",icon:MessageCircle,title:"토론",description:"근거를 바탕으로 의견을 나눕니다."},
  ],

  learningAreasTitle:"주요 학습 영역",
  learningAreasDescription:"역사·지리·정치·경제를 통합적으로 학습합니다.",
  learningAreas:[
    {icon:Landmark,eyebrow:"History",title:"역사",description:"과거 사건을 통해 현재를 이해합니다.",points:["한국사","세계사","인물","문화"]},
    {icon:Map,eyebrow:"Geography",title:"지리",description:"지역과 환경을 탐구합니다.",points:["지도","환경","기후","지역"]},
    {icon:Scale,eyebrow:"Politics",title:"정치·경제",description:"민주주의와 경제 원리를 이해합니다.",points:["민주주의","시장","법","경제"]},
    {icon:Users,eyebrow:"Citizenship",title:"시민사회",description:"공동체와 세계 시민의 역할을 배웁니다.",points:["인권","문화","봉사","세계시민"]},
  ],

  gradeSectionEyebrow:"Grade-Level Curriculum",
  gradeSectionTitle:"학년별 주요 교육사항",
  gradeSectionDescription:"기초 이해에서 사회 문제 탐구까지 단계적으로 성장합니다.",
  gradeDetails:[
    {grade:"7학년",title:"사회의 기초",description:"기초 개념 이해.",subjects:["지도","역사","문화","공동체"],activities:["탐구","발표","토론","조사"]},
    {grade:"8학년",title:"지역과 세계",description:"지리와 문화.",subjects:["세계","기후","문화","경제"],activities:["지도활동","조사","토론","발표"]},
    {grade:"9학년",title:"민주사회",description:"정치와 시민.",subjects:["헌법","민주주의","권리","의무"],activities:["모의의회","토론","조사","프로젝트"]},
    {grade:"10학년",title:"경제 이해",description:"경제 원리.",subjects:["시장","무역","금융","소비"],activities:["사례분석","발표","탐구","보고서"]},
    {grade:"11학년",title:"세계 이슈",description:"국제사회.",subjects:["국제기구","환경","분쟁","협력"],activities:["세미나","토론","발표","프로젝트"]},
    {grade:"12학년",title:"통합 사회",description:"종합적 사고.",subjects:["현대사회","정책","윤리","세계시민"],activities:["연구","포트폴리오","토론","발표"]},
  ],

  featureEyebrow:"Citizenship",
  featureTitle:(<>세상을 이해하고<br/>책임 있게 행동합니다</>),
  featureDescription:"사회 수업은 지식을 넘어 공동체의 문제를 함께 고민합니다.",
  featureImage:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=88",
  featureImageAlt:"사회 토론 수업",
  featureBadge:"Explore Society",
  featureBadgeSubtitle:"Think • Discuss • Act",
  featureItems:[
    {title:"사회 탐구",description:"현실 문제를 조사합니다."},
    {title:"토론",description:"다양한 관점을 존중합니다."},
    {title:"세계 시민",description:"책임 있는 시민으로 성장합니다."},
  ],

  processTitle:"중·고등 사회 수업의 배움 과정",
  processDescription:"질문하고 탐구하며 토론합니다.",
  process:[
    {number:"01",icon:Search,title:"질문",description:"사회 문제 발견"},
    {number:"02",icon:BookOpen,title:"조사",description:"자료 탐색"},
    {number:"03",icon:Users,title:"토론",description:"의견 교환"},
    {number:"04",icon:PenLine,title:"실천",description:"해결 방안 제안"},
  ],

  growthTitle:(<>사회를 이해하고<br/>세상을 바꿉니다</>),
  growthDescription:"학생들은 공동체를 이해하며 책임감 있는 시민으로 성장합니다.",
  growthHighlight:"생각하고 참여하는 세계 시민으로 성장합니다.",
  growthPoints:[
    "사회 현상을 분석합니다.",
    "다양한 관점을 존중합니다.",
    "근거 있게 토론합니다.",
    "세계 시민 의식을 기릅니다.",
    "공동체에 기여합니다."
  ],

  nextSubjectId:"music",
  nextSubjectName:"음악",

  backLink:"/curriculum/middle-high",
  backText:"중·고등 교과목으로 돌아가기",
  backOverviewText:"중·고등 교과목 전체",
  subjectBasePath:"/curriculum/middle-high/subjects",

  theme:{
    accent:"#f59e0b",
    accentDark:"#d97706",
    accentLight:"#fbbf24",
    accentPale:"#fffbeb",
    accentBorder:"#fde68a",
    heroFrom:"#451a03",
    heroVia:"#92400e",
    heroTo:"#f59e0b",
    darkSection:"#3b1d00",
    darkSectionSoft:"#78350f",
    labelText:"#fde68a",
  },
};