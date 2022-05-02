import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./../redux/movies/movies.actions";

export const useMovies = () => {
  const listMovies = useSelector((state) => state.moviesReducer.movies);
  const loading = useSelector((state) => state.moviesReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return {
    listMovies,
    loading,
  };
};
