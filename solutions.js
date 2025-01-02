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

//14.  calculate and print the sum of the elements in an array,
  function aVeryBigSum(ar) {    
let sum= 0;
for ( let i=0; i<ar.length; i++){
   sum += parseInt(ar[i].toString().substring(0));
}
return sum;
}


// 15. calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(matrix) {
    // Write your code here
       var n = matrix.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += matrix[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += matrix[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}



//  16.
function birthdayCakeCandles(candles){
    // Write your code here
    let maxheight = Math.max(...candles);
    let count = 0;
    for(let i=0;i<candles.length; i++){
        if(candles[i] == maxheight){
            count ++;
          }
        }
        console.log(count)
return count;
}
birthdayCakeCandles([4,4,2,1])
  
function birthdayCakeCandles(candles) {
    // Write your code here
    let maxheight = Math.max(...candles);
   let count = candles.filter(x => x === maxheight).length
return count;
}
birthdayCakeCandles([4,4,2,1])

// 17. 
function getTwentyFourHourTime(amPmString) { 
    var d = new Date("1/1/2013 " + amPmString); 
    return d.getHours() + ':' + d.getMinutes(); 
}

// 18
var positiveNumber = 0;
var negativeNumber = 0;
var zeroNumber = 0;
function plusMinus(arr) {
    // Write your code here
    for (var i=0; i<arr.length; i++){
        // console.log(arr[i])
        if(arr[i]>0){
            // console.log("Positive")
            positiveNumber++
        }
        else if (arr[i]<0){
            // console.log("Negative")
            negativeNumber++
        }else{
            // console.log("Zero")
            zeroNumber++
        }
    }
    console.log(positiveNumber/arr.length);
    console.log(negativeNumber/arr.length);
    console.log(zeroNumber/arr.length); 
}
 
// 19. staircase from right to left
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n-i);
        let hashes = "#".repeat(i);
        console.log(spaces + hashes);
    }    
}


// 20. min Max sum
function minMaxSum(arr){
 var clone1= arr.slice()
 var clone2 = arr.slice()

 var arrMinor = clone1.sort(function(a,b) { return(a-b)})
 arrMinor.pop();
 console.log(arrMinor)
 var arrMajor = clone2.sort(function (a,b) { return (b-a)})
 arrMajor.pop();
 console.log(arrMajor)

 function getSum(a,b) { return a+b;}

 let result1= arrMinor.reduce(getSum)
 let result2 = arrMajor.reduce(getSum)

 console.log(`${result1},${result2}`)
}
