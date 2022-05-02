import MoviesTypes from "./movies.types";
import getMovieDB from "./../../api/movieDB";

import {
  TITLE_POPULAR_MOVIES,
  TITLE_TOP_RATED,
  TITLE_UPCOMING,
  INITIAL_VALUE_PAGINATION,
  PATH_POPULAR_MOVIES,
  PATH_TOP_RATED_MOVIES,
  PATH_UPCOMING_MOVIES,
} from "../../utils/constants";

const { GET_MOVIES, TOGGLE_LOADER, GET_MOVIES_BY_CATEGORY } = MoviesTypes;

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const getMovies = () => async (dispatch) => {
  dispatch(toggleLoader());
  const popular = getMovieDB(INITIAL_VALUE_PAGINATION, PATH_POPULAR_MOVIES);
  const topRated = getMovieDB(INITIAL_VALUE_PAGINATION, PATH_TOP_RATED_MOVIES);
  const upcoming = getMovieDB(INITIAL_VALUE_PAGINATION, PATH_UPCOMING_MOVIES);

  const movies = await Promise.all([popular, topRated, upcoming]);
  const listMovies = {
    popular: {
      data: [...movies[0].data.results],
      nameCategory: TITLE_POPULAR_MOVIES,
      path: PATH_POPULAR_MOVIES,
    },
    topRated: {
      data: [...movies[1].data.results],
      nameCategory: TITLE_TOP_RATED,
      path: PATH_TOP_RATED_MOVIES,
    },
    upcoming: {
      data: [...movies[2].data.results],
      nameCategory: TITLE_UPCOMING,
      path: PATH_UPCOMING_MOVIES,
    },
  };
  dispatch({
    type: GET_MOVIES,
    payload: listMovies,
  });
  dispatch(toggleLoader());
};

export const getMoviesByCategory = (page, category) => async (dispatch) => {
  dispatch(toggleLoader());
  const listMovies = await getMovieDB(page, category);
  dispatch({
    type: GET_MOVIES_BY_CATEGORY,
    payload: listMovies.data.results,
  });
  dispatch(toggleLoader());
};
