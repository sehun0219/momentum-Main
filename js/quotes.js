const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: " Oscar Wilde",
  },
  {
    qoute: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    qoute:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    qoute:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    qoute: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    qoute:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;
