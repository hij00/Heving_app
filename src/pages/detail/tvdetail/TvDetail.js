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
  const [tvDetail, setTvDetail] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detailData = async () => {
      const {
        data: { results },
      } = await tvApi.tvVideo(id);

      try {
        const detail = await tvApi.tvDetail(id);
        const { data } = detail;
        setTvDetail(data);
        setVideoData(results.length === 0 ? null : results[0].key);
        setLoading(false);
      } catch (error) {}
    };
    detailData();
  }, []);

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainBanner tvDetail={tvDetail} />
          <Wrap>
            <Container>
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
