// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

import React from 'react';

// Component to display individual tarot card information
// Props: card object with name/meaning/keywords, optional position label
const CardDisplay = ({ card, position }) => {
  return (
    <div className="card card-drawn">
      {/* Card header with name and position */}
      <div className="card-header">
        <h3>{card.name}</h3>
        {/* Show position label if provided (Past, Present, Future, etc.) */}
        {position && <span className="card-position">{position}</span>}
      </div>
      
      {/* Card interpretation information */}
      <div className="card-meaning">
        <p><strong>Meaning:</strong> {card.meaning}</p>
        <p><strong>Keywords:</strong> {card.keywords}</p>
      </div>
    </div>
  );
};

export default CardDisplay;