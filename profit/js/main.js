$(document).ready(function() {

  //google maps API
  function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(48.41947854, 35.05973139),
      zoom: 13, 
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markers = [],
    myPlaces = [];
    myPlaces.push(new Place('ProFit', 48.41947854, 35.05973139, 'Фитнесс клуб'));
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
  function Place(name, latitude, longitude, description) {
    this.name = name;  
    this.latitude = latitude; 
    this.longitude = longitude;  
    this.description = description; 
  }
  google.maps.event.addDomListener(window, 'load', initialize);

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
      'scrollTop':$target.offset().top
    }, 900, function () {
      window.location.hash = target;
    });
  });

  //tabs
  $('.tabs .titles a').click(function() {
    $('.tabs .titles a').removeClass('active');
    $(this).addClass('active');
    var attr = $(this).attr('href');
    $('.tabs .tabs-content div').fadeOut(300);
    $(attr).fadeIn(300);
    return false;
  })

  //Directions modal
  $('.directions .direction').click(function() {
    $('.shadow').fadeIn(300);
    $('.modal', this).fadeIn(300);
    return false;
  })
  $('.shadow, .close').click(function() {
    $('.shadow').fadeOut(300);
    $('.modal').fadeOut(300);
    return false;
  })

  //animate after scroll down init
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
  );
  wow.init();

  //button to top
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#main').fadeIn();
      } else {
        $('#main').fadeOut();
      }
    });
    $('#main').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });
});

