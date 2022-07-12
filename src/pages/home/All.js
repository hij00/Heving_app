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
  border-radius: 30px;
  line-height: 30px;
  cursor: pointer;
`;
const Movie = styled.div`
  display: ${[(props) => props.show]};
`;
const Tv = styled.div`
  display: ${[(props) => props.hidden]};
`;

export const All = ({ movie, tv, title }) => {
  const [show, setShow] = useState("block");
  const [hidden, setHidden] = useState("none");
  const handleClick = () => {
    setShow("block");
    setHidden("none");
  };
  const clickHandle = () => {
    setShow("none");
    setHidden("block");
  };
  console.log(tv);
  return (
    <SMovies>
      <BtnWrap>
        <Title>{title}</Title>
        <Btn onClick={handleClick}>영화</Btn>
        <Btn onClick={clickHandle}>TV 시리즈</Btn>
      </BtnWrap>
      <Movie show={show}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={4.5}
        >
          {movie.map((play) => (
            <SwiperSlide key={play.id}>
              <Link to={`/movie_detail/${play.id}`}>
                <Img
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <ImgTitle>{play.title}</ImgTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Movie>
      <Tv hidden={hidden}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={4.5}
        >
          {tv.map((play) => (
            <SwiperSlide key={play.id}>
              <Link to={`/tv_detail/${play.id}`}>
                <Img
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
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
