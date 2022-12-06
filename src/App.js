import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cache from "./cache/Cache";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

function App() {
  const cache = new Cache();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cache={cache} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
