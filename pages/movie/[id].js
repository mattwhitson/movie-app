import axios from "axios";
import { useInView } from "react-intersection-observer";
import CastInfo from "../../components/CastInfo";
import FilmInfo from "../../components/FilmInfo";

export const getServerSideProps = async (context) => {
  const filmId = context.params.id;

  const getFilm = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const getCast = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const film = getFilm.data;
  const cast = getCast.data;

  return {
    props: {
      film,
      cast,
    },
  };
};

const FilmPage = ({ film, cast }) => {
  const { ref, inView, entry } = useInView();

  return (
    <main className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]  flex flex-col space-y-8 bg-black">
      <div className="xl:min-w-[1600px] max-w-[1600px] lg:p-24 mx-auto  bg-[#181818] md:rounded-lg sm:mt-4 text-[#f7f7f7]">
        <FilmInfo film={film} />
        <CastInfo cast={cast} />
      </div>
    </main>
  );
};

export default FilmPage;
