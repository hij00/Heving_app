import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
`;

const Logo = styled.h3``;

const MenuWrap = styled.ul``;

const Menu = styled.li``;

export const Header = () => {
  return (
    <Wrap>
      <Logo>Heving</Logo>
      <MenuWrap>
        <Menu>최신 인기</Menu>
        <Menu>영화</Menu>
        <Menu>TV시리즈</Menu>
      </MenuWrap>
    </Wrap>
  );
};
