// Word bank categories for Dialogue Player
// Each category is an array of interchangeable words/phrases used to fill [placeholder] slots in conversations.
const WORD_BANKS = {
  object: ["wallet", "phone", "keys", "backpack", "umbrella", "notebook", "glasses", "watch", "headphones", "water bottle"],
  food: ["pizza", "sushi", "tacos", "pasta", "ice cream", "salad", "burger", "soup", "sandwich", "rice and beans"],
  drink: ["coffee", "tea", "orange juice", "water", "soda", "smoothie", "hot chocolate", "lemonade"],
  place: ["the park", "the mall", "the beach", "the library", "the gym", "downtown", "the movies", "the market", "school", "the cafe"],
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
