function addOne(x) {
  return x + 1;
}
function pipe(arg1){
	for(let i = 0; i < arguments.length; i++){
		if(arguments[i] !== arguments[0]){
			arg1 = addOne(arg1);
		}
	}
	return arg1;
}
pipe(1, addOne, addOne);