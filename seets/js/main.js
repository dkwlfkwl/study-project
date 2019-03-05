
$(function(){

	//패키지안내
	$('.tour_list > li > a').on('click', function(){
		var ts = $(this);
		var idxNum = $('.tour_list > li > a').index(ts);
		if(!ts.hasClass('on')){
			$('.tour_list > li > a').filter('.on').removeClass('on');
			ts.addClass('on');
			
		$('.tour_con').filter('.on').removeClass('on');
		$('.tour_con_wrap .tour_con').eq(idxNum).addClass('on');
		}
	});

	$('.tour_con li > a').on('mouseenter', function(){
		$(this).next().stop().css({'top':'0%'});
	});
	$('.tour_con li').on('mouseleave', function(){
		$(this).children().stop().css({'top':'-100%'});
	});

	//광고
	$('.advertising_list > li > a').on('click', function(){
		var ts = $(this);
		var idxNum = $('.advertising_list > li > a').index(ts);
		if(!ts.hasClass('on')){
			$('.advertising_list > li > a').filter('.on').removeClass('on');
			ts.addClass('on');
			
		$('.advertising_con').filter('.on').removeClass('on');
		$('.advertising_wrap .advertising_con').eq(idxNum).addClass('on');
		}
	});

	//이벤트
	$('.event_slide_wrap .slide_wrap').slick({
		autoplay: true,
		autoplaySpeed:2000,
		dots: true,
		arrows:false,
		infinite: true,
		speed: 300
	});
	
	//베스트 후기
		
	$('.review_slide_wrap .slide_wrap').slick({
	  centerMode: true,
	  //centerPadding: '50px',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrow:true,
	  //dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 2500,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
	
	/* count */
	var $gallery = $('.review_slide_wrap .slide_wrap');
	var slideCount = null;


	
	
});