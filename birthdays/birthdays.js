function createBirthday(name, month, day){
  var birthday = {
    name,
    month,
    day
  };
  return birthday;
};

function celebrateBirthday(birthday){
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
};

function countBirthdays(birthdays, month){
    //console.log(birthdays[0].month)
    console.log(birthdays)
  var count = 0;
  for(var i = 0; i < birthdays.length; i++){
    if(birthdays[i].month === month){
      count += 1;
    };
  };
  return count;
};

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };