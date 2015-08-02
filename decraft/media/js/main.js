$(document).ready(function() {
  $('#nav-wrapper nav').pushpin({ top: $('nav').offset().top });

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
      'scrollTop':$target.offset().top-50
    }, 900, function () {
      window.location.hash = target;
    });

    //materializee box for certificate and other
    $('.materialboxed').materialbox();
    // $('#certificate .card').click(function() {
    //   $(tihs).toggleClass('.box');
    // })
  });
})