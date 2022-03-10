import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import axios from "axios";
import Header from "../components/Header";
import Movies from "../components/Movies";
import tmdbAPIConfig from "../tmdbAPICongig";

function Home({ page, setPage, movies, setMovies }) {
  //const [movies, setMovies] = useState([]);
  //const [page, setPage] = useState(1);
  const location = useLocation();
  useEffect(() => {
    const getMovies = async () => {
      tmdbAPIConfig.params.page = page;
      const response = await axios.get("discover/movie", tmdbAPIConfig);
      setMovies((movies) => [...movies, ...response.data.results]);

      console.log("HOME", location.pathname);
    };
    if (location.pathname === "/") {
      console.log("HOME", location.pathname);
      getMovies();
    }
  }, [page]);

  return (
    <div>
      <Header />
      <Movies movies={movies} setPage={setPage} page={page} />
    </div>
  );
}

export default Home;
