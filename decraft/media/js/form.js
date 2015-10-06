$(document).ready(function() {
  //CallBack 
  $('#modal1 button[type=submit]').click(function() {

    i=0;
    if ($('#modal1 form input[name=name]').val()) {
      name = $('#modal1 form input[name=name]').val();
      $('#modal1 form input[name=name]').removeClass('invalid');
    } else {
      $('#modal1 form input[name=name]').addClass('invalid');
      i++;
    }
    if ($('#modal1 form input[name=phone]').val()) {
      phone = $('#modal1 form input[name=phone]').val();
      $('#modal1 form input[name=phone]').removeClass('invalid');
    } else {
      $('#modal1 form input[name=phone]').addClass('invalid');
      i++;
    }
    if ($('#modal1 form input[name=mail]').val()) {
      mail = $('#modal1 form input[name=mail]').val();
      $('#modal1 form input[name=mail]').removeClass('invalid');
    } else {
      $('#modal1 form input[name=mail]').addClass('invalid');
      i++;
    }
    // if ($('#modal1 form input[name=msg]').val()) {
    //   msg = $('#modal1 form input[name=msg]').val();
    //   $('#modal1 form input[name=msg]').removeClass('invalid');
    // } else {
    //   $('#modal1 form input[name=msg]').addClass('invalid');
    //   i++;
    // }
    msg = $('#modal1 form [name=msg]').val()
    idModal = $('#modal1 form [name=idModal]').val()
    if (i) {
      Materialize.toast('Заполните поля', 4000)
      return false;
    }
    $.ajax({
      type: "POST",
      url: "send.php",
      data: "name="+name+"&mail="+mail+"&phone="+phone+"&msg="+msg+"&idModal="+idModal,
      success: function(html) {
        $('#modal1').closeModal();
        Materialize.toast('Заказ успешно оформлен', 4000)
      }
    });
    return false;
  })

//buy form
  $('#modal2 button[type=submit]').click(function() {
  i=0;
  if ($('#modal2 form input[name=name]').val()) {
    name = $('#modal2 form input[name=name]').val();
    $('#modal2 form input[name=name]').removeClass('invalid');
  } else {
    $('#modal2 form input[name=name]').addClass('invalid');
    i++;
  }
  if ($('#modal2 form input[name=phone]').val()) {
    phone = $('#modal2 form input[name=phone]').val();
    $('#modal2 form input[name=phone]').removeClass('invalid');
  } else {
    $('#modal2 form input[name=phone]').addClass('invalid');
    i++;
  }
  if ($('#modal2 form input[name=mail]').val()) {
    mail = $('#modal2 form input[name=mail]').val();
    $('#modal2 form input[name=mail]').removeClass('invalid');
  } else {
    $('#modal2 form input[name=mail]').addClass('invalid');
    i++;
  }
    // if ($('#modal2 form input[name=msg]').val()) {
    //   msg = $('#modal2 form input[name=msg]').val();
    //   $('#modal2 form input[name=msg]').removeClass('invalid');
    // } else {
    //   $('#modal2 form input[name=msg]').addClass('invalid');
    //   i++;
    // }
    height = $('#modal2 form [name=height]').val()
    width = $('#modal2 form [name=width]').val()
    model = $('#modal2 form [name=model]').val()
    if (i) {
      Materialize.toast('Заполните поля', 4000)
      return false;
    }
    $.ajax({
      type: "POST",
      url: "send-buy.php",
      data: "name="+name+"&mail="+mail+"&phone="+phone+"&height="+height+"&width="+width+"&model="+model,
      success: function(html) {
        $('#modal2').closeModal();
        Materialize.toast('Заказ успешно оформлен', 4000)
      }
    });
    return false;
  })
})