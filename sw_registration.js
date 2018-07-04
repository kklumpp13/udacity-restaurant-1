document.addEventListener("DOMContentLoaded", event => {
	// If the browser doesn't support service workers, return
	if (!navigator.serviceWorker) return;

	// Otherwise log out registration or error details
	navigator.serviceWorker
		.register("sw.js")
		.then(registration => console.log("SW has been registered", registration))
		.catch(error => console.log("SW registration has failed", error));
});
