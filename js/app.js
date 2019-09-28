const pokemonList = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
]

class Game {
    constructor(pokemon, damage){
        this.pokemon = pokemon;
        this.damage = damage;

    }
    sayPicks() {
        return `${this.pokemon} has ${this.damage}.`
    }
}

// want to have random generator 

class Player extends Game {
    constructor(pokemon, damage, name){
        super(pokemon, damage)
        this.name = name;
    }
}
const eggbert = new Player('Eggbert');
const computer = new Player('Computer');


let newThree = [];
let computerOneCard = [];
let playerOneCard = [];

const pickThree = (pokemonList) => {
    for(let i = 0; i < 3; i++){
        newThree.push(pokemonList.splice(Math.floor(Math.random() * pokemonList.length),1)[0]);
    }
    return newThree;
    // console.log(newArr);
}
console.log(pickThree(pokemonList));

const compPickOne = (newThree) => {
    computerOneCard.push(newThree.splice(Math.floor(Math.random() * newThree.length),1)[0]);
    return computerOneCard;
}
console.log(compPickOne(newThree));

console.log(computerOneCard[0].damage);

console.log(pickThree(pokemonList));

// const playerHighestDmg = (newThree) => {
//     let rule1 = playerOneCard.push(newThree.splice(Math.floor(Math.random() * newThree.length),1)[0]);
//     if(rule1 >= rule2){

//     // playerOneCard.push(newThree.splice(Math.floor(Math.random() * newThree.length),1)[0]);
//     return playerOneCard;
//     } else {

//     }
// }
// console.log(pickThree(pokemonList));
// console.log(playerHighestDmg(newThree));
// console.log(playerOneCard[0].damage);







// const playerPickOne = (newThree) => {
//     computerOneCard.push(newThree.splice(Math.floor(Math.random() * newThree.length),1)[0]);
//     return computerOneCard;
// }
// console.log(playerPickOne(newThree));

// newArr = pokemonList[Math.floor(Math.random() * pokemonList.length)];

// const round = (pickThree) => {
//     if(pickThree)
// }


// console.log(pokemonList);

// console.log(pickThree(pokemonList));
// console.log(pokemonList);

// console.log('Round One Done');

// console.log(pickThree(pokemonList));
// console.log(pokemonList);

// console.log(pickThree(pokemonList));
// console.log(pokemonList);

// console.log('Round Two Done');


// console.log(pickThree(pokemonList));
// console.log(pokemonList);

// console.log(pickThree(pokemonList));
// console.log(pokemonList);

// console.log('Round Three Done');







