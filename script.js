
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

