//the code below will determine how often a contestant wins if they were to change their choice after a door was revealed
let win = 0;
let lose = 0;

function montyProblem(){

	for (let i = 1; i < 1000; i++){
		let carPosition = Math.floor(Math.random() * 3);
		let userGuess = Math.floor(Math.random() * 2);
		let revealedDoor;
		
		for (let j = 0; j <= 2; j++){
			if(j != carPosition && j != userGuess){
				revealedDoor = j;
			}
		}
		for (let k = 0; k <= 2; k++){
			if(k != userGuess && k != revealedDoor){
				userGuess = k;
			}
		}

		if(carPosition === userGuess){
			win++;
		}else{
			lose++;
		}
	}

	console.log("wins: " + win);
	console.log("lose: " + lose);
}





montyProblem();