$('.staff__slider').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  asNavFor: '.section__staff__images',
});

$('.section__staff__images').slick({
  dots: false,
  infinite: true,
  arrows:false,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
   asNavFor: '.staff__slider'
});

	

$('.burger').click((e)=>{//Open Burger menu
	$('.header__nav').slideToggle(300);
	$('.burger').toggleClass('active');
});



  $(document).ready(function() {//scroll top btn
  	const top_show = 150;
  	const delay = 300; 
    $(window).scroll(function () {
      if ($(window).scrollTop() > top_show) $('.scroll-btn').fadeIn();
      else $('.scroll-btn').fadeOut();
    });
    $('.scroll-btn').click(function () { 
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  $('.prices__item').click((e)=>{
    const item = e.currentTarget
    $('.prices__item').removeClass('active')
    item.className += ' active'
  })

  $('.portfolio__categories-item').click((e)=>{
    const item = e.currentTarget
    $('.portfolio__categories-item').removeClass('active')
    item.className += ' active'
  })