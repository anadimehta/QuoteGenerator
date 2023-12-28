const api = "https://dummyjson.com/quotes/random"
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const button = document.getElementsByClassName("newQuote")

async function QuoteGenerator(apiURL){
    const res = await fetch(apiURL);
    var data = await res.json();
    quote.innerHTML = '" ' + data.quote + '" ' ;
    author.innerHTML = "By : " + data.author;
}

    button.addEventListener('click', QuoteGenerator(api),false)
