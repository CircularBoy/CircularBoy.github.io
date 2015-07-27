$(window).load( function() {
  //Resize block images
	function resizeGallery() {
		var width = $('.wrapper .images').width()
		var height = (795*width)/1200
		console.log(width)
		$('.wrapper .images').height(height)
	};

	resizeGallery()

	$(window).resize( function() {

		resizeGallery()

	});
  //Add class active
  $('.images figure.effect-ruby').toggleClass('hover', $(window).width() < 880)

  $(window).on('resize', function () {
    $('.images figure.effect-ruby').toggleClass('hover', $(window).width() < 880);
  });
});




