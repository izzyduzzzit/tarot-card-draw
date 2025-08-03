import React from 'react';

const ReadingHistory = ({ readings, onClearAllReadings }) => {
  return (
    <section className="reading-history">
      <div className="history-header">
        <h2>Previous Readings ({readings.length})</h2>
        <button onClick={onClearAllReadings} className="clear-all-button">
          Clear All History
        </button>
      </div>
      
      <div className="history-list">
        {readings.slice(0, 5).map((reading) => ( // Arrays manipulation
          <div key={reading.id} className="history-item">
            <div className="history-meta">
              <span className="history-date">{reading.timestamp}</span>
              <span className="history-type">
                {reading.drawType} card{reading.drawType > 1 ? 's' : ''}
              </span>
            </div>
            <div className="history-intention">"{reading.intention}"</div>
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