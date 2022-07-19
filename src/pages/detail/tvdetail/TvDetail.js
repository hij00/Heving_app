import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { Loading } from "../../../components/Loading";
import { PageTitle } from "../../../components/PageTitle";
import { ScrollTop } from "../../../ScrollTop";
import { Another } from "./Another";
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
  const [tvPop, setTvPop] = useState();
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

        const {
          data: { results: pop },
        } = await tvApi.popular();
        setTvPop(pop);

        const season = await detail.seasons;
        const {
          data: { episodes },
        } = await tvApi.tvSeason(
          detail.id,
          season.map((a) => a.season_number)
        );

        setSeaData(episodes);
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
        <>
          {tvDetail && (
            <>
              <ScrollTop />
              <PageTitle title={tvDetail.name} />
              <MainBanner
                tvDetail={tvDetail}
                seaData={seaData}
                videoData={videoData}
                pop={tvPop}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
