//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];{

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function Filterit (x) {
return x >= 25;
}
const greaterThan25 = numbers.filter(Filterit)
console.log(greaterThan25)

function divisibleby5 (x) {
    return x % 5 ==0;
}
const divis = numbers.filter(divisibleby5)
console.log(divis)



/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function squareNumbers (x) {
   return x*x;
}
const squareNumber = numbers.map(squareNumbers)

console.log(squareNumber)

function multipliedby2 (x) {
    return x*2;
}
const multiplarray = numbers.map(multipliedby2)
console.log(multiplarray)

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:
 
Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function largerthin20 (x){
 return x >= 20;
}
const qus5 = numbers
.filter(largerthin20)
.map(squareNumbers)

function multipliedby3 (x){
    return x*3
}

const qus6 = numbers
.filter(divisibleby5)
.map(multipliedby3)

}