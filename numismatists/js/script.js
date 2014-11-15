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

  $('.toggle-switcher').click(function(e) {
    $(this).toggleClass('active')
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

  $('.modal-comm').click(function() {
    $('div.shadow').fadeIn(300)
    $('div.shadow .comm').fadeIn(300)
  })

  $('div.shadow').click(function() {
    $('div.shadow').fadeOut(300)
    $('div.shadow > div').fadeOut(300)
  })

  $('div.shadow div').click(function(e) {
    e.stopPropagation()
  })

  $('.select').each(function() {
    $(this).width($(this).width())
    $('.options', this).hide().css({opacity: 1, width: $(this).width()+13, position: 'absolute', top: 32})
  })

  $('.select').click(function(e) {
    $('.options', this).toggle()
    $('.options span', this).click(function() {
      $(this).parents('.select').children('span').text($(this).text())
    })
    e.stopPropagation()
  })

  $(document).click(function() {
    $('.select .options').hide()
  })

})