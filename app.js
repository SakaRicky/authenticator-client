document.getElementById("google").addEventListener("click", function () {
	console.log("clicked");
	//https://authenticator-ricky.onrender.com/login/google
	//http://localhost:3001/login/google
	const authWindow = window.open(
		"https://authenticator-ricky.onrender.com/login/google",
		"_blank",
		"width=500,height=700"
	);
	let timer;
	localStorage.removeItem("loggedInUser");
	//https://authenticator-ricky.onrender.com/getuser
	//http://localhost:3001/getuser
	const fetchAuthUser = () => {
		axios
			.get("https://authenticator-ricky.onrender.com/getuser", {
				withCredentials: true,
			})
			.then(res => {
				console.log("res.data: ", res);
				localStorage.setItem(
					"loggedInUser",
					JSON.stringify({
						name: res.data.displayName,
						email: res.data.emails[0].value,
						picture: res.data.photos[0].value,
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

//https://authenticator-ricky.onrender.com/login/github
//http://localhost:3001/login/github
document
	.getElementById("github-sso-button")
	.addEventListener("click", function () {
		console.log("clicked github");
		const authWindow = window.open(
			"https://authenticator-ricky.onrender.com/login/github",
			"_blank",
			"width=500,height=700"
		);
		let timer;
		localStorage.removeItem("loggedInUser");
		//https://authenticator-ricky.onrender.com/getuser
		//http://localhost:3001/getuser
		const fetchAuthUser = () => {
			axios
				.get("https://authenticator-ricky.onrender.com/getuser", {
					withCredentials: true,
				})
				.then(res => {
					localStorage.setItem(
						"loggedInUser",
						JSON.stringify({
							name: res.data.displayName,
							email: res.data.profileUrl,
							picture: res.data.photos[0].value,
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

//https://authenticator-ricky.onrender.com/login/linkedin
//http://localhost:3001/login/linkedin
document
	.getElementById("linkedin-sso-button")
	.addEventListener("click", function () {
		console.log("clicked linkedin");
		const authWindow = window.open(
			"https://authenticator-ricky.onrender.com/login/linkedin",
			"_blank",
			"width=500,height=700"
		);
		let timer;
		localStorage.removeItem("loggedInUser");
		//https://authenticator-ricky.onrender.com/getuser
		//http://localhost:3001/getuser
		const fetchAuthUser = () => {
			axios
				.get("https://authenticator-ricky.onrender.com/getuser", {
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
