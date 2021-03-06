import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import SearchResultsDropDown from "./SearchResultsDropDown";
import filmService from "../services/filmService";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const noPeople = searchResults.filter(
    (result) => result.media_type !== "person"
  );

  //return statment cleans up debounce to ensure it doesn't execute after routing to another page
  useEffect(() => {
    if (search !== "") {
      debouncedSearch(search);
    } else {
      setSearchResults([]);
    }
    return () => debouncedSearch.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const displaySearchResults = () => {
    if (searchResults.length > 0) {
      setShowSearchResults(true);
    }
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchResults]);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (search) => {
        searchResults;
        return await filmService
          .getSearchResults(search)
          .then((res) =>
            setSearchResults(
              res.data.results.filter(
                (result) => result.media_type !== "person"
              )
            )
          );
      }, 1000),
    [searchResults]
  );

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  const handleClick = (id, media) => {
    setSearch("");
    router.push(`/${media}/${id}`);
  };

  return (
    <>
      <div className="hidden md:flex justify-center items-center ml-auto">
        <form className="relative" onSubmit={handleSearch}>
          <input
            className="py-2 px-2 rounded w-64 xl:w-96 text-black focus:outline-none"
            placeholder="Search for a movie or tv show"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onFocus={displaySearchResults}
            onBlur={() => setShowSearchResults(false)}
          />
          <SearchIcon
            onClick={handleSearch}
            className="absolute top-2 right-2 h-6 text-gray-400 hover:cursor-pointer"
          />
          <button type="submit" hidden>
            Search
          </button>

          <SearchResultsDropDown
            searchResults={searchResults}
            handleClick={handleClick}
            showSearchResults={showSearchResults}
          />
        </form>
      </div>
      <Transition
        as="form"
        onSubmit={handleSearch}
        className={`absolute md:hidden flex justify-center items-center w-[100%] h-full top-0 left-0 z-20 bg-zinc-800`}
        show={showMobileSearch}
        enter="transition duration-200 ease-out"
        enterFrom="transform w-0 opacity-0 "
        enterTo="transform w-full opacity-100 "
        leave="transition duration-200 ease-out"
        leaveFrom="transform w-full opacity-100"
        leaveTo="transform w-0 opacity-0 "
      >
        <input
          className="relative rounded w-full h-[60%] bg-neutral-900 mx-2 focus:outline-none px-2"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie or tv show"
          value={search}
          onFocus={displaySearchResults}
          onBlur={() => setShowSearchResults(false)}
        />
        <PlusIcon
          className="absolute right-4 h-6 rotate-45"
          onClick={() => setShowMobileSearch(false)}
        />
        <SearchResultsDropDown
          searchResults={searchResults}
          handleClick={handleClick}
          showSearchResults={showSearchResults}
        />
        <button type="submit" hidden></button>
      </Transition>
      <SearchIcon
        className="ml-auto h-6 pr-4 md:hidden"
        onClick={() => setShowMobileSearch(true)}
      />
    </>
  );
};

export default SearchBar;
