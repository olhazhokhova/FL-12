function isLeapYear(year){
	let checkYear = new Date(year);
	if ('Invalid Date' === checkYear.toString()) {
		console.log('Invalid Date');
	} else {
		year = checkYear.getFullYear();
		if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
			console.log(`${year} is a leap year`);
		} else {
			console.log(`${year} is not a leap year`);
		}
	}
}
isLeapYear('2020-01-01 00:00:00');