import React from 'react';
import '../Css/animecard.css';

const AnimeCard = ({ title, episode, image, onClick }) => {
  return (
    <div className="anime-card" onClick={onClick}>
      <div className="anime-image-container">
        <img src={image} alt={title} className="anime-image" />
        <div className="gradient-overlay"></div>
        <div className="episode-overlay">Episode {episode}</div>
      </div>
      <h3 className="anime-title">{title}</h3>
    </div>
  );
};

export default AnimeCard;
