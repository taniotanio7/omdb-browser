import { useQuery, UseQueryOptions } from "react-query";
import { TITLE_DETAILS_QUERY } from "queryKeys";
import { AxiosRequestConfig } from "axios";
import { OMDBDetailsParams, OMDBDetailsResponse } from "types/omdbapi";
import { queryFetcher } from "utils/react-query/fetcher";

export function useTitleDetails<TData = OMDBDetailsResponse, TError = unknown>(
  params: OMDBDetailsParams,
  queryOptions: UseQueryOptions<OMDBDetailsResponse, TError, TData>,
  axiosOptions?: AxiosRequestConfig
) {
  return useQuery<OMDBDetailsResponse, TError, TData>(
    [TITLE_DETAILS_QUERY, params],
    queryFetcher<OMDBDetailsParams>(axiosOptions),
    queryOptions
  );
}
