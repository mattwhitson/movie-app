import Image from "next/image";
import { useEffect, useState } from "react";

//Component to render cast member image or default image if image returns 404
const CastImage = ({ actor }) => {
  const [src, setSrc] = useState(
    `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setSrc("/poster-unavailable.jpg");
    }
  }, [error]);

  console.log(error);
  return (
    <div className="relative min-h-[96px] min-w-[96px]">
      <Image
        src={src}
        alt=""
        layout="fill"
        className="absolute rounded-full"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default CastImage;
