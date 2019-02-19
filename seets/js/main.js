
$(function(){

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

	
	
});