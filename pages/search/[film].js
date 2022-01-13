import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
  const film = context.params.film;
  const searchResults = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=09874fd47ec2d76fc70fb0b5b6605595&query=${film}`
  );

  const query = searchResults.data.results;

  return {
    props: {
      query,
    },
  };
};

const Search = ({ query }) => {
  const [searchResults, setSearchResults] = useState(query);
  const router = useRouter();

  useEffect(() => {
    setSearchResults(query);
  }, [router]);

  console.log(searchResults);
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-black text-white pt-5">
      <section className="max-w-6xl mx-auto space-y-5">
        {searchResults &&
          searchResults.map((media) => (
            <>
              {media.media_type !== "person" && (
                <Link
                  href={`${
                    media.media_type === "movie"
                      ? `/movie/${media.id}`
                      : `/tv/${media.id}`
                  }`}
                  passHref
                  key={media.id}
                >
                  {media.media_type === "movie" ? (
                    <article className="flex items-center space-x-4 bg-[#101010] p-2 rounded">
                      {media.poster_path !== null ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                          alt=""
                          height={60}
                          width={40}
                          className="hover:cursor-pointer"
                        />
                      ) : (
                        <Image
                          src={`/no-poster.jpg`}
                          alt=""
                          height={60}
                          width={40}
                          className="hover:cursor-pointer"
                        />
                      )}

                      <h6 className="hover:cursor-pointer">
                        ({media.release_date.split("-")[0]})
                      </h6>
                      <h5 className="hover:cursor-pointer">
                        {media.original_title}
                      </h5>
                    </article>
                  ) : (
                    <article className="flex items-center space-x-4 bg-[#101010] p-2 rounded">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                        alt=""
                        height={60}
                        width={40}
                        className="hover:cursor-pointer"
                      />
                      <h6 className="hover:cursor-pointer">
                        ({media.first_air_date?.split("-")[0]})
                      </h6>
                      <h5 className="hover:cursor-pointer">
                        {media.original_name}
                      </h5>
                    </article>
                  )}
                </Link>
              )}
            </>
          ))}
      </section>
    </main>
  );
};

export default Search;
