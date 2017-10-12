(function ($) {

  $(window).load(function () {
    $('.flexslider').flexslider({
      prevText: "",           //String: Set the text for the "previous" directionNav item
      nextText: "",
      controlNav: false
    });
  });

  $(document).ready(function() {
    $(".nav ul a").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  });

  $(window).load(function () {
    var $btn = $('.mobile-nav'),
      $btn_close = $('.mobile-nav-close');

    $btn.on('click touch', function (e) {
      e.preventDefault();

      $('body').addClass('mobile-active');
    });

    $btn_close.on('click touch', function (e) {
      e.preventDefault();

      $('body').removeClass('mobile-active');
    })
  });

  $(window).load(function () {
    $('.scroll-pane').jScrollPane();
  });

  $(window).load(function () {
    var $wrapper = $('.accordion-wrapper'),
      $el = $wrapper.find('a');

    $el.on('click touch', function (e) {
      e.preventDefault();

      var $parent = $(this).parent();

      if ($parent.hasClass('active')) {
        $parent.removeClass('active');
      } else {
        $parent.addClass('active');
      }
    })
  });
})(jQuery);

function initMap() {

  var styleArray = [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-33"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c6c6c6"
        },
        {
          "lightness": 17
        }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.822406, lng: 49.108963},
    scrollwheel: false,
    styles: styleArray,
    zoom: 13
  });

  var myLatlng = new google.maps.LatLng(55.822406,49.108963);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Адвокат"
  });

  marker.setMap(map);

}

