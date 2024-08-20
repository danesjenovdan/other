(function() {
  var $, background_color_test, bubbles, external_links, foundation;

  $ = require('jquery');

  foundation = require('foundation');

  external_links = require('./external_links');

  bubbles = require('./bubbles');

  background_color_test = require('./background_color_test');

  $(document).foundation();

  external_links.init();

  bubbles.init();

}).call(this);
