import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";

const IFrame = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 100px;
`;
const TextWrap = styled.div``;
const Title = styled.h1``;
const Desc = styled.h3``;
const Item = styled.p``;

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieDetail && (
            <TextWrap>
              <Title>{movieDetail.title}</Title>
              <Desc>{movieDetail.overview}</Desc>
              <Item></Item>
            </TextWrap>
          )}
          {videoData ? (
            <IFrame
              src={`https://www.youtube.com/embed/${videoData}`}
              allowfullscreen
            ></IFrame>
          ) : null}
        </Container>
      )}
    </>
  );
};
