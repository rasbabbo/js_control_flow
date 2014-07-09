var data = require("./products.json")
var items = data["items"] 
// var shopping = [];
// var prodNum = 0
// //console.log(data);
// // Write your solutions below
// for (i = 0; i < data["items"].length; i++) {
// 	var currentItem = data.items[i].kind;
// 	console.log(currentItem);
// 	var prodNum = prodNum
// 	 + 1;

// 	// if (currentItem.kind === 'shopping#product') {
// 	// shopping.push
// 	// }
// }
// console.log(prodNum);


//
// console.log(data["items"]);

//QUESTION 2

// var data = require("./products.json");
// var items = data["items"];
// var backorders = [];

// for (i = 0; i < items.length; i++) {
// 	if (items[i]['product']['inventories'][0]['availability'] === "backorder") {
// 		console.log("backordered");
// 		console.log(items[i]["product"]["title"]);
// 	}
// }


//QUESTION 3 ITEMS W/ MORE THAN 1 IMAGE

var multiImage = []

for (i = 0; i < items.length; i++) {
	if(items[i]["product"]["images"].length > 1) {
		console.log("multiple images");
		console.log(items[i]["product"]["title"]);
	}
}


