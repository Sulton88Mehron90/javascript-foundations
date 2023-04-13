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
    //console.log(tapeInfo)

  var tapeCollection = [];
  tapeCollection.push(tapeInfo);
   // console.log('p', tapeCollection)

  for(var i =0; i < tapeCollection.length; i++){
    if(tapeCollection.length === 0){
        return 'Your collection is empty';
    };
    tapeCollection = tapeCollection[i].title;
        return tapeCollection;
  };
};

module.exports = { 
    createTape,
    reset,
    createCollection

 }
