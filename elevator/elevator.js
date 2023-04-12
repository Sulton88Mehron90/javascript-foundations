function createElevator(building, floors, currentFloor, passengers){
  var elevatorInfo = {
    building,
    floors,
    currentFloor,
    passengers
  };
  return elevatorInfo;
};

function changeFloors(elevatorInfo, destinationFloor){
    console.log('p:', elevatorInfo)
    console.log('p:', destinationFloor)

  if(elevatorInfo.currentFloor === destinationFloor){
    return `You\'re already on floor ${destinationFloor}!`;
  }else if(destinationFloor > elevatorInfo.floors){
     return `Floor ${destinationFloor} does not exist!`;
  }else{
    return `Taking you to floor ${destinationFloor}!`; 
  };
};

function dropOffPassenger(elevatorInfo, passengerName){
  //console.log('p:', elevatorInfo);
  //The indexOf() method returns the first index at which a given element 
  //can be found in the array, or -1 if it is not present.

  var remainingPassengers = elevatorInfo.passengers.indexOf(passengerName);
  //The splice() method changes the contents of an array by removing or 
  //replacing existing elements and/or adding new elements in place

  elevatorInfo.passengers.splice(remainingPassengers,1);
  
    return elevatorInfo.passengers;
};

module.exports = {
    createElevator,
    changeFloors,
    dropOffPassenger
  };
