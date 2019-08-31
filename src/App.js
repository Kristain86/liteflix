import React from 'react';
import './App.css';
import './scss/main.scss'

import FeaturedMovie from './components/FeaturedMovie';
import UpComingMovies from './components/UpComingMovies';

function App() {
  return (
    <div className="App">
      <FeaturedMovie />
      <UpComingMovies />
    </div>
  );
}

export default App;
