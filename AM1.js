//1. Basic Array Assignments

//1.Create an array of numbers from 1 to 10. Print all numbers using:
//for loop
//for...of loop
//forEach()

//1.for loop
 let arr1 =[1,2,3,4,5,6,7,8,9,10];
 for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
 }

//2. for of loop
let arr2=[1,2,3,4,5,6,7,8,9,10];
 for(let x of arr2){
  console.log(x);

 }

//3.forEach()
 let arr3=[1,2,3,4,5,6,7,8,9,10];
 arr3.forEach(function(value){
  console.log(value);

 })

//#2.Create an array of fruits and print each fruit in uppercase.
let fruits=["apple","orange","banana","pine-apple"];
for(let items of fruits ){
  console.log(items.toUpperCase());
}

//#3.Find the sum of all numbers in an array using forEach().
let numbers=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
 numbers.forEach(function(number){
  sum += numbers;
});
console.log(sum);
