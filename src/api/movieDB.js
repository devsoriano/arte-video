import axios from "axios";

const getMovieDB = (page, category) => {
  const movies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
      api_key: "e08815ebb9a68b5816a9e3ae26b751e1",
      language: "es-ES",
      page,
    },
  });

  return movies.get(category);
};

export default getMovieDB;
