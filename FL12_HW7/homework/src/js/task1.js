let 
	minEmailLength = 5,
	minPassLength = 6,
	user = 'user@gmail.com',
	userPass = 'UserPass',
	admin = 'admin@gmail.com',
	adminPass = 'AdminPass';

let email = prompt('Input email', '');

if(!email){
	alert('Canceled');
} else if(email.length < minEmailLength){
	alert('I don’t know any emails having name length less than 5 symbols');
} else if(email === user || email === admin){
	let pass = prompt('Input password', '');

	if(!pass){
		alert('Canceled');
	} else if(email === user && pass === userPass || email === admin && pass === adminPass){

		let changePass = confirm('Do you want to change your password?');

		if(changePass){
			let pass2 = prompt('Input password', '');

			if(!pass2){
				alert('Canceled');
			} else if(email === user && pass2 === userPass || email === admin && pass2 === adminPass){
				let passNew = prompt('Input new password', '');

				if(!passNew){
					alert('Canceled');
				} else if(passNew.length < minPassLength){
					alert('It’s too short password. Sorry.');
				} else{
					let passNewRepeat = prompt('Repeat new password', '');

					if(passNew !== passNewRepeat){
						alert('You wrote the wrong password.');
					} else{
						alert('You have successfully changed your password.');
					}
				}
			} else{
				alert('Wrong password');
			}
		} else{
			alert('You have failed the change.');
		}
	} else{
		alert('Wrong password');
	}
} else{
	alert('I don’t know you');
}