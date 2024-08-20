var first = 0;

function scroller() {
	
	// update right column when scrolling
	$(document).scroll(function() {
		$('#rightColumn').css(
			'top',
			$(document).scrollTop() - $(window).height() * ($('#rightColumn').children().length-1)
		);
		$('.fwd').css(
			'bottom', 0
		);
	});
	
	// check if stopped scrolling
	$(window).scroll(function() {
		
		clearTimeout($.data(this, 'scrollTimer'));
		if (first == 0) {
			$('.slide.one.left').children().fadeOut('slow');
			first = 1;
		}

	    $.data(this, 'scrollTimer', setTimeout(function() {	        
	        // calculate diff absolute value
	        diff = Math.abs(parseInt($('#rightColumn').css('top').split('px')[0]) % $(window).height());
	        
	        // if diff is smaller than half of screen
	        if (diff != 0 && diff < $(window).height()/2) {
	        	console.log($(window).scrollTop() + diff);
	        	$('body').animate({
	        		scrollTop: $(window).scrollTop() + diff
	        	}, 500, 'swing', function() {
	        		$('body').stop(true, true);
	        		pageActions(whatPage());
	        	});
	        }
	        // if diff is larger than half of screen
	        else if (diff > $(window).height()/2) {
	        	$('body').animate({
	        		scrollTop: $(window).scrollTop() - ($(window).height()-diff)
	        	}, 500, 'swing', function() {
	        		$('body').stop(true, true);
	        		pageActions(whatPage());
	        	});
	        }
	        else if (diff == 0 && whatPage() == 1) {
	        	pageActions(whatPage());
	        }
	        
	    }, 250));
	});
	
}

// helper function returns slide number
function whatPage() {
	return Math.ceil($(window).scrollTop()/$(window).height()+1);
}

// actions on pages
function pageActions(whatPage) {
	// lands on slide one
	if (whatPage == 1) {
	
		$('.fwd').show();
	
		first = 0;
	
		$('.fwd p').text('Zakaj to počnejo?');
		$('.fwd p').css('color', '#2ecc71');
		$('.triangle').css('border-top-color', '#2ecc71');
		$('.arrow').css('background-image', 'url(./img/puscica1.png)');
		
		$('.slide.one.left').children().fadeIn('slow', function() {
			popMeAnArticle();
		});
	}
	
	// lands on slide two
	if (whatPage == 2) {
		
		$('.fwd').show();
	
		$('.fwd p').text('Kaj je rešitev?');
		$('.fwd p').css('color', '#c2bb00');
		$('.triangle').css('border-top-color', '#c2bb00');
		$('.arrow').css('background-image', 'url(./img/puscica2.png)');
		$('.arrow').effect('bounce', 600);
	}
	
	// lands on slide three
	if (whatPage == 3) {
		
		$('.fwd').show();
		
		$('.fwd p').text('Kaj moram narediti?');
		$('.fwd p').css('color', '#00938e');
		$('.triangle').css('border-top-color', '#00938e');
		$('.arrow').css('background-image', 'url(./img/puscica3.png)');
		$('.arrow').effect('bounce', 600);
	}
	
	// lands on slide four
	if (whatPage == 4) {
	
		$('.fwd').show();
	
		$('.fwd p').text('Še eno uslugo ...');
		$('.fwd p').css('color', '#ff9000');
		$('.triangle').css('border-top-color', '#ff9000');
		$('.arrow').css('background-image', 'url(./img/puscica4.png)');
		$('.arrow').effect('bounce', 600);
	}
	
	// lands on slide five
	if (whatPage == 5) {
		$('.fwd').hide();
	}
}