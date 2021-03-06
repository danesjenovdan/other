$(function() {

    $('.closeme, .zaprime').on('click', function() {
        $('.popup').addClass('hidden');
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $('.popup').addClass('hidden');
        }
    });

    // countdown
    countdown.setLabels('ms|s|min|h', 'ms|s|min|h', ', ', ', ');
    var date = new Date(2017, 1, 3, 12, 0);
    var now = Date.now()
    if (date.getTime() > now) {
        countdown(function(ts) {
            $('#countdown').html(ts.toHTML());
        }, date, countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
    } else {
        $('#countdown-container').text('Morda je že prepozno, ampak vseeno lahko pošlješ mail.');
    }

    // forma
    // var prejemniki = 'Monika.Mandic@dz-rs.si, Bozo.Predalic@dz-rs.si, ksenija.vencelj@dz-rs.si, miroslav.pretnar@dz-rs.si, matej.kolenc@dz-rs.si, terezija.trupi@dz-rs.si, sanja.ajanovic@dz-rs.si, petra.jamnik@dz-rs.si, danica.polak@dz-rs.si';
    var prejemniki = 'gp.uprs@predsednik.si, urad.predsednika@predsednik.si';

    $('#message-form').on('submit', function(event) {
        event.preventDefault();
        $.get('http://djnd.webfactional.com/counter/countup/?name=pahor1', function(r) {
            var a = 'mailto:' + prejemniki + '?subject=Računam na vas!&body=' + encodeURIComponent(document.getElementById('form-content').value);
            document.location.href = a;
        })
    });

    // $('#ze-poslanih-number').load('http://djnd.webfactional.com/counter/getcount/?name=pahor1');

    // share/socials
    $.ajax({
        method:'POST',
        url:'https://djnd.si/yomamasofat/',
        data:{
            fatmama: document.location.href
        },
        success:function(resp){
            $('.share-container input').val(resp);
        }
    });
    $('.share-container input').on('focus', function() {
        $(this).select();
    });

    var hours = 20;
    countdown(function(ts) {
        hours = ts.hours;
    }, date, countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
    var shareText = 'Pošlji mail predsedniku in mu povej, da naj Zakona o tujcih ne razglasi! Imamo manj kot ' + String(hours + 1) + ' ur!';
    var tweetText = '@borutpahor Prosim ne razglasite Zakona o tujcih. #ustavimokonje ';
    $('.icon-facebook').on('click', function() {
        var a = 'https://www.facebook.com/dialog/share?app_id=301375193309601&display=popup&href=' + encodeURIComponent(document.location.href) + '&redirect_uri=' + encodeURIComponent(document.location.href) + '&ref=responsive';
        return window.open(a, '_blank'),
        !1
    });
    $('.icon-twitter').on('click', function() {
        var a = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText + document.location.href);
        return window.open(a, '_blank'),
        !1
    });
    $('.icon-mail').on('click', function() {
        var a = 'mailto:?subject=Računam nate!&body=' + shareText + ' ' + document.location.href;
        document.location.href = a,
        !1
    });

    $('.btn-block').tooltip();
});

// confetti
// Modified from https://code.google.com/p/pamelafox-samplecode/ (r343).
// The original code is under the Apache 2.0 license.
// http://opensource.org/licenses/Apache-2.0

var CONFETTIS_PER_SHAKE = 80;
var MAX_CONFETTIS = 81;

function startConfetti() {
    if (window.currentConfettis >= MAX_CONFETTIS)
        return;

    var confettiElements = [];
    for (var i = 0; i < CONFETTIS_PER_SHAKE; i++) {
        var confettiElement = makeConfetti(!i);
        document.body.appendChild(confettiElement);
        confettiElements[i] = confettiElement;
    }
    window.currentConfettis += CONFETTIS_PER_SHAKE;
    setTimeout(removeConfettis, 12 * 1000, confettiElements);
}

function removeConfettis(confettiElements) {
    window.currentConfettis -= CONFETTIS_PER_SHAKE;

    for (var i = 0; i < CONFETTIS_PER_SHAKE; ++i) {
        document.body.removeChild(confettiElements[i]);
    }
    confettiElements = 0;
}

/*
  Receives the lowest and highest values of a range and
  returns a random integer that falls within that range.
*/
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}

/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function randomItem(items) {
    return items[randomInteger(0, items.length - 1)]
}

/* Returns a duration value for the falling animation.*/
function durationValue(value) {
    return value + 's';
}

function makeConfetti(is_first) {
    var confettis = ['2726', '2736', '2665', '25CF', '25AA', '25B4', '2605'];
    var colors = ['#ccac55', '#e4d2a3', '#467871', '#704a45', '#1d7373', '#c2d8d8', '#6ba8a0', '#e3c3bf', '#704a45', '#dd786b', '#ccac55'];
    var sizes = ['tiny', 'tiny', 'small', 'small', 'small', 'small', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium'];

    /* Start by creating a wrapper div, and an empty span  */
    var confettiElement = document.createElement('div');
    confettiElement.className = 'confetti ' + randomItem(sizes);

    var confetti = document.createElement('span');
    confetti.innerHTML = '&#x' + randomItem(confettis) + ';';
    confetti.style.color = randomItem(colors);

    confettiElement.appendChild(confetti);

    /* Randomly choose a side to anchor to, keeps the middle more dense and fits liquid layout */
    var anchorSide = (Math.random() < 0.5) ? 'left' : 'right';

    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(1, 4));

    // how long to wait before the confettis arrive
    var confettiDelay = is_first ? 0 : durationValue(0);

    confettiElement.style.webkitAnimationName = 'fade, drop';
    confettiElement.style.webkitAnimationDuration = fadeAndDropDuration + ',' + fadeAndDropDuration;
    confettiElement.style.webkitAnimationDelay = confettiDelay;

    /* Position the confetti at a random location along the screen, anchored to either the left or the right*/
    confettiElement.style[anchorSide] = randomInteger(5, 80) + '%';

    var jitterNames = ['jitterA', 'jitterB', 'jitterC', 'jitterD'];
    var spinAnimationName = randomItem(jitterNames);
    var spinDuration = durationValue(randomFloat(2, 4));

    confetti.style.webkitAnimationName = spinAnimationName;
    confetti.style.webkitAnimationDuration = spinDuration;
    confetti.style.webkitAnimationDelay = confettiDelay + 2;

    /* Return this confetti element so it can be added to the document */
    return confettiElement;
}
window.currentConfettis = 0;
