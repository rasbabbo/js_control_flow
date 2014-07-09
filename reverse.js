var inputString = "building"
var inputArray = inputString.split("");
var newArray = []


for (var i = 0; i < inputArray.length; i += 1){
	newArray.unshift(inputArray[i]);
}
var newString = newArray.join("")
console.log(newString)
