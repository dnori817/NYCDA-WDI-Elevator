const Elevator = require("./elevator");
const Passenger = require("./passenger");

const elevator = new Elevator();
// const passenger = new Passenger("Dave", 4);
let passengers = [
	new Passenger("Dave", 4),
	new Passenger("Damien", 2),
	new Passenger("Danielle", 7),
];

function load() {
	elevator.loadPassenger(passengers.pop());
	console.log(elevator.currentPassenger.name + " is on the elevator.");
	elevator.goUp();
}

load();

elevator.on("up", function(event) {
	console.log("Floor " + elevator.currentFloor);
	if (elevator.currentFloor !== elevator.currentPassenger.desiredFloor) {
		elevator.goUp();
	}
	else {
		console.log(elevator.currentPassenger.name + " has reached the desired floor.");
		elevator.unloadPassenger();
		console.log("Returning to lobby.");
		elevator.goDown();
	}
});

elevator.on("down", function(event) {
	if (elevator.currentFloor === 0) {
		console.log("Lobby");
	}
	else {
		console.log("Floor " + elevator.currentFloor);
	}
	if (elevator.currentFloor !== 0) {
		elevator.goDown();
	}
	else if (passengers.length !== 0) {
		load();
	}
	else {
		console.log("Elevator is ready");
	}
});







// function load() {
// 	if (this.currentPassenger === null) {
// 	}
// }


// function unload() {
// 	elevator.unloadPassenger();
// }

// elevator.on("up", function)




// elevator.loadPassenger(passenger);
//
// console.log(elevator);
// console.log(passenger);
//
// elevator.unloadPassenger();
//
// console.log(elevator);
//
// elevator.goUp();
//
// elevator.on("up", function(event) {
// 	console.log(event);
// 	elevator.goDown();
// });
//
// elevator.on("down", function(event) {
// 	console.log(event);
// 	elevator.goUp();
// });
