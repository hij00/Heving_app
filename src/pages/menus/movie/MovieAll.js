import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { Container } from "../../../components/Container";
import { Loading } from "../../../components/Loading";
import { PageTitle } from "../../../components/PageTitle";
import { ScrollTop } from "../../../ScrollTop";
import { Banner } from "./Banner";
import { Contents } from "./Contents";

export const MovieAll = () => {
  const [up, setUp] = useState();
  const [play, setPlay] = useState();
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
              <PageTitle title="영화" />
              <ScrollTop />
              <Banner play={play} up={up} />
              <Container>
                <Contents movie={play} title="이달의 영화" />
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};
