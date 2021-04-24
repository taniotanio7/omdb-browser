import React from "react";
import "twin.macro";
import HeroImageWrapper from "./HeroImageWrapper";

function ErrorMessage({ header, description, image, ...props }) {
  return (
    <div tw="flex flex-col items-center" {...props}>
      <h2 tw="text-lg md:text-2xl lg:text-3xl text-emerald-700 dark:text-orange-700 font-medium lg:mb-3">
        {header}
      </h2>
      <p tw="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg">
        {description}
      </p>
      <HeroImageWrapper>{image}</HeroImageWrapper>
    </div>
  );
}

export default ErrorMessage;
