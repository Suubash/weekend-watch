import React from "react";
import styles from "../styles/banner.module.css";
import { useNavigate } from "react-router-dom";
import MovieContext from "../contexts/MovieContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Swiper.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay]);

function Banner() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const navigate = useNavigate();
  const { movieState } = React.useContext(MovieContext);
  const { topTrendings } = movieState;

  // w440_and_h660_face => low quality poster images
  return (
    <div className={styles.banner}>
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={true}
          modules={[Pagination]}
          className="my-swiper"
        >
          {topTrendings.slice(0, 6).map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="slides">
                <img
                  className="slide-image"
                  src={`https://image.tmdb.org/t/p/w1280_and_h720_face${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.title || movie.name || movie.original_name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.bannerContentContainer}>
        <div className={styles.bannerContent}>
          <h1>Welcome to the weekend watch </h1>
          <p>Millions of Movies, TV Shows and many more</p>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search for movies, tv shows, and person"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => navigate(`/search?query=${searchTerm}`)}
              className={styles.searchButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
