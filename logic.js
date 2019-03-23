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

function roll(number) {
    let diceRoll = 0;
    let i;
    rolls = [];
    for(i = 0; i < number; i++){
        let roll =  getRandomInt(1, 7);
        diceRoll += roll;
        // console.log(roll);
        rolls.push(roll);
    }
    rolls.sort(function(a, b) {
        return b - a;
      });
    // console.log(rolls);
    // console.log("total " + diceRoll);
    return rolls;
}

function rollOff(x, y) {

    roll(x);
    let rollX = rolls;
    console.log("roll x = ");
    console.log(rollX);
    roll(y);
    let rollY = rolls;
    console.log("roll Y = ");
    console.log(rollY);

    let xLosses = 0;
    let yLosses = 0;
    for(i = 0; i < x; i++){

        console.log("x " + rollX[i]);
        console.log("y " + rollY[i]);
        if (rollX[i] > rollY[i]) {
           console.log("x wins");
           yLosses += 1;
           console.log("y losses = " + yLosses);
        };
        if(rollX[i] < rollY[i]) {
            console.log("Y wins");
            xLosses += 1;
            console.log("X losses = " + xLosses);
        };
    }
    console.log("x total losses " + xLosses);
    console.log("y total losses " + yLosses);
}
