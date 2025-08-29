const quotes = {
  life: [
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "The purpose of life is a life of purpose. – Robert Byrne"
  ],
  love: [
    "We accept the love we think we deserve. – Stephen Chbosky",
    "Love all, trust a few, do wrong to none. – William Shakespeare",
    "Where there is love there is life. – Mahatma Gandhi"
  ],
  success: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
  ]
};

function newQuote(category) {
  const categoryQuotes = quotes[category];
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  document.getElementById("quote").innerText = categoryQuotes[randomIndex];
}