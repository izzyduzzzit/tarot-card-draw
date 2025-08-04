// Izarra Villareal CS 81 JavaScript Final Project: Tarot Card Draw
// GitHub URL: https://github.com/izzyduzzzit/tarot-card-draw

// Complete Major Arcana deck with meanings and keywords
// Each card has an id (0-21), name, meaning, and keywords for interpretation
export const majorArcana = [
  { id: 0, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", keywords: "Adventure, Freedom, Originality" },
  { id: 1, name: "The Magician", meaning: "Manifestation, resourcefulness, power", keywords: "Willpower, Desire, Creation" },
  { id: 2, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", keywords: "Intuition, Sacred, Subconscious" },
  { id: 3, name: "The Empress", meaning: "Femininity, beauty, nature, abundance", keywords: "Mother, Nature, Abundance" },
  { id: 4, name: "The Emperor", meaning: "Authority, establishment, structure", keywords: "Father, Authority, Structure" },
  { id: 5, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity", keywords: "Religion, Group, Convention" },
  { id: 6, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", keywords: "Love, Union, Relationships" },
  { id: 7, name: "The Chariot", meaning: "Control, willpower, success, determination", keywords: "Control, Willpower, Victory" },
  { id: 8, name: "Strength", meaning: "Strength, courage, persuasion, influence", keywords: "Strength, Courage, Patience" },
  { id: 9, name: "The Hermit", meaning: "Soul searching, seeking inner guidance", keywords: "Introspection, Seeking, Guidance" },
  { id: 10, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", keywords: "Fate, Karma, Life Cycles" },
  { id: 11, name: "Justice", meaning: "Justice, fairness, truth, cause and effect", keywords: "Justice, Fairness, Truth" },
  { id: 12, name: "The Hanged Man", meaning: "Suspension, restriction, letting go", keywords: "Sacrifice, Release, Martyrdom" },
  { id: 13, name: "Death", meaning: "Endings, beginnings, change, transformation", keywords: "Transformation, Transition, Change" },
  { id: 14, name: "Temperance", meaning: "Balance, moderation, patience, purpose", keywords: "Balance, Moderation, Patience" },
  { id: 15, name: "The Devil", meaning: "Bondage, addiction, sexuality, materialism", keywords: "Bondage, Materialism, Ignorance" },
  { id: 16, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", keywords: "Disaster, Upheaval, Sudden Change" },
  { id: 17, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", keywords: "Hope, Faith, Purpose" },
  { id: 18, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", keywords: "Illusion, Fear, Anxiety" },
  { id: 19, name: "The Sun", meaning: "Happiness, success, optimism, vitality", keywords: "Happiness, Success, Vitality" },
  { id: 20, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", keywords: "Judgement, Rebirth, Awakening" },
  { id: 21, name: "The World", meaning: "Completion, accomplishment, travel", keywords: "Completion, Accomplishment, Success" }
];

// Function to randomly shuffle an array of cards
// Uses Math.random() to create random ordering
export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Higher-order function that returns a card selection function
// Takes desired number of cards and returns a function that selects that many cards
export const getRandomCards = (count) => (cards) => {
  // Create copy of cards array to avoid modifying original
  const shuffled = shuffleArray([...cards]);
  
  // Return requested number of cards from shuffled deck
  return shuffled.slice(0, count);
};