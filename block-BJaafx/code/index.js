// 1. Using loops take 10 inputs from user and find the average of all the numbers.
let sum = 0;
for(let i = 0; i <=9; i++) {
  let number = Number(prompt("Enter a number"));
  sum = sum + number;
  console.log(sum, "sum", number, "number")
}

//2. What will be the output of the code below
let i = 0;
while (i < 3) {
  println('hi');
  i++;
}

//Answer: There will not be any output. It will instead show a reference error: Uncaught ReferenceError: println is not defined

//3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

function getEvenSum(max = 10) {
  let sum = 0;
  for(let i = 0; i <=max; i++) {
    if(i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum
}

//4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.

function getOddSum(max = 10) {
  let sum = 0;
  for(let i = 0; i <=max; i++) {
    if(i % 2 !== 0) {
      sum = sum + i
      console.log(sum, "sum", i, "i")
    }
  }
  return sum
}

/*5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.

- If the input value is less than 0 return `not a valid input`
- For example if the input is `123` output should be `6`.

*/

function getProductOfDigits(num) {
  if(num < 0) {
    return "not a valid input"
  }
  let product = 1;
  while (num !== 0)
  {   const current = num % 10;
      product *= current;
      num = Math.floor(num / 10);
  }
  return product;
}

//6. What will be the output of the following code below in multiple conditions? Explain with reason?

function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // output: num > 5 so "Bigger than 5 will be returned from the function"
check(1); // output : num < 5 so "Smaller than 5 will be returned"
check(5); // output : num === 5, so 5 will be returned

//7. What will be the output of the following code given below? Explain the reason?


function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // name === "Arya" becomes true and the output is "You are arya"
getOutput('John'); // name === "John" becomes true and the output is "You are john"
getOutput(); // None of the conditions is true and the output is "Who are you"


//8. What will be the output of the following code given below? Explain the reason?


function getOutput(name) {
  if (name === 'Arya') console.log('You are arya');
  if (name === 'John') console.log('You are john');
  return 'Who are you';
}

getOutput('Arya'); // it will print out "You are arya" on the screen and return "Who are you"
getOutput('John'); // it will print out "You are john" on the screen and return "Who are you"
getOutput(); // Output will be "Who are you"

//9. Can a function have multiple return statement? Give one example if possible and explain the reason.

/* A function can have multiple return statements but will return only one output depending on the true condition
*/

function getOutput(num) {
  if (num === 5) return 5
  if (num >  5) return "The number's greater than 5"
  return 'The number is less than 5';
}

//10. What is the difference between `for` loop and `while` loop. What are the different place you can use them? Explain with example.

for(let i = 0; i < 10; i++) {
  console.log("Hi");
}

/*
for loop takes 3 statement
1st statement is used for initialization. We initialize the value by defining a variable and initializing the value to zero

2nd statement is the condition. It helps the loop to determine when to stop the loop
When the condition returns false it will stop it

3rd statement tells what to do after every iteration
Let's look at this to understand loop

*/

/*
let sum = 0;
let i = 0
while(i < 10) {
 if(i % 2 === 0) {
   sum = sum + i
 }
}
console.log(sum);
*/
/*
Difference: The variable is declared outside of the loop. If we are not careful, we can end up with an infinite loop
We have to either increment or decrement i within the body to make the condition false for the loop to break out
*/

/*
For a while loop we only have a condition and based on that we execute some piece of code. example: reading a file 
When we have an initial value, a final value and what we should do after each iteration we should always use a for loop
*/
