import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByCategory } from "../redux/movies/movies.actions";

export const useGetInfoByCategory = ({
  scrollWidth,
  counterScroll,
  page,
  path,
}) => {
  const moviesByCategory = useSelector(
    (state) => state.moviesReducer.moviesByCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollWidth === counterScroll) {
      dispatch(getMoviesByCategory(page, path));
    }
  }, [counterScroll, dispatch, page, path, scrollWidth]);

  return {
    moviesByCategory,
  };
};
