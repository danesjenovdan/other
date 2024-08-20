var edited = false;

var skb = '2014-04-09 13:29';
var telekom = '2014-04-09 17:48';
var bs = '2014-04-09 17:52';
var bk = '2014-04-09 17:54';
var nlb = '2014-04-09 17:58';
var dh = '2014-04-09 18:14';
var t2 = '2014-04-09 18:19';

$(document).ready(function() {

    // set timers
    moment.lang('sl');
    $('.skb').text(moment(skb).fromNow());
    $('.telekom').text(moment(telekom).fromNow());
    $('.bs').text(moment(bs).fromNow());
    $('.bk').text(moment(bk).fromNow());
    $('.nlb').text(moment(nlb).fromNow());
    $('.dh').text(moment(dh).fromNow());
    $('.t2').text(moment(t2).fromNow());

    // set checkbox behavior
    $('.thebox').on('click', function() {
        $(this).toggleClass('checked');

        //ga('send', 'event', 'misc', 'toggled borut');

        return false;
    });


    // ZERO FUCKING CLIPBOARD
    var client = new ZeroClipboard($('#btn-shorturl'), {
        moviePath: 'js/ZeroClipboard.swf'
    });

    $('#shorturl').select();

    client.on( "load", function(client) {
        //alert( "movie is loaded" );

        client.on( "complete", function(client, args) {
            // `this` is the element that was clicked
            //this.style.display = "none";
            //clientText.setText( 'lalala' );
    //        alert("Copied text to clipboard: " + args.text );
            //ga('send', 'event', 'social', 'copied url');
        });
    });



    // edit switch
    $('#content').on('focus', function() {
        edited = true;
        //ga('send', 'event', 'misc', 'edited content');
    });

    //social
    $('.fb').on('click', function() {
        var url = 'https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=' + encodeURIComponent(document.location.href) + '&link=' + encodeURIComponent('http://danesjenovdan.si/heartbleed/') + '&ref=responsive&name=' + encodeURIComponent('Hrošč v srcu interneta')
        window.open(url, '_blank');
        //ga('send', 'event', 'social', 'facebook');
        return false;
    });
    $('.tw').on('click', function() {
        var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Preden vaši podatki doživijo srčni napad, od ponudnikov spletnih storitev zahtevajte, da ravnajo odgovorno. http://djnd.si/cz');
        window.open(url, '_blank');
        //ga('send', 'event', 'social', 'twitter');
        return false;
    });
    $('.gp').on('click', function() {
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent('http://djnd.si/cz');
        window.open(url, '_blank');
        //ga('send', 'event', 'social', 'gplus');
        return false;
    });
    $('.email').on('click', function() {
        var url = 'mailto:?subject=Varnostna grožnja&body=Zdravo! Zanima nas, kaj boste/ste že storili glede pred kratkim izpostavljenega "heartbleed" exploita za SSL. Torej; kakšna je vaša trenutna implementacija in kdaj lahko uporabniki vaših storitev pričakujejo posodobitev/patch? Ker gre za veliko grožnjo, nas najbolj zanima, kdaj lahko pričakujemo, da bo napaka odpravljena. Lepo vas pozdravljajo odgovorni uporabniki in uporabnice interneta Zahvaljujemo se za čimprejšnji odgovor in takojšnjo ter odgovorno naslovitev grožnje. S konkretnimi dejanji dokažite, da je varnost vaših uporabnikov na prvem mestu.';
        window.open(url, '_blank');
        //ga('send', 'event', 'social', 'email');
        return false;
    });

    // report
    $('#btn-email').on('click', function() {
        var url = 'mailto:info@danesjenovdan.si';
        window.open(url, '_blank');
        return false;
    });
    //

});
