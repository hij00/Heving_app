import { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { ScrollTop } from "../../ScrollTop";
import { All } from "./All";
import { ArrowMenu } from "./ArrowMenu";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";
import { Tvs } from "./Tvs";

export const Home = () => {
  const [up, setUp] = useState();
  const [play, setPlay] = useState();
  const [tvPop, setTvPop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: upData },
        } = await movieApi.upComing();
        setUp(upData);

        const {
          data: { results: playData },
        } = await movieApi.nowPlaying();
        setPlay(playData);

        const {
          data: { results: tvData },
        } = await tvApi.popular();
        setTvPop(tvData);

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
          {play && (
            <>
              <PageTitle title={"Home"} />
              <ScrollTop />
              <ArrowMenu />
              <MainBanner play={play} up={up} tvPop={tvPop} />

              <Container>
                <All movie={play} tv={tvPop} title="최신 신작" />
                <Movies movie={play} title="이달의 영화" />
                <Tvs tv={tvPop} title="새로운 에피소드" />
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};

// 로딩이 끝나고 플레이의 정보가 있다면 뒤의 식 실행하도록
// => 위에서 불러온 정보를 한번 더 호출해야함
