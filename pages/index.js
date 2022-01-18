import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Trending from "../components/Trending";

export const getServerSideProps = async () => {
  const filmResponse = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
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

  return (
    <main className="bg-black">
      <section className="text-4xl font-semibold max-w-[1600px] mx-auto text-white my-4 pl-4 lg:pl-8">
        <h3>Trending</h3>
      </section>
      <Trending trending={trending} setTrending={setTrending} media={"all"} />
    </main>
  );
}
