import {
  Brush,
  Camera,
  Eye,
  GalleryHorizontalEnd,
  Heart,
  Layers3,
  Lightbulb,
  Palette,
  PencilRuler,
  Shapes,
} from "lucide-react";

import type { SubjectData } from "./types";

export const artSubject: SubjectData = {
  id: "art",

  name: "미술",
  englishName: "Art & Visual Expression",
  subtitle: "관찰과 창작",

  heroDescription: (
    <>
      세상을 자세히 바라보고,
      <br className="hidden sm:block" />
      자신만의 생각과 감정을 시각적으로 표현합니다.
    </>
  ),

  heroImage:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1920&q=88",

  introEyebrow: "Art Education",

  introTitle: (
    <>
      자세히 바라보고
      <br />
      자신만의 방식으로 표현합니다
    </>
  ),

  introParagraphs: [
    "하디글로벌스쿨의 미술 교육은 정해진 모양을 똑같이 따라 그리는 데 머무르지 않고, 학생들이 세상을 자신만의 시선으로 관찰하고 표현하도록 돕습니다.",
    "학생들은 선과 색, 형태와 질감, 공간과 이미지를 탐색하며 드로잉, 회화, 조형, 디자인, 사진과 디지털 매체 등 다양한 표현 방법을 경험합니다.",
    "완성된 결과뿐 아니라 관찰하고 시도하며 수정하는 창작 과정을 소중히 여기고, 작품을 통해 자신의 생각을 나누며 다른 사람의 표현을 존중하는 태도를 기릅니다.",
  ],

  quote: (
    <>
      자세히 바라보고,
      <br />
      자유롭게 상상하며,
      <br />
      나만의 방식으로 표현합니다.
    </>
  ),

  quoteDescription:
    "미술은 세상을 바라보는 시선과 마음속 생각을 눈에 보이는 형태로 나누는 언어입니다. 학생들이 자신의 개성과 창의성을 발견하도록 돕습니다.",

  tags: [
    "관찰",
    "드로잉",
    "색채",
    "조형",
    "디자인",
    "감상",
  ],

  competenciesTitle: "미술 교육의 핵심 역량",

  competenciesDescription:
    "세상을 세심하게 관찰하고, 창의적으로 생각하며, 다양한 재료와 매체로 자신의 생각을 표현하는 힘을 기릅니다.",

  competencies: [
    {
      number: "01",
      icon: Eye,
      title: "관찰과 발견",
      description:
        "사물과 자연, 사람과 공간을 자세히 바라보며 형태와 색, 특징과 관계를 발견합니다.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "창의적 사고",
      description:
        "익숙한 대상을 새로운 관점에서 바라보고 자신만의 아이디어로 발전시킵니다.",
    },
    {
      number: "03",
      icon: Brush,
      title: "시각적 표현",
      description:
        "다양한 재료와 기법을 활용하여 생각과 감정, 이야기를 이미지와 조형으로 표현합니다.",
    },
    {
      number: "04",
      icon: Heart,
      title: "감상과 존중",
      description:
        "자신과 다른 사람의 작품을 열린 마음으로 감상하고 서로 다른 표현과 관점을 존중합니다.",
    },
  ],

  learningAreasTitle: "주요 학습 영역",

  learningAreasDescription:
    "관찰과 표현, 디자인과 조형, 감상 활동을 서로 연결하여 시각적 사고력과 창의적인 표현 능력을 기릅니다.",

  learningAreas: [
    {
      icon: PencilRuler,
      eyebrow: "Drawing & Painting",
      title: "드로잉과 회화",
      description:
        "선과 형태, 색과 명암을 탐색하며 관찰한 대상과 상상한 장면을 평면에 표현합니다.",
      points: [
        "선과 형태 관찰",
        "색의 혼합과 느낌",
        "명암과 공간 표현",
        "관찰화와 상상화",
      ],
    },
    {
      icon: Shapes,
      eyebrow: "Form & Sculpture",
      title: "조형",
      description:
        "종이와 점토, 자연물과 재활용 재료를 활용하여 입체적인 형태와 공간을 구성합니다.",
      points: [
        "평면과 입체의 관계",
        "점토와 종이 조형",
        "재료의 성질 탐색",
        "공간 설치와 공동 제작",
      ],
    },
    {
      icon: Layers3,
      eyebrow: "Design & Media",
      title: "디자인과 매체",
      description:
        "생활 속 시각 정보를 살펴보고 목적과 대상에 맞는 이미지와 디자인을 계획하여 표현합니다.",
      points: [
        "기호와 시각 정보",
        "포스터와 편집 디자인",
        "생활용품 디자인",
        "사진과 디지털 이미지",
      ],
    },
    {
      icon: GalleryHorizontalEnd,
      eyebrow: "Art Appreciation",
      title: "미술 감상",
      description:
        "우리나라와 세계의 다양한 작품을 감상하고 작품에 담긴 시대와 문화, 작가의 생각을 이해합니다.",
      points: [
        "작품의 느낌과 특징",
        "우리 미술과 전통문화",
        "세계 여러 문화의 미술",
        "작품 발표와 감상 대화",
      ],
    },
  ],

  gradeSectionEyebrow: "Grade-Level Curriculum",

  gradeSectionTitle: "학년별 주요 교육사항",

  gradeSectionDescription:
    "초등 1학년부터 6학년까지 놀이와 감각 중심의 표현에서 시작하여, 관찰과 조형, 디자인과 감상을 통해 자신만의 시각 언어와 창작 역량을 단계적으로 확장합니다.",

  gradeDetails: [
    {
      grade: "1학년",
      title: "보고 느낀 것을 자유롭게 표현하기",
      description:
        "주변의 색과 모양, 다양한 재료의 감촉을 즐겁게 탐색합니다. 잘 그리는 것에 대한 부담 없이 선과 색, 오리기와 붙이기, 만들기 활동을 통해 자신의 경험과 느낌을 자유롭게 표현합니다.",
      subjects: [
        "다양한 선과 기본 모양",
        "색의 이름과 느낌",
        "종이와 자연물의 질감",
        "나와 가족의 모습",
      ],
      activities: [
        "음악을 들으며 선 그리기",
        "좋아하는 색으로 감정 표현하기",
        "종이 찢어 붙여 그림 만들기",
        "나와 가족의 얼굴 그리기",
      ],
    },
    {
      grade: "2학년",
      title: "주변을 관찰하고 특징을 발견하기",
      description:
        "사물과 동식물, 학교와 동네의 모습을 자세히 관찰하고 눈에 보이는 특징을 표현합니다. 색과 형태를 다양하게 조합하며 재료마다 달라지는 표현의 재미를 경험합니다.",
      subjects: [
        "사물과 자연의 형태",
        "색의 혼합과 대비",
        "무늬와 반복",
        "생활 속 미술",
      ],
      activities: [
        "교실 물건 자세히 그리기",
        "색을 섞어 새로운 색 만들기",
        "자연물로 반복 무늬 구성하기",
        "우리 동네 간판 관찰하기",
      ],
    },
    {
      grade: "3학년",
      title: "재료와 기법을 탐색하며 표현 넓히기",
      description:
        "연필과 물감, 판화와 콜라주, 점토 등 다양한 재료와 기법의 특징을 탐색합니다. 관찰한 내용을 구체적으로 표현하고 자신의 상상과 이야기를 작품에 담기 시작합니다.",
      subjects: [
        "선과 색의 다양한 표현",
        "관찰화와 상상화",
        "판화와 콜라주",
        "점토와 입체 조형",
      ],
      activities: [
        "식물의 형태 관찰하여 그리기",
        "이야기의 한 장면 표현하기",
        "간단한 판화 제작하기",
        "점토로 상상 동물 만들기",
      ],
    },
    {
      grade: "4학년",
      title: "형태와 공간을 이해하고 구성하기",
      description:
        "대상의 비례와 움직임, 앞뒤와 겹침, 명암과 공간의 관계를 이해하며 표현을 발전시킵니다. 개인 작품뿐 아니라 친구들과 의견을 나누며 공동 조형물을 만드는 경험도 합니다.",
      subjects: [
        "비례와 동세의 기초",
        "겹침과 공간 표현",
        "명암과 입체감",
        "공동 조형과 설치",
      ],
      activities: [
        "움직이는 사람의 자세 그리기",
        "겹침을 활용한 풍경 표현하기",
        "빛을 관찰하여 명암 나타내기",
        "모둠별 공간 설치 작품 만들기",
      ],
    },
    {
      grade: "5학년",
      title: "시각적으로 생각하고 디자인하기",
      description:
        "이미지와 글자, 색과 배치가 정보를 전달하는 방식을 이해합니다. 생활 속 문제를 발견하고 사용자의 필요를 생각하며 포스터, 캐릭터, 생활용품 등 목적이 있는 디자인을 계획합니다.",
      subjects: [
        "시각 정보와 이미지",
        "글자와 화면 구성",
        "포스터와 캐릭터 디자인",
        "생활용품과 환경 디자인",
      ],
      activities: [
        "학교 행사를 알리는 포스터 만들기",
        "주제를 담은 캐릭터 디자인하기",
        "사용하기 편한 물건 개선하기",
        "환경 보호 캠페인 이미지 제작하기",
      ],
    },
    {
      grade: "6학년",
      title: "자신의 주제를 작품으로 발전시키기",
      description:
        "자신이 관심 있는 주제와 표현하고 싶은 메시지를 정하고, 적절한 재료와 매체를 선택하여 작품을 계획하고 완성합니다. 작품의 의도와 제작 과정을 설명하고 전시를 통해 다른 사람과 소통합니다.",
      subjects: [
        "주제와 메시지 설정",
        "재료와 매체의 선택",
        "사진과 디지털 표현",
        "작품 전시와 포트폴리오",
      ],
      activities: [
        "개인 창작 주제 탐구하기",
        "사진으로 이야기 구성하기",
        "디지털 도구로 이미지 제작하기",
        "학급 미술 전시 기획하기",
      ],
    },
  ],

  featureEyebrow: "Creative Studio",

  featureTitle: (
    <>
      정답을 따라 그리지 않고
      <br />
      자신만의 표현을 발견합니다
    </>
  ),

  featureDescription:
    "미술 수업에서는 모두가 똑같은 결과물을 만드는 것보다 학생마다 다른 관찰과 아이디어가 드러나는 과정을 중요하게 생각합니다. 학생들은 재료를 직접 탐색하고 실패와 수정을 반복하며 자신에게 맞는 표현 방식을 발견합니다.",

  featureImage:
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=88",

  featureImageAlt: "다양한 재료와 색을 활용한 미술 창작 활동",

  featureBadge: "Creative Expression",

  featureBadgeSubtitle: "각자의 시선이 작품이 되는 시간",

  featureItems: [
    {
      title: "과정 중심의 창작",
      description:
        "완성된 결과만 평가하지 않고 관찰과 구상, 시도와 수정으로 이어지는 창작 과정을 소중히 여깁니다.",
    },
    {
      title: "다양한 재료와 매체",
      description:
        "그리기와 만들기뿐 아니라 사진, 디자인, 설치와 디지털 이미지까지 폭넓게 경험합니다.",
    },
    {
      title: "작품으로 소통하기",
      description:
        "작품에 담긴 생각과 이야기를 발표하고 친구들의 다양한 표현을 존중하며 감상합니다.",
    },
  ],

  processTitle: "미술 수업의 배움 과정",

  processDescription:
    "세상을 관찰하고 아이디어를 떠올린 뒤, 다양한 재료로 시도하고 수정하며 작품을 완성하고 서로 나눕니다.",

  process: [
    {
      number: "01",
      icon: Eye,
      title: "관찰하고 발견하기",
      description:
        "사물과 자연, 사람과 공간을 자세히 바라보며 흥미로운 형태와 색, 이야기를 발견합니다.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "상상하고 계획하기",
      description:
        "표현하고 싶은 주제와 느낌을 정하고 스케치와 자료 조사를 통해 아이디어를 구체화합니다.",
    },
    {
      number: "03",
      icon: Palette,
      title: "표현하고 수정하기",
      description:
        "적절한 재료와 기법을 선택하여 표현하고, 제작 과정에서 발견한 점을 반영해 작품을 발전시킵니다.",
    },
    {
      number: "04",
      icon: GalleryHorizontalEnd,
      title: "전시하고 감상하기",
      description:
        "완성한 작품과 제작 과정을 소개하고 서로의 작품을 감상하며 생각과 느낌을 나눕니다.",
    },
  ],

  growthTitle: (
    <>
      미술 수업을 통해
      <br />
      기대하는 성장
    </>
  ),

  growthDescription:
    "학생들이 미술을 단순히 그림을 잘 그리는 기술이 아니라, 세상을 깊이 바라보고 자신의 생각과 감정을 창의적으로 표현하며 다른 사람과 소통하는 언어로 경험하도록 돕습니다.",

  growthHighlight:
    "자신의 시선과 개성을 소중히 여기고, 다양한 생각과 표현을 존중하며 삶을 창의적으로 바라보는 사람으로 성장합니다.",

  growthPoints: [
    "주변의 사물과 자연, 사람과 공간을 세심하게 관찰합니다.",
    "자신의 경험과 생각을 독창적인 이미지와 조형으로 표현합니다.",
    "다양한 재료와 기법의 특징을 이해하고 목적에 맞게 활용합니다.",
    "작품을 계획하고 시도하며 수정하는 창작 과정을 즐깁니다.",
    "자신과 다른 사람의 작품을 존중하고 열린 태도로 감상합니다.",
  ],

  nextSubjectId: "physical",
  nextSubjectName: "체육",

  theme: {
    accent: "#d45f48",
    accentDark: "#aa4635",
    accentLight: "#e88772",
    accentPale: "#fff1ed",
    accentBorder: "#f2c8bc",

    heroFrom: "#32120d",
    heroVia: "#793426",
    heroTo: "#dc8068",

    darkSection: "#3b1812",
    darkSectionSoft: "#60281e",
    labelText: "#f7cbbf",
  },
};