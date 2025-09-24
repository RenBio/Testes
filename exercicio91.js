function sortByStringLength(arr){
    return arr.sort((a,b) => b.length -a.length);
}

const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(sortByStringLength(words)); // Deve imprimir: ["elderberry, "banana", "cherry", "apple", "date"]