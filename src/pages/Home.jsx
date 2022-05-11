import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Movies from "../components/Movies";
import tmdbAPIConfig from "../tmdbAPICongig";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      tmdbAPIConfig.params.page = page;
      const response = await axios.get("trending/movie/day", tmdbAPIConfig);
      setMovies((movies) => [...movies, ...response.data.results]);
    };

    getMovies();
  }, [page]);

  if (movies.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5 ">
        <Spinner animation="border" role="status" className="my-5">
          <span className="visually-hidden">Loading</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className=" p-4 text-center">
      <Movies movies={movies} setPage={setPage} page={page} />
    </div>
  );
}

export default Home;
