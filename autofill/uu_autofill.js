setTimeout(fillTOTPField, 1);

function fillTOTPField(){
	let totpObj = new TOTP();
	let totp = totpObj.getOTP("P57HD7UONEUCZIBHLLG7DI2TAGZELAU2");
	console.log(totp);
	let textField = document.getElementById("nffc");
	textField.value = totp;
	
	// Part of native JS code of page, submits the TOTP token and finishes login
	processForm();
}
