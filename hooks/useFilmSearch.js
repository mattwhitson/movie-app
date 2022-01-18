import { useEffect, useState } from "react";
import filmService from "../services/filmService";

export const useFilmSearch = (pageNumber, films, setFilms, mediaType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getNextPage = async () => {
      if (pageNumber > 1 && !loading) {
        setLoading(true);
        await filmService
          .retrieveNextPage(mediaType, pageNumber)
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
