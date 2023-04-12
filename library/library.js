function issueCard(name, age){
  var cardInfo = {
    name,
    age,
    numBooksCheckedOut: 0,
    isChild: false
  };
  if(cardInfo.age < 12 ){
    cardInfo.isChild = true;
  };
  return cardInfo;
};

function searchByAuthor(collection, author){
  console.log('p:', collection[1])
  console.log(author)
  var searchResults = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i].author === author){
        searchResults.push(collection[i]);
    };
  };
  if(searchResults.length > 0){
    return searchResults;
  } else{
  return 'No book found for search criteria';
  };
};

module.exports = {
    issueCard,
    searchByAuthor
 };