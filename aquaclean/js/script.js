$(document).ready(function() {

  $('.stars span').hover(function() {
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')
  })

})