function createPlayer(name, age){
  var player = {
    name,
    age,
  };
  player.moveset = [];
  return player
};

function createLevel(name, players){
  var level = {
    name,
    players,
  };
  level.coins = 0;
  level.lives = 3;
  return level;
};

function findCoins(level, num){
  level.coins+=num;
  if(level.coins === 100){
    level.lives+=1;
  }else{
    level.lives-=1;
  }
  return level;
};

function defeatPlayer(level){
  //console.log(level)
  level.lives-=1
  if(level.lives === 0){
   return 'GAME OVER'
  }
  return level;
}



module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };