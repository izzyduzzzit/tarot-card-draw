// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

import React from 'react';

// Form component for user input and card drawing
// Receives props from parent App component for state management
const DrawForm = ({
  intention,        // Current user input
  setIntention,     // Function to update user input
  drawType,         // Selected reading type (1 or 3 cards)
  setDrawType,      // Function to update reading type
  errors,           // Form validation errors
  isDrawing,        // Whether cards are currently being drawn
  onDrawCards,      // Function to trigger card drawing
  onClearReading,   // Function to reset current reading
  hasDrawnCards     // Whether cards have been drawn
}) => {
  return (
    <div className="draw-form">
      {/* User intention/question input */}
      <div className="form-group">
        <label htmlFor="intention">Your Intention or Question:</label>
        <textarea
          id="intention"
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="What guidance are you seeking today?"
          className={errors.intention ? 'error' : ''} // Add error styling if validation fails
          disabled={isDrawing} // Disable input while drawing cards
        />
        {/* Show error message if validation fails */}
        {errors.intention && <span className="error-message">{errors.intention}</span>}
      </div>

      {/* Reading type selection */}
      <div className="form-group">
        <label htmlFor="drawType">Type of Reading:</label>
        <select
          id="drawType"
          value={drawType}
          onChange={(e) => setDrawType(e.target.value)}
          disabled={isDrawing} // Disable selection while drawing
        >
          <option value="1">Single Card - Quick Insight</option>
          <option value="3">Three Cards - Past, Present, Future</option>
        </select>
      </div>

      {/* Action buttons */}
      <div className="form-actions">
        {/* Primary draw button */}
        <button
          type="button"
          onClick={onDrawCards}
          disabled={isDrawing}
          className="draw-button"
        >
          {isDrawing ? 'Drawing Cards...' : 'Draw Cards'}
        </button>

        {/* Clear button - only show if cards have been drawn */}
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