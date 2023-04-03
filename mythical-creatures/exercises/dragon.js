function createDragon(name, rider, temperment){
  //return {name:name};
  var dragon = {
   // name: name
   name,
   rider,
   temperment
  };
  dragon.timesEaten = 0;
  dragon.hungry = true;
  return dragon;
};

function greetRider(dragon){
  //rider = dragon.rider
  return `Hi, ${dragon.rider}!`
};

function eat(dragon){
  dragon.timesEaten++
  if(dragon.timesEaten >= 3){
    dragon.hungry = false
  };
    return dragon;
};

function findFireBreathers(allDragons){
  var fireBreathers = [];
  for(var i = 0; i < allDragons.length; i++){
    if(allDragons[i].temperment === 'aggressive'){
      fireBreathers.push(allDragons[i])
    };
  };
  return fireBreathers;
};

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}