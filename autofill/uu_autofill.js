setTimeout(fillTOTPField, 1);

function fillTOTPField(){
	let totpObj = new TOTP();
	let totp = totpObj.getOTP(window.uuez2faSecret);
	console.log(totp);
	let textField = document.getElementById("nffc");
	textField.value = totp;
	
	// Part of native JS code of page, submits the TOTP token and finishes login
	processForm();
}
