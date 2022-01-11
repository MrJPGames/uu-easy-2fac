function addScript(internalURL, defer = false){
	let scriptElem = document.createElement("SCRIPT");
	scriptElem.src = chrome.extension.getURL(internalURL);
	document.getElementsByTagName("HEAD")[0].appendChild(scriptElem);
}

addScript("extensionSetup/uu_hooker.js");
