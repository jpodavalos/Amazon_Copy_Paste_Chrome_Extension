function copyInfo() {
    chrome.tabs.executeScript(null, {
        file: "copy.js"
    });
};

function pasteInfo() {
    chrome.tabs.executeScript(null, {
        file: "paste.js"
    });
};


document.getElementById("btnCopy").onclick = copyInfo;
document.getElementById("btnPaste").onclick = pasteInfo;