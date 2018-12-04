function anibg(element) {
	$(element).animate({
		'background-position-x': '+=1px',
		'background-position-y': '-=1px'
	}, {
		duration: 13,
		queue: false,
		easing: 'linear',
		complete: function() {
			if (element.is(':hover')) {
				anibg(element);
			}
		}
	});
}

// TODO
function emsmallen(element) {
	switch(element) {
		case '.transparentnost':
			$(element).animate({
				'height': '-=7%',
				'width': '-=7%',
//				'top': '+=7%',
//				'left': '+=7%'
			}, {
				duration: 400,
				queue: false,
				easing: 'swing',
				complete: function() {
				}
			});
			break;
		case '.politizacija':
			$(element).animate({
				'height': '-=7%',
				'width': '-=7%',
//				'top': '+=7%',
//				'right': '+=7%'
			}, {
				duration: 400,
				queue: false,
				easing: 'swing',
				complete: function() {
				}
			});
			break;
		case '.demokratizacija':
			$(element).animate({
				'height': '-=7%',
				'width': '-=7%',
//				'bottom': '+=7%',
//				'right': '+=7%'
			}, {
				duration: 400,
				queue: false,
				easing: 'swing',
				complete: function() {
				}
			});
			break;
		case '.samoorganiziranje':
			$(element).animate({
				'height': '-=7%',
				'width': '-=7%',
//				'bottom': '+=7%',
//				'left': '+=7%'
			}, {
				duration: 400,
				queue: false,
				easing: 'swing',
				complete: function() {
				}
			});
			break;
		case '':
			break;
	}
}

// dimming function
function dimOthers(collection, to) {
	$.each(collection, function(key, value) {
		if ($(this).attr('class') != to.attr('class')) {
			if (!$(this).children('.overlay').hasClass('seen')) {
				$(this).children('.overlay').toggleClass('seen');
				console.log($(this));
			}
		}
	});
}