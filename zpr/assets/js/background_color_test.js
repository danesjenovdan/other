(function() {
  var ABalytics, initialize_bg_experiment;

  ABalytics = require('./abalytics.js');

  initialize_bg_experiment = function() {
    console.log('abalytics');
    return ABalytics.init({
      background_color_experiment: [
        {
          name: 'blue_background',
          background_experiment: "#006AE3"
        }, {
          name: 'red_background',
          background_experiment: "#FE5A52"
        }
      ]
    });
  };

  module.exports = {
    init: function() {
      initialize_bg_experiment();
      ABalytics.applyBgColors();
      return $('input#background').val($('.background_experiment').get(0).style.backgroundColor);
    }
  };

}).call(this);
