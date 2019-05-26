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
    activeTabServices: 0,
    activeTabFaq: 0,
    activeAllPriseTab: 0,
    activeModal: null,
    loadMoreReviews: false,
    services: services,
    devices: devices,
    openSelect: false,
    valueSelect:  'Выберите модель',
    video: false
  },
  methods: {
    selectClick: function(index) {
      for(var i=0; i < this.devices.length; i++) {
        console.log(devices[i]);
        console.log(i === index);
        i !== index ? this.devices[i].checked = false : this.devices[i].checked = true;
      }
      this.valueSelect = this.devices[index].model;
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

var servicesSlider = document.querySelector('.services__slider');

if (servicesSlider) {
  var servicesSliderInit = false;

  const servicesSliderFn = function () {
    // if (window.innerWidth < 992) {
      if (!servicesSliderInit) {
        servicesSliderInit = new Glide(servicesSlider, {
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

        servicesSliderInit.on('move', function () {
          let prentsNode = servicesSliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function (elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + servicesSliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        servicesSliderInit.mount();
      }
    // } else {
    //   // destroy slider if init
    //   if (typeof servicesSliderInit === 'object') {
    //     servicesSliderInit.destroy();
    //     servicesSliderInit = false;
    //   }
    // }
  };

  servicesSliderFn();

  window.addEventListener('resize', servicesSliderFn);

  servicesSlider.classList.add('services__slider--show');
}