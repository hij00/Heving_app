import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1c5ee19b4d67ab2d34835d17922369fa",
    language: "ko-kr",
  },
});

export const movieApi = {
  topRated: () => api.get("/movie/top_rated"),
  upComing: () => api.get("/movie/upcoming"),
  nowPlaying: () => api.get("/movie/now_playing"),
  genre: () => api.get("/genre/movie/list"),
  movieDetail: (id) => api.get(`/movie/${id}`),
  movieVideo: (id) => api.get(`/movie/${id}/videos`),
  search: (term) =>
    api.get(`/search/movie`, {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  onAir: () => api.get("/tv/on_the_air"),
  tvDetail: (id) => api.get(`/tv/${id}`),
  tvVideo: (id) => api.get(`/tv/${id}/videos`),
  tvSeason: (tv_id, season_number) =>
    api.get(`/tv/${tv_id}/season/${season_number}`),
};
