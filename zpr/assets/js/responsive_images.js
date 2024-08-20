(function() {
  var conf, imgix, overwrite_images_with_local_paths;

  imgix = require('imgix');

  conf = require('./configuration');

  overwrite_images_with_local_paths = function() {
    return $('.imgix-fluid').each(function(i, el) {
      var bkg_img, path;
      path = $(el).data('src');
      path = path.replace("http://" + conf.asset_host + "/", '/assets/projects/');
      $(el).attr('data-src', path);
      bkg_img = "url(" + path + ")";
      if (el.tagName === 'IMG') {
        return el.src = path;
      } else {
        return $(el).css({
          backgroundImage: "" + bkg_img,
          backgroundSize: "cover"
        });
      }
    });
  };

  module.exports = {
    init: function() {
      return $(document).ready(function() {
        if (document.location.href.indexOf('localhost') === -1) {
          return imgix.onready(function() {
            return imgix.fluid({
              updateOnResizeDown: true,
              pixelStep: 5,
              autoInsertCSSBestPractices: true,
              lazyLoad: true,
              lazyLoadOffsetVertical: 2000,
              lazyLoadColor: false,
              onLoad: function() {
                return $(document).trigger('imgix:load');
              }
            });
          });
        } else {
          console.log('hello');
          return overwrite_images_with_local_paths();
        }
      });
    }
  };

}).call(this);
