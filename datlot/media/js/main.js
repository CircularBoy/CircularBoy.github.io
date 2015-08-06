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

  //inicialization light gallery
  $(".light-gallery").lightGallery({
    selector: '.slide'
  }); 

  $(".light-gallery1").lightGallery({
    selector: '.slide1'
  });

  $(".light-gallery2").lightGallery({
    selector: '.slide2'
  }); 

  $(".light-gallery3").lightGallery({
    selector: '.slide3'
  }); 

  $(".light-gallery4").lightGallery({
    selector: '.slide4'
  }); 

  $(".light-gallery5").lightGallery({
    selector: '.slide5'
  });

  $(".light-gallery6").lightGallery({
    selector: '.slide6'
  });

  $(".light-gallery7").lightGallery({
    selector: '.slide7'
  });

  $(".light-gallery8").lightGallery({
    selector: '.slide8'
  });

  $(".light-gallery9").lightGallery({
    selector: '.slide9'
  });

  $(".light-gallery10").lightGallery({
    selector: '.slide10'
  }); 

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

  i = 1
  setInterval(function() {
    i++
    $('#slider').css('background-image', 'url(../media/img/slide'+i+'.jpg)')
    if (i == 2) {
      i = 0;
    }
  }, 5000)

});