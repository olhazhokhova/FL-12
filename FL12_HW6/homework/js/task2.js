let	a, b, c;

a = parseInt(prompt("Input triangle length side 'a'"));
b = parseInt(prompt("Input triangle length side 'b'"));
c = parseInt(prompt("Input triangle length side 'c'"));

if(isNaN(a) || isNaN(b) || isNaN(c)){
	alert('Input values should be ONLY numbers');
} else if(a === 0 || b === 0 || c === 0){
	alert('A triangle must have 3 sides with a positive definite length');
}
