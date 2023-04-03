function createVampire(name, pet){
 var vampire = {
  name,
  pet,
  thirsty: true,
  ouncesDrank: 0
  };
  if(vampire.pet === undefined){
    vampire.pet = "bat";
  };
  return vampire;
};

function encounterDeliciousVictim(vampire){
  //console.log(vampire)
  if(vampire.thirsty){
    return 'I WANT TO SUCK YOUR BLOOD!';
  }else{
    return 'No thanks, I am too full.'
  };
};

function drink(vampire){

  if(vampire.ouncesDrank < 50 ){
    vampire.thirsty = false;
    vampire.ouncesDrank += 10;
  };
  return vampire;
};

function inquirePlace(locations, name){
  for(var i = 0; i < locations.length; i++){
    if(locations[i] === name){
      return "Yes, I have spent some time in New Orleans.";
    };
  };
  return  "No, I have never been to Idaho.";
};

function findBatLovers(vampires){
  var batLovers = [];
  for(var i = 0; i < vampires.length; i++){
    if(vampires[i].pet === 'bat'){
      batLovers.push(vampires[i].name);
    };
  };
  return batLovers
};

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}