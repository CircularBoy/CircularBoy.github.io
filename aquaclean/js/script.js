$(document).ready(function() {

	$('nav.top ul li a').click(function() {
		$('nav.top ul li').removeClass('active');
		$(this).parent().addClass('active');
	});

  $('.block-1 div.sofa').mousemove(function(e) {
    relX = e.pageX - $(this).offset().left
    onePer = $(this).width()/100
    elemWidth = (relX/onePer)

    if (elemWidth >=0 && elemWidth <=100) {
      $('div:nth-child(2)', this).width(elemWidth+'%')
      $('div:nth-child(3)', this).css('left', elemWidth+'%')
    };
  });

  $('.block-1 div.sofa').mouseleave(function () {
  	$('div:nth-child(2)', this).animate({'width': 50+'%'}, 300)
    $('div:nth-child(3)', this).animate({'left': 50+'%'}, 300)
  })

  $('.block-9 article p:nth-child(1)').click(function() {
    $(this).next().fadeToggle();
    $(this).toggleClass('open');
  });

  $('form input[type=submit]').click(function() {
    i=0;

    if ($('form input[name=name]').val()) {
      name = $('form input[name=name]').val();
      $('form input[name=name]').css({ borderColor: '#EEE'});
    } else {
      $('form input[name=name]').css({ borderColor: '#FC8787'});
      i++;
    }


    if ($('form input[name=phone]').val()) {
      phone = $('form input[name=phone]').val();
      $('form input[name=phone]').css({ borderColor: '#EEE'});
    } else {
      $('form input[name=phone]').css({ borderColor: '#FC8787'});
      i++;
    }

    if (i) {
      return false;
    }

    $.ajax({
      type: "POST",
      url: "send.php",
      data: "name="+name+"&phone="+phone,
      success: function(html) {
        $('div.shadow').fadeOut(300);
        alert(1)
      }
    });
    return false;
  });

  $('header button, .block-call button, .block-7 button').click(function() {
    $('div.shadow').fadeIn(300);
  });

  $('div.shadow, div.shadow div.cancel').click(function() {
    $('div.shadow').fadeOut(300);
  });

  $('div.shadow form').click(function(e) {
    e.stopPropagation();
  });


  $('nav a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop':$target.offset().top-32
    }, 900, function () {
      window.location.hash = target;
    });
  });

	function initialize() {     
		var myLatlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
			zoom: 8,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
	}
  
});


$(window).load(function(){
	totalWidth = 0
  $('.gallery ul li img').each(function() {
    totalWidth += $(this).width()
  })
  $('.gallery ul').css('width', totalWidth)

  function startSlider() {
    imgWidth = $('.gallery ul li:first-child img').width()
    $('.gallery ul li:first-child').animate({marginLeft: -imgWidth}, 2000, function() {
      elem = $('.gallery ul li:first-child')
      $('.gallery ul li:first-child').remove()
      $('.gallery ul').append(elem)
      $('.gallery ul li:last-child').css('marginLeft', 0)
    })
  }

  startSlider()
  intervalID = setInterval(startSlider, 3000)

  $('.gallery ul').mouseenter(function () {
    clearInterval(intervalID)
  })
  $('.gallery ul').mouseleave(function () {
    startSlider()
    intervalID = setInterval(startSlider, 3000)
  })

});
