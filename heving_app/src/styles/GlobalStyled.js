import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  logoColor: "crimson",
  padding: "0 120px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}
a{
    text-decoration: none;
    
}
body{
  font-family: 'Noto Sans KR', sans-serif;
    background-color: black;
    color: white;
}
`;
