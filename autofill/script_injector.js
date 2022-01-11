function addScript(internalURL, defer = false){
	let scriptElem = document.createElement("SCRIPT");
	scriptElem.src = chrome.extension.getURL(internalURL);
	document.getElementsByTagName("HEAD")[0].appendChild(scriptElem);
}

// Obtain secret to inject into page
chrome.storage.sync.get("secret", function (data){
	let secret = data.secret;
	let secretInjectCode = "window.uuez2faSecret = '" + secret + "';";
	let scriptElem = document.createElement("SCRIPT");
	scriptElem.innerText = secretInjectCode;
	document.getElementsByTagName("HEAD")[0].appendChild(scriptElem);
});

addScript("libs/jsSHA/sha.js");
addScript("autofill/totp.js");
addScript("autofill/uu_autofill.js");
