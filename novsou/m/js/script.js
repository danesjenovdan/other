$(document).ready(function() {
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_UK/all.js', function(){
		FB.init({
			appId: '226155960897211',
		});     
		console.log('Facebook initiated.');
	});
	
	$('.rsvp').on('click', function() {
		mixpanel.track("RSVP mobile");
		
		// check for login
		FB.getLoginStatus(function(response) {
			// is logged in
			if (response.status === 'connected') {
				uid = response.authResponse.userID;
				accessToken = response.authResponse.accessToken;
				
				$.post('https://graph.facebook.com/219366161571155/attending?access_token=' + accessToken, function(data) {
					console.log(data);
				});
				
			} else if (response.status === 'not_authorized') {
			    FB.login(function(response) {
			        if (response.authResponse) {
			            console.log('logged in');
			        } else {
			            // The person cancelled the login dialog
			        }
			    }, {scope: 'email, rsvp_event'});
			} else {
				FB.login(function(response) {
				    if (response.authResponse) {
				        console.log('logged in');
				    } else {
				        // The person cancelled the login dialog
				    }
				}, {scope: 'email, rsvp_event'});
			}
		}, {scope: 'email, rsvp_event'});
		
		return false;
	});
	
	$('#fbm').on('click', function() {
		FB.ui({
		  method: 'send',
		  link: document.location.href,
		});
		
		return false;
	});
	
});