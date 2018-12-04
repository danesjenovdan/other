var edited = false;



$(document).ready(function() {

    // set checkbox behavior
    $('.thebox').on('click', function() {
        $(this).toggleClass('checked');

        ga('send', 'event', 'misc', 'toggled borut');

        return false;
    });


    // ZERO FUCKING CLIPBOARD
    var client = new ZeroClipboard($('#btn-shorturl'), {
        moviePath: 'js/ZeroClipboard.swf'
    });

    client.on( "load", function(client) {
        //alert( "movie is loaded" );

        client.on( "complete", function(client, args) {
            // `this` is the element that was clicked
            //this.style.display = "none";
            //clientText.setText( 'lalala' );
    //        alert("Copied text to clipboard: " + args.text );
            ga('send', 'event', 'social', 'copied url');
        });
    });

    // send button
    $('#send').on('click', function() {
        if ($('#to').val() != '') {
            if (edited) {
                $('#change').modal('show');
            } else {
                $.post('https://djnd.slack.com/services/hooks/incoming-webhook?token=EApBJ7B21GFJmytVv5ZoNqoV',
                JSON.stringify({
                    'channel': '#api-monitor',
                    'username': 'Borut',
                    'text': $('#subject').val(),
                    'attachments': [
                        {
                            'fallback': 'Your client is stupid, go vote.',
                            'color': 'good',
                            'parse': 'full',
                            'fields': [
                                {
                                    'title': $('#to').val() + ' Borutu: ' + $('.thebox').hasClass('checked'),
                                    'value': $('#content').val(),
                                    'short': false
                                }
                            ]
                        }
                    ]
                }), function(r) {
                    $('#change').modal('hide');
                    $('#successful').modal('show');
                });
            }
        } else {
            alert('Kam pa naj pošljemo opomnik? Pozabil/a si vpisati naslove prejemnikov.');
        }
        ga('send', 'event', 'misc', 'set reminder');
        return false;
    });

    // yes/no change
    $('.yeschange').on('click', function() {
        $.post('https://djnd.slack.com/services/hooks/incoming-webhook?token=EApBJ7B21GFJmytVv5ZoNqoV',
			JSON.stringify({
				'channel': '#api-monitor',
				'username': 'Borut',
				'text': $('#subject').val(),
				'attachments': [
					{
						'fallback': 'Your client is stupid, go vote.',
						'color': 'good',
						'parse': 'full',
						'fields': [
							{
								'title': $('#to').val() + ' Borutu: ' + $('.thebox').hasClass('checked'),
								'value': $('#content').val(),
								'short': false
							}
						]
					}
				]
			}), function(r) {
				$('.changer').text('Ni panike! Smo poslali s tajno službo.');
                $('.yeschange').toggleClass('hidden');
                $('.nochange').toggleClass('hidden');
                $('.closechange').toggleClass('hidden');
			});
        return false;
    });
    $('.nochange').on('click', function() {

        $.post('https://djnd.slack.com/services/hooks/incoming-webhook?token=EApBJ7B21GFJmytVv5ZoNqoV',
			JSON.stringify({
				'channel': '#api-monitor',
				'username': 'Borut',
				'text': $('#subject').val(),
				'attachments': [
					{
						'fallback': 'Your client is stupid, go vote.',
						'color': 'good',
						'parse': 'full',
						'fields': [
							{
								'title': $('#to').val() + ' Borutu: ' + $('.thebox').hasClass('checked'),
								'value': $('#content').val(),
								'short': false
							}
						]
					}
				]
			}), function(r) {
				$('.changer').text('Ni panike! Smo poslali s tajno službo.');
                $('.yeschange').toggleClass('hidden');
                $('.nochange').toggleClass('hidden');
                $('.closechange').toggleClass('hidden');
			});
        return false;
    });

    // edit switch
    $('#content').on('focus', function() {
        //edited = true;
        ga('send', 'event', 'misc', 'edited content');
    });

    // set counter
    $.get('https://agrument.danesjenovdan.si/number/', function(r) {
        $('.counter').text(parseInt(r) + 1600);
    });

    //social
    $('.fb').on('click', function() {
        url = 'https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=' + encodeURIComponent(document.location.href) + '&link=' + encodeURIComponent('http://danesjenovdan.si/zgresena-tarca/') + '&ref=responsive&name=' + encodeURIComponent('Zgrešena tarča')
        window.open(url, '_blank');
        ga('send', 'event', 'social', 'facebook');
        return false;
    });
    $('.tw').on('click', function() {
        url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Na nacionalki so spet zgrešili Tarčo. http://djnd.si/bf cc @TarcaRTVSLO');
        window.open(url, '_blank');
        ga('send', 'event', 'social', 'twitter');
        return false;
    });
    $('.gp').on('click', function() {
        url = 'https://plus.google.com/share?url=' + encodeURIComponent('http://djnd.si/bf');
        window.open(url, '_blank');
        ga('send', 'event', 'social', 'gplus');
        return false;
    });

});
