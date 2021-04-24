import { useDarkMode } from "@hooks/useDarkMode";
import { useMedia } from "@hooks/useMedia";
import React from "react";
import { styled, theme } from "twin.macro";
import SkeletonLib, {
  SkeletonProps,
  SkeletonTheme,
} from "react-loading-skeleton";

const SkeletonThemeWrapper = styled.div`
  &,
  > *,
  > * > * {
    display: contents;
  }
`;

function Skeleton(props: SkeletonProps) {
  const isDarkMode = useDarkMode();

  return (
    <SkeletonThemeWrapper>
      <SkeletonTheme
        color={isDarkMode ? theme`colors.gray.700` : theme`colors.gray.200`}
        highlightColor={
          isDarkMode ? theme`colors.gray.600` : theme`colors.gray.300`
        }
      >
        <SkeletonLib tw="" {...props} />
      </SkeletonTheme>
    </SkeletonThemeWrapper>
  );
}

export default Skeleton;
