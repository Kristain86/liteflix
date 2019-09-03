import React from 'react';
import './App.css';
import './scss/main.scss'

import FeaturedMovie from './components/FeaturedMovie';
import UpComingMovies from './components/UpComingMovies';
import PopularMovies from './components/PopularMovies';


function App() {
  return (
    <div className="App">
      

      <FeaturedMovie />
      <UpComingMovies />
      <PopularMovies/>
    </div>
  );
}

export default App;
