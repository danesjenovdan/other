(function() {
  var ensure_blank_target, get_position, path, third_slash_index;

  get_position = function(str, m, i) {
    return str.split(m, i).join(m).length;
  };

  path = document.location.href;

  third_slash_index = get_position(path, '/', 3);

  path = path.substr(0, third_slash_index);

  ensure_blank_target = function(index, link) {
    if (link.href.indexOf(path) !== 0) {
      return $(link).attr({
        'target': '_blank'
      });
    }
  };

  module.exports = {
    init: function() {
      return $(document).ready(function() {
        return $('a').each(ensure_blank_target);
      });
    }
  };

}).call(this);
