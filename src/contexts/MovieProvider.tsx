import React from "react";
import MovieContext from "./MovieContext";
import type { Movie, MovieState } from "../types/typings";
import { movieReducer } from "./movieReducer";

const INITIAL_STATE: MovieState = {
  topTrendings: [],
  netflixOriginals: [],
  topRated: [],
  actionMovies: [],
  comedyMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  documentaries: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MovieProvider = ({ children }: Props) => {
  const [movieState, dispatch] = React.useReducer(movieReducer, INITIAL_STATE);

  const addMovies = (movie: Movie[]) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  return (
    <MovieContext.Provider value={{ movieState, addMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
