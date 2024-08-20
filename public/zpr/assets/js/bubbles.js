(function() {
  var $botSpinner, $userSpinner, BOTTOM_GAP_PX, DELAY_MS, FIRST_MESSAGES, IMAGE_MS, MARGIN_PX, TYPING_MS, appendBotResponse, appendUserMessage, applySpinner, assignRemaining, calculateDimensions, convoOffsetTop, createSpinners, displayed, getBubbleBottom, getBubbleTop, getScrollBottom, handleInput, handleKeyDown, handleScroll, handleSendClick, handleSubmit, observeScroll, ref, remaining, removeSpinner, running, schedule, scheduleFirstFew, scheduled, show, showScheduled, spinner, talkAnimations, validate, validateEmail, validatePhoneNumber;

  TYPING_MS = 10;

  DELAY_MS = 1000;

  IMAGE_MS = 1000;

  FIRST_MESSAGES = 6;

  BOTTOM_GAP_PX = (ref = $(window).width() > 480) != null ? ref : {
    70: 0
  };

  MARGIN_PX = 5;

  spinner = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';

  $userSpinner = void 0;

  $botSpinner = void 0;

  running = false;

  convoOffsetTop = void 0;

  talkAnimations = 0;

  remaining = [];

  scheduled = [];

  displayed = [];

  createSpinners = function() {
    $userSpinner = $(spinner).addClass('user');
    $botSpinner = $(spinner).addClass('bot');
    $('.convo .spinnerblock').append($userSpinner);
    return $('.convo .spinnerblock').append($botSpinner);
  };

  applySpinner = function(bubble) {
    var apply;
    apply = function($spinner) {
      $spinner.css({
        top: getBubbleTop(bubble) - convoOffsetTop - MARGIN_PX
      });
      return $spinner.addClass('shown').removeClass('hidden');
    };
    if ($(bubble).parent().hasClass('bot')) {
      return apply($botSpinner);
    } else {
      return apply($userSpinner);
    }
  };

  removeSpinner = function(bubble) {
    var remove;
    remove = function($spinner) {
      return $spinner.removeClass('shown').addClass('hidden');
    };
    if ($(bubble).parent().hasClass('bot')) {
      return remove($botSpinner);
    } else {
      return remove($userSpinner);
    }
  };

  show = function(bubble) {
    var $bubble, appear, chars, customDelay, performAppearance, shouldShowNext, shouldTalkBoter, spin, spinnerDelay, typingDelay, typingTime;
    running = true;
    $bubble = $(bubble);
    shouldShowNext = $bubble.hasClass('with-link') || $bubble.hasClass('with-linklist');
    shouldTalkBoter = $bubble.parent().hasClass('bot');
    spin = function() {
      return applySpinner(bubble);
    };
    appear = function(spin, talkingDelay) {
      var stopTalking;
      if (spin == null) {
        spin = true;
      }
      if (talkingDelay == null) {
        talkingDelay = 1;
      }
      if (!!spin) {
        removeSpinner(bubble);
      }
      $bubble.addClass('shown');
      if (shouldShowNext) {
        $bubble.next().addClass('shown');
      }
      if (shouldTalkBoter && talkingDelay !== 0) {
        talkAnimations += 1;
        if (!$('.logo').hasClass('talking')) {
          $('.logo').addClass('talking');
        }
        stopTalking = function() {
          talkAnimations -= 1;
          if (talkAnimations === 0 && $('.logo').hasClass('talking')) {
            return $('.logo').removeClass('talking');
          }
        };
        setTimeout(stopTalking, talkingDelay);
      }
      if (scheduled.length === 0) {
        return running = false;
      } else {
        return showScheduled();
      }
    };
    if (getBubbleTop(bubble) < $(window).scrollTop() || $(bubble).hasClass('immediate')) {
      return appear(false);
    } else {
      customDelay = $(bubble).parent().data('delay') * 1000 || 0;
      spinnerDelay = customDelay + (DELAY_MS * 0.5) + (Math.random() * (DELAY_MS * 0.5));
      setTimeout(spin, spinnerDelay);
      chars = $bubble.text().trim().replace(' ', '').length;
      typingTime = TYPING_MS * chars;
      if ($bubble.children('img').length > 0 || $bubble.children('svg').length > 0) {
        typingTime += IMAGE_MS;
      }
      typingDelay = customDelay + typingTime + DELAY_MS;
      performAppearance = function() {
        var talkingDelay;
        if ($bubble.find('svg').length > 0) {
          talkingDelay = 0;
        } else {
          talkingDelay = typingDelay;
        }
        return appear(true, talkingDelay);
      };
      return setTimeout(performAppearance, typingDelay);
    }
  };

  showScheduled = function() {
    var bubble;
    bubble = scheduled.pop();
    show(bubble);
    return displayed.push(bubble);
  };

  schedule = function(bubble) {
    var index;
    index = remaining.indexOf(bubble);
    remaining.splice(index, 1);
    scheduled.unshift(bubble);
    if (!running) {
      return showScheduled();
    }
  };

  assignRemaining = function() {
    return remaining = $('.bubble, #inputblock').get();
  };

  scheduleFirstFew = function() {
    var bubble, i, len, ref1, results;
    ref1 = remaining.slice(0, +(FIRST_MESSAGES - 1) + 1 || 9e9);
    results = [];
    for (i = 0, len = ref1.length; i < len; i++) {
      bubble = ref1[i];
      results.push(schedule(bubble));
    }
    return results;
  };

  getScrollBottom = function() {
    var scrollTop, windowHeight;
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();
    return scrollTop + windowHeight - BOTTOM_GAP_PX;
  };

  getBubbleTop = function(bubble) {
    return $(bubble).offset().top;
  };

  getBubbleBottom = function(bubble) {
    var bubbleHeight, bubbleTop;
    bubbleTop = $(bubble).offset().top;
    bubbleHeight = $(bubble).height();
    return bubbleTop + bubbleHeight;
  };

  handleScroll = function(e) {
    var bubble, bubbleTop, i, j, len, len1, results, scrollBottom, visible;
    scrollBottom = getScrollBottom();
    visible = [];
    for (i = 0, len = remaining.length; i < len; i++) {
      bubble = remaining[i];
      bubbleTop = getBubbleTop(bubble);
      if (bubbleTop < scrollBottom) {
        visible.push(bubble);
      }
    }
    results = [];
    for (j = 0, len1 = visible.length; j < len1; j++) {
      bubble = visible[j];
      results.push(schedule(bubble));
    }
    return results;
  };

  observeScroll = function() {
    return $(window).on('scroll', handleScroll);
  };

  calculateDimensions = function() {
    var ref1;
    BOTTOM_GAP_PX = (ref1 = $(window).width() > 480) != null ? ref1 : {
      70: 0
    };
    return convoOffsetTop = $('.convo').offset().top;
  };

  validateEmail = function(input) {
    var isEmail;
    isEmail = /\b[\w-\.]+@([\w-]+\.)+[\w-]{2,4}\b/g;
    if (input.match(isEmail)) {
      return true;
    } else {
      return false;
    }
  };

  validatePhoneNumber = function(input) {
    var isPhoneNumber;
    isPhoneNumber = /\b(((00)|(\+))(\d{3})\D?0?\D?((\d{2}))|(\d{3}))\D?(\d{3})\D?(\d{3})\b/g;
    if (input.match(isPhoneNumber)) {
      return true;
    } else {
      return false;
    }
  };

  validate = function(input) {
    if (validateEmail(input)) {
      return true;
    } else {
      return false;
    }
  };

  appendUserMessage = function(msg) {
    var $bubble, $userResponse, html;
    html = '<div class="chatblock user"><div class="bubble immediate">';
    html += msg + '</div></div>';
    $userResponse = $(html);
    $userResponse.insertBefore($('#inputblock'));
    $bubble = $userResponse.find('.bubble');
    remaining.push($bubble);
    return schedule($bubble);
  };

  appendBotResponse = function(isNew) {
    var $botResponse, $bubble, fburl, html, msg, twurl;
    if (isNew == null) {
      isNew = 1;
    }
    html = '<div class="chatblock bot"><div class="bubble">';
    if (isNew === '0') {
      msg = 'Izgleda, kot da je nekdo s tem mailom že podpisal peticijo. Povej še komu!';
    } else {
      msg = 'Hvala. Zdaj pa povej naprej!';
    }
    html += msg + '</div></div>';
    $botResponse = $(html);
    $botResponse.insertBefore($('#inputblock'));
    $bubble = $botResponse.find('.bubble');
    remaining.push($bubble);
    schedule($bubble);
    fburl = 'https://www.facebook.com/dialog/share?app_id=301375193309601&display=popup&href=' + encodeURIComponent(document.location.href) + '&redirect_uri=' + encodeURIComponent(document.location.href) + '&ref=responsive';
    twurl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Naša šepetalka ima idejo, kako ustaviti konje. Zakon o tujcih ni hec, aktiviraj se tudi ti! ' + document.location.href);
    html = '<div class="chatblock bot"><div class="bubble"><a class="social" target="_blank" href="' + fburl + '"><i class="fi-social-facebook"></i></a> <a class="social" target="_blank" href="' + twurl + '"><i class="fi-social-twitter"></i></a> <a class="social" href="mailto:?subject=Šepet&body=Naša šepetalka ima idejo, kako ustaviti konje. Zakon o tujcih ni hec, aktiviraj se tudi ti!"><i class="fi-mail"></i></a></div></div>';
    $botResponse = $(html);
    $botResponse.insertBefore($('#inputblock'));
    $bubble = $botResponse.find('.bubble');
    remaining.push($bubble);
    return schedule($bubble);
  };

  handleSubmit = function() {
    if (validate($('input#email').val())) {
      if (!$('.error').hasClass('valid')) {
        $('.error').addClass('valid');
      }
      $('#inputblock a').off('click');
      $('#inputblock input#email, #inputblock input#namelastname').prop({
        'disabled': true
      });
      return $.get({
        url: 'http://djnd.webfactional.com/counter/sign/',
        data: {
          name: $('input#namelastname').val(),
          email: $('input#email').val(),
          peticija: 'sepetalka'
        },
        success: function(r) {
          $('#inputblock').hide();
          appendUserMessage($('input#namelastname').val() + '<br>' + $('input#email').val());
          return appendBotResponse(r);
        }
      });
    } else {
      return $('.error').removeClass('valid').text("Polje email naj vsebuje veljaven naslov za spletno pošto.");
    }
  };

  handleKeyDown = function(e) {
    var $input;
    if (e.keyCode === 13) {
      e.preventDefault();
      $input = $(e.currentTarget);
      return handleSubmit();
    } else {
      if (!$('.error').hasClass('valid')) {
        return $('.error').addClass('valid');
      }
    }
  };

  handleSendClick = function(e) {
    e.preventDefault();
    return handleSubmit();
  };

  handleInput = function() {
    $('#inputblock input#email, #inputblock input#namelastname').on('keydown', handleKeyDown);
    return $('#inputblock a').on('click', handleSendClick);
  };

  module.exports = {
    init: function() {
      $(document).ready(function() {
        calculateDimensions();
        createSpinners();
        assignRemaining();
        scheduleFirstFew();
        observeScroll();
        handleInput();
        return $.get({
          url: 'http://djnd.webfactional.com/counter/getNumberOfSignatures/',
          data: {
            peticija: 'sepetalka'
          },
          success: function(r) {
            console.log(r);
            return $('#signatures').text(r);
          }
        });
      });
      return $(window).resize(function() {
        return calculateDimensions();
      });
    }
  };

}).call(this);
