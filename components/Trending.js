import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useFilmSearch } from "../hooks/useFilmSearch";
import LoadingIcon from "./LoadingIcon";

const Trending = ({ trending, setTrending, media }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { ref, inView, entry } = useInView();

  const { loading, error } = useFilmSearch(
    pageNumber,
    trending,
    setTrending,
    media
  );

  //sets next page to be queried from API with the useFilmSearch hook
  useEffect(() => {
    if (loading) return;
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <section className="flex flex-wrap md:max-w-[1600px] mx-auto sm:mt-0 mb-12">
        {trending &&
          trending.map((film) => (
            <Link
              key={film.id}
              href={`/${film.media_type}/${film.id}`}
              passHref
            >
              <a className="relative w-[350px] h-[525px] my-2 mx-auto hover:cursor-pointer">
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  layout="fill"
                  alt="trending poster"
                  className="absolute top-0 left-0"
                  priority={true}
                />
              </a>
            </Link>
          ))}
        {loading && <LoadingIcon />}
      </section>
      <div ref={ref}></div>
    </>
  );
};

export default Trending;
