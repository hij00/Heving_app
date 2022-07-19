import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const MenuWrapT = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 80px;
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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.h3`
  margin: 0 10px;
  opacity: 0.7;
`;

export const ArrowMenu = () => {
  return (
    <>
      <MenuWrapT>
        <Menu>
          <Link to={"/movie_all"}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <Text>영화</Text>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/tv_all"}>
            <Text>TV시리즈</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </Menu>
      </MenuWrapT>
    </>
  );
};
