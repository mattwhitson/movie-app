import { useEffect, useState } from "react";
import axios from "axios";

export const useFilmSearch = (pageNumber, films, setFilms, url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getNextPage = async () => {
      if (pageNumber > 1 && !loading) {
        setLoading(true);
        await axios
          .get(`${url}${pageNumber}`)
          .then((res) => setFilms(films.concat(res.data.results)))
          .catch((err) => console.log(err));
        setLoading(false);
      }
    };

    getNextPage();
  }, [pageNumber]);

  return {
    loading,
    error,
  };
};
