import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import FilterByTitle from "./pages/FilterByTitle";
import FilterByRating from "./pages/FilterByRating";

function App() {
  const [filtroTitulo, setfiltroTitulo] = useState("");
  const [filtroRating, setFiltroRating] = useState(-1);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            page={page}
            setPage={setPage}
            movies={movies}
            setMovies={setMovies}
          />
        }
      >
        <Route
          path="/searchbytitle"
          element={
            <FilterByTitle
              setMovies={setMovies}
              page={page}
              setPage={setPage}
            />
          }
        />

        <Route
          path="/searchbyrating"
          element={
            <FilterByRating
              setMovies={setMovies}
              page={page}
              setPage={setPage}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
