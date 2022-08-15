export interface Movie {
  title?: string;
  original_title?: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  name?: string;
  original_name?: string;
  origin_country?: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
}

export interface MovieState {
  topTrendings: Movie[];
  tvShows: Movie[];
  // netflixOriginals: Movie[];
  // topRated: Movie[];
  // actionMovies: Movie[];
  // comedyMovies: Movie[];
  // horrorMovies: Movie[];
  // romanceMovies: Movie[];
  // documentaries: Movie[];
}
