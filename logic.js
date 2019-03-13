const board = {
    tile1: {
        resource: 'null',
        number: 0,
        playerOwns: 'null',
        armyNumber: 0,
    }
    house1:{
        neighborTiles: tile1,
        
    }

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let gameHasStarted = false;
let playerTurn = "null";
function start() {

    let resources = ["linear-gradient(240deg,rgb(252, 166, 7), rgb(255, 165, 0))","linear-gradient(240deg,rgb(252, 166, 7), rgb(255, 165, 0))","linear-gradient(240deg,rgb(252, 166, 7), rgb(255, 165, 0))","linear-gradient(240deg,rgb(252, 166, 7), rgb(255, 165, 0))", "yellow","yellow","yellow","yellow", "gray","gray","gray","gray", "linear-gradient(240deg, #eaee44, #90ec19)","linear-gradient(240deg, #eaee44, #90ec19)","linear-gradient(240deg, #eaee44, #90ec19)","linear-gradient(240deg, #eaee44, #90ec19)", "linear-gradient(240deg, #f8372a, #cc2900)","linear-gradient(240deg, #f8372a, #cc2900)","linear-gradient(240deg, #f8372a, #cc2900)","linear-gradient(240deg, #f8372a, #cc2900)", "rgb(194, 253, 253", "rgb(194, 253, 253", "rgb(194, 253, 253"];
    for (let i = 1; i < 24; i++) { 

        let resource = resources.splice(Math.floor(Math.random()*resources.length), 1);
        tile = "tile" + i
        console.log(tile);
        document.getElementById(tile).innerHTML =  getRandomInt(2, 13);
        document.getElementById(tile).style.background = resource;
        document.getElementById('tile12').removeAttribute("onclick");
    }
    gameHasStarted = true;
    playerTurn = "red";

}
function roll() {
    document.getElementById("dice1").innerHTML =  getRandomInt(1, 7);
    document.getElementById("dice2").innerHTML =  getRandomInt(1, 7);
}
function placeHouse(id) {
    document.getElementById(id).style.background = playerTurn;
    document.getElementById(id).style.opacity = 1;
    console.log(id);
}
function placeRoad(id) {
    document.getElementById(id).style.background = playerTurn;
    document.getElementById(id).style.opacity = 1;
    console.log(id);
}


function addArmy(id) {
   
}

function endTurn() {
    switch (playerTurn) {
        case 'red':
        playerTurn = "blue";
        console.log('Red players turn has ended');
        break;
        case 'blue':
        playerTurn = "yellow";
        console.log('Blue players turn has ended');
        break;
        case "yellow":
        playerTurn = "green";
        console.log('Blue players turn has ended');
        break;
        case "green":
        playerTurn = "red";
        console.log('Blue players turn has ended');
        break;
        default:
        console.log('Sorry');
    }

}