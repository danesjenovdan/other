<?php
header ('Content-type: text/html; charset=utf-8');
error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Danes je nov dan / Peticija za ohranitev kluba K4</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />

	<meta property="og:title" content="Peticija za ohranitev kluba K4" />
	<meta property="og:description" content="Ne pristajamo na golo življenje. K4 za zmeri!">
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://danesjenovdan.si/k4/" />
	<meta property="og:image" content="http://danesjenovdan.si/k4/banner/k4.png" />
	<meta property="og:site_name" content="Peticija za ohranitev kluba K4" />
	<meta property="fb:app_id" content="301375193309601" />

    <!-- Le styles -->
    <link href='https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet">
    <!--<link href="css/bootstrap-responsive.css" rel="stylesheet">-->
    <link href="/static/css/landing.css" rel="stylesheet" />

      <link rel='stylesheet' type='text/css' href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css' />
      <link rel='stylesheet' type='text/css' href='css/jquery.addtocal.css' />

  <!-- facebook crap -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=301375193309601";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  <!-- end of facebook crap -->

<style type="text/css">
.signupform {
	width: auto;
	float: none;
}
body{
  /*background: url(img/bg.png) repeat;*/
  background:url(img/bck_pattern.png) repeat;
  font-family: 'Archivo Narrow', sans-serif;
}
.footy {
background-image: url('https://danesjenovdan.si/static/img/footer_pattern.png');
overflow: hidden;
}
.footerlink {
color: #1d7373;
display: block;
}
.footy .mail {
padding-left: 1.5em;
color: #363636;
font-family: 'Archivo Narrow', sans-serif;
}
.ff{
background:url(img/fs.png) center right no-repeat;
}

.f1{
   padding-bottom: 34px;
    padding-top: 50px;
}
.f2{
    padding-bottom: 31px;
    padding-top: 25px;
}
.f3{
    padding-bottom: 20px;
    padding-top: 20px;
}
.f4{
padding-top: 31px;
}

    .introimg {
        position:relative;
        background:url(./banner/k4.png) top left no-repeat;
        height:270px;
    }
    .introimgtext {
        position:absolute;
        left:0;
        bottom:30px;
        padding:20px 10px 10px 10px;
        background: url(img/bg.png) repeat;
    }
    .introimgtext h1{
        text-transform:uppercase;
        color:#262626;
        font-size:24px;
        margin:0;
        line-height:30px;
    }
    .introimgtext h3{
        text-transform:uppercase;
        color:#1D7373;
        font-size:15px;
        margin:0;
        line-height:20px;
    }
    .mctx{
        font-size:15px;
        line-height:20px;

        color:#262626;
    }
    .flp20 {
        float:left;
        padding:0 20px 0 0;
    }
    .sfbtn, .sfbtn:hover, .sfbtn:focus  {
        background:#1D7373;
        color:#fff;
        padding:5px 20px;
        font-size:12px;
        text-decoration:none;
    }
    .ptb10 {
        padding:20px 0;
    }
    .arhiv {
        background:#fff;
        padding:30px;
    }
    .arhiv h1 {
        padding:0 0 20px 0;
        margin:0;
        text-transform:uppercase;
        color:#8EB9B9;
        font-size:24px;
        line-height:30px;
    }


#dndmainnav ul{padding: 0; margin: 0;}
#dndmainnav ul li {
    float: left;
    list-style: none outside none;
    margin: 0;
    padding: 10px 0 0;
}
#dndmainnav ul li:first-child a{
  padding-left: 0;
}
#dndmainnav ul li:last-child a{
  border-right: none;
}
#dndmainnav ul li a {
    border-right: 1px solid #ACACAC;
    color: #ACACAC;
    font-size: 12px;
    font-family: 'Archivo Narrow', sans-serif;
    margin: 0;
    padding: 0 10px;
}
#dndmainnav ul li a:active,
#dndmainnav ul li a:visited,
#dndmainnav ul li a:link
{
  text-decoration: none;
  color: #ACACAC;
}
#dndmainnav ul li a:hover,
#dndmainnav ul li:hover a
{
  text-decoration: none;
  color: #636363;
}


#dndmainnav ul li.active,#dndmainnav ul li:hover {
    border-top: 5px solid #327F7F;
    padding: 5px 0 0 0;
}
#dndmainnav ul li.active a {
    color: #636363;
    margin: 0;
    padding: 0 10px;
}
/*
#dndmainnav ul li.active{border-top: 5px solid #327f7f;}
#dndmainnav ul li:last{ border-right: none; }
#dndmainnav ul li a, #dndmainnav ul li a:hover {color: #acacac; font-size: 12px; padding: 10px }
#dndmainnav ul li.active a{color: #636363}
*/

label {
	top: -6px;
	position: relative;
	padding-left: 5px;
}

</style>

  </head>

  <body>
<div class="container">
    <div id="dndmainnav" class="">
            <ul>
              <li class="">
                <a href="http://danesjenovdan.si">
                  Danes je nov dan
                </a>
              </li>
              <li class="">
                <a href="http://spet.danesjenovdan.si">
                  Spet je nov dan
                </a>
              </li>
              <li class="">
                <a href="http://delamo.danesjenovdan.si">
                  Delamo nov dan
                </a>
              </li>
            </ul>

    </div>
</div>

    <div class="container" style="margin-top: 2em;">
      <div class="row">
          <div class="span8 offset2">
<div class="introimg">
                  <div class="introimgtext">
                      <h1>Peticija</h1>
                      <h3>za ohranitev Kluba K4</h3>
                  </div>
              </div>
              <div class="row">
                  <div class="span8 ptb10">
                        <div class="flp20">
                            <div class="fb-like" data-href="http://danesjenovdan.si/k4" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>
                        </div>
                        <div class="flp20">
                            <div class="g-plusone" data-href="http://danesjenovdan.si/k4" data-size="medium" data-annotation="buble" data-width="100"></div>
                        </div>
                        <div class="flp20">
                            <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-hashtags="danesjenovdan">Tweet</a>
                        </div>

                  </div>
              </div>
              <div class="row">
              	<div class="span8">
              		<div  class="flp20">
              		    <a class="sfbtn" href="files/izjava.doc">Izjava bivšega direktorja Zavoda K6/4</a>
              		</div>
              		<div  class="flp20">
              		    <a class="sfbtn" href="files/vizija.pdf">Programska vizija novega direktorja Zavoda K6/4</a>
              		</div>
              	</div>
              </div>
              <div class="row">
                  <div class="span8 mctx">
                  	<p style="margin-top: 2em;">Zavod K6/4, katerega del je tudi Klub K4, je institucija z neprimerljivo bogato zgodovino delovanja na področju alternativne in progresivne kulture. To poslanstvo se je doslej izvajalo v sodelovanju s pomembnimi akterji z omenjenega področja, pri čemer je skupina, odgovorna za program kluba, vedno ravnala v skladu s prepričanjem, da je prvotna funkcija kluba ohranjanje te dediščine ter v njenem razširjanju, upoštevajoč razvoj progresivnih glasbenih, vizualnih in umetniških praks tako pri nas kot v svetu.</p>
                  	<p>Zaradi popolnega prevzema Kluba K4 ter Zavoda K6/4 s strani ene študentske poslanske skupine Povezani, pri čemer sta onemogočeni kakršnakoli kontrola in transparentnost poslovanja ter programskega načrtovanja zavoda, kot tudi zaradi proceduralnih nepravilnosti pri imenovanju članov Sveta Zavoda, nekompetentnosti, medsebojnih sorodstvenih, prijateljskih in intimnih povezav članov novega vodstva ter njihove očitne povezanosti s konkurenčnimi komercialnimi subjekti:</p>
                  	<h3>zahtevamo:</h3>
                  	<ul>
	                  	<li>ohranitev Kluba K4 kot prostora progresivne in neodvisne kulturne ter glasbene produkcije;</li>
	                  	<li>ohranitev Zavoda K6/4 kot neprofitne in odprte urbane platforme za glasbene, vizualne,
	                  	intermedijske ter druge sodobne umetniške in kulturne prakse.</li>
                  	</ul>
                  	<h3>pozivamo novo vodstvo Zavoda K6/4:</h3>
                  	<ul>
                  		<li>k odstopu zaradi nelegitimnega imenovanja, izkazanega konflikta interesov, nestrokovnosti ter dosedanjega destruktivnega delovanja pri opravljanju dodeljenih funkcij in vodenju zavoda.</li>
                  	</ul>
                  	<h3>pozivamo ŠOU v Ljubljani:</h3>
                  	<ul>
                  		<li>da takoj razreši vse člane Sveta Zavoda, ki jih imenuje kot ustanovitelj in katerih mandat ni vezan na funkcijo;</li>
                  		<li>da z javnim pozivom v Svet Zavoda izbere uglednega predstavnika javnosti s področja sodobnih umetniških in kulturnih dejavnosti, ki mora biti kredibilen strokovnjak na vsaj enem izmed področij delovanja zavoda;</li>
                  		<li>da spremeni Akt o ustanovitvi zavoda tako, da bosta za predstavnika ustanovitelja v Svetu Zavoda imenovana en predstavnik pozicije in en predstavnik opozicije v Študentskem parlamentu;</li>
                  		<li>da spremeni Akt o ustanovitvi tako, da število članov Svet Zavoda razširi s pet na sedem in namesto enega predstavnika zaposlenih vključi tri programske vodje projektov, in sicer enega predstavnika Kluba K4, enega predstavnika Galerije Kapelica ter enega predstavnika Kiberpipe;</li>
                  		<li>da izvede ponovni razpis za direktorja zavoda;</li>
                  		<li>da zagotovi popolno transparentnost poslovanja ter programskega načrtovanja Zavoda K6/4.</li>
                  	</ul>
                  	<h3>pozivamo medije ter vse pristojne kazenske in protikorupcijske organe:</h3>
                  	<ul>
                  		<li>da raziščejo ozadje prevzema Zavoda K6/4 s strani študentske skupine Povezani, medsebojne sorodstvene, prijateljske in intimne povezave novega vodstva ter njihovo povezanost s konkurenčnimi komercialnimi subjekti.</li>
                  	</ul>
                  	<h3>podpisani:</h3>
                  	<p>
                      Peticijo je podpisalo <strong>2465</strong> podpisnic in podpisnikov. Njihova imena smo odstranili, ko je vstopila v veljavo GDPR.
                    </p>
                  </div>
              </div>
              <div class="row">
              	<div class="span8">
              		<div class="signupform">
              			<!-- Begin MailChimp Signup Form -->
              			<div id="mc_embed_signup">
              			<form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              				<h2>Podpiši peticijo</h2>
              				<p>Pozor! Pri vnašanju podpisnikov prihaja do polurnega zamika, preden se imena pojavijo na strani.</p>
              			<div class="mc-field-group">
              				<input type="text" value="" placeholder="Ime" name="FNAME" class="required" id="mce-FNAME">
              			</div>
              			<div class="mc-field-group">
              				<input type="text" value="" placeholder="Priimek" name="LNAME" class="required" id="mce-LNAME">
              			</div>
              			<div class="mc-field-group">
              				<input type="email" value="" placeholder="E-naslov" name="EMAIL" class="required email" id="mce-EMAIL">
              			</div>
              			<div class="mc-field-group input-group">
              			    <p class="question">Se lahko javimo, ko bomo organizirali okroglo mizo in delovno skupino?</p>
              			    <ul class="radio">
              			        <li><input type="radio" value="Da, za vse delovne skupine" name="MMERGE3" id="mce-MMERGE3-1"><label for="mce-MMERGE3-1">Da, za vse delovne skupine</label></li>
              			    	<li><input type="radio" value="Da, za delovne skupine za reorganizacijo študentskih organizacij" name="MMERGE3" id="mce-MMERGE3-0"><label for="mce-MMERGE3-0">Da, za to delovno skupino</label></li>
              					<li><input type="radio" value="Ne" name="MMERGE3" id="mce-MMERGE3-2"><label for="mce-MMERGE3-2">Ne</label></li>
              				</ul>
              			</div>
              				<div id="mce-responses" class="clear">
              					<div class="response" id="mce-error-response" style="display:none"></div>
              					<div class="response" id="mce-success-response" style="display:none"></div>
              				</div>	<div class="clear"><input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              			</form>
              			</div>
              	</div>
              </div>
          </div>


        <div class="span4">
        </div>
    </div>
        </div> <!-- /container -->



<footer>
    <div class="container footy">
      <div class="row">
        <div class="span3 ff f1">
          <a class="mail" href="#">info@danesjenovdan.si</a>
        </div>
        <div class="span4 lajkbatons ff f2">
            <div class="flp20">
                <div class="fb-like" data-href="http://danesjenovdan.si" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>

            </div>
            <div class="flp20">
          <div class="g-plusone" data-href="http://danesjenovdan.si" data-size="medium" data-annotation="buble" data-width="100"></div>

                  </div>
            <div class="flp20">
          <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-hashtags="danesjenovdan">Tweet</a>

                  </div>

        </div>
          <div class="span3 ff f3">
              <div class="fb-like-box" data-href="http://www.facebook.com/danesjenovdan" data-width="292" data-show-faces="false" data-stream="false" data-header="false"></div>

          </div>
        <div class="span2 f4">
            <a class="footerlink" href="http://danesjenovdan.si">danesjenovdan.si</a>
            <!--<a class="footerlink" href="http://veselje.danesjenovdan.si">veselje.danesjenovdan.si</a>
            --><br />
        </div>
      </div>
    </div>
  </footer>




  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
       <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/jquery-ui.min.js'></script>

      <script type='text/javascript' src='js/rfc3339date.js'></script>
<script type='text/javascript' src='js/jquery.addtocal.js'></script>

<!-- Matomo -->
<script type="text/javascript">
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['setDoNotTrack', true]);
  _paq.push(['disableCookies']);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u='//track.djnd.si/';
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '6']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//track.djnd.si/piwik.php?idsite=6&rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code -->

  <script type="text/javascript">
    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();

          !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

  </script>

  <script>
    $(document).ready(function() {
        $('.addtocal').AddToCal({
            // ical and vcal require an ics or vcs file to be served.
            // Disable these features if reqired (as a result the 30boxes, iCal and vCalendar menu links will not appear)
            icalEnabled:false,
            vcalEnabled:false,

            getEventDetails: function( element ) {



              return {
                webcalurl: null,
                icalurl: null,
                vcalurl: null,
                start: "20130305T180000Z",
                end: "20130305T200000Z",
                title: "Ne privatizaciji vode",
                details: "Ne privatizaciji vode, Atrij ZRC SAZU, 5. marec ob 18.00",
                location: null,
                url: null
            };
    }
    });
    });
  </script>

  </body>
</html>
