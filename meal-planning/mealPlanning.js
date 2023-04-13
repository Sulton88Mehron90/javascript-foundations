function createMeal(type, calorieGoal){
  var mealInfo ={
    type,
    calorieGoal,
    dishes: []
  };
return mealInfo;
};

function addDish(mealInfo, dishes){
    // console.log(mealInfo)
    // console.log(dishes)
    mealInfo.dishes.push(dishes);
  if(mealInfo.calorieGoal >= dishes.calories){
    mealInfo.calorieGoal = dishes.calories;
  }else{
    mealInfo.dishes.length = 0
  };
  return mealInfo;
};


module.exports = {
    createMeal,
    addDish
 }