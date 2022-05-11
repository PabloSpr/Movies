import Rating from "react-rating";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Movies from "../components/Movies";
import tmdbAPIConfig from "../tmdbAPICongig";

function SearchRating() {
  const [filtroRating, setFiltroRating] = useState(3);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      tmdbAPIConfig.params["vote_average.gte"] = filtroRating * 2 - 0.99;
      tmdbAPIConfig.params.page = page;
      const { data } = await axios.get("discover/movie", tmdbAPIConfig);
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((movies) => [...movies, ...data.results]);
      }
    };

    filtroRating && getMovies();
  }, [filtroRating, page]);

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
    <div className="text-center">
      <Rating
        className="mt-3 fs-1 my-5"
        emptySymbol="fa-regular fa-star text-dark"
        fullSymbol="fa-solid fa-star text-dark"
        onChange={(rate) => {
          setFiltroRating(rate);
          setPage(1);
        }}
        rate={filtroRating}
        initialRating={filtroRating}
      />
      <Movies movies={movies} setPage={setPage} page={page} />
    </div>
  );
}

export default SearchRating;
