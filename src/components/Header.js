import {
  faAngleLeft,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { Loading } from "./Loading";

const SHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${(props) => props.bgColor};
`;

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 30px;
  a {
    color: ${mainStyle.logoColor};
  }
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
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWrapT = styled.ul`
  display: ${(props) => props.top};
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.h3`
  margin: 0 10px;
  opacity: 0.7;
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

const SearchIcon = styled.div``;

export const Header = () => {
  const [top, setTop] = useState("flex");
  const [bottom, setBottom] = useState("none");
  const [bg, setBg] = useState("none");
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headerH = () => {
      try {
        if (pathname === "/") {
          const handleScroll = () => {
            const scr = window.pageYOffset;
            if (scr > 700) {
              setTop("none");
              setBottom("flex");
              setBg("black");
            } else {
              setTop("flex");
              setBottom("none");
              setBg("none");
            }
          };
          window.addEventListener("scroll", handleScroll);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    headerH();
  }, [pathname]);

  // console.log(pathname !== "/");

  useEffect(() => {
    const headerC = () => {
      try {
        if (pathname !== "/") {
          setBottom("flex");
          setTop("none");
          setBg("black");
        }
        setLoading(false);
      } catch (error) {}
    };
    headerC();
    // const handleScroll = () => {
    //   const scr = window.pageYOffset;
    //   if (scr > 700) {
    //     setBg("black");
    //   } else {
    //     setTop("none");
    //     setBottom("flex");
    //     setBg("none");
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SHeader bgColor={bg}>
            <Container>
              <Wrap>
                <Logo>
                  <Link to={"/"}>Heving</Link>
                </Logo>

                <MenuWrapB bottom={bottom}>
                  <Menu>
                    <Link to={""}>최신인기</Link>
                  </Menu>
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
                  <Link to={"/login"}>
                    <Acc></Acc>
                  </Link>
                </IconWrap>
              </Wrap>
              <MenuWrapT top={top}>
                <Menu>
                  <FontAwesomeIcon icon={faAngleLeft} />
                  <Text>
                    <Link to={""}>최신인기</Link>
                  </Text>
                </Menu>
                <Menu>
                  <Text>
                    <Link to={""}>TV시리즈</Link>
                  </Text>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Menu>
              </MenuWrapT>
            </Container>
          </SHeader>
        </>
      )}
    </>
  );
};

// 패스네임, 유즈로케이션
