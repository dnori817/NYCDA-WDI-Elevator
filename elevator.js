const EventEmitter = require("events");

class Elevator extends EventEmitter {
	constructor() {
		super();
		this.currentPassenger = null;
		this.currentFloor = 0;
		this.isMoving = false;
	}

	loadPassenger(passenger) {
		if (this.currentPassenger) {
			console.error("Passenger " + passenger.name + "is occupying the elevator!");
			return;
		}

		this.currentPassenger = passenger;
	}

	unloadPassenger() {
		if (!this.currentPassenger) {
			console.error("No passenger to unload");
			return;
		}

		this.currentPassenger = null;
	}

	goUp() {
		this._move("up", 1);
	}

	goDown() {
		this._move("down", -1);
	}

	_move(moveType,floorChange) {
		if (this.isMoving) {
			console.error("Elevator is already moving!");
			return;
		}
		this.isMoving = true;

		setTimeout(function() {
			this.isMoving = false;
			this.currentFloor += floorChange;
			this.emit(moveType, {
				currentPassenger: this.currentPassenger,
				currentFloor: this.currentFloor,
			});
		}.bind(this), 1000);
	}

}

module.exports = Elevator;
