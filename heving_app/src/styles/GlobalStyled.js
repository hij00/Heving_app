import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainStyle = {
  color: "crimson",
  padding: "0 120px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
a{
    text-decoration: none;
    
}
body{
    box-sizing: border-box;
}
`;
