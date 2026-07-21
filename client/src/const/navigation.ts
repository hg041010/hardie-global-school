export interface SubMenuItem {
  name: string;
  path: string;
  children?: SubMenuItem[];
}

export interface NavItem {
  name: string;
  path: string;
  submenu?: SubMenuItem[];
}

export const navigationItems: NavItem[] = [
  {
    name: "학교소개",
    path: "/about",
    submenu: [
      { name: "비전과 사명", path: "/about/vision" },
      { name: "시작과 역사", path: "/about/history" },
      { name: "하디의 교육", path: "/about/education" },
      {
        name: "소개",
        path: "/about/intro",
        children: [
          { name: "이사장 인사말", path: "/about/chairman" },
          { name: "교장 인사말", path: "/about/principal" },
          { name: "교직원 소개", path: "/about/staff" },
        ],
      },
      { name: "캠퍼스 안내", path: "/about/campus" },
      { name: "오시는 길", path: "/contact" },
    ],
  },
  {
    name: "교육과정",
    path: "/curriculum",
    submenu: [
      {
        name: "교과과정",
        path: "/curriculum",
        children: [
          { name: "초등 교육과정", path: "/curriculum/elementary" },
          { name: "중/고등 교육과정", path: "/curriculum/middle-high" },
          { name: "해외 입시반", path: "/curriculum/overseas" },
        ],
      },
      {
        name: "창의적 체험학습",
        path: "/curriculum/creative-experience",
        children: [
          {
            name: "봄 컨퍼런스",
            path: "/creative-experience/spring-conference",
          },
          {
            name: "가을 컨퍼런스",
            path: "/creative-experience/fall-conference",
          },
          {
            name: "비전 트립과 체험학습",
            path: "/creative-experience/vision-trip",
          },
          {
            name: "RSC",
            path: "/creative-experience/rsc",
          },
        ],
      },
    ],
  },
  {
    name: "학교생활",
    path: "/school-life",
  },
  {
    name: "소식",
    path: "/news",
    submenu: [
      { name: "공지사항", path: "/notice" },
      { name: "언론에서 본 하디", path: "/news/media" },
    ],
  },
  {
    name: "학부모 지원",
    path: "/parent-support",
    submenu: [
      {
        name: "증명서 발급 신청",
        path: "/parent-support/certificate",
      },
      {
        name: "교칙과 각종 자료",
        path: "/parent-support/resources",
      },
      {
        name: "학부모 교실",
        path: "/parent-support/classroom",
      },
      {
        name: "학사 일정과 시간표",
        path: "/parent-support/calendar",
      },
      {
        name: "셔틀버스 노선",
        path: "/parent-support/shuttle",
      },
    ],
  },
  {
    name: "입학안내",
    path: "/admission",
  },
];