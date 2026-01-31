function sumUniqueValues(arr) {
    return arr.filter(num => arr.indexOf(num)).reduce((acc,curr) => acc + curr, 0);
}

const numbers2 = [1,2,3,2,3,4,5];
console.log(sumUniqueValues(numbers2)); // 1 + 4 + 5 = 10