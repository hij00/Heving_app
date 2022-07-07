import { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./MainBanner";

export const Home = () => {
  const [up, setUp] = useState();
  const [play, setPlay] = useState();
  const [tvPop, setTvPop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        // console.log(movieApi.genre());
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

  console.log(play);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainBanner play={play} up={up} tvPop={tvPop} />
        </>
      )}
    </>
  );
};
