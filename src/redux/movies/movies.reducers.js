import MoviesTypes from "./movies.types";

const { GET_MOVIES, TOGGLE_LOADER, GET_MOVIES_BY_CATEGORY } = MoviesTypes;

const initialState = {
  movies: [],
  moviesByCategory: [],
  loading: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIES_BY_CATEGORY:
      return {
        ...state,
        moviesByCategory: action.payload,
      };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
