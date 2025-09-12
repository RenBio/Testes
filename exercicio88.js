function calculateTotalWithTax(prices){
    return prices.map(price => price* 1.10).reduce((acc, curr) => acc + curr, 0 );
}
const prices = [10,20,30,40]
console.log(calculateTotalWithTax(prices));// 110