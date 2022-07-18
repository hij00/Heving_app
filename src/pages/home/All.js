import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { useState } from "react";

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
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
const Btn = styled.div`
  padding: 5px 20px;
  background-color: white;
  color: black;
  margin-left: 20px;
  border-radius: 20px;
  line-height: 30px;
  cursor: pointer;
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
  const handleClick = () => {
    setShow("block");
    setSshow("none");
  };
  const clickHandle = () => {
    setShow("none");
    setSshow("block");
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
        <Btn onClick={handleClick}>영화</Btn>
        <Btn onClick={clickHandle}>TV 시리즈</Btn>
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
                        ? `${imgUrl}${play.backdrop_path}`
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
                        ? `${imgUrl}${play.backdrop_path}`
                        : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
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
