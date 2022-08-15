import React from "react";
import MovieContext from "./MovieContext";
import type { Movie, MovieState } from "../types/typings";
import { movieReducer } from "./movieReducer";

const INITIAL_STATE: MovieState = {
  topTrendings: [],
  tvShows: [],
  // netflixOriginals: [],
  // topRated: [],
  // actionMovies: [],
  // comedyMovies: [],
  // horrorMovies: [],
  // romanceMovies: [],
  // documentaries: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MovieProvider = ({ children }: Props) => {
  const [movieState, dispatch] = React.useReducer(movieReducer, INITIAL_STATE);

  const addMovies = (movie: Movie[]) => {
    dispatch({ type: "ADD_MOVIES", payload: movie });
  };

  const addTvShows = (movie: Movie[]) => {
    dispatch({ type: "ADD_TV_SHOWS", payload: movie });
  };

  return (
    <MovieContext.Provider value={{ movieState, addMovies, addTvShows }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
