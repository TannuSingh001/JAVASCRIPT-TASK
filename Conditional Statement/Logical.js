// // AND Operator (&&)
// let age = 20;
// let hasID = true;

// console.log("AND:", age >= 18 && hasID);

// // OR Operator (||)
// let isStudent = true;
// let isEmployee = false;

// console.log("OR:", isStudent || isEmployee);

// // NOT Operator (!)
// let isLoggedIn = true;

// console.log("NOT:", !isLoggedIn);
// =====================================
// LOGICAL OPERATORS
// AND (&&), OR (||), NOT (!)
// =====================================


// Student Information
// let name = "Tannu";
// let age = 20;
// let marks = 75;

// let hasID = true;
// let isStudent = true;
// let hasFeePaid = true;
// let hasAttendance = true;
// let isBlocked = false;


// =====================================
// 1. AND OPERATOR (&&)
// =====================================

// Student must be 18 or older
// AND must have an ID

// let ageAndID = age >= 18 && hasID;

// console.log("----- AND OPERATOR -----");
// console.log("Age >= 18 AND Has ID:", ageAndID);


// // Student must have paid fees
// // AND must have sufficient attendance

// let examEligibility = hasFeePaid && hasAttendance;

// console.log("Fee Paid AND Attendance:", examEligibility);


// // Student must satisfy all conditions

// let completeEligibility =
//     age >= 18 &&
//     hasID &&
//     hasFeePaid &&
//     hasAttendance;

// console.log("Complete Eligibility:", completeEligibility);


// // =====================================
// // 2. OR OPERATOR (||)
// // =====================================

// // Student can be a regular student
// // OR an employee

// let isEmployee = false;

// let studentOrEmployee = isStudent || isEmployee;

// console.log("\n----- OR OPERATOR -----");
// console.log("Student OR Employee:", studentOrEmployee);


// // Student can have either ID
// // OR special permission

// let specialPermission = false;

// let entryAllowed = hasID || specialPermission;

// console.log("ID OR Special Permission:", entryAllowed);


// // =====================================
// // 3. NOT OPERATOR (!)
// // =====================================

// // NOT reverses the value

// console.log("\n----- NOT OPERATOR -----");

// console.log("Is Student:", isStudent);
// console.log("NOT Is Student:", !isStudent);

// console.log("Is Blocked:", isBlocked);
// console.log("NOT Is Blocked:", !isBlocked);


// // =====================================
// // 4. LOGIN SYSTEM
// // =====================================

// let username = "admin";
// let password = "12345";

// let enteredUsername = "admin";
// let enteredPassword = "12345";

// let loginSuccessful =
//     username === enteredUsername &&
//     password === enteredPassword;

// console.log("\n----- LOGIN SYSTEM -----");

// if (loginSuccessful) {
//     console.log("Login Successful!");
// } else {
//     console.log("Invalid Username or Password!");
// }


// // =====================================
// // 5. COLLEGE EXAM ELIGIBILITY
// // =====================================

// let examMarks = 65;
// let attendance = 80;
// let feesPaid = true;

// let marksCondition = examMarks >= 40;
// let attendanceCondition = attendance >= 75;

// let examAllowed =
//     marksCondition &&
//     attendanceCondition &&
//     feesPaid;

// console.log("\n----- EXAM ELIGIBILITY -----");

// if (examAllowed) {
//     console.log(name + " is eligible for the exam.");
// } else {
//     console.log(name + " is NOT eligible for the exam.");
// }


// // =====================================
// // 6. DISCOUNT SYSTEM
// // =====================================

// let purchaseAmount = 2500;
// let membership = true;

// let discountEligible =
//     purchaseAmount >= 2000 || membership;

// console.log("\n----- DISCOUNT SYSTEM -----");

// if (discountEligible) {
//     console.log("You are eligible for a discount.");
// } else {
//     console.log("You are not eligible for a discount.");
// }


// // =====================================
// // 7. ACCOUNT SECURITY
// // =====================================

// let accountBlocked = false;
// let passwordCorrect = true;

// let canAccess =
//     !accountBlocked && passwordCorrect;

// console.log("\n----- ACCOUNT SECURITY -----");

// if (canAccess) {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }


// // =====================================
// // 8. FINAL RESULT
// // =====================================

// console.log("\n==============================");
// console.log("       FINAL RESULT");
// console.log("==============================");

// console.log("Student Name:", name);
// console.log("Age:", age);
// console.log("Marks:", marks);
// console.log("Has ID:", hasID);
// console.log("Fees Paid:", hasFeePaid);
// console.log("Attendance:", hasAttendance);

// console.log("Exam Eligible:", completeEligibility);
// console.log("Discount Eligible:", discountEligible);
// console.log("Account Access:", canAccess);
// const Andresult2 = '' && 'hello';

// console.log("&&", '' && 'hello');
// console.log("1:", true && "hello");   // hello
// console.log("2:", false && "hello");  // false
// console.log("3:", "" && "hello");     // ""
// console.log("4:", "hi" && "hello");   // hello
// let age =20;
// let marks = 65;
// let attandance = 80;
// let hasID = true;
// let isBlocked =false;
// let exam = age >= 18 && marks >=40;
// console.log("exam eligibility",exam);
// let benefit = marks>=80 || attandance>=75;
// console.log("student benefit",benefit);
// let active = !isBlocked;
// console.log("Student is Active:", active);
let username = "admin";
let password = "1234";
let isBlocked = false;
// if (username === "admin"&& password==="1234"){
//     console.log("login succesfully");

// }
// else{
//     console.log("invalid login")
// }
// if (username === "admin" || username === "user") {
//     console.log("Valid User");
// } else {
//     console.log("Invalid User");
// }

// // NOT (!)
// if (!isBlocked) {
//     console.log("Account Active");
// } else {
//     console.log("Account Blocked");
// }