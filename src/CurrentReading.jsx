// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

import React from 'react';
import CardDisplay from './CardDisplay';

// Component to display the current reading results
// Props: user's intention and array of drawn cards
const CurrentReading = ({ intention, drawnCards }) => {
  
  // Helper function to determine position labels for cards
  const getPositionLabel = (index, totalCards) => {
    // Single card reading has no position labels
    if (totalCards === 1) return null;
    
    // Three card reading uses Past/Present/Future
    if (totalCards === 3) {
      return ['Past', 'Present', 'Future'][index];
    }
    
    // Fallback for other card counts
    return `Card ${index + 1}`;
  };

  return (
    <section className="current-reading">
      <h2>Your Reading</h2>
      
      {/* Display user's original question */}
      <div className="reading-intention">
        <strong>Your Question:</strong> {intention}
      </div>
      
      {/* Display all drawn cards */}
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