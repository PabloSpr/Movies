import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import tmdbApiConfig from "../tmdbAPICongig";
import axios from "axios";
import { useState, useEffect } from "react";

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(`movie/${id}`, tmdbApiConfig);
      setMovie(data);
    };
    getMovie();
  }, []);

  if (movie.length === 0) {
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
      {" "}
      {movie && (
        <div className="container pb-4">
          <div className="row ">
            <div className="col-lg-6">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="col-lg-6 text-white ">
              <h5> {movie.tagline}</h5>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p className="mb-1">Stars: {movie.vote_average / 2}</p>
              <p className="mb-1">
                Genres:{" "}
                {movie.genres.map((item) => {
                  if (movie.genres.indexOf(item) !== movie.genres.length - 1) {
                    return item.name + ", ";
                  } else {
                    return item.name;
                  }
                })}
              </p>
              <p className="mb-1">Release date: {movie.release_date}</p>
              <p className="mb-1">Original title: {movie.original_title}</p>
              <p className="mb-1">
                Original language: {movie.original_language.toUpperCase()}
              </p>
              <p className="mb-1">
                Spoken languages:{" "}
                {movie.spoken_languages.map((item) =>
                  movie.spoken_languages.indexOf(item) !==
                  movie.spoken_languages.length - 1
                    ? item.english_name + ", "
                    : item.english_name
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
