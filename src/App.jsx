import React, { useState, useEffect } from 'react';
import Header from './Header';
import DrawForm from './DrawForm';
import LoadingDisplay from './LoadingDisplay';
import CurrentReading from './CurrentReading';
import ReadingHistory from './ReadingHistory';
import { majorArcana, shuffleArray, getRandomCards } from './data';
import './App.css';

const App = () => {
  const [intention, setIntention] = useState('');
  const [drawType, setDrawType] = useState('1');
  const [drawnCards, setDrawnCards] = useState([]);
  const [readings, setReadings] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedReadings = localStorage.getItem('tarotReadings');
    if (savedReadings) {
      setReadings(JSON.parse(savedReadings));
    }
  }, []);

  useEffect(() => {
    if (readings.length > 0) {
      localStorage.setItem('tarotReadings', JSON.stringify(readings));
    }
  }, [readings]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!intention.trim()) {
      newErrors.intention = 'Please enter your intention or question';
    }
    
    if (intention.trim().length < 5) {
      newErrors.intention = 'Please enter at least 5 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDrawCards = () => {
    if (!validateForm()) {
      return;
    }

    setIsDrawing(true);
    setErrors({});

    setTimeout(() => {
      const cardCount = parseInt(drawType);
      const getCards = getRandomCards(cardCount);
      const selectedCards = getCards(majorArcana);
      
      setDrawnCards(selectedCards);
      
      const newReading = {
        id: Date.now(),
        intention: intention.trim(),
        cards: selectedCards,
        drawType: cardCount,
        timestamp: new Date().toLocaleString()
      };
      
      setReadings(prev => [newReading, ...prev]);
      setIsDrawing(false);
    }, 2000);
  };

  const clearReading = () => {
    setDrawnCards([]);
    setIntention('');
    setDrawType('1');
    setErrors({});
  };

  const clearAllReadings = () => {
    setReadings([]);
    localStorage.removeItem('tarotReadings');
  };

  return (
    <div className="tarot-app">
      <Header />
      
      <main className="app-main">
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

        {isDrawing && <LoadingDisplay />}

        {drawnCards.length > 0 && !isDrawing && (
          <CurrentReading 
            intention={intention}
            drawnCards={drawnCards}
          />
        )}

        {readings.length > 0 && (
          <ReadingHistory 
            readings={readings}
            onClearAllReadings={clearAllReadings}
          />
        )}
      </main>
    </div>
  );
};

export default App;