
function createAirport(name, airlines, availableGates){
  var airport = {
    name,
    airlines,
    availableGates,
  };
  return airport;
};
function welcomeGuests(airport){
  return `Welcome to ${airport.name}!`
};

function landPlanes(airport, lended){
  if(airport.availableGates > lended){
    airport.availableGates = airport.availableGates - lended
    return `Success! Current availability is ${airport.availableGates}.`;
  }else{
    var overflow = lended - airport.availableGates; 
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`; 
  } 
};

function checkAirlineLocations(airportList, airline) {
  var connectedLocation = [];
  for(var i=0; i<airportList.length; i++) {
    if(airportList[i].airlines.includes(airline)) {
      connectedLocation.push(airportList[i].name);
    }
  }
  return connectedLocation;
};



module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
