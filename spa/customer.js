function createCustomer(name, bill, bookings){
  var customerInfo = {
    name,
    bill,
    bookings
  };
 if(customerInfo.bookings === undefined){
    customerInfo.bookings = [];
 }
 return customerInfo;
};

function greeting(customerInfo){
  if(customerInfo.bill === 0){
    return `${customerInfo.name}! Welcome to Happy Spa`
  };
  return `${customerInfo.name}! Welcome back to Happy Spa`
};

function createService(name, cost){
  var serviceInfo = {
    name,
    cost
  };
  if(serviceInfo.name === undefined && serviceInfo.cost === undefined){
    return `Please provide service name and cost.`
  };
  return serviceInfo;
};

function bookServices(customerInfo,serviceInfo){

  customerInfo.bookings.push(serviceInfo.name);
  customerInfo.bill += serviceInfo.cost;
  
    return customerInfo;
};

function applyGiftCard(allServices,giftCardAmount){
    affordableServices = [];
  for(var i = 0; i < allServices.length; i++){
    if(allServices[i].price <= giftCardAmount){
      affordableServices.push(allServices[i].name);
    };
  };
  return affordableServices;
};




module.exports = { 
    createCustomer,
    greeting,
    createService,
    bookServices,
    applyGiftCard
 }
