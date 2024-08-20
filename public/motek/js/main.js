var imgContainer = $(".img-container");
var imgBg = $(".img-bg");
var min = 1;
var max = 8;

for (var i = min; i <= max; i++) {
  loadImage("img/mobile" + i + ".png");
}

function loadImage(imageUrl, cb) {
  var image = new Image();
  image.src = imageUrl;
  image.onload = function onLoad() {
    if (cb) {
      cb(imageUrl);
    }
  };
}

var i = 0;
setTimeout(function timerFunc() {
  $.get("https://api.djnd.si/counter/motek", function(data) {
    var newI = (Number(data) % max) + 1;
    if (i != newI) {
      i = newI;
      loadImage("img/mobile" + i + ".png", function cb(imageUrl) {
        imgBg.css("background-image", "url(" + imageUrl + ")");
        setTimeout(timerFunc, 2000);
      });
    } else {
      setTimeout(timerFunc, 2000);
    }
  });
}, 0);
