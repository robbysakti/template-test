const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
//let apiQuote = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hiddenLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//menunjukan quote baru
function newQuote() {
  showLoadingSpinner();
  const quote = loadQuote[Math.floor(Math.random() * loadQuote.length)];
  // jika author bernilai null maka menjadi'unknown'
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set quote dan hidden showLoadingSpinner
  quoteText.textContent = quote.text;
  hiddenLoadingSpinner();
  //mengambil 1 quote dari api array
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//event listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Get Quotes From API
// async function getQuotes() {
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuote = await response.json();
//     newQuote();
//   } catch (error) {}
// }

// call function
newQuote();
// getQuotes();
