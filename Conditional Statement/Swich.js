// const dayNumber = 3;

// switch (dayNumber) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day number");
// }


// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// const dayNumber = 2

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//   default:
//     console.log('Please Enter a Valid Day Number')
// }
//  const username = 'Anurag'
// const userAge = 24

// debugger

// switch(true) {
//     case userAge >= 0 && userAge <= 4:
//         console.log(`${username} is a kid.`)
//         break
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${username} is a school student.`)
//         break
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${username} is a college student.`)
//         break
//     case true:
//         console.log(`${username} is a working professional.`)
//         break
//     case (userAge > 45 && userAge < 121):
//         console.log(`${username} is retired.`)
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

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

// const grade = 'A'

// debugger
// switch (grade.toLocaleLowerCase()) {
//   case 'a':
//     console.log('Your score is between 85% to 100%.')
//     break
//   case 1:
//     console.log('Your score is between 75% to 85%')
//     break
//   case 'c':
//     console.log('Your score is between 60% to 75%')
//     break
//   case false:
//     console.log('Your score is between 50% to 60%')
//     break
//   case 'e':
//     console.log('Your score is between 30% to 50%')
//     break
//   default:
//     console.log('Sorry, you failed.')
// }

// console.log('Program Ended!')
let balance = 10000;

const choice = Number(
    prompt(
        "ATM MENU\n" +
        "1. Check Balance\n" +
        "2. Deposit Money\n" +
        "3. Withdraw Money\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    )
);

switch (choice) {

    case 1:
        console.log("Your Balance is: ₹" + balance);
        break;

    case 2:
        const deposit = Number(
            prompt("Enter deposit amount:")
        );

        if (deposit > 0) {
            balance = balance + deposit;

            console.log(
                "Money deposited successfully!"
            );

            console.log(
                "New Balance: ₹" + balance
            );
        } else {
            console.log("Invalid deposit amount.");
        }

        break;

    case 3:
        const withdraw = Number(
            prompt("Enter withdrawal amount:")
        );

        if (withdraw <= 0) {

            console.log(
                "Invalid withdrawal amount."
            );

        } else if (withdraw > balance) {

            console.log(
                "Insufficient Balance!"
            );

        } else {

            balance = balance - withdraw;

            console.log(
                "Please collect your cash."
            );

            console.log(
                "Remaining Balance: ₹" + balance
            );
        }

        break;

    case 4:
        console.log("Thank you for using ATM.");
        break;

    default:
        console.log("Invalid option.");
}
let balance = 10000;

const choice = Number(
    prompt(
        "ATM MENU\n" +
        "1. Check Balance\n" +
        "2. Deposit Money\n" +
        "3. Withdraw Money\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    )
);

switch (choice) {

    case 1:
        console.log("Your Balance is: ₹" + balance);
        break;

    case 2:
        const deposit = Number(
            prompt("Enter deposit amount:")
        );

        if (deposit > 0) {
            balance = balance + deposit;

            console.log(
                "Money deposited successfully!"
            );

            console.log(
                "New Balance: ₹" + balance
            );
        } else {
            console.log("Invalid deposit amount.");
        }

        break;

    case 3:
        const withdraw = Number(
            prompt("Enter withdrawal amount:")
        );

        if (withdraw <= 0) {

            console.log(
                "Invalid withdrawal amount."
            );

        } else if (withdraw > balance) {

            console.log(
                "Insufficient Balance!"
            );

        } else {

            balance = balance - withdraw;

            console.log(
                "Please collect your cash."
            );

            console.log(
                "Remaining Balance: ₹" + balance
            );
        }

        break;

    case 4:
        console.log("Thank you for using ATM.");
        break;

    default:
        console.log("Invalid option.");
}
if (choice >= 1 && choice <= 4) {

    let quantity = Number(
        prompt("Enter quantity:")
    );

    if (quantity <= 0) {

        console.log("❌ Invalid quantity.");

    } else {

        let subtotal = price * quantity;
        let discount = 0;

        if (quantity >= 5) {
            discount = subtotal * 0.20;
        } 
        else if (quantity >= 3) {
            discount = subtotal * 0.10;
        }

        let finalAmount = subtotal - discount;

        console.log("----- BILL -----");
        console.log("Food: " + foodName);
        console.log("Price: ₹" + price);
        console.log("Quantity: " + quantity);
        console.log("Subtotal: ₹" + subtotal);
        console.log("Discount: ₹" + discount);
        console.log("Final Amount: ₹" + finalAmount);
    }
}