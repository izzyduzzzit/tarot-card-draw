// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

import React from 'react';

// Simple loading component shown while cards are being drawn
// Displays animated card back and loading message
const LoadingDisplay = () => {
  return (
    <div className="loading">
      {/* Animated card back that flips during loading */}
      <div className="card-back flipping"></div>
      <p>The cards are revealing themselves...</p>
    </div>
  );
};

export default LoadingDisplay;