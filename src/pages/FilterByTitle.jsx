import axios from "axios";
import { useEffect, useState } from "react";
import tmdbAPIConfig from "../tmdbAPICongig";
import Movies from "../components/Movies";
import { Spinner } from "react-bootstrap";

function SearchTitle() {
  const [filtroTitulo, setfiltroTitulo] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      tmdbAPIConfig.params.query = filtroTitulo;
      tmdbAPIConfig.params.page = page;
      const { data } = await axios.get("search/movie", tmdbAPIConfig);
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((movies) => [...movies, ...data.results]);
      }
    };

    filtroTitulo && getMovies();
  }, [filtroTitulo, page]);

  useEffect(() => {
    const getMovies = async () => {
      tmdbAPIConfig.params.query = "Uruguay";
      tmdbAPIConfig.params.page = page;

      const { data } = await axios.get("search/movie", tmdbAPIConfig);
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((movies) => [...movies, ...data.results]);
      }
    };
    getMovies();
  }, []);

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
    <div>
      <div className=" p-4 text-center">
        <form className="mb-5">
          <label htmlFor="title" className="visually-hidden"></label>
          <input
            type="text"
            className="mt-3 form-control w-50 mx-auto"
            placeholder="Enter title..."
            onChange={(event) => {
              setfiltroTitulo(event.target.value.toLowerCase());
              setPage(1);
            }}
            value={filtroTitulo}
          />
        </form>
        <Movies movies={movies} setPage={setPage} page={page} />
      </div>
    </div>
  );
}

export default SearchTitle;
