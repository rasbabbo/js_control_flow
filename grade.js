var score = 88;

switch (true) {
	case score >= 89:
		console.log("A");
		break;
	case score >= 79 && score < 89:
		console.log("B");
		break;
	case score >= 69 && score < 79:
		console.log("C");
		break;
	case score >= 59 && score < 69:
		console.log("D");
		break;
	case score < 59:
		console.log("You're screwed");
		break;
	default:
		console.log("not a score");
		break;
};