// import {multTwo, multFive} from './scripts/functions';
import functions from './scripts/functions';
import './styles.scss';
import $ from 'jquery';
import {functionOne} from '../array-utils.js';
import {functionTwo} from '../array-utils.js';


// console.log(functions);
console.log('hello world');

const name = 'Ivan';
const p = document.createElement('p');
p.textContent = `I am ${name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#app');
root.appendChild(heading);
root.appendChild(p);

const printName = () => {
    console.log(name);
};
printName();

console.log(functions.multTwo(20));
console.log(functions.multFive(20));

$('body').css('background', 'green');

const arr = [1,5,2,8];
const arrOne = functionOne(arr);
const arrTwo = functionTwo(arr);
console.log(arr);
console.log(arrOne);
console.log(arrTwo);
