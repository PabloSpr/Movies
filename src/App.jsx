import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import FilterByTitle from "./pages/FilterByTitle";
import FilterByRating from "./pages/FilterByRating";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="bg-black min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/searchbyrating" element={<FilterByRating />} />
        <Route path="/searchbytitle" element={<FilterByTitle />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
