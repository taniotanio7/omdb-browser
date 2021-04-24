import React from "react";
import "twin.macro";

function SearchResultsList({ children, ...props }) {
  return (
    <ul tw="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-4" {...props}>
      {children}
    </ul>
  );
}

export default SearchResultsList;
