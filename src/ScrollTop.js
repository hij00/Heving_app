import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const s = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [s]);

  return null;
};

// useLocation 페이지 전체 주소를 가져옴
// 다른 페이지로 갈때마다 스크롤 최상단으로
