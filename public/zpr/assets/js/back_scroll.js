(function() {
  var $nav, big_delta, detect_scroll_direction, handle_scroll, hide_aux_nav, interval, last_top, nav_hidden, scrolling_down, show_aux_nav, threshold;

  $nav = null;

  last_top = 0;

  big_delta = 0;

  scrolling_down = true;

  nav_hidden = true;

  interval = 1000 / 10;

  threshold = 600;

  detect_scroll_direction = function() {
    var current_top, delta, scroll_direction;
    current_top = $(window).scrollTop();
    delta = current_top - last_top;
    last_top = current_top;
    if (delta > 0) {
      if (scrolling_down) {
        big_delta += delta;
      } else {
        big_delta = 0;
        scrolling_down = true;
      }
    } else {
      if (scrolling_down) {
        big_delta = 0;
        scrolling_down = false;
      } else {
        big_delta += delta;
      }
    }
    scroll_direction = null;
    if (big_delta < threshold * -1) {
      scroll_direction = false;
    }
    if (big_delta > threshold / 10) {
      scroll_direction = true;
    }
    return scroll_direction;
  };

  hide_aux_nav = function() {
    console.log('hiding nav');
    $nav.removeClass('shown').addClass('hidden');
    return nav_hidden = true;
  };

  show_aux_nav = function() {
    console.log('showing nav');
    $nav.removeClass('hidden').addClass('shown');
    return nav_hidden = false;
  };

  handle_scroll = function(e) {
    var scrolling_change;
    scrolling_change = detect_scroll_direction();
    if (scrolling_change === false && nav_hidden) {
      show_aux_nav();
    }
    if (scrolling_change === true && !nav_hidden) {
      return hide_aux_nav();
    }
  };

  module.exports = {
    init: function() {
      return $(document).ready(function() {
        last_top = $(window).scrollTop();
        $nav = $('#popup-nav');
        return $(window).on('scroll', Foundation.util.throttle(handle_scroll, interval));
      });
    }
  };

}).call(this);
