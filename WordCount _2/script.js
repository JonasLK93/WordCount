let word = "";
let wordArray = [];
let count = 0;
let wordCounts = {};
let totalWords = 0;

let contentArray = [];

const fileInput = document.getElementById("input").addEventListener("change", Upload);
const fileHandler = document.getElementById("submit").addEventListener("click", CountWords);

function Upload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    try {
      contentArray.push(event.target.result)
    } catch (error) {
      console.error("En fejl opstod", error);
    }
  };
}

function CountWords(){
  
  for (let i = 0; i < contentArray.length; i++) {
    
    let sentence = contentArray[i];
  
    if (sentence.length !== 0) {
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] != " ") {
        word += sentence[i];
      } else {
        wordArray.push(word);
        word = "";
      }
    }
    wordArray.push(word);
    word = "";
    }
  }

  wordArray.forEach((word) => {
    if (word.toLowerCase() !== "the" && word.toLowerCase() !== "a" && word.toLowerCase() !== "and") {
      count++;

      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  });
     
  console.log(wordArray);
  console.log("Antal af ord efter filtrering af 'the', 'a' og 'and': " + count);
  console.log("Ord i alt: " + wordArray.length);
  console.log("Antal gentagelser af hvert ord:");
  console.log(wordCounts);
  count = 0
  wordArray = []
  wordCounts = {}
  contentArray = []
}