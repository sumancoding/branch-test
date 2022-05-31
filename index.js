//Loops small exercise to test

let input = "I am a Disco Dancer. hahaha";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
	//console.log(`i is position as ${i}`)
	if (input[i] === "e") {
		resultArray.push(input[i]);
	}
	if (input[i] === "u") {
		resultArray.push(input[i]);
	}

	for (let j = 0; j < vowels.length; i++) {
		//console.log(`j is positoned as ${vowels[i]}`)
		if (input[i] === vowels[j]) {
			resultArray.push(input[i]);
		}
	}
}
console.log(resultArray);
