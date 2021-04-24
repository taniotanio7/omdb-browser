import Input from "@components/ui/Input";
import Skeleton from "@components/ui/Skeleton";
import SearchResult from "@components/items/SearchResult";
import { useTitlesList } from "@hooks/useTitlesList";
import Head from "next/head";
import React from "react";
import "twin.macro";
import SearchResultsList from "@components/items/SearchResultsList";

export default function Home() {
  const { status, data } = useTitlesList({ query: "blade runner" });

  return (
    <div>
      <Head>
        <title>OMDB Browser</title>
      </Head>

      <main tw="container px-2 mx-auto">
        <h1 tw="dark:text-white text-4xl font-medium text-center my-3">
          OMDB API Browser
        </h1>
        <Input hideLabel name="Movie name" tw="max-w-2xl mx-auto" />

        <section>
          {status === "loading" ? (
            <Skeleton tw="h-8" count={4} />
          ) : status === "error" ? (
            <p>Error!</p>
          ) : data?.Response === "True" ? (
            <SearchResultsList tw="mt-3 md:mt-5 lg:mt-7">
              {data?.Search.map(item => (
                <SearchResult key={item.imdbID} item={item} />
              ))}
            </SearchResultsList>
          ) : (
            <p>No items</p>
          )}
        </section>
      </main>
    </div>
  );
}
