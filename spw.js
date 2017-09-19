
// on click on generate
  // start function
    // take inputs that are in the 10 inputs s

var generateButton = document.getElementById("generate");
var wordsArray = [];
var combination = [];

generateButton.onclick = function() {
  populateWordsArray();
  pickWordsfrom(wordsArray);
  printWords(combinationIteration,first_word,second_word,third_word);
};

// for (i = 0, i < 10, i++):
//   console.log(document.getElementById(i).value());

var first_word, second_word, third_word,combinationIteration;
function pickWordsfrom(array) {
  var randomPos = Math.floor(Math.random()*array.length);
  first_word = array[randomPos];
  array.splice(randomPos,1);
  randomPos = Math.floor(Math.random()*array.length);
  second_word = array[randomPos];
  array.splice(randomPos,1);
  randomPos = Math.floor(Math.random()*array.length);
  third_word = array[randomPos];
  combination.push([first_word,second_word,third_word]);
  combinationIteration = combination.length - 1;
};

function populateWordsArray() {
  wordsArray = [];
  for (var i = 1; i < 11; i++) {
    var currentWord = document.getElementById(i).value;
    wordsArray.push(currentWord);
  };
  console.log(wordsArray);
};

function printWords(i,a,b,c) {
  console.log(a+" "+b+" "+c);
  var div = document.createElement('div');
  document.getElementById("combinations-container").appendChild(div);
  div.setAttribute('class', 'combination');
  div.setAttribute('id','combination-'+i);
  div.innerText = a + " " + b + " " + c;
};
