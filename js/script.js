$(function(){
  "use strcit";
  // =======banner slider start======//
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    speed: 900,
    fade: false,
    infinite: true,
    pauseOnHover: false,
    prevArrow: ".right",
    nextArrow: ".left",
    dots:true,
  });
  // =======banner slider end======//

  // ========coundown start=========//
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  var deadline = new Date(Date.parse(new Date()) + 2022 * 07 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);
  // ========coundown end=========//

  // ========letest slider start=========//
        $('.letest-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 900,
    fade: false,
    infinite: true,
    pauseOnHover: false,
    prevArrow: ".letest-right",
    nextArrow: ".letest-left",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  });
  // ========letest slider end=========//
  
  // ========test slider start=========//
    $('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2000,
    fade: false,
    infinite: true,
    pauseOnHover: false,
    prevArrow: ".test-right",
    nextArrow: ".test-left",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    // ========test slider end=========//

    // ========sticky menu start=========//
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 500){
        $(".navbar").addClass("sticky")
      }
      else(
        $(".navbar").removeClass("sticky")
      )
      if(top > 200){
        $(".back-to-top").fadeIn(600)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
    })
  
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })
    // ========sticky menu end=========//

    //  =========preloader start=======
    $(window).load(function() {
      $(".loader").delay(500).fadeOut("slow");
      $("#overlayer").delay(500).fadeOut("slow");
    })
    //  =========preloader end=======

    $(document).ready(function(){
      $('.container ul.toggle').click(function(){
          $(this).toggleClass('active');
          $('.container .sidebar').toggleClass('active');
      })
  })
  
//scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// must be an array, could have only one element
let visibilityIds = ['#counters_1','#counters_2','#counters_3'];
let counterClass ='.counter';
let defaultSpeed = 3000;

    
})