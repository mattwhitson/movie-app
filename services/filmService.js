import axios from "axios";

const retrieveNextPage = async (mediaType, pageNumber) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${pageNumber}`
  );

  return response;
};

const getSearchResults = async (search) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`
  );
  return response;
};

const functionsForExport = {
  retrieveNextPage,
  getSearchResults,
};

export default functionsForExport;
