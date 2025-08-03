import React from 'react';

const DrawForm = ({ 
  intention, 
  setIntention, 
  drawType, 
  setDrawType, 
  errors, 
  isDrawing, 
  onDrawCards, 
  onClearReading, 
  hasDrawnCards 
}) => {
  return (
    <div className="draw-form">
      <div className="form-group">
        <label htmlFor="intention">Your Intention or Question:</label>
        <textarea
          id="intention"
          value={intention}
          onChange={(e) => setIntention(e.target.value)} // Event handling
          placeholder="What guidance are you seeking today?"
          className={errors.intention ? 'error' : ''}
          disabled={isDrawing}
        />
        {errors.intention && <span className="error-message">{errors.intention}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="drawType">Type of Reading:</label>
        <select
          id="drawType"
          value={drawType}
          onChange={(e) => setDrawType(e.target.value)} // Event handling
          disabled={isDrawing}
        >
          <option value="1">Single Card - Quick Insight</option>
          <option value="3">Three Cards - Past, Present, Future</option>
        </select>
      </div>

      <div className="form-actions">
        <button 
          type="button" 
          onClick={onDrawCards}
          disabled={isDrawing}
          className="draw-button"
        >
          {isDrawing ? 'Drawing Cards...' : 'Draw Cards'}
        </button>
        
        {hasDrawnCards && (
          <button 
            type="button" 
            onClick={onClearReading}
            className="clear-button"
            disabled={isDrawing}
          >
            New Reading
          </button>
        )}
      </div>
    </div>
  );
};

export default DrawForm;