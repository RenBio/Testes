function longestword(string){
    return string.split("").reduce((acc,curr) => curr.length > acc.length ? curr: acc,"");
}

const sentence ="Essa frase tem muitas palavras, qual é maior?";
console.log(longestWord(sentence)); // "palavras"