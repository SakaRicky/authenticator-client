document.getElementById("google").addEventListener("click", function () {
	console.log("Cliked Google button");

	let timer = null;
	// Open a new window with the specified size and URL
	const newWindow = window.open(
		"https://authenticator-ricky.onrender.com/login/google",
		"newwindow",
		"width=500, height=650"
	);

	if (newWindow) {
		timer = setInterval(() => {
			if (newWindow.closed) {
				console.log("You are authenticated");
				window.location.href = "http://127.0.0.1:5500/welcome.html";
				if (timer) clearInterval(timer);
			}
		}, 500);
	}
});
