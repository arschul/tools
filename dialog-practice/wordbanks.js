// Word bank categories for Dialogue Player
// Each category is an array of interchangeable words/phrases used to fill [placeholder] slots in conversations.
const WORD_BANKS = {
  object: ["wallet", "phone", "backpack", "umbrella", "notebook", "watch", "water bottle", "jacket", "charger", "hat"],
  food: ["pizza", "sushi", "tacos", "pasta", "ice cream", "salad", "burger", "soup", "sandwich", "rice and beans"],
  dinner_food: ["pasta", "rice and beans", "soup", "a stew", "grilled chicken", "lasagna", "a stir-fry", "tacos"],
  drink: ["coffee", "tea", "orange juice", "water", "soda", "smoothie", "hot chocolate", "lemonade"],
  place: ["the park", "the mall", "the beach", "the library", "the gym", "downtown", "the movies", "the market", "the school", "the cafe"],
  destination: ["the beach", "the mountains", "another city", "a lake house", "a national park", "the coast", "a small town nearby", "a big city", "the countryside", "an amusement park"],
  country: ["Canada", "Portugal", "Japan", "Australia", "Ireland", "Germany", "New Zealand", "Italy", "the Netherlands", "South Korea"],
  city: ["this city", "our city", "the capital", "the city center", "the suburbs", "downtown areas", "big cities", "smaller cities", "urban areas", "this region"],
  hobby: ["playing video games", "painting", "playing guitar", "reading", "dancing", "skateboarding", "cooking", "photography", "swimming", "drawing"],
  sport: ["soccer", "basketball", "volleyball", "tennis", "swimming", "surfing", "running", "cycling"],
  animal: ["dog", "cat", "hamster", "parrot", "rabbit", "turtle", "fish", "bird"],
  family: ["brother", "sister", "cousin", "mom", "dad", "grandmother", "grandfather", "aunt", "uncle"],
  weather: ["sunny", "rainy", "cold", "windy", "hot", "cloudy", "freezing", "humid"],
  subject: ["math", "history", "science", "English", "art", "music", "PE", "geography"],
  movie_genre: ["action", "comedy", "horror", "romance", "animated", "sci-fi", "documentary"],
  day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  time: ["7", "8", "9", "10", "3", "4", "5", "6"],
  job: ["teacher", "doctor", "engineer", "chef", "designer", "photographer", "nurse", "accountant"],
  color: ["blue", "red", "green", "black", "white", "purple", "yellow"],
  season: ["summer", "winter", "spring", "fall"]
};

if (typeof module !== "undefined" && module.exports) module.exports = WORD_BANKS;
