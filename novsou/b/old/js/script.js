$(document).ready(function() {
	
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
	});
	$('.circle.recycle').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.recycle').show();
	});
	$('.circle.cash').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.cash').show();
	});
	
	// end of screen two //
	
	// screen three //

	// set container height
	$('.squarecontainer').height($('.squarecontainer').width());
	
	// set variable to track bigger square
	embiggened = '';

	// click on transparentnost makes it grow
	$('.transparentnost').on('click', function() {
	
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.transparise').show();
	
		$(this).animate({
			'height': '+=7%',
			'width': '+=7%',
			'top': '-=7%',
			'left': '-=7%'
		}, {
			duration: 400,
			queue: false,
			easing: 'swing',
			complete: function() {
				emsmallen(embiggened);
				embiggened = '.transparentnost';
			}
		});
	});
	
	// click on politizacija makes it grow
	$('.politizacija').on('click', function() {
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.politise').show();
		
		$(this).animate({
			'height': '+=7%',
			'width': '+=7%',
			'top': '-=7%',
			'right': '-=7%'
		}, {
			duration: 400,
			queue: false,
			easing: 'swing',
			complete: function() {
				emsmallen(embiggened);
				embiggened = '.politizacija';
			}
		});
	});
	// click on demokratizacija makes it grow
	$('.demokratizacija').on('click', function() {
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.democratise').show();
		
		$(this).animate({
			'height': '+=7%',
			'width': '+=7%',
			'bottom': '-=7%',
			'right': '-=7%'
		}, {
			duration: 400,
			queue: false,
			easing: 'swing',
			complete: function() {
				emsmallen(embiggened);
				embiggened = '.demokratizacija';
			}
		});
	});
	// click on samoorganiziranje makes it grow
	$('.samoorganiziranje').on('click', function() {
		
		dimOthers($('.square'), $(this));
		$(this).children('.overlay').removeClass('seen');
		$('.slide.three.left h1').hide();
		$('.info').hide();
		$('.info.organise').show();
		
		$(this).animate({
			'height': '+=7%',
			'width': '+=7%',
			'bottom': '-=7%',
			'left': '-=7%'
		}, {
			duration: 400,
			queue: false,
			easing: 'swing',
			complete: function() {
				emsmallen(embiggened);
				embiggened = '.samoorganiziranje';
			}
		});
	});
	
	// end of screen three //
	
	// screen four //
	
	$('.faks').on('mouseenter', function() {
		$(this).children('img').attr('src', './img/fourth/' + $(this).attr('id') + '_hover.png');
	});
	$('.faks').on('mouseleave', function() {
		$(this).children('img').attr('src', './img/fourth/' + $(this).attr('id') + '_normal.png');
	});
	$('.faks').on('click', function() {
		$(this).toggleClass('chosen');
		$('.slide.four.left h1').hide();
		$('.action').show();
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
	
	// end of screen five //
	
	// page actions
	pageActions(whatPage());
	
});























