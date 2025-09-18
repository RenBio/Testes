function removeDuplicates (arr) {
    return [...new Set(arr)];
}

const numbers = [1,2,3,2,4,3,5,6,7,5,8];
console.log(removeDuplicates(numbers)); // Deve imprimir: [1,2,3,4,5,6,7,8]