import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";

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

export const Contents = ({ movie, title }) => {
  return (
    <SMovies>
      <Title>{title}</Title>
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
              <ImgTitle>{play.name}</ImgTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SMovies>
  );
};