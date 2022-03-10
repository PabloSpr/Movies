import axios from "axios";
import { useEffect, useState } from "react";
import tmdbAPIConfig from "../tmdbAPICongig";

function SearchTitle({ setMovies, page, setPage }) {
  const [filtroTitulo, setfiltroTitulo] = useState("");

  useEffect(() => {
    console.log("TITLE FILTER", page);
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

  return (
    <div className=" p-4 text-center">
      <form>
        <label htmlFor="title" className="visually-hidden"></label>
        <input
          type="text"
          className="mt-3 form-control w-50 mx-auto"
          placeholder="Ingresar título..."
          onChange={(event) => {
            setfiltroTitulo(event.target.value.toLowerCase());
            setPage(1);
          }}
          value={filtroTitulo}
        />
      </form>
    </div>
  );
}

export default SearchTitle;
