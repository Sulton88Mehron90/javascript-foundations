function createIngredient(name, price){
 // console.log(name)
  var ingrediant = {
    name,
    price
  };
  if(ingrediant.name === undefined || ingrediant.price === undefined){
    ingrediant.name = 'unknown';
    ingrediant.price = 0.00;
  }
  return ingrediant
};

function createTaco(name, ingredients){
  //console.log(name)
 // console.log(ingredients)

  var tacoInfo ={
    name: 'custom',
    ingredients:[]
  };
  
  if(name){
    tacoInfo.name = name;
  };
  
  if(ingredients){
    tacoInfo.ingredients = ingredients;
  };
  return tacoInfo
};

module.exports = {
    createIngredient,
    createTaco
}
