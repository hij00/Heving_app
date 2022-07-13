import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieDetail } from "./pages/detail/MovieDetail";
import { TvDetail } from "./pages/detail/tvdetail/TvDetail";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/search/Search";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyled } from "./styles/GlobalStyled";
import { MovieAll } from "./pages/menus/movie/MovieAll";
import { TvSeriesAll } from "./pages/menus/tv_series/TvSeriesAll";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv_detail/:id" element={<TvDetail />} />
          <Route path="/movie_detail/:id" element={<MovieDetail />} />
          <Route path="/movie_all" element={<MovieAll />} />
          <Route path="/tv_all" element={<TvSeriesAll />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
