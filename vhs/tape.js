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
 // console.log(tapeInfo)

  var tapeCollection = [];
  tapeCollection.push(tapeInfo);
   

  for(var i =0; i < tapeCollection.length; i++){
    if(tapeCollection.length === 0){
      return 'Your collection is empty';
    }else{
      tapeCollection[i]
      console.log('ffff', tapeCollection)
    }
  };
  return tapeCollection;
};

module.exports = { 
    createTape,
    reset,
    createCollection

 }
