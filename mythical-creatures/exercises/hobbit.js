function createHobbit(name, age){
  //console.log(name)
  var hobbit = {
    name,
    age
  };
  if(hobbit.age === undefined || hobbit.name === undefined){
    hobbit.age = 0;
    hobbit.name = 'unknown';
  };
  return hobbit;
};

function celebrateBirthday(hobbit){
  //console.log(hobbit);
  // hobbit.age = +1;
  hobbit.isAdult = false;
  if(hobbit.age <= 32){
    hobbit.age = +3;
    
  };
  return hobbit
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}