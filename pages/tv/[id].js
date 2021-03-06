import axios from "axios";
import CastInfo from "../../components/CastInfo";
import ShowInfo from "../../components/ShowInfo";

export const getServerSideProps = async (context) => {
  const tvId = context.params.id;

  const getShow = await axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const getCast = await axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const show = getShow.data;
  const cast = getCast.data;

  return {
    props: {
      show,
      cast,
    },
  };
};

const TVSeries = ({ show, cast }) => {
  return (
    <main className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col space-y-8 bg-black">
      <div className="xl:min-w-[1600px] max-w-[1600px] lg:p-24 mx-auto bg-[#181818] md:rounded-lg sm:mt-4 text-[#f7f7f7]">
        <ShowInfo show={show} />
        <CastInfo cast={cast} />
      </div>
    </main>
  );
};

export default TVSeries;
