import { useEffect, useState } from "react";
import { tvApi } from "../../../api";
import { Container } from "../../../components/Container";
import { Loading } from "../../../components/Loading";
import { PageTitle } from "../../../components/PageTitle";
import { ScrollTop } from "../../../ScrollTop";
import { Banner } from "./Banner";
import { Contents } from "./Contents";

export const TvSeriesAll = () => {
  const [tvPop, setTvPop] = useState();
  const [tvTop, setTvTop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tvData = async () => {
      try {
        const {
          data: { results: tvData },
        } = await tvApi.popular();
        setTvPop(tvData);

        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        setTvTop(topRated);

        setLoading(false);
      } catch (error) {}
    };
    tvData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvPop && (
            <>
              <PageTitle title="TV시리즈" />
              <ScrollTop />
              <Banner tvPop={tvPop} />
              <Container>
                <Contents tvData={tvPop} title="인기 TV시리즈" />
                <Contents tvData={tvTop} title="인기 TV SHOW" />
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};
