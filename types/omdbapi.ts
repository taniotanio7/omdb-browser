type GenreType =
  | "Animation"
  | "Adventure"
  | "Comedy"
  | "Family"
  | "Fantasy"
  | string;

export interface Rating {
  Source: string;
  Value: string;
}

export type RatingType = "PG" | "TV-MA" | string;

export type ItemType = "movie" | "series" | "episode";

export type OMDBDetailsResponse =
  | {
      Response: "False";
      Error: string;
    }
  | {
      Response: "True";
      Title: string;
      Year: string;
      Rated: RatingType;
      Released: string;
      Runtime: string;
      Genre: GenreType;
      Director: string;
      Writer: string;
      Actors: string;
      Plot: string;
      Language: string;
      Country: string;
      Awards: string;
      Poster: string;
      Ratings: Rating[];
      Metascore: string;
      imdbRating: string;
      imdbVotes: string;
      imdbID: string;
      Type: ItemType;
      DVD: string;
      BoxOffice: string;
      Production: string;
      Website: string;
    };

export interface OMDBSearchItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: ItemType;
  Poster: string;
}

export type OMDBSearchResponse =
  | {
      Response: "False";
      Error?: string;
    }
  | {
      Response: "True";
      Search?: OMDBSearchItem[];
      totalResults?: string;
    };

type CommonRequestParams = {
  type?: ItemType;
  year?: string;
};

type DetailsRequiredParams =
  | {
      id: string;
      title?: never;
    }
  | {
      id?: never;
      title: string;
    };

export type OMDBDetailsParams = DetailsRequiredParams &
  CommonRequestParams & {
    plot?: "short" | "full";
  };

export type OMDBSearchParams = CommonRequestParams & {
  query: string;
  page?: number;
};
