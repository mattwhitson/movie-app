import { Transition } from "@headlessui/react";

const SearchResultsDropDown = ({
  searchResults,
  handleClick,
  showSearchResults,
}) => {
  return (
    <Transition
      className={`absolute p-2 w-full top-16 md:top-12 z-20 rounded bg-gray-800 space-y-2`}
      show={showSearchResults}
      enter="transition duration-200 ease-out "
      enterFrom="transform scale-40 opacity-0 "
      enterTo="transform scale-100 opacity-100 "
      leave="transition duration-200 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-40 opacity-0 "
    >
      <div>
        {searchResults.length > 0 &&
          searchResults.map((result) => (
            <div
              key={result.id}
              className="py-4 md:py-1 hover:bg-gray-600 rounded hover:cursor-pointer"
            >
              {result.media_type === "movie" ? (
                <a onClick={() => handleClick(result.id, result.media_type)}>
                  ({result.release_date.split("-")[0]}) {result.original_title}
                </a>
              ) : (
                <>
                  {result.media_type !== "person" && (
                    <a
                      onClick={() => handleClick(result.id, result.media_type)}
                    >
                      ({result.first_air_date.split("-")[0]}) {result.name}
                    </a>
                  )}
                </>
              )}
            </div>
          ))}
      </div>
    </Transition>
  );
};

export default SearchResultsDropDown;
