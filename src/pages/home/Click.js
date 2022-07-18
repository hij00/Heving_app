import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { num } from "../../constants";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const IFrame = styled.iframe`
  width: 50%;
  height: 350px;
`;
const TextWrap = styled.div`
  margin-left: 30px;
`;
const Title = styled.h1`
  font-size: 30px;
`;
const Desc = styled.h3`
  max-width: 700px;
  font-size: 16px;
  margin: 10px 0;
  line-height: 20px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
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
  border: 1px solid white;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const Btn = styled.div``;

export const Click = ({ play }) => {
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await movieApi.movieVideo(play[num].id);

      try {
        const detail = await movieApi.movieDetail(play[num].id);
        const { data } = await detail;
        setMovieData(data);

        setVideoData(results.length === 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);

  // console.log(movieDetail.genres[0].name);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Wrap>
            {videoData ? (
              <IFrame
                src={`https://www.youtube.com/embed/${videoData}`}
                allowfullscreen
              ></IFrame>
            ) : null}
            {movieData && (
              <TextWrap>
                <Title>{movieData.title}</Title>
                <Desc>{movieData.overview.slice(0, 100) + "..."}</Desc>
                <ItemWrap>
                  <Item>
                    {movieData.genres.map((a) => (
                      <Text key={a.id}>{a.name}</Text>
                    ))}
                  </Item>
                </ItemWrap>
                <Btn>
                  <Link to={"/movie_detail/:id"}>보러가기</Link>
                </Btn>
              </TextWrap>
            )}
          </Wrap>
        </Container>
      )}
    </>
  );
};
