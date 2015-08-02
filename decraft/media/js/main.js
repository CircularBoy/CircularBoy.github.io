$(document).ready(function() {
  $('#nav-wrapper nav').pushpin({ top: $('nav').offset().top });

  $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  //button to top
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#arrow .arrow').fadeIn();
      } else {
        $('#arrow .arrow').fadeOut();
      }
    });
    $('#arrow .arrow').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });

   //scroll after url click
   $('nav a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop':$target.offset().top-40
    }, 900, function () {
      window.location.hash = target;
    });

    //materializee box for certificate and other
    $('.materialboxed').materialbox();
    
    //ymaps
    ymaps.ready(function(){

      myMap = new ymaps.Map("map", {
        center: [44.519462, 33.580075],
        zoom: 12
      });

      myMap.controls.add('mapTools');
      myMap.controls.add('typeSelector');
      myMap.controls.add('zoomControl');

      var myPlacemark = new ymaps.Placemark(
        [44.519462, 33.580075], {},
        {
          iconImageHref: 'images/metka.png',
          iconImageSize: [44, 61],
          iconImageOffset: [-22,-61]
        }
        );

      myMap.geoObjects.add(myPlacemark);

    })
  });
 })