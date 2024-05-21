//1. printing Hello world
console.log("Hello World")

// 2.for N number of Hello World
for (let i = 0; i <= 10; i++) {
    console.log("Hello World")
}

// 3. Print Even number from 0-10
function evenNum(i) {
    for (i = 0; i <= 10; i++) {
        if (i / 2 == 0) {
            console.log("it's a even number")
        } else { "it's a odd number" }
    }
} evenNum(4)

function printEvenNum() {
    for (i = 0; i <= 10; i += 2) {
        console.log(i)
    }
}
printEvenNum()

//4. square function till 10
function square() {
    for (i = 1; i <= 10; i++) {
        console.log(i * i);
    }
} square()

//5.Print a table containing multiplication tables
let n = prompt(parseInt('Enter a number'))
for (i = 1; i <= 10; i++) {
    let result = i * n;
    console.log(`${n} x ${i} = ${result}`)
}

//6.Create a length converter function
function lengthConverter() {
    let k = prompt(parseInt('Enter length in km'))
    kmToMiles = k * 0.621371;
    console.log(`${k} km = ${kmToMiles} miles`)
} lengthConverter()

// 7.Calculate the sum of numbers within an array

function sum() {
    let a = [2, 4, -5, -7, 6];
     let sum = 0;
     for(i =0; i <= a.length; i++){
        sum = sum + a[i];
        console.log(sum)
     }
}sum()

   