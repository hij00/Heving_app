import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { Container } from "../../../components/Container";
import { Loading } from "../../../components/Loading";
import { PageTitle } from "../../../components/PageTitle";
import { imgUrl, noImg } from "../../../constants";
import { ScrollTop } from "../../../ScrollTop";
import { mainStyle } from "../../../styles/GlobalStyled";
import { Video } from "./Video";
import { Link } from "react-scroll";
import { Another } from "./Another";

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
  max-width: 800px;
  padding-top: 250px;
  @media screen and (max-width: 500px) {
    padding-top: 120px;
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
  margin-top: 70px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
    font-weight: 300;
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
const Itemm = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: ${mainStyle.logoColor};
  margin-right: 20px;
  margin-bottom: 10px;
  opacity: 0.5;
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

export const MovieDetail = () => {
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [now, setNow] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await movieApi.movieVideo(id);

      try {
        const { data: detail } = await movieApi.movieDetail(id);
        setMovieData(detail);

        const {
          data: { results: now },
        } = await movieApi.nowPlaying();
        setNow(now);

        setVideoData(results.length === 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);
  console.log(now);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {movieData && (
            <>
              <PageTitle title={movieData.title} />
              <ScrollTop />
              <Poster
                style={{
                  background: `url(${
                    movieData.backdrop_path
                      ? `${imgUrl}${movieData.backdrop_path}`
                      : `${noImg}`
                  }) no-repeat center / cover`,
                }}
              >
                <BlackBg>
                  <Container>
                    {movieData && (
                      <TextWrap>
                        <Itemm>{movieData.original_title}</Itemm>

                        <Title>{movieData.title}</Title>

                        <ItemWrap>
                          <Item>{movieData.release_date}</Item>
                          <Item>{movieData.runtime}분</Item>
                        </ItemWrap>

                        <Desc>{movieData.overview}</Desc>
                        <ItemWrap>
                          <Item>
                            {movieData.genres.map((a) => (
                              <Text key={a.id}>{a.name}</Text>
                            ))}
                          </Item>
                        </ItemWrap>
                      </TextWrap>
                    )}
                  </Container>
                  <MenuWrap>
                    <Menu>
                      <Link to="1" spy={true} smooth={true}>
                        예고편
                        <Point />
                      </Link>
                    </Menu>
                    <Menu>
                      <Link to="2" spy={true} smooth={true}>
                        다른 컨텐츠
                        <Point />
                      </Link>
                    </Menu>
                  </MenuWrap>
                </BlackBg>
              </Poster>
              <Wrap id="1">
                <Video videoData={videoData} />
              </Wrap>
              <Wrap id="2">
                <Another now={now} />
              </Wrap>
            </>
          )}
        </>
      )}
    </>
  );
};
