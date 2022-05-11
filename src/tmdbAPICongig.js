const tmdbAPIConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_MOVIE_KEY,
    page: 1,
    include_adult: false,
    language: "en-US",
    "vote_count.gte": 30,
  },
};

export default tmdbAPIConfig;
