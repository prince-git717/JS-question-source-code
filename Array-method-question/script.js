
// questions on push() method
// question number 1
// const arr =[1,2,3];
// const result = arr.push(4);
// console.log(arr);
// console.log(result)
// question no 2
// const arr1 =[1,2];
// const arr2 =arr1;
// arr2.push(3);
// console.log(arr1)
// question no 3

// const arr =[10,20,30];
// const result =arr.pop();
// console.log(arr);
// console.log(result)
//  question no 4.
// const arr =[1,2,3]
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr);
// question number 5

// const arr =[1,2,3,4];
// const result =arr.shift();
// console.log(arr);
// console.log(result)

// question number 6
// const arr =[3,4];
// const result = arr.unshift(1,2);
// console.log(arr);
// console.log(result);
// question number 7
// const arr1= [1,2];
// const arr2 =[3,4];
// const result = arr1.concat(arr2);
// console.log(result)
// Q8 (Interview)
// const arr1=[1,2];
// const arr2 =arr1.concat([3]);
// console.log(arr1===arr2);
// question no 9.
// const arr =[1,2,3,2,4];
// console.log(arr.indexOf(2,2));
// question number 10
// const arr =[{id:1} , {id:2}];
// console.log(arr.indexOf({id:1}));
// question number 11
// const arr =[1,2,3];
// console.log(arr.includes(2));
// console.log(arr.includes(5));
// Q12 (Interview)
// const arr =[{id:1}];
// console.log(arr.includes({id:1}));
// question number 13
// const arr =[1,2,3];
// const reversed =arr.reverse();
// console.log(arr===reversed);
// question number 14
// const arr =[1,2,3];
// const reversed = arr.reverse();
// reversed.push(4);
// console.log(arr);
// question number 15
// const arr = [100,25,3]
// arr.sort();
// console.log(arr);
// answer should be like 100, 25,3 i guess what you gess guys 
// const arr =[100,25,3];
// arr.sort((a,b)=>a-b);
// console.log(arr)
// question number 17
// const arr =[10,2,1];
// arr.sort((a,b)=> b-a);
// console.log(arr);
//  question number 18.
// const arr=[1,2,3,4,5];
// const result =arr.slice(1,4);
// console.log(arr);
// console.log(result)
// slice(start, stopBefore)
// slice does not change the original array but splice changes the original array .
// qustion number 19.
// const arr = [1,2,3];
// const copy = arr.slice();
// copy.push(4);
// console.log(arr);
// console.log(copy);
// question number 20

// const arr =[1,2,3,4];
// const result =arr.splice(1,2);
// console.log(arr);
// console.log(result)
// Final Interview Question 🔥
// const arr1 =[1,2,3];
// const arr2 =arr1.reverse();
// console.log(arr1);
// const arr3=arr1.concat([4]);
// console.log(arr3)
// arr2.push(5); 
// console.log(arr1)
// so it should add the 5 in the last i guess 
// okay guys that's it for toudy ,, if possibel i will come live at night and try to solve and clear concept with you .. stay tuned if yu want these question to practice then you can simply visit my github account i will attach the link in the discription and that's it thank you all 

// slice() array ka ek portion copy karke new array return karta ha
// ✅ Original array ko change nahi karta.

// const arr = [1, 2, 3, 4, 5];
// const arr2 =arr.slice(1,4);
// console.log(arr);
// console.log(arr2);
// const arr = [1,2,3,4,5];
// const result =arr.splice(1,2)
// console.log(arr);
// console.log(result);

// const arr = [10, 20, 30, 40, 50];
// arr.splice(1,3);
// console.log(arr);
// const arr = [10,20,30,40];
// const result =arr.splice(1,2);
// console.log(result)
// const arr = [10, 20, 30];
// arr.splice(1,0,100)
// console.log(arr)

// const arr = [10, 20, 30, 40];
// arr.splice(1, 2, 100, 200);
// console.log(arr);
// const arr = [1, 2, 3, 4];
// arr.splice(2, 0, 100);
// console.log(arr);
// const arr = [1, 2, 3, 4, 5];
// const result =arr.splice(2,2,100);
// console.log(arr)
// console.log(result);

// splice() Short Notes 🚀

// Definition:

// splice() is used to add, remove, or replace elements in an array. It modifies the original array.

// Syntax
// arr.splice(start, deleteCount, item1, item2, ...)
// Parameters
// start → Index where operation starts.
// deleteCount → Number of elements to remove.
// item1, item2... → Elements to insert.
