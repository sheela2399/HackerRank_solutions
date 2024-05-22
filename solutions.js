//1. printing Hello world
console.log("Hello World")

// 2.for N number of Hello World
for (let i = 0; i <= 10; i++) {
    console.log("Hello World")
}

// 3. Print Even number from 0-10
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
    const arr = [2, 4, 5, 7, 6];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];}
        console.log(sum);
    

//  8. Create a function that reverses an array
function arrReverse(){
    let originalArray =[2,3,4,5,6];
    console.log(originalArray);
   let arrReverse = originalArray.reverse();
    console.log(arrReverse);
}
arrReverse()

// by using loop    
let Array1 = [2,3,4,5,6];
let Array2 =[];
console.log(Array1);
for( let i= Array1.length - 1; i >= 0; i --){
    Array2.push(Array1[i])
}
console.log(Array2)

//9. Sort an array from lowest to highest
var ar = [9,6,4,8,3,2,7];
var ar2 = ar.sort();
console.log(ar2);

// or
// ascending order
var  ar = [9,6,4,8,3,2,7];
ar.sort((a,b) => (a - b));
console.log(ar)

// Descending order
var  ar = [9,6,4,8,3,2,7];
ar.sort((a,b) => (b - a));
console.log(ar)

// 10. Create a function that filters out negative numbers
function filterNeg(){
     var ar = [1, 6,-2,-4];
  var ar2 = ar.filter(number => number > 0);
  console.log(ar2)
}filterNeg()

// 11.Remove the spaces found in a string
let oldString = "   hello     shaily  "
var newstring = oldString.replace (/ /g, "");
console.log(newstring)

// or to remove spaces from both side
console.log(oldString.trim())

// // 12.Return a Boolean if a number is divisible by 10
function divisibleBy10(){
    let i = prompt("Enter a number")
    if(i % 10 === 0){
       console.log(true);
    }else{
        console.log(false);
    }    
} divisibleBy10()

// 13.Return the number of vowels in a string

 function countVowels(str){
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
 let count = 0;
 str.split("").forEach((char) =>{
    if (vowels.includes(char)){
        count++;
    }
    return count;
 })
 }
 var str = "Shaily";
 console.log(countVowels(str));
// 
 
   
  





