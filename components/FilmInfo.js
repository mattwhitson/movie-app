import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

//Displays information for film
const FilmInfo = ({ film }) => {
  return (
    <section className="flex flex-row justify-start mt-4 md:mt-8">
      <div className="relative hidden md:block max-h-[350px] max-w-[235px] sm:min-w-[350px] sm:min-h-[525px]">
        {film.poster_path !== null ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            layout="fill"
            alt=""
            className="absolute"
            priority={true}
          />
        ) : (
          <Image
            src="/no-poster.jpg"
            layout="fill"
            alt=""
            className="absolute"
            priority={true}
          />
        )}
      </div>
      <div className="flex flex-col px-2">
        <div className="flex my-6">
          <div className="relative min-h-[145px] min-w-[90px] md:hidden">
            {film.poster_path !== null ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                layout="fill"
                alt=""
                className="absolute"
                priority={true}
              />
            ) : (
              <Image
                src="/no-poster.jpg"
                layout="fill"
                alt=""
                className="absolute"
                priority={true}
              />
            )}
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold ml-2 sm:ml-0">
            {film.original_title}
          </h2>
        </div>
        <div className="flex-flex-col max-w-[600px] space-y-4">
          <div className="flex p-1 items-center">
            <h3 className="text-2xl mr-4">Rating</h3>

            <StarIcon className="h-6 mr-4 text-yellow-300" />
            <span className="text-xl">{film.vote_average} / 10</span>
          </div>
          <div className="flex space-x-4 font-semibold">
            <p className="p-1">{film.release_date.split("-")[0]}</p>
            <p className="p-1">{film.runtime} minutes</p>
            {film.genres.map(
              (genre, index) =>
                index < 2 && (
                  <p
                    className="p-1 bg-gray-200 border-[1px] border-gray-400 rounded text-black"
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                )
            )}
          </div>

          <h3 className="text-2xl sm:text-4xl font-semibold mt-auto">
            Synopsis
          </h3>

          <p className="text-xl px-1">{film.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default FilmInfo;
