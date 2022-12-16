const ENV = "dev";
const getUserURL =
	ENV === "dev"
		? "http://localhost:3001/getuser"
		: "https://authenticator-ricky.onrender.com/getuser";

document
	.getElementById("google-sso-button")
	.addEventListener("click", function () {
		console.log("clicked Google");
		const googleURL =
			ENV === "dev"
				? "http://localhost:3001/login/google"
				: "https://authenticator-ricky.onrender.com/login/google";
		const authWindow = window.open(googleURL, "_blank", "width=500,height=700");
		let timer;
		localStorage.removeItem("loggedInUser");

		const fetchAuthUser = () => {
			axios
				.get(getUserURL, {
					withCredentials: true,
				})
				.then(res => {
					console.log("res.data google: ", res);
					localStorage.setItem(
						"loggedInUser",
						JSON.stringify({
							name: res.data.displayName,
							email: res.data.emails[0].value,
							picture: res.data.photos[0].value,
							provider: res.data.provider,
						})
					);
					console.log(localStorage);
					window.location = "/welcome.html";
				});
		};

		if (authWindow) {
			timer = setInterval(() => {
				if (authWindow.closed) {
					console.log("Yay we're authenticated");
					fetchAuthUser();
					if (timer) clearInterval(timer);
				}
			}, 500);
		}
	});

const githubURL =
	ENV === "dev"
		? "http://localhost:3001/login/github"
		: "https://authenticator-ricky.onrender.com/login/github";
document
	.getElementById("github-sso-button")
	.addEventListener("click", function () {
		console.log("clicked github");
		const authWindow = window.open(githubURL, "_blank", "width=500,height=700");
		let timer;
		localStorage.removeItem("loggedInUser");

		const fetchAuthUser = () => {
			axios
				.get(getUserURL, {
					withCredentials: true,
				})
				.then(res => {
					localStorage.setItem(
						"loggedInUser",
						JSON.stringify({
							name: res.data.displayName,
							email: res.data.profileUrl,
							picture: res.data.photos[0].value,
							provider: res.data.provider,
						})
					);
					window.location = "/welcome.html";
				});
		};

		if (authWindow) {
			timer = setInterval(() => {
				if (authWindow.closed) {
					console.log("Yay we're authenticated");
					fetchAuthUser();
					if (timer) clearInterval(timer);
				}
			}, 500);
		}
	});

const linkedInURL =
	ENV === "dev"
		? "http://localhost:3001/login/linkedin"
		: "https://authenticator-ricky.onrender.com/login/linkedin";

document
	.getElementById("linkedin-sso-button")
	.addEventListener("click", function () {
		console.log("clicked linkedin");
		const authWindow = window.open(
			linkedInURL,
			"_blank",
			"width=500,height=700"
		);
		let timer;
		localStorage.removeItem("loggedInUser");
		const fetchAuthUser = () => {
			axios
				.get(getUserURL, {
					withCredentials: true,
				})
				.then(res => {
					console.log("res.data: ", res.data);
					localStorage.setItem(
						"loggedInUser",
						JSON.stringify({
							name: res.data.displayName,
							email: res.data.profileUrl,
							picture: res.data.photos[0].value,
							provider: res.data.provider,
						})
					);
					window.location = "/welcome.html";
				});
		};

		if (authWindow) {
			timer = setInterval(() => {
				if (authWindow.closed) {
					console.log("Yay we're authenticated");
					fetchAuthUser();
					if (timer) clearInterval(timer);
				}
			}, 500);
		}
	});

document
	.getElementById("facebook-sso-button")
	.addEventListener("click", function () {
		console.log("clicked facebook");
		const facebookURL =
			ENV === "dev"
				? "http://localhost:3001/login/facebook"
				: "https://authenticator-ricky.onrender.com/login/facebook";
		const authWindow = window.open(
			facebookURL,
			"_blank",
			"width=500,height=700"
		);
		let timer;
		localStorage.removeItem("loggedInUser");
		const fetchAuthUser = () => {
			axios
				.get(getUserURL, {
					withCredentials: true,
				})
				.then(res => {
					console.log("res.data: ", res.data);
					localStorage.setItem(
						"loggedInUser",
						JSON.stringify({
							name: res.data.displayName,
							email: res.data.profileUrl,
							provider: res.data.provider,
						})
					);
					window.location = "/welcome.html";
				});
		};

		if (authWindow) {
			timer = setInterval(() => {
				if (authWindow.closed) {
					console.log("Yay we're authenticated");
					fetchAuthUser();
					if (timer) clearInterval(timer);
				}
			}, 500);
		}
	});
