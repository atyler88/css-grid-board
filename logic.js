const board = {
    tile1: {
        name: "tile1",
        resource: null,
        number: 0,
        playerOwns: null,
        armyNumber: 0,
        houseNeighbor: [this.house1, this.house2, this.house3, this.house6, this.house7, this.house8],
        tileNeighbor: [this.tile2, this.tile3, this.tile4]
    },
    tile2: {
        name: "tile2",
        resource: null,
        number: 0,
        playerOwns: null,
        armyNumber: 0,
        houseNeighbor: [this.house3, this.house4, this.house5, this.house8, this.house9, this.house10],
        tileNeighbor: [this.tile1, this.tile4, this.tile5]
    },
    tile3: {
        name: "tile3",
        resource: null,
        number: 0,
        playerOwns: null,
        armyNumber: 0,
        houseNeighbor: [this.house6, this.house7, this.house11, this.house12],
        tileNeighbor: [this.tile1, this.tile4]
    },
    tile4: {
        name: "tile4",
        resource: null,
        number: 0,
        playerOwns: null,
        armyNumber: 0,
        houseNeighbor: [this.house7, this.house8, this.house9, this.house12, this.house13, this.house14],
        tileNeighbor: [this.tile1, this.tile2, this.tile3, this.tile5]
    },
    tile5: {
        name: "tile5",
        resource: null,
        number: 0,
        playerOwns: null,
        armyNumber: 0,
        houseNeighbor: [this.house9, this.house10, this.house14, this.house15],
        tileNeighbor: [this.tile2, this.tile4]
    },
    house1: {
        type: "empty",
        name: "house1",
        playerOwns: null,
    },
    house2: {
        type: "empty",
        name: "house2",
        playerOwns: null,
    },
    house3: {
        type: "empty",
        name: "house3",
        playerOwns: null,
    },
    house4: {
        type: "empty",
        name: "house4",
        playerOwns: null,
    },
    house5: {
        type: "empty",
        name: "house5",
        playerOwns: null,
    },
    house6: {
        type: "empty",
        name: "house6",
        playerOwns: null,
    },
    house7: {
        type: "empty",
        name: "house7",
        playerOwns: null,
    },
    house8: {
        type: "empty",
        name: "house8",
        playerOwns: null,
    },
    house9: {
        type: "empty",
        name: "house9",
        playerOwns: null,
    },
    house10: {
        type: "empty",
        name: "house10",
        playerOwns: null,
    },
    house11: {
        type: "empty",
        name: "house11",
        playerOwns: null,
    },
    house12: {
        type: "empty",
        name: "house12",
        playerOwns: null,
    },
    house13: {
        type: "empty",
        name: "house13",
        playerOwns: null,
    },
    house14: {
        type: "empty",
        name: "house14",
        playerOwns: null,
    },
    house15: {
        type: "empty",
        name: "house15",
        playerOwns: null,
    }

}
const tileNeighbors = {
    tile1: {
        houseNeighbor: [board.house1.name, board.house2.name, board.house3.name, board.house6.name, board.house7.name, board.house8.name],
        tileNeighbor: [board.tile2, board.tile3, board.tile4]
    },
    tile2: {
        houseNeighbor: [board.house3.name, board.house4.name, board.house5.name, board.house8.name, board.house9.name, board.house10.name],
        tileNeighbor: [board.tile1, board.tile4, board.tile5]
    },
    tile3: {
        houseNeighbor: [board.house6.name, board.house7.name, board.house11.name, board.house12.name],
        tileNeighbor: [board.tile1, board.tile4]
    },
    tile4: {
        houseNeighbor: [board.house7.name, board.house8.name, board.house9.name, board.house12.name, board.house13.name, board.house14.name],
        tileNeighbor: [board.tile1, board.tile2, board.tile3, board.tile5]
    },
    tile5: {
        houseNeighbor: [board.house9.name, board.house10.name, board.house14.name, board.house15.name],
        tileNeighbor: [board.tile2, board.tile4]
    }
}
class Player {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.brick = 0;
        this.wood = 0; 
        this.livestock = 0;
        this.addHouse = function(house) {
            house = house.toString();
            console.log(house);
            board[house].playerOwns = this.name;
            console.log(board[house]);
            let element = document.getElementById(house);
            element.classList.add(this.color);
        }
        this.resourceRoll = function() {
            roll(1,6);
            rolls = rolls.toString();
            console.log("roll " + rolls);
            Object.keys(board).forEach(function(key) {

                console.log(board[key].number);
                if(rolls == board[key].number){
                    let resource = board[key].resource;
                    console.log(resource);
                    let match = board[key].name.toString();
                    console.log("match " + board[key].number + "on " + match);
                    let object = tileNeighbors[match].houseNeighbor;
                    console.log("object = " + object);
                    object.forEach(function(house){
                       console.log(board[house]);
                       if(board[house].playerOwns){
                           console.log(board[house].playerOwns + " gets a " + resource);
                           let player = board[house].playerOwns;
                           console.log(player);
                           console.log(playerOne[resource]);
                           switch(player) {
                            case playerOne.name:
                            console.log("shaggy");
                                playerOne[resource] += 1;
                              break;
                            case playerTwo.name:
                                playerTwo[resource] += 1;
                              break;
                              case playerThree.name:
                                playerThree[resource] +=1;
                              break;
                              case playerFour.name:
                            playerFour[resource] += 1;
                              break;
                          }
                           
                       }
                   });
                };
              
            });
        }
    }

}

function findNeighbor(){
    return
}
const playerOne = new Player("aaron", "orange");
const playerTwo = new Player("joline", "pink");



function start() {

    let resources = ["brick", "wood", "livestock", "wood", "brick"];
    let numbers = [1, 2, 3, 4, 5];
    for (let i = 1; i < 6; i++) { 

        let resource = resources.splice(Math.floor(Math.random()*resources.length), 1);
        let number = numbers.splice(Math.floor(Math.random()*resources.length), 1);
        resource = resource.toString();
        number = number.toString();
        tile = "tile" + i
        console.log(tile);
        console.log(resource);
        board[tile].resource = resource;
        board[tile].number = number;
        let element = document.getElementById(tile);
        console.log(resources);
        
        element.classList.remove("deep-purple");
        switch(resource) {
            case "brick":
                element.classList.add("red");
              break;
            case "wood":
                element.classList.add("green");
              break;
            case "livestock":
                element.classList.add("yellow");
              break;
          }
        element.innerHTML = board[tile].number;
    }
}
// function red() {
//     let element = document.getElementById("house1");
//     element.classList.add("red");
//  }

 /*Dice Roll function: this function randomly generates a number between 1 and 6 and adds it to an array.
 the variable number is used to determine the number of dice rolled. */

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function roll(number, sides) {
    let diceRoll = 0;
    let i;
    rolls = [];
    for(i = 0; i < number; i++){
        let roll =  getRandomInt(1, sides);
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
