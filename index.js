a = parseInt(prompt("Enter first number"));
b = parseInt(prompt("Enter second number"));
let x = a + b;
let y = a - b;
let z = a * b;
let u = a / b;
alert("Sum of " + a + " and " + b + " is : " + x);
alert("Difference of " + a + " and " + b + " i s : " + y);
alert("product of " + a + " and " + b + " is : " + z);
alert("Quotient of " + a + " and " + b + " is : " + u);

/*
    a and b above are declared as numbers by passing the function parseInt(), 
    which makes them not to accept any other data type than number.
    the prompt() function is used to prompt the input of the numbers.
    x,y,z and u are variables that holds the output of the respective mathematical
    operations performed.
    alert() function prints the result of the operation.
*/
