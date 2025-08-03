import React from 'react';
import CardDisplay from './CardDisplay';

const CurrentReading = ({ intention, drawnCards }) => {
  const getPositionLabel = (index, totalCards) => {
    if (totalCards === 1) return null;
    if (totalCards === 3) {
      return ['Past', 'Present', 'Future'][index];
    }
    return `Card ${index + 1}`;
  };

  return (
    <section className="current-reading">
      <h2>Your Reading</h2>
      <div className="reading-intention">
        <strong>Your Question:</strong> {intention}
      </div>
      <div className="cards-container">
        {drawnCards.map((card, index) => (
          <CardDisplay 
            key={card.id} 
            card={card} 
            position={getPositionLabel(index, drawnCards.length)}
          />
        ))}
      </div>
    </section>
  );
};

export default CurrentReading;