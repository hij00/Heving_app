import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/tv_detail:id" element={""} />
        <Route path="/movie_detail:id" element={""} />
        <Route path="/search" element={""} />
        <Route path="/*" element={""} />
        <Route path="/login" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
