var accessToken;
var uid;
var accessToken;
var fblogin = false;

$(document).ready(function() {
	
	// facebook stuff
	
	loggedin = false;
	
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_UK/all.js', function(){
		FB.init({
			appId: '226155960897211',
		});     
		console.log('Facebook initiated.');
		FB.getLoginStatus(function(response) {
			// logged in
			if (response.status === 'connected') {
				uid = response.authResponse.userID;
				accessToken = response.authResponse.accessToken;
				fblogin = true;
				
			} else if (response.status === 'not_authorized') {

			} else {

			}
		}, {scope: 'email, rsvp_event'});
		
	});
	
	// end of facebook stuff
		
	// set .slide height to window height
	$('.slide').height($(window).height());
	// set #rightColumn properly to the top and 1px wider
	$('#rightColumn').css({
		'top': -$(window).height()*($('#rightColumn').children().length-1),
		'width': '+=1px'
	});	
	// position triangles
	$('.fwd').css('left', $('.slide').width()-73);
	// initiate scroller
	scroller();
	// initiate anibg
	$('.anibg').hover(
		function() {			
			anibg($(this))
		}
	);
	// fwd button
	$('.fwd').on('click', function() {
		mixpanel.track('scroll_' + whatPage());
		$('body').animate({
			scrollTop: $(window).scrollTop() + $(window).height()
		}, 700, 'swing', function() {
			$('body').stop(true, true);
			pageActions(whatPage());
		});
	});
	// fwd button arrow bounce
	$('.fwd').on('mouseenter', function() {
		$('.arrow').effect('bounce', 600)
	});
	
	// screen one //
	
	// create hover for screen 1
	$('.slide.one.left a').hover(function() {
		$('.linkic').addClass('trans');
	}, function() {
		$('.linkic').removeClass('trans');
	});
	
	// refresh button
	$('.seprosim').on('click', function() {
		
		mixpanel.track("reload_title");
		// clear all timeouts
		var id = window.setTimeout(function() {}, 0);
		
		while (id--) {
		    window.clearTimeout(id); // will do nothing if no timeout with id is present
		}
		texting = 0;
		popMeAnArticle();
	});
	
	// end of screen one//
	
	// screen two //
	
	$('.circle.control').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.control').show();
		mixpanel.track("nadzorniki");
	});
	$('.circle.recycle').on('click', function() {
		mixpanel.track("nepodrejenost");
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.recycle').show();
	});
	$('.circle.cash').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.cash').show();
		mixpanel.track("veja_oblasti");
	});
	
	// end of screen two //
	
	// screen three //

	// set container height
	$('.squarecontainer').height($('.squarecontainer').width());
	
	$('.slide.three.left h1').on('click', function() {
		window.open('http://studentska-iskra.org/wp-content/uploads/2013/10/Statut-%C5%A0OU-v-Ljubljani1.pdf', '_blank');
	})
	
	// set variable to track bigger square
	embiggened = '';

	// click on transparentnost makes it grow
	$('.transparentnost').on('click', function() {
	
		mixpanel.track("transparentnost");
	
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.transparise').show();
		
//		if (embiggened != '.transparentnost') {
//			emsmallen(embiggened);
//		
//			$(this).animate({
//				'height': '+=7%',
//				'width': '+=7%',
//				'top': '-=7%',
//				'left': '-=7%'
//			}, {
//				duration: 400,
//				queue: false,
//				easing: 'swing',
//				complete: function() {
//					embiggened = '.transparentnost';
//				}
//			});
//		}
	});
	
	// click on politizacija makes it grow
	$('.politizacija').on('click', function() {
		
		mixpanel.track("politizacija");
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.politise').show();
		
//		if (embiggened != '.politizacija') {
//			emsmallen(embiggened);
//			$(this).animate({
//				'height': '+=7%',
//				'width': '+=7%',
//				'top': '-=7%',
//				'right': '-=7%'
//			}, {
//				duration: 400,
//				queue: false,
//				easing: 'swing',
//				complete: function() {
//					embiggened = '.politizacija';
//				}
//			});
//		}
	});
	// click on demokratizacija makes it grow
	$('.demokratizacija').on('click', function() {
		
		mixpanel.track("demokratizacija");
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.democratise').show();
		
		
//		if (embiggened != '.demokratizacija') {
//			emsmallen(embiggened);
//		
//			$(this).animate({
//				'height': '+=7%',
//				'width': '+=7%',
//				'bottom': '-=7%',
//				'right': '-=7%'
//			}, {
//				duration: 400,
//				queue: false,
//				easing: 'swing',
//				complete: function() {
//					embiggened = '.demokratizacija';
//				}
//			});
//		}
	});
	// click on samoorganiziranje makes it grow
	$('.samoorganiziranje').on('click', function() {
		
		mixpanel.track("samoorganiziranje");
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.organise').show();
		
//		if (embiggened != '.samoorganiziranje') {
//			emsmallen(embiggened);
//			
//			$(this).animate({
//				'height': '+=7%',
//				'width': '+=7%',
//				'bottom': '-=7%',
//				'left': '-=7%'
//			}, {
//				duration: 400,
//				queue: false,
//				easing: 'swing',
//				complete: function() {
//					embiggened = '.samoorganiziranje';
//				}
//			});
//		}
	});
	
	// end of screen three //
	
	// screen four //
	
	$('.faks').on('mouseenter', function() {
		$(this).children('img').attr('src', './img/fourth/' + $(this).attr('id') + '_hover.png');
	});
	$('.faks').on('mouseleave', function() {
		if (!$(this).hasClass('hovered')) {
			$(this).children('img').attr('src', './img/fourth/' + $(this).attr('id') + '_normal.png');
		}
	});
	$('.faks').on('click', function() {
		
		mixpanel.track($(this).attr('id'));
		
		// clean up
		$('.hovered').children('img').attr('src', './img/fourth/' + $('.hovered').attr('id') + '_normal.png');
		$('.hovered').toggleClass('hovered');
		
		// make new
		$(this).toggleClass('hovered');
		$(this).children('img').attr('src', './img/fourth/' + $(this).attr('id') + '_hover.png');
		$('.slide.four.left h1').hide();
		$('.action').show();
		
		// fix google calendar event
		$('#markcal').attr('href', 'https://www.google.com/calendar/render?action=TEMPLATE&trp=false&text=Glasovanje za nov ŠOU&dates=20131204T090000Z/20131204T180000Z&location=' + faksi[$(this).attr('id')] + '&details=&sprop=http://danesjenovdan.si&sf=true&output=xml');
	});
	
	// RSVP on facebook
	$('.baton.rsvp').on('click', function() {
		console.log('rsvp');
		
		mixpanel.track("RSVP");
		
		// check for login
		
		if (fblogin) {
			$.post('https://graph.facebook.com/219366161571155/attending?access_token=' + accessToken, function(data) {
				console.log(data);
				console.log(data == true);
				if (data == true) {
					$('.rsvp span').text('se vidimo v sredo!');
					console.log('ya');
				}
			});
		} else {
			FB.login(function(response) {
			    if (response.authResponse) {
			        console.log('logged in');
			        
			        uid = response.authResponse.userID;
			        accessToken = response.authResponse.accessToken;
			        fblogin = true;
			        
			        $.post('https://graph.facebook.com/219366161571155/attending?access_token=' + accessToken, function(data) {
			        	console.log(data == true);
			        	if (data == true) {
			        		$('.rsvp span').text('se vidimo na referendumu!');
			        		console.log('ya');
			        	}
			        });
			    } else {
			        // The person cancelled the login dialog
			    }
			}, {scope: 'email, rsvp_event'});
		}
		
	});
	
	// invite friends
	
	$('.friends').on('click', function() {
	
		mixpanel.track("INVITE");
	
		if (fblogin) {
			console.log('logged in');
			
			$('.md-modal').toggleClass('md-show');
			
			$("#frendi").autocomplete({
				source: function(request, add) {
					$this = $(this)
					// Call out to the Graph API for the friends list
					$.ajax({
						url: "https://graph.facebook.com/me/friends?access_token=" + accessToken,
						dataType: "jsonp",
						success: function(results){
							// Filter the results and return a label/value object array  
							var formatted = [];
							for(var i = 0; i< results.data.length; i++) {
								if (results.data[i].name.toLowerCase().indexOf($('#frendi').val().toLowerCase()) >= 0)
								formatted.push({
									label: results.data[i].name,
									value: results.data[i].id
								})
							}
							add(formatted);
						}
					});
				},
				select: function(event, ui) {
					// Fill in the input fields
					$('#frendi').val(ui.item.label)
					$('#fbuid').val($('#fbuid').val() + ' ' + ui.item.value)
					// Prevent the value from being inserted in "#name"
					addTag($('#frendi').val());
					return false;
				},
				minLength: 2
			});
		} else {
			
			FB.login(function(response) {
				if (response.authResponse) {
					uid = response.authResponse.userID;
					accessToken = response.authResponse.accessToken;
					
					fblogin = true;
					
					console.log('logged in');
					
					$('.md-modal').toggleClass('md-show');
					
					$("#frendi").autocomplete({
						source: function(request, add) {
							$this = $(this)
							// Call out to the Graph API for the friends list
							$.ajax({
								url: "https://graph.facebook.com/me/friends?access_token=" + accessToken,
								dataType: "jsonp",
								success: function(results){
									// Filter the results and return a label/value object array  
									var formatted = [];
									for(var i = 0; i< results.data.length; i++) {
										if (results.data[i].name.toLowerCase().indexOf($('#frendi').val().toLowerCase()) >= 0)
										formatted.push({
											label: results.data[i].name,
											value: results.data[i].id
										})
									}
									add(formatted);
								}
							});
						},
						select: function(event, ui) {
							// Fill in the input fields
							$('#frendi').val(ui.item.label)
							$('#fbuid').val($('#fbuid').val() + ' ' + ui.item.value)
							// Prevent the value from being inserted in "#name"
							addTag($('#frendi').val());
							return false;
						},
						minLength: 2
					});
					
				} else {
					alert('Če želiš povabiti frende, se moraš prijaviti s Facebookom. Brez skrbi, ne shranjujemo nobenih tvojih podatkov.');
				}
			}, {scope: 'email, create_event'});
		
		}
		
	});
	// end of invite friends
	
	// invite friends baton
	$('.md-baton').on('click', function() {
	
		mixpanel.track("SEND");
	
		users = $('#fbuid').val().split(' ')[1];
		for (var i = 2; i < $('#fbuid').val().split(' ').length; i++) {
			users = users + ',' + $('#fbuid').val().split(' ')[i];
			console.log(users);
		}
	
		FB.api(
		    '/219366161571155/invited?users=' + users,
		    'post',
		    function (response) {
		    	console.log('yay');
		    	console.log(response);
		      if (response && !response.error) {
		        console.log(response);
		      }
		    }
		);
		
		$('.tag').hide('slow', function() {
			$('.tags').append('<div class="tag">Vabilo je bilo uspešno odposlano. :)</div>');
		});
		
	});
	
	$('.md-overlay').on('click', function() {
		$('.md-modal').toggleClass('md-show');
	});
	$('.md-close').on('click', function() {
		$('.md-modal').toggleClass('md-show');
	});
	
	// end of screen four //
	
	// screen five //
	
	// set .teardrop height
	$('.teardrop').height($('.teardrop').width());
	// set .bigcircle height
	$('.bigcircle').height($('.bigcircle').width());
	// set .smallcircle height
	$('.smallcircle').height($('.smallcircle').width());
	
	$('#fb').hover(function() {
		$('.teardrop').toggleClass('fb');
		console.log('ping');
		
	});
	$('#tw').hover(function() {
		$('.teardrop').toggleClass('tw');
		console.log('ping');
	});
	$('#gp').hover(function() {
		$('.teardrop').toggleClass('gp');
		console.log('ping');
		
	});
	$('#fbm').hover(function() {
		$('.teardrop').toggleClass('fbm');
		console.log('ping');
		
	});
	$('#email').hover(function() {
		$('.teardrop').toggleClass('email');
		console.log('ping');
		
	});
	
	$('#fbm').on('click', function() {
		FB.ui({
		  method: 'send',
		  link: document.location.href,
		});
	});
	
	// end of screen five //
	
	// page actions
	pageActions(whatPage());
	
	
});

function addTag(name) {
	$('.tags').append('<span class="tag" onclick="$(this).hide();">' + name + '<span class="icon-cancel-circled"></span></span>');
	$('#frendi').val('');
}



/*
POIs should be topical
consider what works for a POI and what doesn't

why should people earn their place in society
*/
















