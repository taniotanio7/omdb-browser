import React from "react";
import Image from "next/image";
import { OMDBSearchItem } from "types/omdbapi";
import "twin.macro";

export interface ISearchResultProps {
  item: OMDBSearchItem;
}

function SearchResult({ item }: ISearchResultProps) {
  console.log(item.Poster);
  return (
    <li>
      <a tw="p-4 pb-2 md:(p-0 pt-6 pb-3) flex flex-col items-center bg-gray-800 rounded-lg shadow-md">
        {item.Poster && item.Poster !== "N/A" ? (
          <div tw="h-auto w-auto">
            <Image
              tw="rounded shadow"
              src={item.Poster}
              alt={`${item.Title} movie poster`}
              height="380"
              width="300"
            />
          </div>
        ) : (
          <div tw="height[380px] width[300px] bg-gray-200 dark:bg-gray-700 flex justify-center items-center rounded shadow mb-2">
            <p tw="text-gray-300 text-2xl font-bold">No poster available</p>
          </div>
        )}
        <span tw="text-orange-500 opacity-80 font-semibold text-2xl text-center">
          {item.Title}
        </span>
        <span tw="text-orange-200 font-light opacity-60 lg:mt-1">
          {item.Year}
        </span>
      </a>
    </li>
  );
}

export default SearchResult;
