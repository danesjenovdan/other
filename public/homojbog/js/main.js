// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
var player;
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	console.log('youtube ready');
}

$(document).ready(function() {
	$('.play').on('click', function() {
		$(this).parent().css('display', 'none');
		$(this).parent().prev().css('opacity', 1);
		console.log($(this).parent().prev().attr('id'));
		handleYoutube($(this).parent().prev().attr('id'));
	});

	$('.icon-facebook-circled').on('click', function() {
		 window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://www.youtube.com/watch?v=' + $(this).parent().parent().prev().attr('id')), 'sharer', 'width=626,height=436');
	});

	$('.icon-twitter-circled').on('click', function() {
		 window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('http://www.youtube.com/watch?v=' + $(this).parent().parent().prev().attr('id')), 'sharer', 'width=626,height=436');
	});

	$('.icon-gplus-circled').on('click', function() {
		 window.open('https://plus.google.com/share?url=' + encodeURIComponent('http://www.youtube.com/watch?v=' + $(this).parent().parent().prev().attr('id')), 'sharer', 'width=626,height=436');
	});

	$('#fb').on('click', function() {
		 window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://danesjenovdan.si/homojbog'), 'sharer', 'width=626,height=436');
	});

	$('#tw').on('click', function() {
		 window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('http://danesjenovdan.si/homojbog'), 'sharer', 'width=626,height=436');
	});

	$('#gp').on('click', function() {
		 window.open('https://plus.google.com/share?url=' + encodeURIComponent('http://danesjenovdan.si/homojbog'), 'sharer', 'width=626,height=436');
	});

	$('#send').on('click', function() {
		console.log('send');
		$.get('http://hekovnik.com/signup/djnd.php?email=' + encodeURIComponent($('.upload').val()), function(data) {
			console.log(data);
			alert('Hvala, tvoje priznanje bo kmalu online.');
		});
	});

	$('.upload').keyup(function(event){
	    if(event.keyCode == 13){
	        $('#send').click();
	    }
	});

});

function handleYoutube(id) {

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.

	player = new YT.Player(id, {
	  height: $('.box').height(),
	  width: $('.box').width(),
	  videoId: id,
	  events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.playVideo();
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		$('#'+ player.h.id).css('opacity', 0);
		$('#' + player.h.id).next().css('display', 'block');
		$('#' + player.h.id).next().css('opacity', 0.5);
		player.seekTo(0);
		player.pauseVideo();
	}
	}
	function stopVideo() {
		player.stopVideo();
	}
}
