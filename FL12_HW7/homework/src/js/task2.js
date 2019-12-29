const startMaxPrise = 100,
	startMaxRange = 8,
	TWO = 2,
	FOUR = 4;

let	minPoint = 0,
	maxPoint = 8, 
	maxWin = 100,
	countAttempts = 3,
	totalPrice = 0,
	playingGame = true,
	play = confirm(`Do you want to play a game?`);

if(!play){
	alert(`You did not become a billionaire, but can.`);
} else {
	while(playingGame){
		let randomPoint = Math.floor(Math.random() * (maxPoint - minPoint + 1)) + minPoint;
		let priceWin = maxWin;
		let winner = false;

		for(let i = countAttempts; i > 0; i--){
			let chosenPoint = prompt(`Choose a rollet pocket number from 0 to ${maxPoint}` 
									+ `\nAttempts left: ${i}`
									+ `\nTotal price: ${totalPrice}$`
									+ `\nPossible price on current attempt: ${priceWin}$`);
			if(!chosenPoint){
				break;
			}
			if(parseInt(chosenPoint) === randomPoint){
				totalPrice += priceWin;
				winner = true;
				break;
			} 	
			priceWin /= TWO;
		}

		if(!winner){
			alert(`Thank you for your participation. Your prize is: ${totalPrice}$`);
			maxWin = startMaxPrise;
			maxPoint = startMaxRange;
			totalPrice = 0;	
			let continueNotWinner = confirm('Do you want to play a game again?');
			if(continueNotWinner){
				continue;
			} else{
				playingGame = false;
			}
		} else {
			let wantAgain = confirm(`Congratulation, you won! Your prize is: ${totalPrice}$. Do you want to continue?`);
			if(!wantAgain){
				alert(`Thank you for your participation. Your prize is: ${totalPrice}$`);
				let continueAgain = confirm(`Do you want to play a game again?`);	
				if(continueAgain){
					maxWin = startMaxPrise;
					maxPoint = startMaxRange;
					totalPrice = 0;
					continue;
				} else{
					playingGame = false;
				}
			} else{
				maxPoint += FOUR;
				maxWin *= TWO;
				continue;
			}
		}
	}
}