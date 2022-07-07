import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../../api";
import { imgUrl, movieNum } from "../../constants";
import { Loading } from "../../components/Loading";

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpComing = styled.div``;
const Movie = styled.div`
  width: 70%;
  height: 80vh;
`;
const Tv = styled.div``;
const TextWrap = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;

export const Home = () => {
  const [play, setPlay] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playData },
        } = await movieApi.nowPlaying();
        setPlay(playData);
        console.log(tvApi.popular());

        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Wrap>
            <UpComing></UpComing>
            <Movie
              style={{
                background: `url(${imgUrl}${play[movieNum].backdrop_path}) no-repeat center/cover`,
              }}
            >
              <TextWrap>
                <Title>
                  <Desc></Desc>
                </Title>
              </TextWrap>
            </Movie>
            <Tv></Tv>
          </Wrap>
        </>
      )}
    </>
  );
};
