function makeNumber(startString){
	let numbers = '';
	for(let i = 0; i < startString.length; i++){
		if(startString[i] >= 0 || startString[i] < 10){
			numbers += startString[i];
		}
	}
	return numbers;
}
makeNumber('erer384jjjfd123');