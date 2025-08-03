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

export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getRandomCards = (count) => (cards) => {
  const shuffled = shuffleArray([...cards]);
  return shuffled.slice(0, count);
};