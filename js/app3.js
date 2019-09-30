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
    }, 
    // {
    //   name: "Pikachu",
    //   damage: 50
    // }, {
    //   name: "Poliwag",
    //   damage: 50
    // }, {
    //   name: "Psyduck",
    //   damage: 60
    // }, {
    //   name: "Rattata",
    //   damage: 30
    // }, {
    //   name: "Squirtle",
    //   damage: 60
    // }, {
    //   name: "Vulpix",
    //   damage: 50
    // }, {
    //   name: "Weedle", 
    //   damage: 40
    // }
]

const createSixCards = [];
const playerHand = [];
const computerHand = [];
const score = [];


class PokemonGame {
    constructor() {
        this.points = 0;
        this.round = 1;
        this.playerList = pokemonList.slice();
        this.computerList = pokemonList.slice();
        this.list = pokemonList.slice();
    }

    pickSixRandom(arr) {
        const pickedSix = () => {
        for(let i = 0; i < 6; i++){
            createSixCards.push(arr.splice(Math.floor(Math.random() * arr.length),1)[0]);
        }
    
        return pickedSix(arr);   }
    }
    
    returnPokemonListLength() {
        return this.list.length;
    }
    
    returnRemainingCards() {
        return this.list;
    }
    
    returnPlayerPastHands() {
        const playerGrave = this.list.pop();
        return playerGrave;
    }

    // returnComputerPastHands() {
    //     return this.pickSixRandom();
    // }
}

const gameOne = new PokemonGame();

console.log(gameOne.returnPokemonListLength());
console.log(gameOne.pickSixRandom());
console.log(gameOne.returnRemainingCards());
console.log(gameOne.returnPlayerPastHands());
// console.log(gameOne.returnComputerPastHands());