import {
  AudioLines,
  Brain,
  Ear,
  Heart,
  Mic2,
  Music2,
  Piano,
  Radio,
  Sparkles,
  Users,
} from "lucide-react";

import type { SubjectData } from "./types";

export const musicSubject: SubjectData = {
  id: "music",

  name: "음악",
  englishName: "Music & Creative Expression",
  subtitle: "감성과 표현",

  heroDescription: (
    <>
      소리를 듣고 느끼며,
      <br className="hidden sm:block" />
      음악으로 생각과 감정을 자유롭게 표현합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Music Education",

  introTitle: (
    <>
      듣고 노래하며
      <br />
      함께 만들어가는 음악
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 음악 교육은 노래와 악기 연주, 감상과 창작 활동을 통해 학생들이 음악을 즐겁게 경험하도록 돕습니다.",
    "학생들은 다양한 소리와 리듬을 탐색하고, 자신의 생각과 감정을 목소리와 악기, 움직임으로 자유롭게 표현합니다.",
    "혼자 연주하는 능력뿐 아니라 친구들의 소리를 듣고 서로 호흡하며 하나의 음악을 완성하는 과정을 통해 자신감과 협력의 태도를 함께 기릅니다.",
  ],

  quote: (
    <>
      소리를 듣고,
      <br />
      마음을 표현하며,
      <br />
      함께 조화를 만듭니다.
    </>
  ),

  quoteDescription:
    "음악은 말로 표현하기 어려운 생각과 감정을 나누는 또 하나의 언어입니다. 학생들이 자신의 소리를 발견하고 다른 사람과 아름답게 조화를 이루도록 돕습니다.",

  tags: [
    "노래",
    "악기 연주",
    "리듬",
    "음악 감상",
    "창작",
    "합주",
  ],

  competenciesTitle: "음악 교육의 핵심 역량",

  competenciesDescription:
    "음악을 세심하게 듣고 창의적으로 표현하며, 다른 사람과 소통하고 조화를 이루는 힘을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Ear,
      title: "음악적 감수성",
      description:
        "다양한 소리와 음악의 아름다움을 느끼고 자신의 감정과 경험을 연결합니다.",
    },
    {
      number: "02",
      icon: Mic2,
      title: "표현 능력",
      description:
        "노래와 악기, 신체 움직임을 활용하여 생각과 감정을 자신 있게 표현합니다.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "창의적 사고",
      description:
        "리듬과 가락을 새롭게 구성하고 자신만의 음악적 아이디어를 발전시킵니다.",
    },
    {
      number: "04",
      icon: Users,
      title: "소통과 협력",
      description:
        "친구들의 소리를 존중하고 서로 호흡하며 조화로운 음악을 함께 완성합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "노래와 연주, 감상과 창작을 균형 있게 경험하며 음악을 표현하고 이해하는 능력을 기릅니다.",

  learningAreas: [
    {
      icon: Mic2,
      eyebrow: "Singing",
      title: "노래",
      description:
        "바른 자세와 호흡으로 다양한 노래를 부르며 가사와 가락에 담긴 느낌을 표현합니다.",
      points: [
        "바른 자세와 호흡",
        "음정과 리듬 표현",
        "다양한 장르의 노래",
        "독창과 중창, 합창",
      ],
    },
    {
      icon: Piano,
      eyebrow: "Instrumental Performance",
      title: "악기 연주",
      description:
        "리듬 악기와 가락 악기의 특징을 이해하고 바른 연주법으로 음악을 표현합니다.",
      points: [
        "리듬 악기 연주",
        "가락 악기 연주",
        "악보와 연주 기호",
        "독주와 합주",
      ],
    },
    {
      icon: Radio,
      eyebrow: "Music Appreciation",
      title: "음악 감상",
      description:
        "다양한 시대와 문화의 음악을 듣고 음악적 특징과 느낌을 발견하여 자신의 언어로 표현합니다.",
      points: [
        "음악의 빠르기와 셈여림",
        "악기의 음색 구별",
        "우리 음악과 세계 음악",
        "음악의 분위기와 쓰임",
      ],
    },
    {
      icon: AudioLines,
      eyebrow: "Music Creation",
      title: "음악 창작",
      description:
        "소리와 리듬, 가락을 탐색하고 조합하여 자신의 생각과 이야기를 음악으로 만듭니다.",
      points: [
        "소리 탐색과 표현",
        "리듬과 가락 만들기",
        "노랫말 바꾸기",
        "디지털 음악 창작",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 소리와 리듬을 즐겁게 경험하는 단계에서 시작하여, 노래와 연주, 감상과 창작을 통해 음악적 표현력과 협업 능력을 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "소리와 리듬을 즐겁게 만나기",
      description:
        "주변의 다양한 소리를 듣고 몸으로 리듬을 표현하며 음악과 친해집니다. 짧고 쉬운 노래를 함께 부르고 놀이와 움직임을 통해 음악의 빠르기와 느낌을 경험합니다.",
      subjects: [
        "생활 속 다양한 소리",
        "일정한 박과 간단한 리듬",
        "쉬운 동요와 놀이 노래",
        "음악에 맞춘 신체 표현",
      ],
      activities: [
        "주변 소리 찾아 표현하기",
        "손뼉과 발 구르기로 박자 맞추기",
        "노래에 맞춰 움직이기",
        "간단한 리듬 악기 연주하기",
      ],
    },
    {
      grade: "2학년",
      title: "노래와 악기로 음악 표현하기",
      description:
        "노래의 가락과 리듬을 정확하게 따라 부르고 다양한 리듬 악기의 음색을 경험합니다. 음악의 빠르기와 셈여림을 구별하며 느낌에 맞게 노래하고 연주합니다.",
      subjects: [
        "가락의 높고 낮음",
        "빠르기와 셈여림",
        "리듬 악기의 특징",
        "우리나라의 전래 동요",
      ],
      activities: [
        "노래의 가락선을 그림으로 나타내기",
        "빠르기와 셈여림을 바꾸어 연주하기",
        "리듬 악기로 노래 반주하기",
        "전래 동요와 놀이 함께하기",
      ],
    },
    {
      grade: "3학년",
      title: "기초 음악 요소를 이해하고 연주하기",
      description:
        "박자와 리듬, 가락의 흐름을 이해하고 기초적인 악보 읽기를 시작합니다. 가락 악기의 바른 연주법을 익히고 친구들과 소리를 맞추며 작은 합주를 경험합니다.",
      subjects: [
        "기초 박자와 리듬꼴",
        "음표와 쉼표",
        "가락 악기의 기초",
        "우리 음악과 세계 음악",
      ],
      activities: [
        "리듬 악보 읽고 연주하기",
        "리코더 또는 건반 악기 연주하기",
        "짧은 가락 따라 연주하기",
        "여러 나라의 음악 비교하기",
      ],
    },
    {
      grade: "4학년",
      title: "음악의 특징을 발견하고 함께 연주하기",
      description:
        "음악을 구성하는 다양한 요소를 듣고 구별하며 곡의 분위기와 특징을 이해합니다. 노래와 악기에서 자신의 역할을 익히고 친구들과 호흡을 맞추어 조화로운 합주를 완성합니다.",
      subjects: [
        "박자와 리듬의 변화",
        "가락의 흐름과 형식",
        "악기의 종류와 음색",
        "중창과 기초 합주",
      ],
      activities: [
        "음악을 듣고 특징 기록하기",
        "가락과 리듬을 나누어 합주하기",
        "악기의 음색 맞히기",
        "모둠별 음악 발표하기",
      ],
    },
    {
      grade: "5학년",
      title: "음악을 해석하고 창의적으로 표현하기",
      description:
        "다양한 시대와 문화의 음악을 감상하고 음악이 만들어진 배경과 쓰임을 이해합니다. 기존의 노래와 리듬을 새롭게 바꾸거나 짧은 음악을 창작하며 자신의 생각을 표현합니다.",
      subjects: [
        "다양한 음악의 형식",
        "우리나라의 전통 음악",
        "세계 여러 문화의 음악",
        "리듬과 가락 창작",
      ],
      activities: [
        "음악 감상 발표하기",
        "장단에 맞추어 국악 연주하기",
        "노랫말과 리듬 바꾸기",
        "모둠별 짧은 음악 만들기",
      ],
    },
    {
      grade: "6학년",
      title: "자신의 음악을 만들고 무대로 나누기",
      description:
        "노래와 악기 연주, 감상과 창작에서 쌓은 역량을 연결하여 하나의 음악 프로젝트를 완성합니다. 역할을 나누고 연습 과정을 조율하며 공연을 기획하는 경험을 통해 표현력과 책임감을 기릅니다.",
      subjects: [
        "다양한 장르와 음악 문화",
        "화음과 합주의 기초",
        "음악 창작과 편곡",
        "공연 기획과 발표",
      ],
      activities: [
        "주제에 맞는 음악 선정하기",
        "노래와 악기로 앙상블 구성하기",
        "디지털 도구로 음악 만들기",
        "학급 음악회 기획하고 발표하기",
      ],
    },
  ],

  featureEyebrow: "Music Ensemble",

  featureTitle: (
    <>
      서로의 소리를 들으며
      <br />
      하나의 음악을 만듭니다
    </>
  ),

  featureDescription:
    "음악 수업에서는 개인의 표현만큼 함께 만드는 과정도 중요하게 다룹니다. 학생들은 노래와 악기의 역할을 나누고 서로의 소리를 주의 깊게 들으며, 연습과 조율을 통해 하나의 공연을 완성합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "학생들이 함께 악기를 연주하는 음악 활동",

  featureBadge: "Harmony & Ensemble",

  featureBadgeSubtitle: "서로의 소리가 만나는 시간",

  featureItems: [
    {
      title: "다양한 음악 경험",
      description:
        "노래와 악기, 움직임과 감상을 통해 각자의 흥미와 강점을 발견합니다.",
    },
    {
      title: "함께 만드는 합주",
      description:
        "각자의 역할을 책임 있게 연습하고 친구들의 소리를 들으며 조화를 만들어갑니다.",
    },
    {
      title: "창작과 무대 표현",
      description:
        "자신의 음악적 아이디어를 노래와 연주, 디지털 도구로 표현하고 무대에서 나눕니다.",
    },
  ],

  processTitle: "음악 수업의 배움 과정",

  processDescription:
    "다양한 음악을 듣고 특징을 발견한 뒤, 직접 표현하고 친구들과 조율하며 하나의 음악으로 완성합니다.",

  process: [
    {
      number: "01",
      icon: Ear,
      title: "듣고 느끼기",
      description:
        "다양한 소리와 음악을 집중해서 듣고 분위기와 특징, 자신의 느낌을 발견합니다.",
    },
    {
      number: "02",
      icon: Brain,
      title: "이해하고 연습하기",
      description:
        "리듬과 가락, 음악 기호를 이해하고 노래와 악기의 표현 방법을 익힙니다.",
    },
    {
      number: "03",
      icon: Music2,
      title: "표현하고 만들기",
      description:
        "노래하고 연주하며 자신의 감정을 표현하고 새로운 리듬과 가락을 만들어봅니다.",
    },
    {
      number: "04",
      icon: Users,
      title: "함께 나누기",
      description:
        "친구들과 소리를 맞추어 음악을 완성하고 공연과 발표를 통해 서로의 성장을 나눕니다.",
    },
  ],

  growthTitle: (
    <>
      음악 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 음악을 평가와 기술 습득만을 위한 과목이 아니라, 자신을 표현하고 다른 사람의 마음을 이해하며 삶을 풍요롭게 만드는 언어로 경험하도록 돕습니다.",

  growthHighlight:
    "자신의 고유한 소리를 자신 있게 표현하고, 다른 사람의 소리를 존중하며 아름다운 조화를 만드는 사람으로 성장합니다.",

  growthPoints: [
    "다양한 음악을 열린 마음으로 듣고 아름다움을 느낍니다.",
    "노래와 악기를 활용하여 생각과 감정을 자신 있게 표현합니다.",
    "기초적인 음악 요소와 악보를 이해하고 연주에 활용합니다.",
    "리듬과 가락을 창의적으로 구성하여 자신만의 음악을 만듭니다.",
    "친구들의 소리를 존중하고 협력하여 조화로운 음악을 완성합니다.",
  ],

  nextSubjectId: "art",
  nextSubjectName: "미술",

  theme: {
    accent: "#a8558f",
    accentDark: "#81406e",
    accentLight: "#c875ad",
    accentPale: "#fbf0f7",
    accentBorder: "#ebc5df",

    heroFrom: "#2c1025",
    heroVia: "#6c305b",
    heroTo: "#c176aa",

    darkSection: "#36152d",
    darkSectionSoft: "#572346",
    labelText: "#f1c7e4",
  },
};