$(document).ready(function() {

	$('nav.top ul li a').click(function() {
		$('nav.top ul li').removeClass('active');
		$(this).parent().addClass('active');
	});

  i = 0;
  $('.block-1 div.sofa').mousemove(function(e) {
    relX = e.pageX - $(this).offset().left
    onePer = $(this).width()/100
    elemWidth = (relX/onePer)

    if ($('div:nth-child(2)', this).width() == 450 && i == 0) {
      i = 1;
      $('div:nth-child(2)', this).stop().animate({'width': elemWidth+'%'}, 300)
    }

    if (elemWidth >=0 && elemWidth <=100) {
      $('div:nth-child(2)', this).width(elemWidth+'%')
    };
  });

  $('.block-1 div.sofa').mouseleave(function () {
  	$('div:nth-child(2)', this).stop().animate({'width': 50+'%'}, 300)
    i = 0;
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
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(48.500925, 35.916737),
      zoom: 9, 
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var markers = [],
    myPlaces = [];
    myPlaces.push(new Place('AquaClean', 48.519925, 35.872737, 'Химчистка'));

    for (var i = 0, n = myPlaces.length; i < n; i++) {
    	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
        map: map,
        title: myPlaces[i].name
      });
      var infowindow = new google.maps.InfoWindow({
       content: '<h1>' + myPlaces[i].name + '</h1><br/>' + myPlaces[i].description
     });
      makeInfoWindowEvent(map, infowindow, marker);
      markers.push(marker);
    }
  }

  function makeInfoWindowEvent(map, infowindow, marker) {
    google.maps.event.addListener(marker, 'click', function() {
     infowindow.open(map, marker);
   });
  }
  function Place(name, latitude, longitude, description){
		    this.name = name;  // название
		    this.latitude = latitude;  // широта
		    this.longitude = longitude;  // долгота
		    this.description = description;  // описание места
      }
      google.maps.event.addDomListener(window, 'load', initialize);

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
      elem.remove()
      $('.gallery ul').append(elem)
      $('.gallery ul li:last-child').css('marginLeft', 0)
    })

    $('.gallery ul li').animate({marginLeft: -imgWidth}, 2000, function() {
      $(this).css('marginLeft', 0)
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
