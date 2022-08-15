import React from "react";
import { Movie, MovieState } from "../types/typings";

export type MovieContextProps = {
  movieState: MovieState;
  addMovies: (movies: Movie[]) => void;
  addTvShows: (movies: Movie[]) => void;
};

const MovieContext = React.createContext<MovieContextProps>(
  {} as MovieContextProps
);

export default MovieContext;
