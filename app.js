// Initialize the Google Sign-In client
const GoogleAuth = google.accounts.id.initialize({
	client_id:
		"42205347235-q5sa3rrif9gcebdnp3lihv1lenei8uno.apps.googleusercontent.com",
	callback: handleCredentialResponse,
});

function parseJwt(token) {
	var base64Url = token.split(".")[1];
	var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	var jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
	const user = parseJwt(response.credential);
	console.log("user: ", user);

	// Store the data in sessionStorage
	localStorage.setItem("loggedInUser", JSON.stringify(user));

	// const redirectURL = location.hostname === "localhost" ?

	window.location.href = "/success.html";
}

// Set up the Google Sign-In button
const signInButton = google.accounts.id.renderButton(
	document.getElementById("google-sign-in-button"),
	{
		theme: "outline",
		size: "large",
		type: "icon",
		shape: "pill",
		width: "3rem",
	}
);
