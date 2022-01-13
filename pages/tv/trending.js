import axios from "axios";
import { useContext, useState } from "react";
import Trending from "../../components/Trending";

export const getServerSideProps = async () => {
  const TVResponse = await axios.get(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=09874fd47ec2d76fc70fb0b5b6605595"
  );

  const query = TVResponse.data.results;

  return {
    props: {
      query,
    },
  };
};

const TVTrending = ({ query }) => {
  const [trending, setTrending] = useState(query);

  return (
    <div className="bg-black">
      <Trending trending={trending} setTrending={setTrending} media={"tv"} />
    </div>
  );
};

export default TVTrending;
