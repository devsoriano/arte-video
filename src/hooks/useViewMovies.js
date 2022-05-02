import { useEffect } from "react";

export const useViewMovies = ({ moviesByCategory, listMovies, path }) => {
  useEffect(() => {
    if (moviesByCategory.length > 0) {
      listMovies[path]?.data.push(...moviesByCategory);
    }
  }, [listMovies, moviesByCategory, path]);
};
