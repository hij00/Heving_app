import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { Container } from "../../../components/Container";
import { Loading } from "../../../components/Loading";
import { ScrollTop } from "../../../ScrollTop";
import { MainBanner } from "./MainBanner";

const IFrame = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 100px;
`;
const Wrap = styled.div`
  display: ${(props) => props.show};
`;

export const TvDetail = () => {
  const [tvDetail, settvDetail] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [show, setShow] = useState("none");

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await tvApi.tvVideo(id);

      try {
        const detail = await tvApi.tvDetail(id);
        const { data } = detail;
        settvDetail(data);
        setVideoData(results.length === 0 ? null : results[0].key);
        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);
  // console.log(tvDetail.number_of_episodes);
  // const season = tvDetail.number_of_seasons;
  // const episode = tvDetail.number_of_episodes;
  // console.log(tvApi.tvEpisode(id, season, episode));

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainBanner tvDetail={tvDetail} />
          <Wrap>
            <Container show={show}>
              {videoData ? (
                <IFrame
                  src={`https://www.youtube.com/embed/${videoData}`}
                  allowfullscreen
                ></IFrame>
              ) : null}
            </Container>
          </Wrap>
        </>
      )}
    </>
  );
};
