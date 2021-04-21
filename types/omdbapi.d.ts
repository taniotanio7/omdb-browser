type GenreType =
  | "Animation"
  | "Adventure"
  | "Comedy"
  | "Family"
  | "Fantasy"
  | string;

export type RatingType = "PG" | "TV-MA" | string;

export type ItemType = "movie" | "series" | "episode";

export interface OMDBItem {
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
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
