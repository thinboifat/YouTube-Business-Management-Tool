function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    $("#imageField").html("<div class='col-lg-6 col-lg-offset-3'> <img class='img-circle loginImage' src='" + profile.getImageUrl() + "'> <a href='index.php' class='btn btn-lg btn-success btn-block enter'>Enter</a></div>");
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    $("#title").text('Welcome Back ' + profile.getGivenName() + '!');
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
};