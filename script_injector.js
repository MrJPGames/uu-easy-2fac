function addScript(internalURL, defer = false){
	let scriptElem = document.createElement("SCRIPT");
	scriptElem.src = chrome.extension.getURL(internalURL);
	document.getElementsByTagName("HEAD")[0].appendChild(scriptElem);
}

addScript("jsSHA/sha.js");
addScript("autofill/totp.js");
addScript("autofill/uu_autofill.js");
