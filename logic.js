const board = {
    tile1: {
        name: "tile 1",
        resource: 'null',
        number: 0,
        playerOwns: 'null',
        armyNumber: 0,
    },
    tile2: {
        name: "Tile 2",
        resource: 'null',
        number: 0,
        playerOwns: 'null',
        armyNumber: 0,
    },
    house1: {
        name: "House 1",
        playerOwns: 'null',
    },
    house2: {
        name: "House 2",
        playerOwns: 'null',
    },
    house3: {
        name: "House 3",
        playerOwns: 'null',
    },

}
tileNieghbors = {
    tile1: [board.house1, board.house2],
    tile2: [board.house2, board.house3]
}
const playerOne = {
    name: "player one",
    bricks: 0,
    wood: 0,  
}

const playerTwo = {
    name: "player one",
    bricks: 0,
    wood: 0,
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let gameHasStarted = false;
let playerTurn = "null";
function start() {

    let resources = ["brick", "wood"];
    for (let i = 1; i < 3; i++) { 

        let resource = resources.splice(Math.floor(Math.random()*resources.length), 1);
        resource = resource.toString();
        tile = "tile" + i
        console.log(tile);
        console.log(resource);
        board[tile].resource = resource;
    }
    gameHasStarted = true;

}

function roll() {
    let roll1 =  getRandomInt(1, 7);
    let roll2 =  getRandomInt(1, 7);
    let diceRoll = roll1 + roll2;
    console.log("the dice are " + roll1 + " and " + roll2)
    return diceRoll;
}
