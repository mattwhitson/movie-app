import axios from "axios";
import CastInfo from "../../components/CastInfo";
import ShowInfo from "../../components/ShowInfo";

export const getServerSideProps = async (context) => {
  const tvId = context.params.id;

  const getShow = await axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=09874fd47ec2d76fc70fb0b5b6605595`
  );
  const getCast = await axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=09874fd47ec2d76fc70fb0b5b6605595&language=en-US`
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
  console.log(show, cast);
  return (
    <div className="relative w-full min-h-screen flex flex-col space-y-8 bg-black">
      <div className="xl:min-w-[1600px] max-w-[1600px] lg:p-24 mx-auto sm:h-[calc(100vh-80px)] bg-[#181818] md:rounded-lg sm:mt-4 text-[#f7f7f7]">
        <ShowInfo show={show} />
        <CastInfo cast={cast} />
      </div>
    </div>
  );
};

export default TVSeries;
