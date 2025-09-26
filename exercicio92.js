function extractPropertyValues(arr,key) {
    return arr.map(obj=> obj[key]);
}

const users = [
    {name:"John", age:25},
    {name:"Jane", age:30},
    {name:"Doe", age:20},
];

console.log(extractPropertyValues(users,"name")); // Deve imprimir: "John", "Jane", "Doe"