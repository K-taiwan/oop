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


let new6 = [];
let comp1 = [];
let play1 = [];
let splitterOne = [];
let new33 = [];
let new44 = [];
let score = [{player: 0, computer: 0}];

const pickSix = (pokemonList) => {
    for(let i = 0; i < 6; i++){
        new6.push(pokemonList.splice(Math.floor(Math.random() * pokemonList.length),1)[0]);
    }
    return new6;
    // console.log(newArr);
}
console.log(pickSix(pokemonList));
new33 = new6.slice(0,3);
console.log(new33);
new44 = new6.slice(3,6);
console.log(new44);

comp1.push(new33.splice(Math.floor(Math.random() * new33.length),1)[0]);
console.log(comp1[0]);
console.log(comp1[0].damage);


const playerHighestOne = (new44) => {
    if(new44[0].damage > new44[1].damage){
        return `${new44[0].damage}`
    }   else if(new44[1].damage > new44[2].damage){
        return `${new44[1].damage}`
    }   else{
        return `${new44[2].damage}`
    }
}
// console.log(playerHighestOne);
console.log(playerHighestOne(new44));

const checkBigger = () => {
    if(playerHighestOne(new44) > comp1[0].damage){
        score[0].player += 1;
        return `Player Wins!`, score;
    }   else if(playerHighestOne(new44) < comp1[0].damage){
        score[0].computer += 1;
        return `Computer Wins! ${score}`;
    }   else if(playerHighestOne(new44) == comp1[0].damage){
        return `Tie Game Boys!  ${score}`;
    }   else {
        return 'Error';
    }
    
}

const runRoundThree = () => {
    for(let i = 0; i < 3; i++){
        checkBigger();
        return score;
    }
}
console.log(runRoundThree());

console.log(checkBigger());



// console.log(pickSix(pokemonList));
// new33 = new6.slice(0,3);
// console.log(new33);
// new44 = new6.slice(3,6);
// console.log(new44);
// comp1.push(new33.splice(Math.floor(Math.random() * new33.length),1)[0]);
// console.log(comp1[0]);
// console.log(comp1[0].damage);

// console.log(playerHighestOne(new44));






// play1.push(new44.splice(Math.floor(Math.random() * new44.length),1)[0]);
// console.log(play1);

// const compPickOne = (new6) => {
//     comp1.push(new6.splice(Math.floor(Math.random() * new6.length),1)[0]);
//     return comp1;
// }
// console.log(compPickOne(new6));

// console.log(comp1[0].damage);


