import React, { useEffect } from "react";
import "./Movies.css";

import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ movies, setPage, page }) {
  // const [movies, setMovies] = React.useState([]);
  //const [listaMovies, setListaMovies] = React.useState([]);
  //const [page, setPage] = React.useState(1);

  /*   useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f12c72419a7710fcff20686356d86a21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      setMovies([...movies, ...response.data.results]);
    };

    getMovies();
  }, [page]); */
  // TRAER PELÍCULAS POR TÍTULO ********************

  /*   useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("search/movie", {
        ...axiosConfig,
        params: { ...axiosConfig.params, query: filtroTitulo },
      });
      setMovies(response.data.results);
    };
    getMovies();
  }, [filtroTitulo]); */

  /*   function actulizarScroll() {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f12c72419a7710fcff20686356d86a21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          page + 1
        }&with_watch_monetization_types=flatrate`
      );
      setMovies([...movies, ...response.data.results]);
    };
    getMovies();
    setPage(page + 1);
  } */

  return (
    movies && (
      <InfiniteScroll
        className="row"
        dataLength={movies.length} //This is important field to render the next data // CAMBIA listaMovies x movies
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {movies.length === 0 ? ( // CAMBIA listaMovies x movies
          <h2>No results found.</h2>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="col-lg-2 ">
              <button
                className="btn p-0 mb-3"
                //onClick={() => showMovieModal(movie)}
              >
                <img
                  className="img-fluid m-0"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </button>
            </div>
          ))
        )}
      </InfiniteScroll>
    )
  );
}

export default Movies;
