let word = "";
let wordArray = [];
let count = 0;
let wordCounts = {};

const fileInput = document.getElementById("input").addEventListener("change", ReadText);

function ReadText(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    
    try {
      const sentence = event.target.result;
      if (sentence.length !== 0) {
        for (let i = 0; i < sentence.length; i++) {
          if (sentence[i] !== " ") {
            word += sentence[i];
          } else {
            wordArray.push(word);
            word = "";
          }
        }
        wordArray.push(word);
        word = "";

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
      }
    } catch (error) {
      console.error("En fejl opstod", error);
    }
  };
}