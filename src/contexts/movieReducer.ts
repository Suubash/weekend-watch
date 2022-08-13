import { Movie, MovieState } from "../types/typings";

type MovieAction = { type: "ADD_MOVIE"; payload: Movie[] };

export const movieReducer = (
  state: MovieState,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        topTrendings: [...action.payload],
      };

    default:
      return state;
  }
};
