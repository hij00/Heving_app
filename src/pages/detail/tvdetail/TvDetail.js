import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { Loading } from "../../../components/Loading";
import { PageTitle } from "../../../components/PageTitle";
import { ScrollTop } from "../../../ScrollTop";
import { Episode } from "./Episode";
import { MainBanner } from "./MainBanner";
import { Video } from "./Video";

const Wrap = styled.div`
  display: ${(props) => props.show};
`;

export const TvDetail = () => {
  const [tvDetail, setTvDetail] = useState();
  const [videoData, setVideoData] = useState();
  const [seaData, setSeaData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detailData = async () => {
      try {
        const {
          data: { results },
        } = await tvApi.tvVideo(id);

        const { data: detail } = await tvApi.tvDetail(id);
        setTvDetail(detail);

        setVideoData(results.length === 0 ? null : results[0].key);

        const season = await detail.seasons;
        const {
          data: { episodes },
        } = await tvApi.tvSeason(
          detail.id,
          season.map((a) => a.season_number)
        );
        // 꼬아서 불러오지 말고 쪼개서 불러오기?!

        setSeaData(episodes);
        setLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    detailData();
  }, []);
  // console.log(tvDetail && tvDetail.name);

  return (
    <>
      {/* <PageTitle title={tvDetail && tvDetail.name} /> */}
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvDetail && (
            <>
              <PageTitle title={tvDetail.name} />
              <MainBanner tvDetail={tvDetail} seaData={seaData} />
              <Wrap>
                <Episode seaData={seaData} />
              </Wrap>
              <Wrap>
                <Video videoData={videoData} />
              </Wrap>
            </>
          )}
        </>
      )}
    </>
  );
};
