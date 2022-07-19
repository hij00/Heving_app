import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  logoColor: "crimson",
  padding: "0 120px",
  mPadding: "0 20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
}
body{
  font-family: 'Noto Sans KR', sans-serif;
    background-color: black;
    color: white;
    word-break: keep-all;
    .swiper-button-prev { color: ${mainStyle.logoColor}; }
    .swiper-button-next { color: ${mainStyle.logoColor}; }
}
`;
