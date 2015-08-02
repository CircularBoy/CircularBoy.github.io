$(document).ready(function() {

  $('.modal-trigger').leanModal();
  $(".button-collapse").sideNav();

  $('#nav-wrapper nav').pushpin({ top: $('nav').offset().top });

  $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  //button to top
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() != 0) {
        $('#arrow .arrow').fadeIn();
      } else {
        $('#arrow .arrow').fadeOut();
      }
    });

    $('#arrow .arrow').click(function() {
      $('body, html').animate({scrollTop:0},800);
    });
  });

  //scroll after url click
  $('ul a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      scrollTop: $target.offset().top - 40
    }, 900, function () {
      window.location.hash = target;
    });
  })

  

});