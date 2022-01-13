import Link from "next/link";
import { useRouter } from "next/router";
import { FilmIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

const Header = () => {
  const router = useRouter();

  return (
    <header className="relative bg-[#101010] items-center h-16 sm:h-20 justify-center">
      <nav className="w-full lg:max-w-[1600px] h-full mx-auto flex flex-coljustify-center items-center text-white mr-auto">
        <Link href={"/"} passHref>
          <div className="flex ml-2 sm:ml-12">
            <FilmIcon className="h-8 sm:h-10 mr-2" />
            <h1 className="hidden sm:block text-2xl lg:text-4xl mt-[3px] lg:mt-0 mr-6 sm:mr-8 font-semibold hover:cursor-pointer">
              Movie Center
            </h1>
          </div>
        </Link>
        <Link href={"/movie/trending"} passHref>
          <h2
            className={`text-xl sm:text-2xl mr-4 hover:cursor-pointer ${
              router.asPath === "/movie/trending" &&
              "underline underline-offset-4"
            }`}
          >
            Movies
          </h2>
        </Link>
        <Link href={"/tv/trending"} passHref>
          <h2
            className={`text-xl sm:text-2xl hover:cursor-pointer ${
              router.asPath === "/tv/trending" && "underline underline-offset-4"
            }`}
          >
            TV Shows
          </h2>
        </Link>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
