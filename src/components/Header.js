import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${(props) => props.bgColor};
  padding: ${mainStyle.padding};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mPadding};
  }
`;

// const Wrap = styled.div`

// `;

const Logo = styled.h3`
  font-size: 30px;
  a {
    color: ${mainStyle.logoColor};
  }
  z-index: 99;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const MenuWrapB = styled.ul`
  display: ${(props) => props.bottom};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Menu = styled.li`
  margin-right: 50px;
  font-size: 18px;
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

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const Acc = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const SearchIcon = styled.div``;
const AccountIcon = styled.div`
  margin-left: 50px;
`;

// ===================모바일메뉴

const MenuWrapM = styled.ul`
  display: none;
  li {
    all: unset;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    display: block;
    padding: ${mainStyle.mPadding};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
    background-color: ${(props) => props.mbg};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 40px;
    li {
      font-size: 14px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Header = () => {
  const [bottom, setBottom] = useState("none");
  const [bg, setBg] = useState("none");
  const [mbg, setMbg] = useState("none");

  const handleScroll = () => {
    const scr = window.pageYOffset;
    if (scr > 300) {
      setBottom("flex");
      setBg("black");
      setMbg("black");
    } else {
      setBottom("none");
      setBg("none");
      setMbg("none");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <SHeader bgColor={bg}>
        <Logo>
          <Link to={"/"}>Heving</Link>
        </Logo>

        <MenuWrapB bottom={bottom}>
          <Menu>
            <Link to={"/movie_all"}>영화</Link>
          </Menu>
          <Menu>
            <Link to={"/tv_all"}>TV시리즈</Link>
          </Menu>
        </MenuWrapB>

        <IconWrap>
          <SearchIcon>
            <Link to={"/search"}>
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </SearchIcon>
          <AccountIcon>
            <Link to={"/login"}>
              <Acc></Acc>
            </Link>
          </AccountIcon>
        </IconWrap>

        {/* ================mobile menu */}

        <MenuWrapM mbg={mbg}>
          <Menu>
            <Link to={"/movie_all"}>영화</Link>
          </Menu>
          <Menu>
            <Link to={"/tv_all"}>TV시리즈</Link>
          </Menu>
        </MenuWrapM>
      </SHeader>
    </>
  );
};
