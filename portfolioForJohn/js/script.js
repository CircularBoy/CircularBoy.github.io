$(window).load( function() {
  //Resize block images
	function resizeGallery() {
		var width = $('.images .effect-ruby').width()
		var height = (214.0875*width)/380.6
		console.log(width)
		$('.images .effect-ruby').height(height)
	};
	resizeGallery()
	$(window).resize( function() {
		resizeGallery()
	});

  //Add class active
  $('.images figure.effect-ruby').toggleClass('hover', $(window).width() < 1020)

  $(window).on('resize', function () {
    $('.images figure.effect-ruby').toggleClass('hover', $(window).width() < 1020);
  });


  $(document).ready(function() {

    //light gallery
    $("#light-gallery").lightGallery(); 
  });
});




