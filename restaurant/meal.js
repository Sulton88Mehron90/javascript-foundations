function createMeal(name, specialRequests, tableNumber){
   var mealInfo = {
    name,
    specialRequests,
    tableNumber,
    complete: false
   };
   return mealInfo;
};

function getMade(mealInfo){
    if(mealInfo.complete === false){
        mealInfo.complete = true;
    };
    return mealInfo;
};

function announceMeal(mealInfo){
  if(mealInfo.complete === true){
    return `Order up - ${mealInfo.name} for table 4!`
  } else{
    mealInfo.complete = false;
    return `This ${mealInfo.name} is not completed yet`
  };
    
};

function createOrder(orderInfo){
   // console.log(orderInfo)
  var orderInfo = {
    tableNumber: orderInfo.tableNumber,
    meals: orderInfo.meals
  };
  orderInfo.completedMeals = [];
    // if(orderInfo.meals){
    //     orderInfo.completedMeals.push(orderInfo.meals);
    // };
  return orderInfo;
};

function cookMeal(orderInfo,mealInfo){
   // console.log('1', orderInfo)
    // 1 {
    //     tableNumber: 3,
    //     meals: [
    //       {
    //         name: 'Pico de Gallo Quesadillas',
    //         specialRequests: [],
    //         tableNumber: 3,
    //         complete: false
    //       },
    //       {
    //         name: 'Sombra Shroom Griddled Tacos',
    //         specialRequests: [Array],
    //         tableNumber: 3,
    //         complete: false
    //       },
    //       {
    //         name: 'The Situation Gordita',
    //         specialRequests: [Array],
    //         tableNumber: 3,
    //         complete: false
    //       }
    //     ],
    //     completedMeals: []
    //   }
     console.log('2', mealInfo)
    //  2 {
    //     name: 'Pico de Gallo Quesadillas',
    //     specialRequests: [],
    //     tableNumber: 3,
    //     complete: false
    //   }

    if(!mealInfo.complete === false){
      orderInfo.completedMeals.push(mealInfo);
      return orderInfo.completedMeals > 0;
    };  
  return  orderInfo;
};



module.exports = {
    createMeal,
    getMade,
    announceMeal,
    createOrder,
    cookMeal
 };
