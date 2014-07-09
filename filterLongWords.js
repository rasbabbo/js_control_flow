var words = ["hairy", "dad", "crazy", "uninhabited", "california"];
var maxLength = 6;
var newArray = [];

for (var i = 0; i < words.length; i++ ) {
	if (words[i].length <= maxLength) {
		newArray.push(words[i]);
	}
}

console.log(newArray);