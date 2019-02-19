$(function(){
    //좌측 퀵메뉴 
    $(document).ready(function(){
        var currentPosition = parseInt($(".lft_nav").css("top"));
        $(window).scroll(function() {
            var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
            $(".lft_nav").stop().animate({"top":position+currentPosition+"px"},500);
        });
    });
    //탑 버튼 함수 
    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 80 ) {
            $( '.to_top' ).fadeIn();
        } else {
            $( '.to_top' ).fadeOut();
        }
    });
    
   $( '.to_top' ).click( function() {
	   $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
   });
    
});