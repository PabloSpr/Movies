const tmdbAPIConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f12c72419a7710fcff20686356d86a21",
    page: 1,
    include_adult: false,
    language: "en-US",
    "vote_count.gte": 30,
  },
};

export default tmdbAPIConfig;
