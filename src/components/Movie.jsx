import axios from "axios";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  id,
}) => {
  const IMG_PATH = import.meta.env.VITE_IMG_PATH;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const MOVIE_DETAILS_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const openMovieHomePage = async () => {
    try {
      const response = await axios.get(MOVIE_DETAILS_API);
      const movieData = response.data;
      const homepage = movieData.homepage;
      if (homepage) {
        window.open(homepage, "_blank");
      } else {
        console.log("No homepage available for this movie.");
      }
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} onClick={openMovieHomePage} />

      <div className="movie-info">
        <h3>{title}</h3>
        <span
          className={
            vote_average >= 7.5 ? "green" : vote_average >= 5 ? "orange" : "red"
          }
        >
          {vote_average.toFixed(1)}
        </span>
      </div>
      <h5>Release Date: {release_date}</h5>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
