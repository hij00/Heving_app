import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { miniImg, noImg } from "../../constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { useState } from "react";
import { mainStyle } from "../../styles/GlobalStyled";

const SMovies = styled.div`
  margin-top: 100px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const Img = styled.div`
  height: 250px;
  margin: 50px 0 20px 0;
`;
const ImgTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    line-height: 20px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
const Btn = styled.div`
  padding: 5px 20px;
  border: 1px solid white;
  background-color: ${(props) => props.bg};
  background-color: ${(props) => props.bbg};
  color: ${(props) => props.txt};
  color: ${(props) => props.ttxt};
  margin-left: 20px;
  border-radius: 20px;
  line-height: 30px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  @media screen and (max-width: 500px) {
    padding: 2px 10px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 15px;
  }
`;
const Movie = styled.div`
  display: ${[(props) => props.show]};
`;
const Tv = styled.div`
  display: ${[(props) => props.sshow]};
`;

export const All = ({ movie, tv, title }) => {
  const [show, setShow] = useState("block");
  const [sshow, setSshow] = useState("none");
  const [bg, setBg] = useState("none");
  const [txt, setTxt] = useState("white");
  const [ttxt, setTtxt] = useState("white");
  const [bbg, setBbg] = useState("none");

  const handleClick = () => {
    setShow("block");
    setSshow("none");
    setBg("white");
    setBbg("none");
    setTxt(`${mainStyle.logoColor}`);
  };
  const clickHandle = () => {
    setShow("none");
    setSshow("block");
    setBbg("white");
    setBg("none");
    setTtxt(`${mainStyle.logoColor}`);
  };

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <SMovies>
      <BtnWrap>
        <Title>{title}</Title>
        <Btn onClick={handleClick} bg={bg} txt={txt}>
          영화
        </Btn>
        <Btn onClick={clickHandle} bbg={bbg} ttxt={ttxt}>
          TV 시리즈
        </Btn>
      </BtnWrap>
      <Movie show={show}>
        <Swiper modules={[Navigation]} navigation {...params}>
          {movie.map((play) => (
            <SwiperSlide key={play.id}>
              <Link to={`/movie_detail/${play.id}`}>
                <Img
                  style={{
                    background: `url(${
                      play.backdrop_path
                        ? `${miniImg}${play.backdrop_path}`
                        : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
                    }) no-repeat center / cover`,
                  }}
                />
                <ImgTitle>{play.title}</ImgTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Movie>
      <Tv sshow={sshow}>
        <Swiper modules={[Navigation]} navigation {...params}>
          {tv.map((play) => (
            <SwiperSlide key={play.id}>
              <Link to={`/tv_detail/${play.id}`}>
                <Img
                  style={{
                    background: `url(${
                      play.backdrop_path
                        ? `${miniImg}${play.backdrop_path}`
                        : `${noImg}`
                    }) no-repeat center / cover`,
                  }}
                />
                <ImgTitle>{play.name}</ImgTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Tv>
    </SMovies>
  );
};
