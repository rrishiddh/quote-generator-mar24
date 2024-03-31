
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch (url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiUrl);



function copyText() {
    var quote = document.getElementById("quote");
    navigator.clipboard.writeText(quote.textContent).then(function() {
      alert("Text copied to clipboard");
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }