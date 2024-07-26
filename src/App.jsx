import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Mainbanner from './components/Mainbanner';
import Newreleases from './components/Newreleases';
import moviesData from './data/moviesData.json';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(moviesData[0]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    debugger
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <Mainbanner movie={selectedMovie} />
        <Newreleases movies={moviesData} onMovieClick={handleMovieClick} />
      </main>
    </div>
  );
}

export default App;
