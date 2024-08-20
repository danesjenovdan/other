$(function ready() {
  var petitionName = 'rogtrue';

  function showAllSignatures() {
    $('.js-more').remove();
    $('.js-signaturenames').removeClass('show-less');
  }

  $('.js-more').on('click', showAllSignatures);

  $.ajax('https://api.djnd.si/getAllSignatures/?peticija=' + petitionName).done(function(res) {
  // $.ajax('http://localhost:8080/getAllSignaturesAndCountForMultiple/?peticije=' + petitionName).done(function(res) {
    var $sigNames = $('.js-signaturenames');
    console.log(res);
    $sigNames.text(res);
    if (parseInt($sigNames.css('max-height'), 10) > $sigNames.height()) {
      showAllSignatures();
    }
    // var maxSignatures = parseInt($('.js-signaturemax').text(), 10);
    // var count = res.counter;
    // if (typeof count === 'number' && !isNaN(count)) {
    //   var percent = Math.floor(Math.min(count / maxSignatures * 100, 100));
    //   $('.js-signaturecount').text(count);
    //   $('.petition .progress-bar').attr('aria-valuenow', percent).css('width', percent + '%');
    //   $('.petition .progress-bar span').text(percent + '%');
    // }
  });

  $('.petition__form').on('submit', function(event) {
    event.preventDefault();

    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!$('#petition-email').val().match(emailPattern)) {
    //   alert('Tvoj email ne izgleda kot email. Prosim poskusi ponovno.');
    //   return;
    // }

    var namePattern = /^(([A-Za-zšđžčćäëöüŠĐŽČĆÄËÖÜéÉ]+[\-\']?)*([A-Za-zšđžčćäëöüŠĐŽČĆÄËÖÜéÉ]+)?\s)+([A-Za-zšđžčćäëöüŠĐŽČĆÄËÖÜéÉ]+[\-\']?)*([A-Za-zšđžčćäëöüŠĐŽČĆÄËÖÜéÉ]+)?$/;
    if (!$('#petition-name').val().match(namePattern)) {
      alert('Tvoje ime ne izgleda kot ime. Prosim poskusi ponovno.');
      return;
    }

    $(this).find(':input').attr('disabled', true);

    var data = {
      name: $('#petition-name').val(),
      email: '',
      peticija: petitionName, // + '.djnd=' + $('#petition-djnd')[0].checked
    };

    $.get('https://api.djnd.si/sign-no-mail/', data, function(res) {
    // $.get('http://localhost:8080/sign-no-mail/', data, function(res) {
        if (res === 'Saved') {
          $('.js-petition-error').text('');
          $('.petition__form').hide();
          $('.petition__reset').show();
        } else {
          console.error('error', res);
          $('.js-petition-error').text('Napaka: ' + res);
          $('.petition__form').find(':input').attr('disabled', false);
        }
      }
    );
  });

  $('.petition__reset .btn-link').on('click', function() {
    $('.petition__form').find(':input').attr('disabled', false);

    $('#petition-name').val('');
    $('#petition-email').val('');
    $('#petition-djnd').each(function() {
      this.checked = this.defaultChecked;
    });

    $('.petition__form').show();
    $('.petition__reset').hide();
  });

  // hover state on ios
  $(document).on('touchstart', function(event) {
    const $hover = $(event.target).closest('.demand__hover, .demand__text');
    const $demands = $('.demand');
    if ($hover.length) {
      $demands.removeClass('hover');
      $hover.closest('.demand').addClass('hover');
    } else {
      $demands.removeClass('hover');
    }
  });

  var link = 'http://atrog.org/o-nas/ohranimo-tovarno-rog/peticije/337-poziv-avtonomne-tovarne-rog-proti-nasilju-mola-za-odprt-dialog';
  $.ajax({
    method: 'POST',
    url: 'https://djnd.si/yomamasofat/',
    data: {
      fatmama: link,
    },
    success: function(resp) {
      link = resp;
    },
  });

  var title = 'Poziv avtonomne tovarne Rog: Proti nasilju - za odprt dialog';
  var text = 'Podpiši peticijo in od MOL zahtevaj, da opusti sodno preganjanje posameznic in posameznikov in privoli v odprto diskusijo o prihodnosti Roga!';
  var hashtags = '';
  //social
  $('.js-facebook').on('click', function() {
    var url = 'https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=' + encodeURIComponent(link) + '&link=' + encodeURIComponent(link) + '&ref=responsive&name=' + encodeURIComponent(title);
    window.open(url, '_blank');
    return false;
  });
  $('.js-twitter').on('click', function() {
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + ' ' + hashtags + ' ' + link);
    window.open(url, '_blank');
    return false;
  });
  $('.js-gplus').on('click', function() {
    var url = 'https://plus.google.com/share?url=' + encodeURIComponent(link);
    window.open(url, '_blank');
    return false;
  });
  $('.js-email').on('click', function() {
    var url = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + text + ' ' + encodeURIComponent(link);
    window.open(url, '_blank');
    return false;
  });
});
