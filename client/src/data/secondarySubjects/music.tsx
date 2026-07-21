import { Music,Piano,Mic2,Users,Search,BookOpen,PenLine,Headphones } from "lucide-react";
import type { SubjectData } from "@/data/subjects/types";
export const secondaryMusicSubject: SubjectData={id:"music",name:"음악",englishName:"Music",subtitle:"Creativity · Expression · Collaboration",
heroDescription:(<>음악을 통해 감정을 표현하고,<br className="hidden sm:block"/>함께 성장합니다.</>),
heroImage:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=88",
introEyebrow:"Secondary Music Education",introTitle:(<>듣고, 연주하고,<br/>함께 만들어 갑니다</>),
introParagraphs:["다양한 음악을 감상하고 연주하며 창의적으로 표현합니다.","합창과 합주를 통해 협업 능력을 기릅니다.","음악으로 자신과 타인을 이해합니다."],
quote:(<>음악은 마음을 연결하는<br/>가장 아름다운 언어입니다.</>),quoteDescription:"감상·연주·창작을 균형 있게 경험합니다.",tags:["감상","합주","창작","리듬","표현","협력"],
competenciesTitle:"중·고등 음악 교육의 핵심 역량",competenciesDescription:"표현력과 협업 능력을 기릅니다.",
competencies:[{number:"01",icon:Headphones,title:"감상",description:"다양한 음악 이해"},{number:"02",icon:Music,title:"표현",description:"노래와 연주"},{number:"03",icon:PenLine,title:"창작",description:"음악 만들기"},{number:"04",icon:Users,title:"협업",description:"합창과 합주"}],
learningAreasTitle:"주요 학습 영역",learningAreasDescription:"감상·가창·연주·창작",
learningAreas:[{icon:Headphones,eyebrow:"Listening",title:"감상",description:"음악 감상",points:["고전","대중","세계","분석"]},{icon:Mic2,eyebrow:"Singing",title:"가창",description:"노래",points:["발성","합창","호흡","표현"]},{icon:Piano,eyebrow:"Performance",title:"연주",description:"악기",points:["리듬","합주","앙상블","기초"]},{icon:Music,eyebrow:"Composition",title:"창작",description:"작곡",points:["작곡","편곡","디지털","리듬"]}],
gradeSectionEyebrow:"Grade-Level Curriculum",gradeSectionTitle:"학년별 주요 교육사항",gradeSectionDescription:"기초부터 공연까지",
gradeDetails:[{grade:"7학년",title:"기초",description:"기초 음악",subjects:["리듬","감상"],activities:["합창","연주"]},{grade:"8학년",title:"확장",description:"장르",subjects:["세계음악"],activities:["앙상블"]},{grade:"9학년",title:"합주",description:"협업",subjects:["합주"],activities:["공연"]},{grade:"10학년",title:"이해",description:"분석",subjects:["형식"],activities:["발표"]},{grade:"11학년",title:"창작",description:"창의",subjects:["창작"],activities:["제작"]},{grade:"12학년",title:"프로젝트",description:"공연",subjects:["공연"],activities:["콘서트"]}],
featureEyebrow:"Music Together",featureTitle:(<>함께 연주하며<br/>함께 성장합니다</>),featureDescription:"협력 중심 음악 수업",featureImage:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=88",featureImageAlt:"음악",featureBadge:"Create Together",featureBadgeSubtitle:"Listen • Perform • Create",featureItems:[{title:"합주",description:"협력"},{title:"창작",description:"표현"},{title:"공연",description:"자신감"}],
processTitle:"중·고등 음악 수업의 배움 과정",processDescription:"듣고 연습하고 표현합니다.",process:[{number:"01",icon:Search,title:"감상",description:"듣기"},{number:"02",icon:BookOpen,title:"이해",description:"배우기"},{number:"03",icon:Music,title:"연주",description:"표현"},{number:"04",icon:Users,title:"공연",description:"함께"}],
growthTitle:(<>음악을 통해<br/>마음을 표현합니다</>),growthDescription:"음악으로 성장합니다.",growthHighlight:"음악으로 소통하는 사람으로 성장합니다.",growthPoints:["감상","표현","협력","창의성","문화감수성"],
nextSubjectId:"physical",nextSubjectName:"체육",backLink:"/curriculum/middle-high",backText:"중·고등 교과목으로 돌아가기",backOverviewText:"중·고등 교과목 전체",subjectBasePath:"/curriculum/middle-high/subjects",
theme:{accent:"#8b5cf6",accentDark:"#7c3aed",accentLight:"#a78bfa",accentPale:"#f5f3ff",accentBorder:"#ddd6fe",heroFrom:"#2e1065",heroVia:"#5b21b6",heroTo:"#8b5cf6",darkSection:"#2e1065",darkSectionSoft:"#4c1d95",labelText:"#ddd6fe"}};