//Create a web page with 12 HTML elements of the same class use
//Populate elements using JS
//Create an array of 24 words and then use a query selector to return all the 12 elements as a NodeList.
//Use a FOR loop to iterate through the NodeList and insert into the HTML a random word from the array of words

var mnemonicArray = document.getElementsByClassName('mnemonic');

for (var q = 0; q < mnemonicArray.length; q++) {
var codes = ['rat', 'thumb', 'wale', 'noxious', 'smarten', 'hair', 'gramazone', 'salty', 'corbeaux', 'cup', 'opera', 'pillow', 'pipe', 'mk14ebr', 'usb', 'painting', 'tv', 'fan', 'sneaker', 'backpack', 'basket', 'noose', 'lightbulb', 'playstation'];

var random = Math.floor(Math.random() * codes.length);
  mnemonicArray[q].textContent = codes[random];
  }
