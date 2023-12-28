import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import Footer from "./components/page/Footer";
import BrandLogo from "./components/BrandLogo";
import Form from "./components/Form";
import UpIcon from "./components/UpIcon";

function App() {
  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const SEARCH_API = `${BASE_API_URL}search/movie?api_key=${API_KEY}&query=`;
  const API_URL = `${BASE_API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    try {
      axios.get(API).then((response) => {
        setMovies(response.data.results);
      });
    } catch (error) {
      console.log(`Error fetchng data: ${error}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <div>
      <header>
        <BrandLogo />

        <Form
          handleFormSubmit={handleFormSubmit}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </header>
      <UpIcon />
      <main>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
