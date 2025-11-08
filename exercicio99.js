function combineInPairs(arr){
const result = [];
for (let i = 0 ; i <arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
        result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

const numbers = [1,2,3,4];
console.log(combineInPairs(numbers));