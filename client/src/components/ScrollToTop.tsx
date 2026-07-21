import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // 페이지 경로가 바뀔 때 무조건 최상단으로 즉시 스크롤 리셋
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior // 부드러운 스크롤 대신 즉시 리셋되도록 보장
    });
  }, [pathname]);

  return null;
}
