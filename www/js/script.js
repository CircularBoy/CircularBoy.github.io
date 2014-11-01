$(document).ready(function() {

	$('nav.top ul li').click(function() {
		$('nav.top ul li').removeClass("active");
		$(this).addClass("active");
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

 