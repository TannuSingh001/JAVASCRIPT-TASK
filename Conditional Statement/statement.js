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