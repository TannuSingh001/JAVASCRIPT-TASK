// // Student Result & Grade System

// let name = "Tannu";
// let age = 20;

// let english = 85;
// let maths = 78;
// let science = 92;
// let computer = 88;
// let hindi = 75;

// let attendance = 82;

// // Total marks
// let total = english + maths + science + computer + hindi;

// // Percentage
// let percentage = total / 5;

// console.log("----- STUDENT RESULT -----");
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("English:", english);
// console.log("Maths:", maths);
// console.log("Science:", science);
// console.log("Computer:", computer);
// console.log("Hindi:", hindi);
// console.log("Total Marks:", total);
// console.log("Percentage:", percentage + "%");

// // Check age
// if (age >= 18) {
//     console.log("Student is eligible for admission.");
// } else {
//     console.log("Student is not eligible for admission.");
// }

// // Check attendance
// if (attendance >= 75) {
//     console.log("Attendance is sufficient.");
// } else {
//     console.log("Attendance is low.");
// }

// // Check individual subjects
// if (
//     english >= 33 &&
//     maths >= 33 &&
//     science >= 33 &&
//     computer >= 33 &&
//     hindi >= 33
// ) {
//     console.log("Student has passed all subjects.");

//     // Grade calculation
//     if (percentage >= 90) {
//         console.log("Grade: A+");
//         console.log("Excellent Performance!");
//     } 
    
//     else if (percentage >= 80) {
//         console.log("Grade: A");
//         console.log("Very Good Performance!");
//     } 
    
//     else if (percentage >= 70) {
//         console.log("Grade: B");
//         console.log("Good Performance!");
//     } 
    
//     else if (percentage >= 60) {
//         console.log("Grade: C");
//         console.log("Average Performance!");
//     } 
    
//     else if (percentage >= 50) {
//         console.log("Grade: D");
//         console.log("You can improve more.");
//     } 
    
//     else {
//         console.log("Grade: E");
//         console.log("Need more improvement.");
//     }

// } else {
//     console.log("Student has failed in one or more subjects.");
// }

// // Scholarship check
// if (percentage >= 80 && attendance >= 75) {
//     console.log("Student is eligible for scholarship.");
// } else {
//     console.log("Student is not eligible for scholarship.");
// }

// // Special condition
// if (percentage >= 90 || attendance >= 95) {
//     console.log("Student is eligible for special award.");
// } else {
//     console.log("Student is not eligible for special award.");
// }

// // NOT operator
// let feePaid = true;

// if (!feePaid) {
//     console.log("Please pay your fees.");
// } else {
//     console.log("Fees are already paid.");
// }

// // Final result
// if (percentage >= 40 && attendance >= 75) {
//     console.log("FINAL RESULT: PASS");
// } else {
//     console.log("FINAL RESULT: FAIL");
// }

// console.log("----- RESULT END -----");
// let username = "admin";
// let password = "1234";
// if (username === "admin"&& password ==="1234"){
//     console.log("loginSuccessful" )
// }
// else {
//     console.log("invalid")
// }
// let age = 20;
// let licence = true;
// if (age>="18"&& licence ==="true"){
//     console.log("You can drive")

// }
// else 
// {
//     console.log("You canot be drrive"
//     )
// }
// let day = "Sunday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend");
// } else {
//     console.log("Working Day");
// }
// let percentage = 85;
// let attendance = 80;
// let sports = false;
// if (percentage>=85&& attendance>="80"){
//     console.log("scholarship")
// }
// else{
//     console.log("No scholarship")
// }
// let balance = 10000;
// let withdraw = 5000;
// let pinCorrect = true;

// if (pinCorrect && withdraw <= balance) {
//     console.log("Transaction Successful");
//     balance = balance - withdraw;
//     console.log("Remaining Balance:", balance);
// } else if (!pinCorrect) {
//     console.log("Incorrect PIN");
// } else {
//     console.log("Insufficient Balance");
// }
// let balance = 10000;
// let withdraw = 5000;
// let pinCorrect = true;

// if (pinCorrect && withdraw <= balance) {
//     console.log("Transaction Successful");
//     balance = balance - withdraw;
//     console.log("Remaining Balance:", balance);
// } else if (!pinCorrect) {
//     console.log("Incorrect PIN");
// } else {
//     console.log("Insufficient Balance");
// }
// let balance = 10000;
// let withdraw = 5000;
// let pinCorrect = true;

// if (pinCorrect && withdraw <= balance) {
//     console.log("Transaction Successful");
//     balance = balance - withdraw;
//     console.log("Remaining Balance:", balance);
// } else if (!pinCorrect) {
//     console.log("Incorrect PIN");
// } else {
//     console.log("Insufficient Balance");
// }
// let username = "admin";
// let password = "1234";
// let isBlocked = false;
// let isAdmin = true;

// if (!isBlocked) {

//     if (username === "admin" && password === "1234") {

//         console.log("Login Successful");

//         if (isAdmin) {
//             console.log("Welcome Admin");
//             console.log("You can access Dashboard");
//         } else {
//             console.log("Welcome User");
//             console.log("Limited Access");
//         }

//     } else {
//         console.log("Wrong Username or Password");
//     }

// } else {
//     console.log("Your account is blocked");
// }
// const username = prompt("Enter your username");
// const userage = parseInt(prompt("Please Enter your age"));

// debugger;

// console.log(`Name: ${username}`);
// console.log(`Age: ${userage}`);

// if (userage > 0 && userage <= 4) {
//     console.log(`${username} is a kid.`);
// }
// const username = prompt('Please Enter Your Name.')
// const userAge = parseInt(prompt('Please Enter Your Age.'));

// debugger

// if (!username) {
//   username = 'Procodrr'
// }

// if(username) {
//     console.log(`Name: ${username}`)
// }

// if(userAge) {
//     console.log(`Age: ${userAge}`)
// }

// console.log(`Name: ${username}`)
// console.log(`Age: ${userAge}`)




// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

// console.log('Program Ended!!')
// const name = prompt("Enter your name");
// const marks = parseInt(prompt("Enter your marks"));

// console.log(`Student Name: ${name}`);
// console.log(`Marks: ${marks}`);

// if (marks < 0 || marks > 100) {
//     console.log("Invalid marks");
// } 
// else if (marks >= 90) {
//     console.log("Grade: A+");
//     console.log("Excellent Performance");
//     console.log("Result: Pass");
// } 
// else if (marks >= 80) {
//     console.log("Grade: A");
//     console.log("Very Good Performance");
//     console.log("Result: Pass");
// } 
// else if (marks >= 70) {
//     console.log("Grade: B");
//     console.log("Good Performance");
//     console.log("Result: Pass");
// } 
// else if (marks >= 60) {
//     console.log("Grade: C");
//     console.log("Average Performance");
//     console.log("Result: Pass");
// } 
// else if (marks >= 40) {
//     console.log("Grade: D");
//     console.log("Need Improvement");
//     console.log("Result: Pass");
// } 
// else {
//     console.log("Grade: F");
//     console.log("Result: Fail");
// }
// const units = parseFloat(prompt("Enter electricity units"));

// let bill;

// if (units < 0) {
//     console.log("Invalid units");
// }
// else if (units <= 100) {
//     bill = units * 5;
//     console.log(`Bill Amount: ₹${bill}`);
// }
// else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 7);
//     console.log(`Bill Amount: ₹${bill}`);
// }
// else if (units <= 500) {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
//     console.log(`Bill Amount: ₹${bill}`);
// }
// else {
//     bill = (100 * 5) + (100 * 7) + (300 * 10) + ((units - 500) * 15);
//     console.log(`Bill Amount: ₹${bill}`);
// }
// const balance = 10000;
// const amount = parseInt(prompt("Enter withdrawal amount"));

// console.log(`Available Balance: ₹${balance}`);

// if (amount <= 0) {
//     console.log("Invalid withdrawal amount");
// }
// else if (amount % 100 !== 0) {
//     console.log("Amount must be a multiple of 100");
// }
// else if (amount > balance) {
//     console.log("Insufficient Balance");
// }
// else {
//     const remainingBalance = balance - amount;

//     console.log("Withdrawal Successful");
//     console.log(`Withdrawn Amount: ₹${amount}`);
//     console.log(`Remaining Balance: ₹${remainingBalance}`);
// }const a = parseInt(prompt("Enter first number"));
// const b = parseInt(prompt("Enter second number"));
// const c = parseInt(prompt("Enter third number"));

// console.log(`A = ${a}`);
// console.log(`B = ${b}`);
// console.log(`C = ${c}`);

// if (a === b && b === c) {
//     console.log("All three numbers are equal");
// }
// else if (a >= b && a >= c) {
//     console.log(`Largest number is ${a}`);
// }
// else if (b >= a && b >= c) {
//     console.log(`Largest number is ${b}`);
// }
// else {
//     console.log(`Largest number is ${c}`);
// }
// const num1 = parseFloat(prompt("Enter first number"));
// const operator = prompt("Enter operator (+, -, *, /)");
// const num2 = parseFloat(prompt("Enter second number"));

// if (operator === "+") {
//     console.log(`Result = ${num1 + num2}`);
// }
// else if (operator === "-") {
//     console.log(`Result = ${num1 - num2}`);
// }
// else if (operator === "*") {
//     console.log(`Result = ${num1 * num2}`);
// }
// else if (operator === "/") {

//     if (num2 === 0) {
//         console.log("Cannot divide by zero");
//     }
//     else {
//         console.log(`Result = ${num1 / num2}`);
//     }

// }
// else {
//     console.log("Invalid operator");
// }const username = prompt("Enter username");
// const password = prompt("Enter password");

// const correctUsername = "admin";
// const correctPassword = "1234";

// const accountActive = true;

// if (username === "" || password === "") {
//     console.log("Username and password cannot be empty");
// }
// else if (username !== correctUsername) {
//     console.log("Incorrect username");
// }
// else if (password !== correctPassword) {
//     console.log("Incorrect password");
// }
// else if (accountActive === false) {
//     console.log("Your account is inactive");
// }
// else {
//     console.log("Login successful");
//     console.log(`Welcome ${username}`);
// }
// const username = prompt("Enter username");
// const password = prompt("Enter password");

// const correctUsername = "admin";
// const correctPassword = "1234";

// const accountActive = true;

// if (username === "" || password === "") {
//     console.log("Username and password cannot be empty");
// }
// else if (username !== correctUsername) {
//     console.log("Incorrect username");
// }
// else if (password !== correctPassword) {
//     console.log("Incorrect password");
// }
// else if (accountActive === false) {
//     console.log("Your account is inactive");
// }
// else {
//     console.log("Login successful");
//     console.log(`Welcome ${username}`);
// }
// const name = prompt("Enter your name");
// const age = parseInt(prompt("Enter your age"));
// const tickets = parseInt(prompt("Enter number of tickets"));

// let price;

// if (age < 0 || tickets <= 0) {
//     console.log("Invalid input");
// }
// else if (age <= 5) {
//     price = 0;
//     console.log("Ticket is FREE for children");
// }
// else if (age <= 12) {
//     price = 100;
// }
// else if (age <= 59) {
//     price = 200;
// }
// else {
//     price = 120;
// }

// if (price !== undefined) {
//     const total = price * tickets;

//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Tickets: ${tickets}`);
//     console.log(`Price per ticket: ₹${price}`);
//     console.log(`Total Amount: ₹${total}`);
// }
// const bill = parseFloat(prompt("Enter your bill amount"));

// let discount = 0;

// if (bill < 0) {
//     console.log("Invalid bill amount");
// }
// else if (bill >= 5000) {
//     discount = bill * 0.20;
// }
// else if (bill >= 3000) {
//     discount = bill * 0.15;
// }
// else if (bill >= 1000) {
//     discount = bill * 0.10;
// }
// else {
//     discount = 0;
// }

// if (bill >= 0) {
//     const afterDiscount = bill - discount;
//     const gst = afterDiscount * 0.05;
//     const finalAmount = afterDiscount + gst;

//     console.log(`Original Bill: ₹${bill}`);
//     console.log(`Discount: ₹${discount}`);
//     console.log(`GST: ₹${gst}`);
//     console.log(`Final Bill: ₹${finalAmount}`);
// }
// const temperature = parseFloat(prompt("Enter temperature"));

// if (temperature < -10) {
//     console.log("Extremely Cold");
// }
// else if (temperature < 10) {
//     console.log("Very Cold");
// }
// else if (temperature < 20) {
//     console.log("Cold");
// }
// else if (temperature < 30) {
//     console.log("Normal Temperature");
// }
// else if (temperature < 40) {
//     console.log("Hot");
// }
// else if (temperature <= 50) {
//     console.log("Very Hot");
// }
// else {
//     console.log("Extremely Hot");
// }
// const salary = parseFloat(prompt("Enter your salary"));
// const experience = parseInt(prompt("Enter your experience in years"));

// let bonusPercentage;

// if (salary <= 0 || experience < 0) {
//     console.log("Invalid input");
// }
// else if (experience < 1) {
//     bonusPercentage = 0;
// }
// else if (experience < 3) {
//     bonusPercentage = 5;
// }
// else if (experience < 5) {
//     bonusPercentage = 10;
// }
// else if (experience < 10) {
//     bonusPercentage = 15;
// }
// else {
//     bonusPercentage = 20;
// }

// if (bonusPercentage !== undefined) {
//     const bonus = salary * bonusPercentage / 100;
//     const finalSalary = salary + bonus;

//     console.log(`Salary: ₹${salary}`);
//     console.log(`Experience: ${experience} years`);
//     console.log(`Bonus: ${bonusPercentage}%`);
//     console.log(`Bonus Amount: ₹${bonus}`);
//     console.log(`Final Salary: ₹${finalSalary}`);
// }
// const number = parseInt(prompt("Enter a number"));

// if (number === 0) {
//     console.log("Number is Zero");
// }
// else if (number > 0) {

//     console.log("Number is Positive");

//     if (number % 2 === 0) {
//         console.log("Number is Even");
//     }
//     else {
//         console.log("Number is Odd");
//     }

//     if (number % 5 === 0) {
//         console.log("Number is divisible by 5");
//     }
//     else {
//         console.log("Number is not divisible by 5");
//     }

// }
// else {

//     console.log("Number is Negative");

//     if (number % 2 === 0) {
//         console.log("Number is Even");
//     }
//     else {
//         console.log("Number is Odd");
//     }

// }let balance = 25000;

// const pin = parseInt(prompt("Enter your PIN"));

// if (pin !== 1234) {

//     console.log("Incorrect PIN");

// }
// else {

//     console.log("Login Successful");

//     const choice = parseInt(
//         prompt("Enter 1 for Balance, 2 for Withdraw, 3 for Deposit")
//     );

//     if (choice === 1) {

//         console.log(`Your balance is ₹${balance}`);

//     }
//     else if (choice === 2) {

//         const amount = parseInt(prompt("Enter withdrawal amount"));

//         if (amount <= 0) {
//             console.log("Invalid amount");
//         }
//         else if (amount > balance) {
//             console.log("Insufficient balance");
//         }
//         else if (amount % 100 !== 0) {
//             console.log("Amount must be multiple of 100");
//         }
//         else {
//             balance = balance - amount;

//             console.log("Withdrawal Successful");
//             console.log(`Remaining Balance: ₹${balance}`);
//         }

//     }
//     else if (choice === 3) {

//         const amount = parseInt(prompt("Enter deposit amount"));

//         if (amount <= 0) {
//             console.log("Invalid deposit amount");
//         }
//         else {
//             balance = balance + amount;

//             console.log("Deposit Successful");
//             console.log(`New Balance: ₹${balance}`);
//         }

//     }
//     else {

//         console.log("Invalid choice");

//     }
// }
// const marks = parseFloat(prompt("Enter your percentage"));
// const age = parseInt(prompt("Enter your age"));
// const entranceExam = prompt("Did you pass the entrance exam? yes/no");

// if (marks < 0 || marks > 100) {

//     console.log("Invalid percentage");

// }
// else if (age < 17) {

//     console.log("You are too young for admission");

// }
// else if (entranceExam.toLowerCase() !== "yes") {

//     console.log("You must pass the entrance exam");

// }
// else if (marks >= 80) {

//     console.log("Admission Approved");
//     console.log("Category: Merit");

// }
// else if (marks >= 60) {

//     console.log("Admission Approved");
//     console.log("Category: General");

// }
// else if (marks >= 50) {

//     console.log("Admission may be available depending on seats");

// }
// else {

//     console.log("Admission Not Approved");

// }