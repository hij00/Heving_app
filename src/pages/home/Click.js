import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { num } from "../../constants";
import { mainStyle } from "../../styles/GlobalStyled";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

const IFrame = styled.iframe`
  width: 50%;
  height: 350px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  margin-left: 30px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
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
  border: 1px solid ${mainStyle.logoColor};
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px;
  }
`;

export const Click = ({ play }) => {
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await movieApi.movieVideo(play[1].id);

      try {
        const detail = await movieApi.movieDetail(play[1].id);
        const { data } = detail;
        setMovieData(data);

        setVideoData(results.length === 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);

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
              </TextWrap>
            )}
          </Wrap>
        </Container>
      )}
    </>
  );
};
