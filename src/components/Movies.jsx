import "./Movies.css";
import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ movies, setPage, page }) {
  return (
    movies && (
      <div className="container">
        <InfiniteScroll
          className="row"
          dataLength={movies.length} //This is important field to render the next data // CAMBIA listaMovies x movies
          next={() => setPage((page) => page + 1)}
          hasMore={true}
          //loader={<h4>Loading...</h4>}
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
                <button className="btn p-0 mb-3">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="img-fluid m-0 grayscale"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                </button>
              </div>
            ))
          )}
        </InfiniteScroll>
      </div>
    )
  );
}

export default Movies;
