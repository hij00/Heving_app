import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const Section = styled.section`
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mPadding};
  }
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};
