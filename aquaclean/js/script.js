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
    };
  });
  $('.block-1 div.sofa').mouseleave(function () {
    $('div:nth-child(2)', this).stop().animate({'width': 50+'%'}, 300)
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
      console.log(name);
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
        alert('Ваш заказ успешно принят, мы перезвоним Вам в ближайшее время.')
      }
    });
    return false;
  });
  $('header button, .block-call button, .block-4 .wrapper button, .block-7 button, .footer button').click(function() {
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
      'scrollTop':$target.offset().top-50
    }, 900, function () {
      window.location.hash = target;
    });
  });
  //rangeslider
  var $document   = $(document),
  selector    = '[data-rangeslider]',
  $element    = $(selector);
  function valueOutput(element) {
    var value = element.value,
    output = element.parentNode.getElementsByTagName('output')[0];
    output.innerHTML = value;
  }
  for (var i = $element.length - 1; i >= 0; i--) {
    valueOutput($element[i]);
  };
  $document.on('change', 'input[type="range"]', function(e) {
    valueOutput(e.target);
  });
  //count price carpet
  function countCarpet() {
    var valueWidht = $('output#width').text()
    var valueLong = $('output#long').text()
    var valueSumm = valueWidht * valueLong * 25
    $('.block-11 span.price').text(Math.round(valueSumm))
    console.log(valueWidht)
  }
  $('input[type=range]').rangeslider({
    
    polyfill: false,
    
    onSlide: function(position, value) {
      //count price carpet
      countCarpet()
    },
  });
  
  
  //googlemaps APi
  
  function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(48.500925, 35.916737),
      zoom: 9, 
      scrollwheel: false,
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
    for (var city in markers) {
      var circleOptions = {
        strokeColor: 'rgb(106, 199, 163)',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: 'rgb(106, 199, 163)',
        fillOpacity: 0.1,
        map: map,
        center: new google.maps.LatLng(48.500843, 35.998923),
        radius: 40080
      };
      cityCircle = new google.maps.Circle(circleOptions);
    }
    for (var city in markers) {
      var circleOptions = {
        strokeColor: '#8EB2BD',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#8EB2BD',
        fillOpacity: 0.3,
        map: map,
        center: new google.maps.LatLng(48.519925, 35.872737),
        radius: 7080
      };
      cityCircle = new google.maps.Circle(circleOptions);
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
        $('#main button').fadeIn();
      } else {
        $('#main button').fadeOut();
      }
    });
    $('#main button').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });
  //animate after scroll down init
  new WOW().init();
  
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
