import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const MenuWrapT = styled.ul`
  width: 100%;
  display: ${(props) => props.top};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 99;
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mPadding};
    display: none;
  }
`;

const Menu = styled.li`
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
  svg {
    color: ${mainStyle.logoColor};
    font-size: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h3`
  margin: 0 10px;
  opacity: 0.7;
`;

export const ArrowMenu = () => {
  const [top, setTop] = useState("flex");

  return (
    <>
      <MenuWrapT top={top}>
        <Menu>
          <FontAwesomeIcon icon={faAngleLeft} />
          <Text>
            <Link to={""}>최신인기</Link>
          </Text>
        </Menu>
        <Menu>
          <Text>
            <Link to={"/tv_all"}>TV시리즈</Link>
          </Text>
          <FontAwesomeIcon icon={faAngleRight} />
        </Menu>
      </MenuWrapT>
    </>
  );
};
