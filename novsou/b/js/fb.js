function RSVP(id, token) {
	$.get('https://graph.facebook.com/458709214245960/attending?access_token=' + token);
}