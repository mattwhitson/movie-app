import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

const ShowInfo = ({ show }) => {
  return (
    <section className="flex flex-row justify-start mt-4 md:mt-8">
      <div className="relative hidden md:block min-h-[525px] sm:min-w-[350px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
          layout="fill"
          alt=""
          className="absolute"
          priority={true}
        />
      </div>
      <div className="flex flex-col px-2">
        <div className="flex my-6">
          <div className="relative min-h-[145px] min-w-[90px] md:hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
              layout="fill"
              alt=""
              className="absolute"
              priority={true}
            />
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold ml-2 sm:ml-0">
            {show.original_name}
          </h2>
        </div>
        <div className="flex-flex-col max-w-[600px] space-y-4">
          <div className="flex p-1 items-center">
            <h3 className="text-2xl mr-4">Rating</h3>

            <StarIcon className="h-6 mr-4 text-yellow-300" />
            <span className="text-xl">{show.vote_average} / 10</span>
          </div>
          <div className="flex space-x-4 font-semibold">
            <p className="p-1">{`${show.first_air_date.split("-")[0]} - ${
              show.status !== "Ended"
                ? "Present"
                : show.last_air_date.split("-")[0]
            }`}</p>
            <p className="p-1">{show.number_of_episodes} episodes</p>
            {show.genres.map(
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
          <p className="text-xl px-1">{show.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default ShowInfo;
