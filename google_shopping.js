var data = require("./products.json") 
var shopping = [];
var prodNum = 0
//console.log(data);
// Write your solutions below
for (i = 0; i < data["items"].length; i++) {
	var currentItem = data.items[i].kind;
	console.log(currentItem);
	var prodNum = prodNum
	 + 1;

	// if (currentItem.kind === 'shopping#product') {
	// shopping.push
	// }
}
console.log(prodNum);


//
// console.log(data["items"]);