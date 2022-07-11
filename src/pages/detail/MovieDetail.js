import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { imgUrl } from "../../constants";
import { ScrollTop } from "../../ScrollTop";
import { mainStyle } from "../../styles/GlobalStyled";

const IFrame = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 100px;
`;
const Poster = styled.div`
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
  max-width: 700px;
  padding-top: 250px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;
const Desc = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;
const ItemWrap = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0 70px 0;
`;
const Item = styled.li`
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Point = styled.div`
  width: 150px;
  height: 10px;
  margin-top: 10px;
  border-radius: 30px 30px 0 0;
  background-color: ${mainStyle.logoColor};
`;

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [show, setShow] = useState("block");

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await movieApi.movieVideo(id);

      try {
        const detail = await movieApi.movieDetail(id);
        const { data } = detail;
        setMovieDetail(data);
        setVideoData(results.length === 0 ? null : results[0].key);
        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);

  const handleClick = () => {
    setShow("block");
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Poster
            style={{
              background: `url(${imgUrl}${movieDetail.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <BlackBg>
              <Container>
                {movieDetail && (
                  <TextWrap>
                    <Title>{movieDetail.title}</Title>
                    <ItemWrap>
                      <Item>{movieDetail.release_date}</Item>
                      <Item>{movieDetail.runtime}분</Item>
                    </ItemWrap>
                    <Desc>{movieDetail.overview}</Desc>
                  </TextWrap>
                )}
              </Container>
              <MenuWrap>
                <Menu onClick={handleClick}>
                  예고편
                  <Point />
                </Menu>
                <Menu>
                  비슷한 컨텐츠
                  <Point />
                </Menu>
              </MenuWrap>
            </BlackBg>
          </Poster>
          <Container>
            {videoData ? (
              <IFrame
                src={`https://www.youtube.com/embed/${videoData}`}
                allowfullscreen
              ></IFrame>
            ) : null}
          </Container>
        </>
      )}
    </>
  );
};
