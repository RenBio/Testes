function filterByStringLength(arr,n){
    return arr.filter(word=> word.length >n);
}

const words =["apple", "banana","cherry","date","elderberry"];
console.log(filterByStringLength(words,5)); //["banana","elderberry"]