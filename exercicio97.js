function mostFrequentItem(){
const frequency = {};
let maxCount = 0;
let mostFrequent;

for (let item of arr){ if(frequency[item]){frequency[item]++;} else {
    frequency[item] = 1;
}

if (frequency[item] > maxCount){maxCount = frequency[item];
    mostFrequent = item;
    }
}

return mostFrequent;
}
const numbers = [1,2,3,2,4,3,5,2];
console.log(mostFrequentItem(numbers)); //2
