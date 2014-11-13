$(document).ready(function() {

  $('.stars span').hover(function() {
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')
  })

  $('label.checkbox').click(function(e) {
    $(this).toggleClass('active')
    $(this).children('input').prop('checked', !$(this).children('input').prop('checked'))
    return false
  })

  $('.modal-enter').click(function() {
    $('div.shadow').fadeIn(300)
    $('div.shadow .enter').fadeIn(300)
  })

  $('.modal-reg').click(function() {
    $('div.shadow').fadeIn(300)
    $('div.shadow .reg').fadeIn(300)
  })

  $('div.shadow').click(function() {
    $('div.shadow').fadeOut(300)
    $('div.shadow > div').fadeOut(300)
  })

  $('div.shadow div').click(function(e) {
    e.stopPropagation()
  })


})