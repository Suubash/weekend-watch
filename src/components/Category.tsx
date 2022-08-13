import React from "react";
import useMovies from "../hooks/fetch-movies-hook";
import { Movie } from "../types/typings";
import styles from "../styles/category.module.css";
import Thumbnail from "../components/Thumbnail";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import classnames from "classnames";
import MovieContext from "../contexts/MovieContext";

interface Props {
  url: string;
  title?: string;
}

const Category = (props: Props) => {
  const { url, title } = props;
  const { addMovies } = React.useContext(MovieContext);

  const { movies } = useMovies(url);

  React.useEffect(() => {
    addMovies(movies.results);

    return () => {};
  }, [movies]);

  const moviesRowRef = React.useRef<HTMLDivElement>(null);

  const handleClickToScroll = (direction: string) => {
    if (moviesRowRef.current) {
      const { scrollLeft, clientWidth } = moviesRowRef.current;
      const scrollTo =
        direction === "right"
          ? scrollLeft + clientWidth / 1.7
          : scrollLeft - clientWidth / 1.5;
      moviesRowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      {title && (
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
        </div>
      )}
      <div className={styles.moviesWrapper}>
        <div
          onClick={() => handleClickToScroll("left")}
          className={classnames(styles.iconContainer, styles.iconLeftContainer)}
        >
          <FaCaretLeft className={styles.icon} />
        </div>
        <div ref={moviesRowRef} className={styles.moviesContainer}>
          {movies.results.map((movie: Movie) => (
            <Thumbnail key={movie.id} {...movie} />
          ))}
        </div>
        <div
          onClick={() => handleClickToScroll("right")}
          className={classnames(
            styles.iconContainer,
            styles.iconRightContainer
          )}
        >
          <FaCaretRight className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Category;
