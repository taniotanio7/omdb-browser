import { useMedia } from "./useMedia";

export function useDarkMode() {
  return useMedia("(prefers-color-scheme: dark)", false);
}
