import React from 'react';
import '../Css/mainbanner.css';

function Mainbanner({ movie }) {
  return (
    <div className='main'>
      <h1 className="explore-title">Explore</h1>
      <h2 className="watch-subtitle">What are you gonna watch today?</h2>
      <div className='main-banner'>
        <div className="banner-content">
          <h2 className="banner-title">{movie.movieName}</h2>
          <p className="banner-description">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mainbanner;
