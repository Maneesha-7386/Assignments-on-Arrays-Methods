/*3.Assignments using filter()
1.Given an array of numbers [5, 12, 8, 130, 44],
 filter out numbers less than 10.*/

let numbers1 = [5, 12, 8, 130, 44];
let filteredNumbers = numbers.filter(number => number >= 10);
console.log(filteredNumbers); 

/*2.From an array of ages [12, 17, 18, 24, 30],
 filter only the ages eligible to vote (18+).*/
let ages = [12, 17, 18, 24, 30];
let eligibleVoters = ages.filter(age => age >= 18);
console.log(eligibleVoters); 

/*3.Given an array of words 
["pen", "notebook", "pencil", "book"],
filter words that have length > 4 */
let words = ["pen", "notebook", "pencil", "book"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords);  

/*4.From an array of numbers [1,2,3,4,5,6,7,8,9,10],
 filter only even numbers.*/
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => number % 2 == 0);

console.log(evenNumbers);

