$(document).ready(function() {

  $('.stars span').hover(function() {
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')
  })

  $('label.checkbox').click(function(e) {
    $(this).toggleClass('active')
    console.log(1)
    e.stopPropagation()
    e.preventDefault();
  })

  $('label.checkbox span').click(function(e) {
    e.stopPropagation()
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