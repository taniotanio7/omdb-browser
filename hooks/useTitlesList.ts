import { useQuery, UseQueryOptions } from "react-query";
import { TITLES_LIST_QUERY } from "queryKeys";
import { AxiosRequestConfig } from "axios";
import { OMDBSearchParams, OMDBSearchResponse } from "types/omdbapi";
import { queryFetcher } from "utils/react-query/fetcher";

export function useTitlesList<TData = OMDBSearchResponse, TError = unknown>(
  params: OMDBSearchParams,
  queryOptions?: UseQueryOptions<OMDBSearchResponse, TError, TData>,
  axiosOptions?: AxiosRequestConfig
) {
  return useQuery<OMDBSearchResponse, TError, Partial<TData>>(
    [TITLES_LIST_QUERY, params],
    queryFetcher<OMDBSearchParams>(axiosOptions),
    queryOptions
  );
}
