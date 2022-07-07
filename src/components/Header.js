import {
  faAngleLeft,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
`;

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 30px;
  color: ${mainStyle.logoColor};
  font-weight: 900;
`;

const MenuWrapB = styled.ul`
  display: ${(props) => props.bottom};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Menu = styled.li`
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
  svg {
    color: ${mainStyle.logoColor};
    font-size: 20px;
    margin: 0 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWrapT = styled.ul`
  display: ${(props) => props.top};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Acc = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 50px;
`;

export const Header = () => {
  const [top, setTop] = useState("flex");
  const [bottom, setBottom] = useState("none");
  return (
    <SHeader>
      <Wrap>
        <Logo>Heving</Logo>

        <MenuWrapB bottom={bottom}>
          <Menu>최신 인기</Menu>
          <Menu>영화</Menu>
          <Menu>TV시리즈</Menu>
        </MenuWrapB>
        <IconWrap>
          <FontAwesomeIcon icon={faSearch} />
          <Acc></Acc>
        </IconWrap>
      </Wrap>
      <MenuWrapT top={top}>
        <Menu>
          <FontAwesomeIcon icon={faAngleLeft} />
          최신 인기
        </Menu>
        <Menu>
          TV시리즈
          <FontAwesomeIcon icon={faAngleRight} />
        </Menu>
      </MenuWrapT>
    </SHeader>
  );
};