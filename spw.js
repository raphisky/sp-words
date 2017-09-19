
// on click on generate
  // start function
    // take inputs that are in the 10 inputs s

var generateButton = document.getElementById("generate");
var wordsArray = [];

generateButton.onclick = function() {
  populateWordsArray();
  pickWordsfrom(wordsArray);
  printWords(first_word,second_word,third_word);
};

// for (i = 0, i < 10, i++):
//   console.log(document.getElementById(i).value());

var first_word, second_word, third_word;
function pickWordsfrom(array) {
  first_word = array[Math.floor(Math.random()*array.length)];
  second_word = array[Math.floor(Math.random()*array.length)];
  third_word = array[Math.floor(Math.random()*array.length)];
};

function populateWordsArray() {
  wordsArray = [];
  for (var i = 1; i < 11; i++) {
    var currentWord = document.getElementById(i).value;
    wordsArray.push(currentWord);
  };
  console.log(wordsArray);
};

function printWords(a,b,c) {
  console.log(a+" "+b+" "+c);
  var div = document.createElement('div');
  document.getElementById("combinations-container").appendChild(div);
  div.setAttribute('class', 'combination');
  div.innerText = a + " " + b + " " + c;
};
