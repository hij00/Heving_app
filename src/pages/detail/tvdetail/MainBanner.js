import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Loading } from "../../../components/Loading";
import { imgUrl, noImg } from "../../../constants";
import { ScrollTop } from "../../../ScrollTop";
import { mainStyle } from "../../../styles/GlobalStyled";
import { Link } from "react-scroll";
import { Episode } from "./Episode";
import { Video } from "./Video";
import { Another } from "./Another";

const Bg = styled.section`
  width: 100%;
  height: 100vh;
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  max-width: 500px;
  padding-top: 250px;
  @media screen and (max-width: 500px) {
    max-width: 400px;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const Desc = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const ItemWrap = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const Item = styled.li`
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
  margin-bottom: 10px;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid ${mainStyle.logoColor};
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const Point = styled.div`
  width: 150px;
  height: 10px;
  margin-top: 10px;
  border-radius: 30px 30px 0 0;
  background-color: ${mainStyle.logoColor};
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 5px;
  }
`;

const Wrap = styled.div``;

export const MainBanner = ({ tvDetail, seaData, videoData, pop }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seasonData = async () => {
      try {
        setLoading(false);
      } catch (error) {}
    };
    seasonData();
  }, []);

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvDetail && (
            <Bg
              style={{
                background: `url(${
                  tvDetail.backdrop_path
                    ? `${imgUrl}${tvDetail.backdrop_path}`
                    : `${noImg}`
                }) no-repeat center / cover`,
              }}
            >
              <BlackBg>
                <Container>
                  <TextWrap>
                    <Title>{tvDetail.name}</Title>
                    <ItemWrap>
                      <Item>{tvDetail.first_air_date}</Item>
                    </ItemWrap>
                    <Desc>{tvDetail.overview}</Desc>
                    <ItemWrap>
                      <Item>
                        {tvDetail.genres.map((a) => (
                          <Text key={a.id}>{a.name}</Text>
                        ))}
                      </Item>
                    </ItemWrap>
                  </TextWrap>
                </Container>
                <MenuWrap>
                  <Menu>
                    <Link to="1" spy={true} smooth={true}>
                      회차
                      <Point />
                    </Link>
                  </Menu>
                  <Menu>
                    <Link to="2" spy={true} smooth={true}>
                      예고편
                      <Point />
                    </Link>
                  </Menu>
                  <Menu>
                    <Link to="3" spy={true} smooth={true}>
                      비슷한 컨텐츠
                      <Point />
                    </Link>
                  </Menu>
                </MenuWrap>
              </BlackBg>
            </Bg>
          )}
          <Wrap id="1">
            <Episode seaData={seaData} />
          </Wrap>
          <Wrap id="2">
            <Video videoData={videoData} />
          </Wrap>
          <Wrap id="3">
            <Another pop={pop} />
          </Wrap>
        </>
      )}
    </>
  );
};
