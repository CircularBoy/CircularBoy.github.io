$(document).ready(function() {
 
	$('nav.top ul li a').click(function() {
		$('nav.top ul li').removeClass("active");
		$(this).parent().addClass("active");
	});

$('.block1 div.sofa').mousemove(function(e) {
		relX = e.pageX  $(this).offset().left
		onePer = $(this).width()/100
		elemWidth = (relX/onePer)

		if (elemWidth >=0 && elemWidth <=100) {
			$('div:nthchild(2)', this).width(elemWidth+'%')
			$('div:nthchild(3)', this).css('left', elemWidth+'%')
		};
		
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

  	$('header button').click(function() {
    $('div.shadow').fadeIn(300);
  });

  $('div.shadow, div.shadow div.cancel').click(function() {
    $('div.shadow').fadeOut(300);
  });

  $('div.shadow form').click(function(e) {
    e.stopPropagation();
  });


});