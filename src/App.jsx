import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Homepage from './pages/Homepage';
import MovieLists from './components/MovieLists';
import { movieData } from './lib/dummyData';

function App() {

  // const API_KEY = "a7a95f5d";

  const [movieDatas, setMovieDatas] = useState(null);

  const [search, setSearch] = useState("Avengers");

  useEffect(() => {
    // async function loadMovies() {
    //   const response = await axios(`/api/?i=tt3896198&apikey=a7a95f5d&s=${search}`, {
    //     headers: {
    //       Accept: 'application/json',
    //     },
    //   });
    //   console.log(response.data);
    // }
    // loadMovies();
  }, []);

  return (
    <div>
      <Homepage onSearch={setSearch} />
      <MovieLists movies={movieData.Search} />
    </div>
  );
}

export default App
