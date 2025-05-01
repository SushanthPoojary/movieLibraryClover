import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Homepage from './pages/Homepage';
import { movieData } from './lib/dummyData';
import Favorites from './pages/Favourites';
import { Route, Routes } from 'react-router';

function App() {

  // const API_KEY = "a7a95f5d";

  const [favorites, setFavorites] = useState([]);

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

    console.log("favorites", favorites);
  }, [favorites]);

  return (
    // <div>
    //   <Homepage onFavoriteClick={setFavorites} favorites={favorites} />
    //   <Favorites favorites={favorites} />
    // </div>

    <Routes>
      <Route path="/" element={<Homepage onFavoriteClick={setFavorites} favorites={favorites} />} />
      <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>

  );
}

export default App
