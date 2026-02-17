// JavaScript variables

var fullName = "Prashna Magar";
let address = "Swoyambhu, Kathmandu"; 
const blooodGroup = 'B+';

console.log('Full NAme:', fullName);
console.log('Address:',address);
console.log('Blood Group:',blooodGroup);

// Data Types
let name = 'Prashna'; //String

let age = 20; //Number

let isStudent = false; //Boolean

let hobbies = ['reading','sleeping','traveling']; //Array

console.log(hobbies[0]);

let user = {
    name: 'Prashna',
    age: 20,
    isStudent: false,
    hobbies : ['reading','sleeping','traveling'],
}; //object

console.log(user['name']);
console.log(user.name);

//Function

function greet(name){
    console.log('Welcome', name);
}

greet('Prashna');

//DOM Manipulation

const headingElementById = document.getElementById('heading-2');
console.log('heading element by id', headingElementById);


const headingElementByQuery = document.querySelector('#heading-2');
console.log('heading element by query Selector', headingElementByQuery);

headingElementByQuery.textContent = 'Get element by query selector';
headingElementByQuery.style.color = 'blue';

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', function() {
    alert('Button clicked!');
    console.log('Button clicked');
});



