$(function ready() {
  // $.ajax('https://djapi.knedl.si/getAllSignatures/?peticija=ahmad').done(function(data) {
    $('.js-signatures').text('Peticijo je podpisalo 4263 podpisnic in podpisnikov. Njihova imena smo odstranili, ko je vstopila v veljavo GDPR.');
  // });

  // $.ajax('https://djapi.knedl.si/getNumberOfSignatures/?peticija=ahmad').done(function(data) {
    $('.js-signaturecount').text('4263');
  // });

  // $('.js-more').on('click', function() {
    $('.js-more').remove();
    $('.js-signatures').removeClass('show-less');
  // });

  $('#podpisi-peticijo').on('submit', function (event) {
    event.preventDefault();
    $.get('https://djapi.knedl.si/sign/',
      {
        name: $('#signaturename').val(),
        email: $('#signatureemail').val(),
        peticija: 'ahmad'
      }, function (r) {
        if (r == 'Saved') {
          $('#podpisi-peticijo').hide();
          $('#hvala-podpis').show();
        }
      }
    );
  });

  $('#hvala-podpis button').on('click', function () {
    $('#signaturename').val('');
    $('#signatureemail').val('');
    $('#podpisi-peticijo').show();
    $('#hvala-podpis').hide();
  });

  var $linkElement = $('#shorturl');
  $('.js-copyurl').on('click', function () {
    var copied = $linkElement.select();
    var success = document.execCommand("copy");
    if (success) {
      $(this).text('SKOPIRANO!');
    }
  });

  var link = document.location.href;
  $linkElement.val(link);

  $.ajax({
    method: 'POST',
    url: 'https://djnd.si/yomamasofat/',
    data: {
      fatmama: document.location.href,
    },
    success: function (resp) {
      $linkElement.val(resp);
      link = resp;
    }
  });

  var title = 'Spoznajte Ahmada!';
  var text = 'Ministrstvo za notranje zadeve namerava jutri dopoldne na Hrvaško deportirati sirskega begunca Ahmeda Shamieha. Podpiši poziv in sporoči vsem, da nočeš živeti v takšni državi.';
  var hashtags = '';
  //social
  $('.js-facebook').on('click', function () {
    var url = 'https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=' + encodeURIComponent(document.location.href) + '&link=' + encodeURIComponent(document.location.href) + '&ref=responsive&name=' + encodeURIComponent(title);
    window.open(url, '_blank');
    //ga('send', 'event', 'social', 'facebook');
    return false;
  });
  $('.js-twitter').on('click', function () {
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + ' ' + hashtags + ' ' + link);
    window.open(url, '_blank');
    //ga('send', 'event', 'social', 'twitter');
    return false;
  });
  $('.js-gplus').on('click', function () {
    var url = 'https://plus.google.com/share?url=' + encodeURIComponent(document.location.href);
    window.open(url, '_blank');
    //ga('send', 'event', 'social', 'gplus');
    return false;
  });
  $('.js-email').on('click', function () {
    var url = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + text + ' ' + encodeURIComponent(link);
    window.open(url, '_blank');
    //ga('send', 'event', 'social', 'email');
    return false;
  });
});
