function createCollection(name, description, tracks){
  var collectionInfo = {
    name,
    description,
    tracks: []
  };
  return collectionInfo;
};

function createTrack(title, artist, duration){
  var trackInfo = {
    title,
    duration,
    artist
  };
   if(trackInfo.title === undefined && trackInfo.artist === undefined && trackInfo.duration === undefined){
    trackInfo.title = 'unknown';
    trackInfo.artist = 'unknown';
    trackInfo.duration = 0; 
   };
  return trackInfo;
};

function reviewTrack(trackInfo){
  if(trackInfo.artist === 'Red Hot Chili Peppers'){
    return `The song ${trackInfo.title} rules!`
  };
  return `I wish this was a Red Hot Chili Peppers song.`
};

function addTrack(collectionInfo, trackInfo){
  collectionInfo.tracks.push(trackInfo);
  return collectionInfo;
};

function getTotalDuration(collectionInfo){
  var totalDuration = 0;

  for(var i = 0; i < collectionInfo.tracks.length; i++){
    totalDuration += collectionInfo.tracks[i].duration;
  };

  return totalDuration;
};

function findTracksByArtist(collectionInfo, artist){

  var tracksList = [];
  
  for(var i = 0; i < collectionInfo.tracks.length; i++){
    
    if(collectionInfo.tracks[i].artist === artist){
      
      tracksList.push(collectionInfo.tracks[i]);
    };
  };
  return tracksList;
};


  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }