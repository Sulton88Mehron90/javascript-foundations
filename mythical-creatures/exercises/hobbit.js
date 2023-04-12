function createHobbit(name, age){
  //console.log(name)
  var hobbit = {
    name: name ? name:'unknown',
    age: age ? age: 0,
    isAdult:false,
    isOld: false,
    acquaintances: []
  };
  // if(hobbit.age === undefined || hobbit.name === undefined){
  //   hobbit.age = 0;
  //   hobbit.name = 'unknown';
  // };
  return hobbit;
};

function celebrateBirthday(hobbit){
  //console.log(hobbit);
  //x += y is equivalent to x = x + y.
  hobbit.age += 1;
  if(hobbit.age >= 101){
    hobbit.isOld = true;
  }else if(hobbit.age > 32){
    hobbit.isAdult = true;
  }
  return hobbit
};

function getRing(hobbit){
  //console.log(hobbit)
  if(hobbit.name === "Frodo"){
    return `Here is the ring!`;
  };
return `You can\'t have it!`;
};

function meetPeople(hobbit, people){
  // console.log(hobbit)
  // console.log(people)
  for(var i =0; i < people.length; i++){
  hobbit.acquaintances.push(people[i]);
  };
  return hobbit;
};

function findFriends(hobbit){
  console.log(hobbit)
  var friends = [];
  for(var i = 0; i < hobbit.acquaintances.length; i++){
   if(hobbit.acquaintances[i].relationship === 'friend'){
    friends.push(hobbit.acquaintances[i].name);
   };
  };
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}