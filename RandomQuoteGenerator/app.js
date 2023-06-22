
const quoteDisplay = document.querySelector("#quote")
const authorDisplay = document.querySelector("#author")
const sourceDisplay = document.querySelector("#source")
const yearDisplay = document.querySelector("#year")
const categoryDisplay = document.querySelector("#category")

const randomBtn = document.querySelector("#random-btn").addEventListener("click", RandomlyGenerateQuote)
const inspirationalBtn = document.querySelector("#inspirational-btn").addEventListener("click", inspirationalQuoteGenerator)
const depressingBtn = document.querySelector("#depressing-btn").addEventListener("click",depressingQuoteGenerator)
const funnyBtn = document.querySelector("#funny-btn").addEventListener("click",funnyQuoteGenerator)

let categories = ["inspirational", "depressing", "funny"]

let category_number = ""
let quote_number = ""



const quotes = [
   [
    {
      "text": "Learn as if you will live forever, live like you will die tomorrow.",
      "author": "Mahatma Gandhi",
      "source": "The Words of Ghandi",
      "year": "1982"
    },
    {
      "text": "If you cannot do great things, do small things in a great way",
      "author": "Napoleon Hill",
      "source": "???",
      "year": "???"
    },
    {
      "text": "All your dreams can come true if you have the courage to pursue them",
      "author": "Walt Disney",
      "source": "???",
      "year": "???"
    },
  ],
   [
    {
      "text": "There is no difference between communism and socialism, except in the means of achieving the same ultimate end: communism proposes to enslave men by force, socialism - by vote. It is merely the difference between murder and suicide.",
      "author": "Ayn Rand",
      "source": "The Ayn Rand Lexicon: Objectivism from A to Z",
      "year": "1988"
    },
    {
      "text": "All alone! Whether you like it or not, alone is something you'll be quite a lot!",
      "author": "Dr. Seuss",
      "source": "Oh, the Places You'll Go! and The Lorax",
      "year": "???"
    }, 
    {
      "text": "She can paint a pretty picture but this story has a twist. The paintbrush is a razor and the canvas is her wrist",
      "author": "Amy Efaw",
      "source": "After",
      "year": "2009"
    },
  ],
    [
    {
      "text": "Jeg magter det ikke, Jon-Jon",
      "author": "Axel",
      "source": "His mouth",
      "year": "2023"
    },
    {
      "text": "Gentlemen, you can't fight in here. This is the war room.",
      "author": "President Merkin Muffley",
      "source": "Dr. Strangelove",
      "year": "1964"
    },
    {
      "text": "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.",
      "author": "Lt. Frank Drebin",
      "source": "The Smell of Fear",
      "year": "1991"
    }
  ], 
]

function RandomlyGenerateQuote(){
  category_number = Math.floor((Math.random() * categories.length));
  quote_number = Math.floor((Math.random() * quotes[category_number].length)); 

  quoteDisplay.innerHTML = quotes[category_number][quote_number].text
  authorDisplay.innerHTML = quotes[category_number][quote_number].author
  sourceDisplay.innerHTML = quotes[category_number][quote_number].source
  yearDisplay.innerHTML = quotes[category_number][quote_number].year
  categoryDisplay.innerHTML = "Category: " + categories[category_number]
}

function inspirationalQuoteGenerator(){
  category_number = 0;
  quote_number = Math.floor((Math.random() * quotes[category_number].length));

  quoteDisplay.innerHTML = quotes[category_number][quote_number].text
  authorDisplay.innerHTML = quotes[category_number][quote_number].author
  sourceDisplay.innerHTML = quotes[category_number][quote_number].source
  yearDisplay.innerHTML = quotes[category_number][quote_number].year
  categoryDisplay.innerHTML = "Category: " + categories[category_number]
}

function depressingQuoteGenerator(){
  category_number = 1;
  quote_number = Math.floor((Math.random() * quotes[category_number].length));

  quoteDisplay.innerHTML = quotes[category_number][quote_number].text
  authorDisplay.innerHTML = quotes[category_number][quote_number].author
  sourceDisplay.innerHTML = quotes[category_number][quote_number].source
  yearDisplay.innerHTML = quotes[category_number][quote_number].year
  categoryDisplay.innerHTML = "Category: " + categories[category_number]
}

function funnyQuoteGenerator(){
  category_number = 2;
  quote_number = Math.floor((Math.random() * quotes[category_number].length));

  quoteDisplay.innerHTML = quotes[category_number][quote_number].text
  authorDisplay.innerHTML = quotes[category_number][quote_number].author
  sourceDisplay.innerHTML = quotes[category_number][quote_number].source
  yearDisplay.innerHTML = quotes[category_number][quote_number].year
  categoryDisplay.innerHTML = "Category: " + categories[category_number]
}



