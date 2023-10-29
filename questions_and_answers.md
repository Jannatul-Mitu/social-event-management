<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i>In the given code, there is a typographical error in the variable name. It is declared as `let greeting`; but assigned a value to `greetign`. JavaScript is case-sensitive, so `greetign` and `greeting` are considered two different variables. Since `greetign` is not defined, attempting to log it will result in a ReferenceError..</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (D)

<i>In JavaScript, when you use the + operator to add values, if one or both of the operands are strings, JavaScript will perform string concatenation instead of numeric addition. In this case, 1 is a number, and "2" is a string, so JavaScript will convert the number 1 to a string and concatenate it with the string "2", resulting in "12". Therefore, the sum(1, "2") call returns "12" as a string, not a numeric value.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i>
 In this code, info.favoriteFood initially references the first element of the food array, which is "🍕". However, the line info.favoriteFood = "🍝"; reassigns the value of info.favoriteFood to "🍝". This does not affect the food array, so food remains unchanged, and its elements remain the same as originally defined.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i> In the given code, the sayHi function expects one argument name, but when you call sayHi() in the console.log statement, you don't provide any argument. As a result, the name parameter inside the function is undefined, and the function still returns a string with Hi there, followed by the value of name, which in this case is undefined. So, the output will be "Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i>In this JavaScript code, the forEach method is used to iterate through the nums array. Inside the callback function, there is an if statement that checks if the current num is truthy (non-zero). For the values 1, 2, and 3 in the array, the if condition is true, so the count variable is incremented by 1 for each of them. Therefore, the final value of count is 2 (1 + 1), and that's what will be logged to the console.</i>

</p>
</details>
