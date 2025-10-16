function filterOutWords(words,forbidenWorden){
return words.filter(word => !forbidenWords.includes(word));
}

const allWords = ["apple", "banana", "cherry", "date"];
const forbidden = ["banana", "date"];
console.log(filterOutWords(allWords,forbidden)); // ["apple", "cherry"]