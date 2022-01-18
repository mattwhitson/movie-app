import axios from "axios";
import { useState } from "react";
import Trending from "../../components/Trending";

export const getServerSideProps = async () => {
  const TVResponse = await axios.get(
    ` https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const query = TVResponse.data.results;

  return {
    props: {
      query,
    },
  };
};

const FilmTrending = ({ query }) => {
  const [trending, setTrending] = useState(query);

  return (
    <div className="bg-black">
      <Trending trending={trending} setTrending={setTrending} media={"movie"} />
    </div>
  );
};

export default FilmTrending;
