$(document).ready(function() {

  $('header .enter').click(function() {
    $('div.modal').fadeIn(function() {
      $('div.enter', this).fadeIn();
    });
  });

  $('.img .comm').click(function() {
    $('div.modal').fadeIn(function() {
      $('div.comments', this).fadeIn();
    });
  });

  $('div.modal div').click(function() {
    return false;
  });

  $('div.modal').click(function() {
    $(this).fadeOut(function() {
      $('div.modal > div').hide();
    });
  });

  $('div.modal .close').click(function() {
    $('div.modal').click();
  });

  $(function() {
    $('#menu').slicknav({
      label: '',
      prependTo: 'nav',
    });
  });

});