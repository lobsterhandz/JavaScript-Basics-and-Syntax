// Task 1: Declare variables to store two numeric values
let num1, num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations and display the results
console.log("Sum:", num1 + num2);             // Addition
console.log("Difference:", num1 - num2);      // Subtraction
console.log("Product:", num1 * num2);         // Multiplication
console.log("Quotient:", num1 / num2);        // Division

// Task 4: Explore assignment operators and update the values of variables
num1 += 3;  // Increment num1 by 3
num2 -= 2;  // Decrement num2 by 2

console.log("Updated num1:", num1);  // Expected output: 13
console.log("Updated num2:", num2);  // Expected output: 3

// Task 5: Use comparison operators to compare the values of variables
console.log("Is num1 equal to num2?", num1 == num2);               // Equality
console.log("Is num1 greater than num2?", num1 > num2);            // Greater than
console.log("Is num1 not equal to num2?", num1 != num2);           // Not equal

// Task 6: Apply logical operators to combine conditions and display the results
let isPositive = (num1 > 0) && (num2 > 0);    // Are both numbers positive?
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);  // Is at least one number even?

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);

// End of Assignment
