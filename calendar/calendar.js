function createEvent(title, month, day){
  var event = {
    title,
    month,
    day,
  };

  if(day > 31 || day <= 0){
    return `Error: ${event.day} is not a valid day`
  }else{
    return event;
  };
};

function createCalendar(owner, events){
  var calendar = {
    owner,
    events
  };
 // console.log('parvin',calendar.events)
  return calendar;
};

function reportMonthlyEvents(calendar, month){
  console.log('Object:', calendar.events);
  console.log('Object:', calendar[0]);
  console.log('String:', month)

  // iterate over the array to match the month of the event happens
 // concatinate all of the events keys from each element in the 
 //array that is passed through as an argument
 
  var monthlyEvents = [];

  for(var i = 0; i < calendar.events.length; i++){
    if(calendar.events[i].month === month){
        monthlyEvents.push(calendar.events[i]);

        // monthlyEvents = monthlyEvents.concat(calendar.events[i]);
    };
  };
  return monthlyEvents
};


module.exports = { 
    createEvent,
    createCalendar,
    reportMonthlyEvents
 };