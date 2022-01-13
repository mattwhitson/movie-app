import axios from "axios";
import { useInView } from "react-intersection-observer";
import CastInfo from "../../components/CastInfo";
import FilmInfo from "../../components/FilmInfo";

export const getServerSideProps = async (context) => {
  const filmId = context.params.id;

  const getFilm = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=09874fd47ec2d76fc70fb0b5b6605595`
  );
  const getCast = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=09874fd47ec2d76fc70fb0b5b6605595&language=en-US`
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

  console.log(film);

  return (
    <div className="relative w-full min-h-screen flex flex-col space-y-8 bg-black">
      <div className="xl:min-w-[1600px] max-w-[1600px] lg:p-24 mx-auto  bg-[#181818] md:rounded-lg sm:mt-4 text-[#f7f7f7]">
        <FilmInfo film={film} />
        <CastInfo cast={cast} />
      </div>
    </div>
  );
};

export default FilmPage;
