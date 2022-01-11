function setSecret(secret){
    chrome.storage.sync.set({"secret": secret});
}

function init() {
    document.getElementById("linkToExplainer").href = chrome.runtime.getURL("popup/explainer.html");
    chrome.storage.sync.get("secret", function (data){
        document.getElementById("secretInput").value = data.secret;
    });
    document.getElementById("secretInput").onchange = function(){
        let secret = document.getElementById("secretInput").value;
        setSecret(secret);
    }
}

setTimeout(init,1);
