document.getElementById("google").addEventListener("click", function () {
	console.log("clicked");
	const authWindow = window.open(
		"http://localhost:3001/login/google",
		"_blank",
		"width=500,height=700"
	);
	let timer;
	localStorage.removeItem("loggedInUser");
	const fetchAuthUser = () => {
		axios
			.get("http://localhost:3001/getuser", {
				withCredentials: true,
			})
			.then(res => {
				console.log("res.data: ", res.data);
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

document
	.getElementById("github-sso-button")
	.addEventListener("click", function () {
		console.log("clicked github");
		const authWindow = window.open(
			"http://localhost:3001/login/github",
			"_blank",
			"width=500,height=700"
		);
		let timer;
		localStorage.removeItem("loggedInUser");
		const fetchAuthUser = () => {
			axios
				.get("http://localhost:3001/getuser", {
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
