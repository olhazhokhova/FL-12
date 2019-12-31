function makeNumber(startString){
	let numbers = '';
	for(let i = 0; i < startString.length; i++){
		if(startString[i] >= 0 || startString[i] < 10){
			numbers += startString[i];
		}
	}
	return numbers;
}
function countNumbers(startString){
	let arr = makeNumber(startString);
	let arrResult = {};
	for(let i = 0; i < arr.length; i++){
		let timesNumber = 0;
		for(let j = 0; j < arr.length; j++){
			if(arr[j] === arr[i]){
				timesNumber++;
			}
		}
		arrResult['\''+ arr[i] +'\''] = timesNumber; 
	}
	return arrResult;
}
countNumbers('erer384jj4444666888jfd123');