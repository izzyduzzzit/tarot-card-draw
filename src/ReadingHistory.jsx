// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

import React from 'react';

// Component to display previous readings history
// Props: array of past readings and function to clear all history
const ReadingHistory = ({ readings, onClearAllReadings }) => {
  return (
    <section className="reading-history">
      {/* Header with count and clear all button */}
      <div className="history-header">
        <h2>Previous Readings ({readings.length})</h2>
        <button onClick={onClearAllReadings} className="clear-all-button">
          Clear All History
        </button>
      </div>

      {/* List of previous readings (limited to 5 most recent) */}
      <div className="history-list">
        {readings.slice(0, 5).map((reading) => (
          <div key={reading.id} className="history-item">
            {/* Reading metadata: date and card count */}
            <div className="history-meta">
              <span className="history-date">{reading.timestamp}</span>
              <span className="history-type">
                {reading.drawType} card{reading.drawType > 1 ? 's' : ''}
              </span>
            </div>
            
            {/* User's original question */}
            <div className="history-intention">"{reading.intention}"</div>
            
            {/* Names of cards that were drawn */}
            <div className="history-cards">
              {reading.cards.map(card => card.name).join(', ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadingHistory;