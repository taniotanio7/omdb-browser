import axios, { AxiosRequestConfig } from "axios";
import {
  OMDBDetailsParams,
  OMDBDetailsResponse,
  OMDBSearchParams,
  OMDBSearchResponse,
} from "types/omdbapi";

export type ParamsType = OMDBDetailsParams | OMDBSearchParams;

type ResponseType<T> = T extends OMDBDetailsParams
  ? OMDBDetailsResponse
  : T extends OMDBSearchParams
  ? OMDBSearchResponse
  : never;

export async function fetcher<T extends ParamsType>(
  params: T,
  axiosConfig?: AxiosRequestConfig
): Promise<ResponseType<T>> {
  const response = await axios.get<ResponseType<T>>(
    process.env.NEXT_PUBLIC_OMDB_API_HOST,
    {
      params: {
        ...mapParams(params),
        r: "json",
        v: "1",
        apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
      },
      ...axiosConfig,
    }
  );
  return response.data;
}

function mapParams(params: OMDBDetailsParams | OMDBSearchParams) {
  if (isDetailsParams(params)) {
    return {
      i: params.id,
      t: params.title,
      type: params.type,
      y: params.year,
      plot: params.plot,
    };
  }

  return {
    s: params.query,
    type: params.type,
    y: params.year,
    page: params.page,
  };
}

function isDetailsParams(params): params is OMDBDetailsParams {
  return params?.id || params?.title;
}
