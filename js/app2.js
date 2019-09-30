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

class PokemonGame {
  constructor() {
    this.points = 0;
    this.round = 1;
    this.list = pokemonList.slice();
  }


}


let createSixCards = [];
let comp1 = [];
let play1 = [];
let splitterOne = [];
let createCompCards = [];
let createPlayerCards = [];
let score = [{player: 0, computer: 0}];

const pickSix = (pokemonList) => {
    for(let i = 0; i < 6; i++){
        createSixCards.push(pokemonList.splice(Math.floor(Math.random() * pokemonList.length),1)[0]);
    }
    return createSixCards;
    // console.log(newArr);
}
// NOTE 
console.log(pickSix(pokemonList));
createCompCards = createSixCards.slice(0,3);
console.log(createCompCards);
createPlayerCards = createSixCards.slice(3,6);
console.log(createPlayerCards);

comp1.push(createCompCards.splice(Math.floor(Math.random() * createCompCards.length),1)[0]);
console.log(comp1[0]);
console.log(comp1[0].damage);


const playerHighestOne = (createPlayerCards) => {
    if(createPlayerCards[0].damage > createPlayerCards[1].damage){
        return `${createPlayerCards[0].damage}`
    }   else if(createPlayerCards[1].damage > createPlayerCards[2].damage){
        return `${createPlayerCards[1].damage}`
    }   else{
        return `${createPlayerCards[2].damage}`
    }
}
// console.log(playerHighestOne);
// NOTE 
console.log(playerHighestOne(createPlayerCards));

const checkBigger = () => {
    if(playerHighestOne(createPlayerCards) > comp1[0].damage){
        score[0].player += 1;
        return `Player Wins!`;
    }   else if(playerHighestOne(createPlayerCards) < comp1[0].damage){
        score[0].computer += 1;
        return `Computer Wins!`;
    }   else if(playerHighestOne(createPlayerCards) == comp1[0].damage){
        return `Tie Game Boys!`;
    }   else {
        return 'Error';
    }
    
}

// const runRoundThree = () => {
//     for(let i = 0; i < 3; i++){
     
//         checkBigger();
        
//     }
//     return score;
// }
// console.log(runRoundThree());

const roundCalc = () => {
    checkBigger();
    return score;
}
console.log(roundCalc());



// console.log(pickSix(pokemonList));
// new33 = new6.slice(0,3);
// console.log(new33);
// createPlayerCards = new6.slice(3,6);
// console.log(createPlayerCards);
// comp1.push(new33.splice(Math.floor(Math.random() * new33.length),1)[0]);
// console.log(comp1[0]);
// console.log(comp1[0].damage);

// console.log(playerHighestOne(createPlayerCards));






// play1.push(createPlayerCards.splice(Math.floor(Math.random() * createPlayerCards.length),1)[0]);
// console.log(play1);

// const compPickOne = (new6) => {
//     comp1.push(new6.splice(Math.floor(Math.random() * new6.length),1)[0]);
//     return comp1;
// }
// console.log(compPickOne(new6));

// console.log(comp1[0].damage);


