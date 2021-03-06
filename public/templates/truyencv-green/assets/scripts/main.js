window.TruyenCVScript = (function() {
  var _this = {};

  _this.init = function() {
    _this.initSidebar();
    _this.initEditorsChoiceSlider();
    _this.initSlider();
    _this.initSearch();
    _this.initSearchMobile();
    //_this.initRating();
    _this.initDetailSidebarSlider();
    _this.initPopover();
    _this.initTooltip();
    _this.initReadConfiguration();
    _this.applyConfig();
  };

  _this.initReadConfiguration = function() {
    $(document).on('click', function(e) {
      var $target = $(e.target);
      if ($target.hasClass('truyencv-read-config') || $target.parents('.truyencv-read-config').length) {
        return false;
      }
      if ($target.hasClass('btn-toggle-config') || $target.parents('.btn-toggle-config').length) {
        return false;
      }
      $('#js-truyencv-read-config').collapse('hide');
    });

    var $container = $('#js-truyencv-read-content');
    $(document).on('click', '.js-color-item', function(event) {
      event.preventDefault();
      var $this = $(this);
      $this.parents('li').addClass('active').siblings('.active').removeClass('active');
      $container.attr('data-style', $this.attr('data-style'));
      _this.applyConfig();
    });

    $('.js-truyencv-font-configuration').each(function() {
      var $container = $('#js-truyencv-read-content');
      var $this = $(this),
        type,
        max,
        min,
        step;
      type = $this.attr('data-type');
      max = parseFloat($this.attr('data-max'));
      min = parseFloat($this.attr('data-min'));
      step = parseFloat($this.attr('data-step'));

      if (type && max && min && step) {
        $this.find('.btn-increase').on('click', function() {
          var current = parseFloat($container.attr('data-' + type)) || 0,
            next;
          next = current + step;

          if (next >= max) {
            next = max;
          }

          $container.attr('data-' + type, next);
          $this.find('.input-value').text(next);
          _this.applyConfig();
        });

        $this.find('.btn-decrease').on('click', function() {
          var current = parseFloat($container.attr('data-' + type)) || 0,
            next;
          next = current - step;

          if (next <= min) {
            next = min;
          }

          $container.attr('data-' + type, next);
          $this.find('.input-value').text(next);
          _this.applyConfig();
        });
      } else {
        console.log('config is missing !!!');
      }
    });

    $('#js-truyencv-font-family').on('change', function() {
      var $this = $(this),
        val;

      val = $.trim($this.val());
      if (val) {
        $container.attr('data-font-family', val);

        _this.applyConfig();
      }

    });
  };

  _this.applyConfig = function() {
    var $container = $('#js-truyencv-read-content'),
      $content = $('#js-truyencv-content'),
      $body = $('body'),
      lineHeight,
      fontSize,
      fontFamily,
      style,
      containerWidth;

    lineHeight = ($container.attr('data-line-height') || 140) + '%';
    fontSize = ($container.attr('data-font-size') || 22) + 'px';
    fontFamily = $container.attr('data-font-family') || "'Source Sans Pro', sans-serif";
    style = 'style-' + ($container.attr('data-style') || 3);
    containerWidth = ($container.attr('data-container-width') || 100) + '%';

    $content.css({lineHeight: lineHeight, fontSize: fontSize, fontFamily: fontFamily});
    $container.css('width', containerWidth);
    $body.removeClass(function(index, className) {
      return (className.match(/(^|\s)style-\S+/g) || []).join(' ');
    }).addClass(style);
  };

  _this.initTooltip = function() {
    if (_this.utils.isMobile()) {
      return false;
    }
    $('.js-tooltip[data-toggle="tooltip"]').tooltip({container: 'body'});
  };

  _this.initPopover = function() {
    $(document).on('click', function(e) {
      $('[data-toggle="popover"],[data-original-title]').each(function() {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false // fix for BS 3.3.6
        }

      });
    });

    $('.js-popover[data-toggle="popover"]').each(function() {
      var $this = $(this);
      $this.on('click', function(event) {
        event.preventDefault();
      }).popover({
        html: true,
        container: 'body',
        template: '<div class="popover truyencv-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
        content: function() {
          var $this = $(this),
            target;

          target = $this.attr('data-target');

          if (target) {
            return $(target).html();
          }
          return $this.attr('data-content');
        }
      });

      $this.on('inserted.bs.popover', function() {
        var $this = $(this);
        $(this).addClass('open');
      });

      $this.on('shown.bs.popover', function() {
        var $this = $(this);
        $(this).addClass('open');

      });

      $this.on('hidden.bs.popover', function() {
        $(this).removeClass('open');
      });
    });

  };

  _this.initDetailSidebarSlider = function() {
    var $container = $('.js-detail-sidebar-related'),
      $slider,
      swiper;

    $slider = $container.find('.swiper-container');

    swiper = new Swiper($slider, {
      nextButton: $slider.find('.swiper-button-next'),
      prevButton: $slider.find('.swiper-button-prev'),
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: 5000,
      loop: true,
      autoplayDisableOnInteraction: false
    });
  };

  _this.initRating = function() {
    if ($('#js-detail-rating').length) {
      new JRating(document.getElementById('js-detail-rating'), 4.5, true);
    }
  };

  _this.initSearchMobile = function() {
    $('.js-open-search-box-mobile').on('click', function(event) {
      event.preventDefault();
      $('body').addClass('open-search-box');
      setTimeout(function() {
        $('#js-search-input-mobile').focus()
      }, 500);
    });

    $('.js-close-search-box').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('body').removeClass('open-search-box');
    });
  }

  _this.initSearch = function() {
    var $searchPanel = $('#js-search-panel');
    $('#js-search-toggle').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!$searchPanel.hasClass('active')) {
        $searchPanel.addClass('active');
        setTimeout(function() {
          $('#txtKeyword').focus()
        }, 500);
      } else {
        $searchPanel.removeClass('active');
      }
    })

    $('#txtKeyword').click(function(i) {
      i.stopPropagation()
    }),

    $('body').on('click', function() {
      $searchPanel.removeClass('active');
    })
  };

  _this.initSidebar = function() {
    $('.js-open-sidebar').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('body').addClass('open-sidebar');
    });

    $('.js-close-sidebar').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('body').removeClass('open-sidebar');
    });
  };

  _this.initSlider = function() {
    var $containers = $('.js-truyencv-slider');

    $containers.each(function() {
      var $container = $(this),
        $slider,
        $info,
        slider,
        info;

      $slider = $container.find('.slider-thumb .swiper-container'),
      $info = $container.find('.slider-info .swiper-container');

      info = new Swiper($info, {
        spaceBetween: 30,
        effect: 'fade',
        //loop: true,
        slidesPerView: '1',
        simulateTouch: false
      });

      info.lockSwipes();

      slider = new Swiper($slider, {
        nextButton: $slider.find('.swiper-button-next'),
        prevButton: $slider.find('.swiper-button-prev'),
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        //autoplay: 5000,
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd: function(swiper) {
          info.unlockSwipes();
          info.slideTo(swiper.realIndex);
          info.lockSwipes();
        }
      });

      //slider.params.control = info;
      //info.params.control = slider;
    });

    window.dispatchEvent(new Event('resize'));
  };

  _this.initEditorsChoiceSlider = function() {
    var $container = $('.js-editors-choice-slider'),
      $slider,
      swiper;

    $slider = $container.find('.swiper-container');

    swiper = new Swiper($slider, {
      nextButton: $slider.find('.swiper-button-next'),
      prevButton: $slider.find('.swiper-button-prev'),
      pagination: $slider.find('.swiper-pagination'),
      spaceBetween: 30,
      slidesPerView: 1,
      paginationClickable: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false
    });
  };

  _this.utils = {
    isMobile: function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent || window.navigator.userAgent);
    }
  };

  return _this;
})();

$('document').ready(function() {
  window.TruyenCVScript.init();
});
