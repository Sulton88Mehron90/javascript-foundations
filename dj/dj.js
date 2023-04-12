function createSong(name, artist){
  var song ={
    name,
    artist,
    hasBeenPlayed: false
  };
  return song;
};

function playSong(song){
  song.hasBeenPlayed = true;  
  return song;
};

function makePlaylist(name, songs){
    //console.log(songs)
  var playList = {
    name,
    songs
  };
  return playList;
};

function addSongToPlaylist(playList, song){
 playList.songs.push(song)
 return playList
};

function playAllSongs(playList){
  for(var i = 0; i < playList.songs.length; i++){
    playList.songs[i].hasBeenPlayed = true;
  };
  return playList;
};





module.exports = {
   createSong,
   playSong,
   makePlaylist,
   addSongToPlaylist,
   playAllSongs
 };
