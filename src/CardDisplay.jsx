import React from 'react';

const CardDisplay = ({ card, position }) => {
  return (
    <div className="card card-drawn">
      <div className="card-header">
        <h3>{card.name}</h3>
        {position && <span className="card-position">{position}</span>}
      </div>
      <div className="card-meaning">
        <p><strong>Meaning:</strong> {card.meaning}</p>
        <p><strong>Keywords:</strong> {card.keywords}</p>
      </div>
    </div>
  );
};

export default CardDisplay;