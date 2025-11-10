function chunkArray (arr,n){

const chunks = [];
for (let i = 0; i < arr.length; i += n){
    chunks.push(arr.slice(i,i + n));
}
return chunks;
}
const items = [1,2,3,4,5,6,7];
console.log(chunkArray(items,3));//[[1,2,3], [4,5,6],[7]]
