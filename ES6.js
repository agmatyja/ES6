//Zadanie 1
let a = 'Hello';
let b = 'World';
console.log(`${a} ${b}`); 

//Zadanie 2 
const multiply = (a, b) => {
	return (a || 1) * (b || 1);
};

//Zadanie 3
const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum += arg);
	return sum / args.length;
}

//Zadanie 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(firstname, lastname);