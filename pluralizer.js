function pluralize(name,number) {
	if (number === 1) {
		console.log(number + " " + name)
	}
	else {
		console.log(number + " " + name + "s")
	}
}

pluralize("Clint", 4);
