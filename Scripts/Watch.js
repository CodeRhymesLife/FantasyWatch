var attachListenersToWatchPanelElements = function (elmUrl, elmIFrame) {
	if (!elmUrl)
		throw "Argument elmUrl cannot be null";

	if (!elmIFrame)
		throw "Argument elmIFrame cannot be null";

	var iframeWindow = elmIFrame.contentWindow || elmIFrame;

	// When the url changes navigate to it
	// in the given iframe
	elmUrl.onchange = function () {
		iframeWindow.location.href = elmUrl.value;
	}
}

window.onload = function () {
	attachListenersToWatchPanelElements(document.getElementById("watchUrl"), document.getElementById("watchIFrame"));
}