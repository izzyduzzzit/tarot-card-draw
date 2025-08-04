// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

// Import React hooks for state management and side effects
import React, { useState, useEffect } from 'react';

// Import all component files
import Header from './Header';
import DrawForm from './DrawForm';
import LoadingDisplay from './LoadingDisplay';
import CurrentReading from './CurrentReading';
import ReadingHistory from './ReadingHistory';

// Import card data and utility functions
import { majorArcana, shuffleArray, getRandomCards } from './data';

// Import styles
import './App.css';

const App = () => {
  // State for user's question/intention
  const [intention, setIntention] = useState('');
  
  // State for type of reading (1 or 3 cards)
  const [drawType, setDrawType] = useState('1');
  
  // State for currently drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  
  // State for all previous readings (history)
  const [readings, setReadings] = useState([]);
  
  // State to show/hide loading animation
  const [isDrawing, setIsDrawing] = useState(false);
  
  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Load saved readings from browser storage when app starts
  useEffect(() => {
    const savedReadings = localStorage.getItem('tarotReadings');
    if (savedReadings) {
      setReadings(JSON.parse(savedReadings));
    }
  }, []); // Empty dependency array = run once on component mount

  // Save readings to browser storage whenever readings change
  useEffect(() => {
    if (readings.length > 0) {
      localStorage.setItem('tarotReadings', JSON.stringify(readings));
    }
  }, [readings]); // Run whenever 'readings' state changes

  // Check if form inputs are valid before drawing cards
  const validateForm = () => {
    const newErrors = {};
    
    // Check if intention field is empty
    if (!intention.trim()) {
      newErrors.intention = 'Please enter your intention or question';
    }
    
    // Check if intention is too short
    if (intention.trim().length < 5) {
      newErrors.intention = 'Please enter at least 5 characters';
    }
    
    // Update error state and return true if no errors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Main function to draw cards
  const handleDrawCards = () => {
    // Don't draw if form is invalid
    if (!validateForm()) {
      return;
    }

    // Start loading animation and clear any errors
    setIsDrawing(true);
    setErrors({});

    // Simulate card drawing delay for better user experience
    setTimeout(() => {
      // Convert drawType string to number for card count
      const cardCount = parseInt(drawType);
      
      // Get random card selection function
      const getCards = getRandomCards(cardCount);
      
      // Draw random cards from major arcana deck
      const selectedCards = getCards(majorArcana);
      
      // Update state with drawn cards
      setDrawnCards(selectedCards);
      
      // Create new reading object for history
      const newReading = {
        id: Date.now(), // Unique ID using timestamp
        intention: intention.trim(), // User's question
        cards: selectedCards, // Cards that were drawn
        drawType: cardCount, // Number of cards drawn
        timestamp: new Date().toLocaleString() // When reading was done
      };
      
      // Add new reading to beginning of history
      setReadings(prev => [newReading, ...prev]);
      
      // Stop loading animation
      setIsDrawing(false);
    }, 2000); // 2 second delay
  };

  // Reset current reading and form
  const clearReading = () => {
    setDrawnCards([]);
    setIntention('');
    setDrawType('1');
    setErrors({});
  };

  // Clear all reading history
  const clearAllReadings = () => {
    setReadings([]);
    localStorage.removeItem('tarotReadings');
  };

  // Render the main app
  return (
    <div className="tarot-app">
      {/* App title and description */}
      <Header />
      
      <main className="app-main">
        {/* Form for user input and card drawing */}
        <DrawForm 
          intention={intention} 
          setIntention={setIntention} 
          drawType={drawType} 
          setDrawType={setDrawType} 
          errors={errors} 
          isDrawing={isDrawing} 
          onDrawCards={handleDrawCards} 
          onClearReading={clearReading} 
          hasDrawnCards={drawnCards.length > 0} 
        />

        {/* Show loading animation while drawing cards */}
        {isDrawing && <LoadingDisplay />}

        {/* Show current reading results if cards have been drawn */}
        {drawnCards.length > 0 && !isDrawing && (
          <CurrentReading intention={intention} drawnCards={drawnCards} />
        )}

        {/* Show reading history if any readings exist */}
        {readings.length > 0 && (
          <ReadingHistory readings={readings} onClearAllReadings={clearAllReadings} />
        )}
      </main>
    </div>
  );
};

export default App;