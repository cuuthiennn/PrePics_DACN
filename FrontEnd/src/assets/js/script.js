const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
	container.classList.remove('right-panel-active');
});

function initGoogleSignIn() {
	gapi.load('auth2', function () {
		gapi.auth2
			.init({
				client_id:
					'501949337232-afui9ca6nbptp559tvbbk1t3bauluae5.apps.googleusercontent.com',
				// Specify the scopes you need
			})
			.then(function (auth2) {
				// Google Auth initialized.
			});
	});
}

// Call the function to initialize the Google Sign-In client as soon as possible
initGoogleSignIn();

function googleSignIn() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signIn().then(function (googleUser) {
		// Get the user's profile information
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId());
		console.log('Full Name: ' + profile.getName());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());

		// Get the ID token of the user to verify on the backend
		var id_token = googleUser.getAuthResponse().id_token;
		console.log('ID Token: ' + id_token);

		// Adjusted Ajax call to the specified backend endpoint
		$.ajax({
			method: 'POST',
			url: 'https://localhost:7052/auth/google', // Updated URL to the backend endpoint
			contentType: 'application/json', // Ensure you're sending the content as JSON
			data: JSON.stringify({
				id_token: id_token,
			}),
		})
			.done(function (response) {
				// Handle the response from your backend
				console.log('====================================');
				console.log(response);
				console.log('====================================');
				window.location.href = 'http://127.0.0.1:5500/home.html';
				console.log('Backend response received:', response);
			})
			.fail(function (error) {
				console.log('Error:', error);
			});
	});
}
