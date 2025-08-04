✨ Tarot Card Reader ✨

A React-based tarot card reading application that allows users to draw cards for guidance and insight.

📖 About
This application provides a digital tarot card experience using the Major Arcana deck. Users can ask questions, draw cards, and receive interpretations to guide their decision-making and self-reflection.

🎯 Features
Single Card Reading: Draw one card for quick insight
Three Card Reading: Past, Present, Future spread
Reading History: View your last 5 readings
Local Storage: Readings are saved automatically
Responsive Design: Works on desktop and mobile
Form Validation: Ensures proper input before drawing cards
Smooth Animations: Card drawing and loading effects

🎴 How It Works
1. Ask Your Question
Enter your intention or question in the text area. This helps focus your reading.

2. Choose Reading Type
Single Card: One card for general guidance
Three Cards: Past, Present, Future timeline

3. Draw Cards
Click "Draw Cards" to randomly select from the 22 Major Arcana cards.

4. Interpret Your Reading
Each card shows:
Name: The card's title
Meaning: General interpretation
Keywords: Key themes to consider

5. Review History
Your last 5 readings are automatically saved and can be reviewed anytime.
💡 Key Components Explained

App.jsx - Main Application
Manages all application state (current reading, history, form data)
Handles card drawing logic and form validation
Coordinates between all child components
Manages local storage for reading history

data.js - Card Data & Utilities
Contains all 22 Major Arcana cards with meanings and keywords
Provides shuffle and random selection functions
Acts as the "deck" of cards for the application

DrawForm.jsx - User Input
Handles user question input and reading type selection
Validates form before allowing card draws
Provides clear/reset functionality

CurrentReading.jsx - Display Results
Shows the user's question and drawn cards
Handles different layouts for 1-card vs 3-card spreads
Uses CardDisplay component to render individual cards

ReadingHistory.jsx - Past Readings
Displays up to 5 most recent readings
Shows timestamp, question, and cards drawn
Allows clearing all history
