import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Trending from "../components/Trending";

export const getServerSideProps = async () => {
  const filmResponse = await axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=09874fd47ec2d76fc70fb0b5b6605595"
  );

  const query = filmResponse.data.results;

  return {
    props: {
      query,
    },
  };
};

export default function Home({ query }) {
  const [trending, setTrending] = useState(query);
  const [searchResults, setSearchResults] = useState(null);

  console.log(trending);
  return (
    <div className="bg-black">
      <div className="text-4xl font-semibold max-w-[1600px] mx-auto text-white my-4 pl-4 lg:pl-8">
        <h3>Trending</h3>
      </div>
      <Trending trending={trending} setTrending={setTrending} media={"all"} />
    </div>
  );
}
