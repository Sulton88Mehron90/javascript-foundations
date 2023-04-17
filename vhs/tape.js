function createTape(title, readyToPlay){
  var tapeInfo = {
    title,
    readyToPlay: false
  };
  return tapeInfo;
};

function reset(tapeInfo){
  tapeInfo.readyToPlay = true;
  return tapeInfo;
};

function createCollection(tapeInfo){
// tapeInfo is sometimes and object, other times an array
// need a conditional if obj, if array
var collections = []
// if it's an object, push it into collections, return it
if (tapeInfo.length === 0) {
  return "Your collection is empty"
}  

if (!tapeInfo.title) { // is it an object? Or array
    for (var i = 0; i < tapeInfo.length; i++) { // if it's an array, we loop
      collections.push(tapeInfo[i].title)
    }
  }
if (tapeInfo.title) {
   collections.push(tapeInfo.title)
}
return collection
// if its an array, we'd loop over it, and only push the titles in

// return the collections array


 console.log(tapeInfo)

  var collection = [];
  collection.push(tapeInfo)
  return collection
};

module.exports = { 
    createTape,
    reset,
    createCollection

 }
