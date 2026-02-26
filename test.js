 
// LARGEST NUMBER CODE
var num1 = 15;
var num2 = 22;
var num3 = 8;
var largest = num1;
if (num2 > largest) {
 largest = num2;
}
if (num3 > largest) {
 largest = num3;
}
console.log("The largest number is: " + largest);
 
//PRINT 1-10
for(var i = 1; i<=10; i++)
{console.log(i);}
 
//factorial
var num=5;
var fac = 1;
for(var i=num; i>=1; i--)
{fac = fac*i;}
console.log("factorial of "+num+" is equal "+fac);
 
//Reverse String
var str = "JavaScript";
var reversedStr = "";
for (var i = str.length - 1; i >= 0; i--) {
 reversedStr += str[i];
}
console.log("Reversed string is: " + reversedStr);
 
//Sum of Array Elements
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
 sum += arr[i];
}
console.log("Sum of array elements: " + sum);
 
//Prime Number Checker
var num = 29;
var isPrime = true;
for (var i = 2; i < num; i++) {
 if (num % i === 0) {
 isPrime = false;
 break;
 }
}
if (isPrime) {
 console.log(num + " is a prime number.");
} else {
 console.log(num + " is not a prime number.");
}
 
//Array Manipulation
var arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.shift();
console.log("Modified array: " + arr);
 
//Simple Object Example
var person = {
 name: "Alice",
 age: 30
};
console.log("Name: " + person.name);
console.log("Age: " + person.age);
 