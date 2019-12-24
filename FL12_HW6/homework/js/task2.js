let	a, b, c;

a = parseInt(prompt("Input triangle length side 'a'"));
b = parseInt(prompt("Input triangle length side 'b'"));
c = parseInt(prompt("Input triangle length side 'c'"));

if(isNaN(a) || isNaN(b) || isNaN(c)){
	console.log('Input values should be ONLY numbers');
} else if(a <= 0 || b <= 0 || c <= 0){
	console.log('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || b + c < a || c + a < b){
	console.log('Triangle doesn’t exist');
} else {
	if(a === b && b === c){
		console.log('Equilateral triangle');
	} else if(a === b || b === c || c === a){
		console.log('Isosceles triangle');
	} else {
		console.log('Scalene triangle');
	}
}
