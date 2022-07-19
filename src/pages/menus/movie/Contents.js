import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { noImg, miniImg } from "../../../constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";

const SMovies = styled.div`
  margin-top: 100px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 25px;
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

export const Contents = ({ movie, title }) => {
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
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movie.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/movie_detail/${play.id}`}>
              <Img
                style={{
                  background: `url(${
                    play.backdrop_path
                      ? `${miniImg}${play.backdrop_path}`
                      : `${noImg}`
                  }) no-repeat center / cover`,
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
