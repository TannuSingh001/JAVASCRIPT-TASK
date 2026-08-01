// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("tannu");
// greet("shivani");
// let num = [1,2,3,4,5];

// let sum = 0;

// for(let i = 0; i < num.length; i++){
//     sum += num[i];
// }

// console.log(sum);
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// arrayName[index] = newValue;
let numbers =[10, 20, 30, 20, 40, 10, 50, 30]
let uniqueNumbers = [];
for (let i=0;i<numbers.length;i++){
    if(!uniqueNumbers.includes(numbers[i])){
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);