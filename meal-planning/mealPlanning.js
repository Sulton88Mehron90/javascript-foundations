function createMeal(type,calorieGoal){
 
  var mealInfo = {
    type: type,
    calorieGoal:calorieGoal,
    dishes: []
  };
  return mealInfo;
};
function addDish(mealInfo, dish){
  console.log(mealInfo)
  console.log(dish)

  mealInfo.dishes.push(dish);

  if(mealInfo.calorieGoal >= dish.colories){
    mealInfo.dishes.push(dish);
    mealInfo.alorieGoal = mealInfo.calorieGoal - dish.colories;
  };
  return mealInfo;
};


module.exports = {
  createMeal,
  addDish
 }