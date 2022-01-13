import CastImage from "./CastImage";

//Displays cast movie/tv show page
const CastInfo = ({ cast }) => {
  return (
    <section className="flex flex-col max-w-[900px] mr-auto md:mt-5 px-2">
      <h2 className="text-4xl">Cast</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cast.cast.map(
          (actor, index) =>
            index < 9 && (
              <div key={actor.id} className="flex my-4 mx-1">
                <CastImage actor={actor} />
                <div className="flex-col ml-2 justify-center items-center">
                  <p className="mt-1 font-semibold">{actor.original_name}</p>
                  <p className="text-gray-500">{actor.character}</p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default CastInfo;
