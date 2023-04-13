var person1 = {
    name: "Parvin",
    student: true,
    mod: 1
}

var person2 = {
    name: 'Laura',
    student: false,
    mod: 0
}

function getPersonInfo(human) {
    if (human.student) {
        return `${human.name} is a student in Mod ${human.mod}`;
    } else {
        human.quality = "kindhearted";
        return human;
    }
}

//assert.equal(person2.quality, "kindhearted")

console.log(getPersonInfo(person2))
console.log(getPersonInfo(person1))

//concat() method
var array = [1,2,3]
var array2 = [4,5,6]
console.log(array)
var concatArrays = array.concat(array2)
console.log(concatArrays)
console.log(array)

var obj1 = {ingredients: [1,2,3]};
var obj2 = {ingredients: [4,5,6]};
var obj3 = {ingredients: [7,8,9]};
var allObjs = [obj1,obj2,obj3]
function listIngredients(allFoods) {
    var list = []
    for(var i = 0; i < allFoods.length; i++) {
      list = list.concat(allFoods[i].ingredients);
    }
    return list;
}
console.log(listIngredients(allObjs))

function checkAirlineLocations(airportList, airline) {
    var connectedLocation = [];
    for(var i=0; i<airportList.length; i++) {
      if(airportList[i].airlines.includes(airline)) {
        connectedLocation.push(airportList[i].name);
      }
    }
    return connectedLocation;
  };

  function searchByAuthor(collection, author){
    // console.log('p:', collection[1])
    // console.log(author)
    var searchResults = [];
    for(var i = 0; i < collection.length; i++){
      if(collection[i].author === author){
          searchResults.push(collection[i]);
      };
    };
    if(searchResults.length > 0){
      return searchResults;
    } else{
    return 'No book found for search criteria';
    };
  };

  function cutHair(barberInfo, haircuts){
    // console.log('p:', barberInfo.haircuts);
     console.log(haircuts);
     barberInfo.haircuts.push(haircuts);
 
     return barberInfo;
 };
