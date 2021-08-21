1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return a + b;
}

This function will output a value

// second
function sum(a, b) {
  console.log(a + b);
}
```
While this function does not have a return value; however, a JS function that does not have a return statement will always return undefined. 

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.
`first` will contain a number after adding 2 values while `second` will contain undefined, since there is no `return` statement in the function
3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?
Answer: Since the function declaration has to parameters defined, the function will use only 2 values and ignore the 3rd one. Therefore, the function will return 12 + 24 => 36

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?
Yes, we can because the first function has a return statement, meaning a value will be outputted from the function after the processing is complete. The result wil be 12 + 24

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.
Answer: 
```js
function sayHello(name) {
  return `Hello ${name}`
}
```
6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();
```
Answer: showMessage() function will return "Hello, John" because the outer variable will be accessed within the function(inner scope)

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // Output 1 : John will be alerted to the dialog box but the return value of the function is undefined

showMessage(); // Output 2 : "Hello, John" but it is not captured anywhere

alert(userName); // Output 3 : John will be alerted but the return value will be undefined
```

8. What is a Anonymous Function give example of three functions.
Answer: When a function is stored in a variable, it is called a function expression. Here function is stored as an expression inside another variable. Whenever we define a function expression, we will always call that function with the name of the variable-- not with the name of the function. As a result, the function name becomes redundant and we can remove the function name.
```js
const sum = function add(a, b) => {
  return a + b
}

let result = sum(1,2)

To simplify the function we can get rid of the of function name **add**
const sum = function (a, b) => {
  return a + b
}
```
9. Can function declaration be a Anonymous Function? Explain
Function declaration cannot be an anonymous function because we define a function by: 
```js
  function add(a,b) {
    return a + b
  }
```
In this case we need the name of the function to call/revoke/execute the function

1.  Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```
```js
function addTwoNumbers(num1, num2) {
  return num1 + num2
}

function getMaxValue(value1, value2) {
  if(value1 > value2) {
    return value1
  } else if(value2 > value1) {
    return value2
  } else {
    return "The values are equal"
  }
}

function createsquare(number) {
  return number * number
  
}

function checkifPositive(value) {
  if value > 0 {
    return "Positive"
  } else if(value === 0) {
    return "0"
  } else {
    return "Negative"
  }
}
```
