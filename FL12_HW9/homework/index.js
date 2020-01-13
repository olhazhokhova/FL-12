//#1
function convert(arr){
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'string'){
			arr[i] = parseInt(arr[i]);
		} else {
			arr[i] = arr[i].toString();
		}
	}
	return arr;
}
convert(['1', 2, 3, '4']);


//#2
function executeforEach(arr, callback){
	for(let i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
}
executeforEach([1,2,3], function(el) { 
	console.log(el * 2) 
});


//#3
function mapArray(arr, callback){
	let arrNew = [];
	executeforEach(arr, el => arrNew.push(callback(parseInt(el))));
	return arrNew;
}
mapArray([2, '5', 8], function(el) {
	return el + 3;
});


//#4
function filterArray(arr, callback){
	let arrNew = [];
	executeforEach(arr, el => callback(el) ? arrNew.push(el) : 0);
	return arrNew;
}
filterArray([2, 5, 8], function(el) {
	return el % 2 === 0
});


//#5
function flipOver(str){
	let newStr = '';
	for(let i = str.length-1; i >= 0; i--){
		newStr += str[i];
	}
	return newStr;
}
flipOver('hey world');

//#6
function makeListFromRange(arr){
	let arrNew = [];
	for(let i = arr[0]; i <= arr[arr.length - 1]; i++){
		arrNew.push(i);
	}
	return arrNew;
}
makeListFromRange([2, 7]);

//#7
function getArrayOfKeys(arr, key){
	let arrKeys = [];
	executeforEach(arr, elObj => arrKeys.push(elObj[key]));
	return arrKeys;
}
const actors = [
	{ name: 'tommy', age: 36 },
	{ name: 'lee', age: 28 }
];
getArrayOfKeys(actors, 'name');

//#8
const minNumber = 30;
function substitute(arr){
	let arrNew = [];
	mapArray(arr, function(el){
		if(el > minNumber){
			arrNew.push(el);
		} else {
			arrNew.push('*');
		}
	});
	return arrNew;
}
substitute([58, 14, 48, 2, 31, 29]);