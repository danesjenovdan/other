(function() {
  var eqalize_selector, equalize_elements, imagesLoaded;

  imagesLoaded = require('imagesloaded');

  eqalize_selector = '.equalized';

  equalize_elements = function() {
    var current_row, el_row, max_height, popped, results;
    current_row = -1;
    el_row = [];
    max_height = 0;
    $(eqalize_selector).each(function(i, el) {
      var child, el_height, j, len, popped, ref, y;
      y = Math.round($(el).offset().top);
      el_height = 0;
      ref = $(el).children();
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        el_height += $(child).outerHeight();
      }
      if (y > current_row) {
        while (el_row.length > 0) {
          popped = el_row.pop();
          $(popped).height(max_height);
        }
        max_height = 0;
        y = Math.round($(el).offset().top);
        current_row = y;
      }
      if (el_height > max_height) {
        max_height = el_height;
      }
      return el_row.push(el);
    });
    results = [];
    while (el_row.length > 0) {
      popped = el_row.pop();
      results.push($(popped).height(max_height));
    }
    return results;
  };

  module.exports = {
    init: function() {
      return $(document).ready(function() {
        $(document).imagesLoaded(function() {
          return equalize_elements();
        });
        return $(document).resize(function() {
          return equalize_elements();
        });
      });
    }
  };

}).call(this);
