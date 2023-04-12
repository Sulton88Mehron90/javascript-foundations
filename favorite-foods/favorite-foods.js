function createFavoriteFood(food){
  var newDish = {
    name:food.dish,
    ingredients:food.ingredients,
    isSpicy:food.isSpicy,
    timesOrdered: 0
  };
  return newDish;
};

function commentOnSpiciness(newDish){
  if(newDish.isSpicy === true){
    return `Wow, this ${newDish.name} is so spicy!`
  }else{
    return `Phew, this ${newDish.name} is not very spicy.`
  };
};

function orderFood(newDish){
  newDish.timesOrdered+= 1;
  //console.log(newDish.timesOrdered)
  return newDish;
};

function createShoppingList(allFoods){
// concatinate all of the ingredient keys from each element in the array that is passed through as an argument
// iterate over the array 
    // use the index position (i) to replace fixed number (0, 1, etc)
    var ingredientList = []
    for (var i =0; i < allFoods.length; i++) {
        ingredientList = ingredientList.concat(allFoods[i].ingredients)
    }
// var list = allFoods[0].ingredients.concat(allFoods[1].ingredients)
return ingredientList;
};



module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};