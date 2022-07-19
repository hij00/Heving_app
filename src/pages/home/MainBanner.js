import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { imgUrl, num, noImg } from "../../constants";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../styles/GlobalStyled";
import { Click } from "./Click";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  position: relative;
  width: 25%;
  height: 80vh;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Right = styled.div`
  position: relative;
  width: 25%;
  height: 80vh;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Center = styled.div`
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Cover = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 9;
`;
const UpComing = styled.div`
  height: 80vh;
  z-index: 8;
`;
const Movie = styled.div`
  height: 80vh;
  position: relative;
`;
const Tv = styled.div`
  height: 80vh;
`;
const TextWrap = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 50%;
  margin: 0 25%;
  z-index: 99;
`;
const Title = styled.h1`
  font-size: 50px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;
const STitle = styled.h1`
  font-size: 30px;
  opacity: 0.9;
  z-index: 10;
`;
const Desc = styled.p`
  font-size: 22px;
  opacity: 0.7;
  margin: 10px 0 50px 0;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;
const ViewBtn = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 50px 50px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
  color: ${mainStyle.logoColor};
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 99;
`;
const View = styled.section`
  display: ${(props) => props.show};
`;

export const MainBanner = ({ play, up, tvPop }) => {
  const [show, setShow] = useState("none");

  const handleClick = () => {
    setShow("block");
  };

  return (
    <>
      <Main>
        <Left>
          <Link to={"/movie_all"}>
            <UpComing
              style={{
                background: `url(${
                  up[num].backdrop_path
                    ? `${imgUrl}${up[num].backdrop_path}`
                    : `${noImg}`
                }) no-repeat center / cover`,
              }}
            >
              <Cover />
              <TextWrap>
                <STitle>{up[num].title}</STitle>
                <Desc>{up[num].release_date}</Desc>
              </TextWrap>
            </UpComing>
          </Link>
        </Left>
        <Center>
          <Movie
            style={{
              background: `url(${
                play[1].backdrop_path
                  ? `${imgUrl}${play[1].backdrop_path}`
                  : `${noImg}`
              }) no-repeat center / cover`,
            }}
            onClick={handleClick}
          >
            <TextWrap>
              <Title>{play[1].title}</Title>
              <Desc>{play[1].release_date}</Desc>
            </TextWrap>
            <Bg />
            <ViewBtn onClick={handleClick}>
              <FontAwesomeIcon icon={faAngleDown} />
            </ViewBtn>
          </Movie>
        </Center>
        <Right>
          <Link to={"/tv_all"}>
            <Cover />
            <Tv
              style={{
                background: `url(${
                  tvPop[num].backdrop_path
                    ? `${imgUrl}${tvPop[num].backdrop_path}`
                    : `${noImg}`
                }) no-repeat center / cover`,
              }}
            >
              <TextWrap>
                <STitle>{tvPop[num].name}</STitle>
                <Desc>{tvPop[num].first_air_date}</Desc>
              </TextWrap>
            </Tv>
          </Link>
        </Right>
      </Main>
      <View show={show}>
        <Click play={play} />
      </View>
    </>
  );
};
