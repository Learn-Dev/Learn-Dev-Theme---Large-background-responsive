function HeightBackground(){
	height = $(window).height();
	$("#cover").css({
		'height': height
	})
}
function ShrinkNavbar(){
	$window = $(window);
	$window.scroll(function(){
		if($window.scrollTop() > 50){
			$("#navbar").removeClass('full');
			$("#navbar").addClass('shrink');
		}else{
			$("#navbar").removeClass('shrink');
			$("#navbar").addClass('full');
		}
	})
}
function OpacityContent(){
	scrollPos = $(this).scrollTop();
	$("#header-content").css({
		'margin-top': (scrollPos / 4) + "px",
		'opacity': 1 - (scrollPos / 250)
	})
}

$(document).ready(function(){
	HeightBackground();
	$(window).resize(function(){
		HeightBackground();
	})
	$(window).scroll(function(){
		ShrinkNavbar();
		OpacityContent();
	})
})
$(document).on('click','#navbar-ico-resp',function(){
	$("#navbar").toggleClass('responsive');
})