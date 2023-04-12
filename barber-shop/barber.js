function createBarber(name, earnings, haircuts){
  var barberInfo = {
    name,
    earnings,
    haircuts
  };
  if(barberInfo.earnings === undefined || barberInfo.haircuts === undefined){
    barberInfo.earnings = 0;
    barberInfo.haircuts = [];
  }
  return barberInfo;
};
function giveCompliment(haircuts){
   // console.log('p:', haircuts)
    return `This ${haircuts.style} looks great!`
};

function cutHair(barberInfo, haircuts){
   // console.log('p:', barberInfo.haircuts);
   // console.log(haircuts);

    barberInfo.haircuts.push(haircuts);

    return barberInfo;
};

function cutHair(barberInfo, cutInfo){
  console.log('p:',barberInfo)
  console.log('p:', cutInfo)

  barberInfo.earnings = 0;

  barberInfo.haircuts.push(cutInfo)

  for(var i =0; i < barberInfo.haircuts.length; i++){
    barberInfo.earnings += barberInfo.haircuts[i].price 
  };
  return barberInfo;
};

module.exports = { 
    createBarber,
    giveCompliment,
    cutHair
 };