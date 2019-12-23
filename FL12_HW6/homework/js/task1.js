let	a, b, c, d, x1, x2, x;
const 
	c2 = 2, 
	c4 = 4, 
	c_1 = -1; 

a = parseFloat(prompt("Input quadratic coefficient 'a'"));
b = parseFloat(prompt("Input quadratic coefficient 'b'"));
c = parseFloat(prompt("Input quadratic coefficient 'c'"));

if(a === 0 || isNaN(a) || isNaN(b) || isNaN(c)){
	console.log('Invalid input data');
} else {
	d = Math.pow(b,c2) - c4 * a * c;
	if(d > 0) {
		x1 = (c_1 * b + Math.sqrt(d)) / (c2 * a);
		x2 = (c_1 * b - Math.sqrt(d)) / (c2 * a);
		console.log('x1 = ' + x1, 'x2 = ' + x2);
	} else if(d === 0){
		x = c_1 * b / (c2 * a);
		console.log('x = ' + x);
	} else {
		console.log('Quadratic equation has no solution');
	}
}