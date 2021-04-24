import { useDarkMode } from "@hooks/useDarkMode";
import { useMedia } from "@hooks/useMedia";
import React from "react";
import { theme } from "twin.macro";
import SkeletonLib, {
  SkeletonProps,
  SkeletonTheme,
} from "react-loading-skeleton";

function Skeleton(props: SkeletonProps) {
  const isDarkMode = useDarkMode();

  return (
    <SkeletonTheme
      color={isDarkMode ? theme`colors.gray.700` : theme`colors.gray.200`}
      highlightColor={
        isDarkMode ? theme`colors.gray.600` : theme`colors.gray.300`
      }
    >
      <SkeletonLib tw="" {...props} />
    </SkeletonTheme>
  );
}

export default Skeleton;
