function createMeal(type,calorieGoal){
 
  var mealInfo = {
    type: type,
    calorieGoal:calorieGoal,
    dishes: []
  };
  return mealInfo;
};
function addDish(mealInfo, dish){

  // mealInfo.dishes.push(dish);

  if(mealInfo.calorieGoal >= dish.calories){
    mealInfo.dishes.push(dish);

    mealInfo.calorieGoal = mealInfo.calorieGoal - dish.calories;
  };
  return mealInfo;
};

function calculateCalories(mealInfo){
  console.log(mealInfo)
  var total = 0;
  for(var i = 0; i < mealInfo.dishes.length; i++){
    total += mealInfo.dishes[i].calories;
  };
  return `${mealInfo.type} has a total of ${total} calories.`
};


module.exports = {
  createMeal,
  addDish,
  calculateCalories
 }