function createItemStock(name, quantity, price){
    //console.log(name)
  var itemStock = {
  name,
  quantity,
  price
  };
  if(itemStock.name === undefined){
    itemStock.name = 'unknown';
    itemStock.quantity = 0,
    itemStock.price = 1.00
  };
return itemStock;
};

function makePurchase(itemStock, price){
   // console.log(price)
  if(itemStock.price > price){
    return `Sorry, you need at least $${itemStock.price} to make that purchase`; 
  };

  if(itemStock.quantity === 0){
    return `Sorry, there are none left`;
  }else{
    return `Here are your ${itemStock.name}`;
  };
};

// Simplest way to sum the 
// number in an array in JavaScript would look like this

// var numbers = [1,2,3,4]

// var sum = 0;

// for(var i = 0; i < numbers.length; i++){

// sum += numbers[i]

// }


function collectChange(looseChange){
    console.log(looseChange)
    var total = 0;
  for(var i = 0; i < looseChange.length; i++){
    total += looseChange[i]
  };
   return total;
};

module.exports = {
    createItemStock,
    makePurchase,
    collectChange
}
