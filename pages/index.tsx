import Input from "@components/ui/Input";
import Skeleton from "@components/ui/Skeleton";
import SearchResult from "@components/items/SearchResult";
import { useTitlesList } from "@hooks/useTitlesList";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import "twin.macro";
import SearchResultsList from "@components/items/SearchResultsList";
import { useDebounce } from "@hooks/useDebounce";
import HeroImageWrapper from "@components/HeroImageWrapper";
import ErrorMessage from "@components/ErrorMessage";

export default function Home() {
  const [search, setSearch] = useState("");
  const delayedSearch = useDebounce(search);
  const { status, data } = useTitlesList({ query: delayedSearch });

  return (
    <div>
      <Head>
        <title>OMDB Browser</title>
      </Head>

      <main tw="container px-2 mx-auto">
        <h1 tw="dark:text-white text-3xl md:text-4xl font-medium text-center my-3">
          OMDB API Browser
        </h1>
        <Input
          hideLabel
          name="Movie name"
          tw="max-w-2xl mx-auto"
          value={search}
          onChange={setSearch}
        />

        <div tw="mt-2">
          {search ? (
            <section>
              {status === "loading" || delayedSearch === "" ? (
                <SearchResultsList tw="mt-3 md:mt-5 lg:mt-7">
                  <Skeleton
                    tw="height[400px] min-width[200px] w-full md:min-w-0"
                    count={6}
                  />
                </SearchResultsList>
              ) : status === "error" ? (
                <p>Error!</p>
              ) : data?.Response === "True" ? (
                <SearchResultsList tw="mt-3 md:mt-5 lg:mt-7">
                  {data?.Search.map(item => (
                    <SearchResult key={item.imdbID} item={item} />
                  ))}
                </SearchResultsList>
              ) : (
                <ErrorMessage
                  tw="md:mt-3 lg:mt-6"
                  header="No items"
                  description="No results were found for your search"
                  image={
                    <Image
                      src="/img/cat-list-empty.png"
                      width={1216}
                      height={912}
                      layout="responsive"
                      quality={95}
                    />
                  }
                />
              )}
            </section>
          ) : (
            <ErrorMessage
              tw="md:mt-3 lg:mt-6"
              header="No input yet"
              description="Please type name of the movie to search in the OMDB"
              image={
                <Image
                  src="/img/cat-waiting.png"
                  width={1216}
                  height={912}
                  layout="responsive"
                  quality={95}
                />
              }
            />
          )}
        </div>
      </main>
    </div>
  );
}
