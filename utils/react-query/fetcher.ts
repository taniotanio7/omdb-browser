import { AxiosRequestConfig } from "axios";
import { QueryFunctionContext } from "react-query";
import { fetcher, ParamsType } from "utils/api/fetcher";

export function queryFetcher<T extends ParamsType>(
  axiosConfig?: AxiosRequestConfig
) {
  return ({ queryKey }: QueryFunctionContext<[any, T]>) => {
    const [, params] = queryKey;

    return fetcher<T>(params, axiosConfig);
  };
}
