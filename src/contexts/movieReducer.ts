import { Movie, MovieState } from "../types/typings";

type MovieAction =
  | { type: "ADD_MOVIES"; payload: Movie[] }
  | { type: "ADD_TV_SHOWS"; payload: Movie[] };

export const movieReducer = (
  state: MovieState,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        topTrendings: [...action.payload],
      };

    case "ADD_TV_SHOWS":
      return {
        ...state,
        tvShows: [...action.payload],
      };

    default:
      return state;
  }
};
