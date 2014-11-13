$(document).ready(function() {

  $('.stars span').hover(function() {
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')
  })

  $('header button').click(function() {
    $('div.shadow').fadeIn(300)
  })

  $('div.shadow, div.shadow div.cancel').click(function() {
    $('div.shadow').fadeOut(300)
  })

  $('div.shadow form').click(function(e) {
    e.stopPropagation()
  })


})