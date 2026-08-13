
// student detail : 1

const collegeName = "hicas College";
let studentName = "Manoj";
var studentAge = 26;

console.log("College Name:", collegeName);
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);


// mobile price : 2
 

let price = 10000;

price = 12500;

console.log("Updated Price:", price);


//  company : 3


 //const company = "manoj";

//console.log(company);


//company = "kumar";


// console practice : 4

console.log("Login Successful");

console.warn("Password is Weak");

console.error("Network Error");


//data type : 5

let name = "Manoj";

let age = 25;

let Developer = true;

let uninitialized;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(Developer, typeof Developer);
console.log(uninitialized, typeof uninitialized);


//shopping cart array : 6

let cart = ["Light", "Fan", "TV", "Headset", "Monitor"];

console.log("First product:", cart[0]);
console.log("Third product:", cart[2]);
console.log("Last product:", cart[cart.length - 1]);


//FAV MOVIES : 7


let movies = [
    "Billa",
    "Jailer",
    "Vikram",
    "dareDevil",
    "Ghilli",
    "Red"
];

console.log("2nd movie:", movies[1]);
console.log("5th movie:", movies[4]);
console.log("Last movie:", movies[movies.length - 1]);


//Employee object : 8


let employee = {
    name: "Manoj",
    age: 26,
    department: "IT",
    skills: ["JavaScript", "HTML", "CSS"],
    salary: 45000
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);


// Product details : 9

let product = {
    productName: "Laptop",
    brand: "asus",
    price: 120000,
    colors: ["Black", "Silver", "Blue"]
};

console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);


//arithmetic cal : 10


let num1 = 20;
let num2 = 10;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:",num1 % num2);
console.log("Exponent:",num1 ** num2);

// increment practice : 11


let a = 5;

a++;
console.log("After a++:", a);

++a;
console.log("After ++a:", a);

a--;
console.log("After a--:", a);

--a;
console.log("After --a:", a);


//predict the output : 12

let x = 10;
let y = x++;
let z = ++y;

console.log(x);
console.log(y);
console.log(z);


//predict the output : 13

let m = 7;

let n = --m;

let o = n++;

console.log(m);
console.log(n);
console.log(o);


// school object : 14


{
    let school = {
        schoolName: "StMarys Matriculation School",
        principal: "Mr.Kumar",
        totalStudents:700,
        classes: ["Class 10", "Class 11", "Class 12"]
    };

    console.log("School Name:", school.schoolName);
    console.log("Principal:", school.principal);
    console.log("Last Class:", school.classes[school.classes.length - 1]);
}


//grocery list : 15


{
    let groceries = [
        "Rice",
        "Milk",
        "Sugar",
        "Wheat",
        "Oil",
        "Salt",
        "Eggs",
        "soda"
    ];

    console.log("First Item:", groceries[0]);
    console.log("Fourth Item:", groceries[3]);
    console.log("Last Item:", groceries[groceries.length - 1]);
}


// user profile : 16


{
    let username = "Manoj";
    let email = "manoj@gmail.com";
    let age = 26;
    let isPremium = true;

    console.log("Username:", username, "Type:", typeof username);
    console.log("Email:", email, "Type:", typeof email);
    console.log("Age:", age, "Type:", typeof age);
    console.log("Is Premium:", isPremium, "Type:", typeof isPremium);
}

 
//variable rule : 17


var h = 10;
let i = 20;
const j = 30;

console.log(h, i, j);

h = 100;
i = 200; 
//j = 300;  

console.log(h, i, j);

var h = 500; 

console.log(h);


// mark cal : 18


{
    let tamil = 85;
    let english = 95;
    let maths = 80;

    let total = tamil + english + maths;
    let average = total / 3;

    console.log("Total:", total);
    console.log("Average:", average);
}


// company database : 19


{
    let company = {
        company: "Tech Solutions",
        employees: ["Manoj", "Raja", "Kumar", "Arun"],
        location: "Chennai",
        foundedYear: 2016,
        CEO: "Leo"
    };

    console.log("CEO:", company.CEO);
    console.log("Location:", company.location);
    console.log("First Employee:", company.employees[0]);
}


// mini profile : 20

let profile = {
    name: "Manoj",
    city: "Salem",
    hobbies: [
        "Football",
        "Watching Movies",
        "Coding"
    ],
    age: 26
};

console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);





//   DAY 2 TASKS



// student details : 1


var studentName1 = "maddy";
let age1 = 26;
const course = "Js";
let mark = 85;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Mark:", mark);



// Get user input : 2

let name1n = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("Name:", name);

alert("Your age is: " + userAge);


// data types : 3



let myString = "Manojkumar";

let myNumber = 85;

let myBoolean = true;

let myUndefined;

let myNull = null;

console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);



// array shoping list : 4


let shoppingList = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];

console.log("First product:", shoppingList[0]);

console.log("Third product:", shoppingList[2]);

console.log("Last product:", shoppingList[shoppingList.length - 1]);

console.log("Complete array:", shoppingList);



// Employee Object : 5

let employee1 = {
    name: "Manojkumar",
    age: 26,
    role: "Developer",
    salary: 45000
};

console.log("Name:", employee.name);
console.log("Age:", employee1.age);
console.log("role:", employee1.role);
console.log("Salary:", employee1.salary);


// Bill Calculator : 6 

let productPrice = 500;

let quantity = 3;

let totalPrice = productPrice * quantity;

let discount = 100;

let finalAmount = totalPrice - discount;

console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);



// comparison operators : 7

console.log(25 > 20);          // true

console.log(15 < 10);         // fales

console.log(50 == "50");     // true

console.log(50 === "50");   // fales

console.log(100 != "100");  //fales

console.log(100 !== "100"); //true



// logical operators : 8


console.log(10 > 5 && 20 > 15 || 5 > 10);      // true

console.log(10 < 5 || 20 >= 20 && 5 == "5");   // true

console.log(15 === "15" || 10 > 5 && 8 < 3);    // fales

console.log(20 >= 20 && 5 !== "5" || 10 < 5);   // true

console.log(25 < 20 || 30 == "30" && 10 >= 10);  // true


// ternary operator - login : 9


let passwordCorrect = true;

let result = passwordCorrect
    ? "Login successful"
    : "Invalid password";

console.log(result);

console.log(
    passwordCorrect ? "Login successful" : "Invalid password"
);



// type casting - marks : 10

let mark3 = "80";
let mark4 = "70";

let num3 = Number(mark3);
let num4 = Number(mark4);

let total = num3 + num4;

console.log("Total:", total);


// voting eligibility : 11

let age2 = 20;

if (age2 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// student grade :12


let mark1 = 85;

if (mark < 0 || mark > 100) {
    console.log("Invalid Mark");
} else if (mark1 >= 90) {
    console.log("A Grade");
} else if (mark1 >= 75) {
    console.log("B Grade");
} else if (mark1 >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}


// time greeting : 13

let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}


// nested if -job eligibility : 14 

let age3 = 26;
let height = 175;
let weight = 95;

if (age3 >= 26) {
    if (height >= 170) {
        if (weight >= 95) {
            console.log("Candidate is eligible");
        } else {
            console.log("Not eligible: Weight must be 95 kg or above");
        }
    } else {
        console.log("Not eligible: Height must be 170 cm or above");
    }
} else {
    console.log("Not eligible: Age3 must be 26 or above");
}


// switch - traffic light : 15 


let trafficLight = "green";

switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}


//  DAY - 3 TASK


// employee eligibility : 1 


let name5 = "Manoj";
let age5 = 25;
let experience = 2;
let salary = 25000;

if (age >= 21 && experience >= 1 && salary >= 20000) {
    console.log("Employee is eligible");
}
else if (age < 21) {
    console.log("Employee is not eligible because age is less than 21");
}
else if (experience < 1) {
    console.log("Employee is not eligible because experience is less than 1 year");
}
else {
    console.log("Employee is not eligible because salary is less than 20,000");
}



// ATM withdrawal : 2 

let balance = 10000;

let withdraw = 2500;

if (withdraw <= 0) {
    console.log("Invalid withdrawal amount");
}
else if (withdraw > balance) {
    console.log("Insufficient balance");
}
else if (withdraw % 100 !== 0) {
    console.log("Withdrawal amount should be a multiple of 100");
}
else {
    balance = balance - withdraw;
    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
}



// login system with 3 attempts : 3


let correctUsername = "manoj";
let correctPassword = "12345";

let attempts = 0;

while (attempts < 3) {

    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username === correctUsername && password === correctPassword) {
        console.log("Login successful");
        break;
    } 
    else {
        attempts++;
        console.log("Wrong username or password");

        if (attempts === 3) {
            console.log("Account locked");
        }
    }
}




// student grade system : 4 


let math = 80;
let english = 75;
let science = 90;
let social = 85;
let computer = 95;

let total1 = math + english + science + social + computer;
let average = total1 / 5;

let grade;

if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else if (average >= 60) {
    grade = "D";
}
else {
    grade = "F";
}

console.log("Math = " + math);
console.log("English = " + english);
console.log("Science = " + science);
console.log("Social = " + social);
console.log("Computer = " + computer);

console.log("Total1 = " + total1);
console.log("Average = " + average);
console.log("Grade = " + grade);

// number pattern : 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let p = 5;

while (p >= 1) {
    console.log(p);
    p--;
}


let l = 1;

do {
    console.log(l);
    l++;
} while (l <= 5);



// shoping cart : 6 

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let prices = [50000, 1000, 2000, 15000];

let total5 = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i] + " - ₹" + prices[i]);

    total5 = total5 + prices[i];
}

console.log("Total5 = ₹" + total5);


// employee object : 7

let employee5 = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for (let key in employee5) {
    console.log(key + " : " + employee5[key]);
}

function calculateBonus() {
    if (employee5.salary >= 40000) {
        return 5000;
    } else {
        return 3000;
    }
}

let bonus = calculateBonus();

console.log("Bonus = " + bonus);


// bank account function : 8

let balance1 = 10000;

function deposit(amount) {
    balance1 = balance1 + amount;
    console.log("Deposited: ₹" + amount);
}

function withdraw1(amount) {
    balance1 = balance1 - amount;
    console.log("Withdrawn1: ₹" + amount);
}

function checkBalance() {
    console.log("Current Balance1: ₹" + balance1);
}

deposit(5000);
withdraw1(2000);
checkBalance();


// call back calculation : 9
 

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(callback, a, b) {
    console.log(callback(a, b));
}

calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);