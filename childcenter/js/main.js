$(document).ready(function() {

  $('.modal-trigger').leanModal();
  $(".button-collapse").sideNav();

  $('#nav-wrapper nav').pushpin({ top: $('nav').offset().top });

  $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });
  
  // nav mobile
  $(".button-collapse").sideNav();

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

  //servises switcher
  $('.complex .title:nth-of-type(1)').click(function() {
    $('.servises .complex .wrap').fadeOut(0)
    $('.servises .complex .wrap:nth-child(2)').fadeIn(300)
  });
  $('.complex .title:nth-of-type(2)').click(function() {
    $('.servises .complex .wrap').fadeOut(0)
    $('.servises .complex .wrap:nth-child(4)').fadeIn(300)
  });
  $('.complex .title:nth-of-type(3)').click(function() {
    $('.servises .complex .wrap').fadeOut(0)
    $('.servises .complex .wrap:nth-child(6)').fadeIn(300)
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

  //to top
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#totop').fadeIn();
      } else {
        $('#totop').fadeOut();
      }
    });
    $('#totop').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });

  //map trigger
  $('.drop-down').click(function () {
    $('.drop-down').fadeOut(0)
    $('#contacts img, .drop-up').fadeIn(0)
  })
  $('.drop-up').click(function () {
    $('.drop-down').fadeIn(0)
    $('#contacts img, .drop-up').fadeOut(0)
  })


  //modal title
  $('a[href="#modal2"]').click(function () {
    var modelTitle = $(this).parent().parent().parent().find('.card-content:nth-of-type(1) p').text().slice(8);
    $('#modal2 h4 span').text(modelTitle);
  })

  //modal id
  $('a[href="#modal1"]').click(function () {
    var aId = $(this).attr('data-id');
    $('#modal1 input[type="hidden"]').val(aId);
  })

  $('a[href="#modal2"]').click(function () {
    var modelTitle = $(this).parent().parent().parent().find('.card-content:nth-of-type(1) p').text().slice(8);
    $('#modal2 input[type="hidden"]').val(modelTitle);
  })

  //slide switcher
  i = 1
  setInterval(function() {
    i++
    $('#slider').css('background-image', 'url(../media/img/slide'+i+'.jpg)')
    if (i == 2) {
      i = 0;
    }
  }, 5000)

});