// Print numbers from 1 to 10 using a for loop.
// for (i=0; i<=10; i++){
//   console.log(i)
// }
// question number 2.
// print Number from 10 to 1 using a while loop.
// let i=10;
// while (i>=1){
//     console.log(i);
//     i--
// }

// for (i=1; i<=10; i++) {
//     console.log(i)
// }

// let i=10;
// while(i>=1){
//     console.log(i)
//     i--
// }
// Find the sum of numbers from 1 to 100.
// let sum = 0;
// for (i=0; i<=100; i++){
//    sum = sum +i
// }
// console.log(sum);

// Print all even numbers between 1 and 50.

// for(i=0; i<=50; i++){
//     if (i%2==0){
//         console.log(i, "it is even number")
//     }else{
//      console.log(i, "it is odd")
//     }
// }
// Print all odd numbers between 1 and 50.
// for(i=0; i<=50; i++){
//     if(i%2!=0){
//         console.log(i, "it is odd")
//     }
// }
// Find the sum of all even numbers from 1 to 100.
// let sum =0;
// for (i=0; i<=100; i+=2){
//   sum+=i
// }
// console.log(sum)
// Find the sum of all odd numbers from 1 to 100.
// let sum =0;
// for (i=1; i<=99; i+=2){
//     sum+=i;
// }
// console.log(sum)
// Print the multiplication table of 7.
// for (i=0; i<=10; i++){
//     console.log(`7*${i} = ${7*i}`)
// }
// Count how many numbers from 1 to 100 are divisible by 3.
// let count =0;
// for(i=3; i<=100; i++){
//     if(i%3==0){
//       count++
//     }
// }
// console.log(count);
// Find the factorial of 5.



// let factorial = 1;

// for(let i = 1; i <=5; i++){
//     factorial *= 1;
// }
// console.log(factorial);
// let n = 5;



// let factorial = 1;
// for (let i = 1; i <= 6; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// Reverse a string using a loop.
// let str ="hello"
// let reversed ="";
// for(let i=str.length-1; i>=0; i--){
//     reversed += str[i];
// }
// console.log(reversed);

// function reversedString(str) {
//     let reversed = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
// return reversed
// }
// console.log(reversedString("javascript"))
// function countvowels(str) {
//     let count = 0;
//     for (i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase();
//         if (
//             ch === "a" ||
//             ch === "e" ||
//             ch === "i" ||
//             ch === "o" ||
//             ch === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countvowels("JAVASCRIPT"))
// Find the largest number in an array.
// let arr =[10,20,5,1,100,6784,30];

// let largest =arr[0];
// for (let i=1; i<=arr.length; i++){
//     if(arr[i] >largest){
//         largest=arr[i]
//     }
// }
// console.log(largest)
// Find the smallest number in an array.
// let arr =[10,20,5,1,100,6784,30];

// let largest =arr[0];
// for (let i=1; i<=arr.length; i++){
//     if(arr[i] <largest){
//         largest=arr[i]
//     }
// }
// console.log(largest)
// Count how many times a number appears...

// let arr =[1,2,3,2,4,2,2,2,2,2];
// let count =0;
// for(i=0; i<arr.length; i++){
//     if(arr[i]===2){
//         count ++
//     }
// }
// console.log(count);
