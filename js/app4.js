// const pokemonList = [
//     {
//       name: "Bulbasaur",
//       damage: 60
//     }, {
//       name: "Caterpie",
//       damage: 40
//     }, {
//       name: "Charmander",
//       damage: 60
//     }, {
//       name: "Clefairy",
//       damage: 50
//     }, {
//       name: "Jigglypuff",
//       damage: 60
//     }, {
//       name: "Mankey",
//       damage: 30
//     }, {
//       name: "Meowth",
//       damage: 60
//     }, {
//       name: "Nidoran - female",
//       damage: 60
//     }, {
//       name: "Nidoran - male",
//       damage: 50
//     }, {
//       name: "Oddish",
//       damage: 40
//     }, {
//       name: "Pidgey",
//       damage: 50
//     }, {
//       name: "Pikachu",
//       damage: 50
//     }, {
//       name: "Poliwag",
//       damage: 50
//     }, {
//       name: "Psyduck",
//       damage: 60
//     }, {
//       name: "Rattata",
//       damage: 30
//     }, {
//       name: "Squirtle",
//       damage: 60
//     }, {
//       name: "Vulpix",
//       damage: 50
//     }, {
//       name: "Weedle", 
//       damage: 40
//     }
// ]

// const createSixCards = [];

// class Game {
//     constructor(player, cards){
//         this.player = player;
//         this.cards = cards;
//     }
// }

// Game.prototype.makeChar = 
// function() {
//     console.log(this.player, this.cards);
// }

// Game.prototype.pickCards = 
// function(arr) {
//     for(let i = 0; i < 6; i++){
//         createSixCards.push(arr.splice(Math.floor(Math.random() * arr.length),1)[0]);
//     }
//     return createSixCards(pokemonList);
// }

// let eggbert = new Game('Eggbert: ', pokemonList);
// let computer = new Game('Computer: ', pokemonList);

// eggbert.makeChar();
// // computer.makeChar();
// eggbert.pickCards();


// class Person {
// 	constructor(name, age, eyes, hair){
// 		this.legs = 2;
// 		this.arms = 2;
// 		this.name = name;
// 		this.age = age;
// 		this.eyes = eyes;
// 		this.hair = hair;
// 	}
// 	greet(otherPerson){
// 		console.log('hi ' + otherPerson + '!');
// 	}
// 	jump(){
// 		console.log('weeee!');
// 	}
// };
// const me = new Person('Matt', 36, 'blue', 'blonde');
// console.log(me);


// class Person {
// 	constructor(name, age, eyes, hair){
// 		this.legs = 2;
// 		this.arms = 2;
// 		this.name = name;
// 		this.age = age;
// 		this.eyes = eyes;
// 		this.hair = hair;
// 	}
// 	setHair(hairColor){
// 		this.hair = hairColor;
// 	}
// 	greet(otherPerson){
// 		console.log('hi ' + otherPerson + '!');
// 	}
// 	jump(){
// 		console.log('weeee!');
// 	}
// };
// const me = new Person('Matt', 36, 'blue', 'blonde');
// console.log(me);
// me.setHair('red');
// console.log(me);
// me.hair="purple";
// console.log(me);


// class SuperHero extends Person {
// 	fly(){
// 		console.log('Up up and away!');
// 	}
// 	greet(otherPerson){
// 		console.log('Greetings ' + otherPerson);
// 	}
// };
// const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
// superman.greet('Bob');

class Car {
	constructor(serialNumber){
		this.serialNumber = serialNumber;
	}
	drive(){
		console.log('Vroom');
	}
}
const factory = {
	cars: [],
	generateCar(){
		const newCar = new Car(this.cars.length);
		this.cars.push(newCar);
		return newCar;
	},
	findCar(index){
		return this.cars[index];
	}
}

factory.generateCar();
factory.generateCar();
factory.generateCar();
factory.generateCar();
factory.generateCar();

console.log(factory);
console.log(factory.findCar(3));