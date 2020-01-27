var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var results = [];

for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    for (var k = j + 1; k < array.length; k++) {
      for (var l = k + 1; l < array.length; l++) {
        results.push(array[i] + ' ' + array[j] + ' ' + array[k] + ' ' + array[l]);    
      }
    }
  }
}

var cardDeck = '<ul>';
results.forEach(singleCard => cardDeck += '<li>'+ singleCard + '</li>');
cardDeck += '</ul>'

document.getElementById("app").innerHTML = cardDeck;