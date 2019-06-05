//
// All tabs, modals, form handlers
//

Vue.component("order-form", {
  data: function () {
    return {
      name: "",
      phone: "",
      msg: "",
      agree: true,
      sent: false,
      sending: false
    };
  },
  props: ['title', 'text', 'textarea'],
  template: '#order-form',
  methods: {
    submit: function (e) {
      e.preventDefault();

      var t = this;

      t.sending = true;

      if (t.name === "") {
        t.name = null;
      }

      if (t.phone === "") {
        t.phone = null;
      }

      if (!t.agree) {
        t.agree = null;
      }

      if (t.name === null || t.phone === null || t.agree === null) {
        return;
      }
      t.sent = true;
      axios.get('mail.php', {
        params: {
          name: t.name,
          phone: t.phone,
          msg: t.msg
        }
      }).then(function (response) {
        console.log(response);
        t.sent = true;
      });
    }
  }
});

new Vue({
  el: '#app',
  data: {
    activeTabFaq: 0,
    activeAllPriseTab: 0,
    activeModal: null,
    loadMoreReviews: false,
    services: services,
    activeTabServices: 0,
    openSelect: false,
    valueSelect: 'Выберите модель',
    selectIndex: false,
    video: false
  },
  methods: {
    selectClick: function(indexServices, indexDevices) {
      var devices = this.services[indexServices].devices;
      for(var i=0; i < devices.length; i++) {
        i !== indexDevices ? devices[i].checked = false : devices[i].checked = true;
      }
      this.valueSelect = devices[indexDevices].model;
      // slider(sliderArr);
      // servicesSliderFn();
      // console.log(this.services[this.activeTabServices].devices[0]);
    },
    glidesl: function() {
      // setTimeout(slider(sliderArr), 1000);
      // servicesSliderFn();
    }
  }
});



//
// Sticky header
//

var stickyHeader = function () {
  var header = document.querySelector(".header");

  if (window.pageYOffset > 10) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};

stickyHeader();

window.addEventListener("scroll", stickyHeader);

//
// Init gumshoe
//

gumshoe.init({
  activeClass: 'header__nav-link--active',
  selectorHeader: '.header',
  scrollDelay: 500
});

//
// Init smoth scroll
//

var scroll = new SmoothScroll('.scroll-to[href*="#"]', {
  header: '.header',
  updateURL: false
});

document.body.classList.add('is-load');

//
// Services slider
//

var sliderArr = document.querySelectorAll('.services__slider');

function slider(arr) {
  arr.forEach(function(item) {
    var servicesSliderInit = false;
    var servicesSliderFn = function () {
      if (!servicesSliderInit) {
        servicesSliderInit = new Glide(item, {
          perView: 4,
          bound: true,
          gap: 20,
          peek: 20,
          breakpoints: {
            740: {
              perView: 2
            },
            510: {
              perView: 1,
              peek: 50
            }
          }
        });
        servicesSliderInit.mount();
      }
      servicesSliderInit.on('move', function () {
        var prentsNode = servicesSliderInit.selector;
        var bullets = prentsNode.querySelectorAll('.glide__bullet');
        bullets.forEach(function (elem) {
          elem.classList.remove('glide__bullet--active');
        });

        var activeBullet = prentsNode.querySelector(
          '.glide__bullet[data-glide-dir="=' + servicesSliderInit.index + '"]'
        );
        activeBullet.classList.add('glide__bullet--active');
      });
    };
    servicesSliderFn();
  });
}
// setTimeout(slider(sliderArr), 1000)
slider(sliderArr);
// var servicesSlider = document.querySelector('.services__slider');

// if (servicesSlider) {
//   var servicesSliderInit = false;

//   var servicesSliderFn = function () {
//     // if (window.innerWidth < 992) {
//       if (!servicesSliderInit) {
//         servicesSliderInit = new Glide(servicesSlider, {
//           perView: 4,
//           bound: true,
//           gap: 20,
//           peek: 20,
//           breakpoints: {
//             740: {
//               perView: 2
//             },
//             510: {
//               perView: 1,
//               peek: 50
//             }
//           }
//         });

//         // servicesSliderInit.on('move', function () {
//         //   let prentsNode = servicesSliderInit.selector;
//         //   let bullets = prentsNode.querySelectorAll('.glide__bullet');
//         //   bullets.forEach(function (elem) {
//         //     elem.classList.remove('glide__bullet--active');
//         //   });

//         //   let activeBullet = prentsNode.querySelector(
//         //     '.glide__bullet[data-glide-dir="=' + servicesSliderInit.index + '"]'
//         //   );
//         //   activeBullet.classList.add('glide__bullet--active');
//         // });

//         servicesSliderInit.mount();
//       }
//     // } else {
//     //   // destroy slider if init
//     //   if (typeof servicesSliderInit === 'object') {
//     //     servicesSliderInit.destroy();
//     //     servicesSliderInit = false;
//     //   }
//     // }
//   };

//   servicesSliderFn();

//   window.addEventListener('resize', servicesSliderFn);

//   servicesSlider.classList.add('services__slider--show');
// }
//
//parser
//
// function parser() {
//   var arr = [];
//   var selector = document.querySelectorAll('#pricelist .service');
//   selector.forEach(function(item) {
//     var title,time,price;
//     //title
//     title = item.textContent;
//     if(title.indexOf('*') > -1) title = title.substr(1);

//     //price
//     price = item.nextElementSibling.textContent;
//     if(price.indexOf('»') > -1) {
//       var old = price.split('»');
//       price = old[0] + ' грн.';
//     }
//     //time
//     // time = item.nextElementSibling.nextElementSibling.textContent;
//     // time = time.substr(0, time.length - 3);
//     // if(time.indexOf('»') > -1) time = time.substr(0, time.length - 1);
//     var obj = {
//       title: title,
//       time: time,
//       price: price
//     };
//     arr.push(obj);
//   });

//   return arr;
// }

// var data = JSON.stringify(parser(), null, 2);