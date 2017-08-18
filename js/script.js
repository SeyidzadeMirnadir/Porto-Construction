// nav section, drop picture,scrollUp(just show -hidden function) and slideUp icons section start
var portoIcon=document.querySelector(".portoIcon");
var dropPicture=document.querySelector(".dropPicture");
var myNavbar=document.querySelector(".myNavbar");

$(".myNavbar .myLink a").click(function(event) {
	$(this).children('span').css('color', '#E04622');
});

// all onscroll problems start
window.onscroll=function(){ 
	var scrollsize=document.body;
	if (scrollsize.scrollTop>10){
		portoIcon.style.marginLeft='-40px';
		dropPicture.style.top='-400px';
		myNavbar.style.top="0px";
		myNavbar.style.opacity="0.9"
		if(scrollsize.scrollTop>177){
			$("#company02 .col-md-3 ul").css({
				position: 'fixed',
				top: '99px'
			});
			if(scrollsize.scrollTop>200){
				$("#scrollButton").css('display', 'block');
				if(scrollsize.scrollTop>649){
					 $(".section03 .container .row").eq(1).addClass('slideInUp');
					 $(".section03 .container .row").eq(1).css('opacity',"1");
					 if(scrollsize.scrollTop>822){
					 	$(".section03 .container .row").eq(2).addClass('slideInUp');
					 	$(".section03 .container .row").eq(2).css('opacity',"1");
					 }
					 if(scrollsize.scrollTop>2210){
					 	$("#company02 .col-md-3 ul").css({
							position: 'absolute',
							top: '2019px'
						});
					 }
				}
			}else{
				$("#scrollButton").css('display', 'none');
			}
		}else{
			$("#company02 .col-md-3 ul").css({
			position: 'absolute',
			top: '0px'
		});
		}
	}else{
		portoIcon.style.marginLeft='40px';
		dropPicture.style.top='-26px';
		myNavbar.style.top="25px";
		myNavbar.style.opacity="1"
	}

// company page scroll problem start
	if(scrollsize.scrollTop>195){
		$("#company02 .col-md-3 ul span").removeClass('active')
		$("#company02 .col-md-3 ul span").eq(0).addClass('active')
	 	if(scrollsize.scrollTop>981){
			$("#company02 .col-md-3 ul span").removeClass('active')
			$("#company02 .col-md-3 ul span").eq(1).addClass('active')
			if(scrollsize.scrollTop>1414){
				$("#company02 .col-md-3 ul span").removeClass('active')
				$("#company02 .col-md-3 ul span").eq(2).addClass('active')
				if(scrollsize.scrollTop>1711){
					$("#company02 .col-md-3 ul span").removeClass('active')
					$("#company02 .col-md-3 ul span").eq(3).addClass('active')
					if(scrollsize.scrollTop>2042){
						$("#company02 .col-md-3 ul span").removeClass('active')
						$("#company02 .col-md-3 ul span").eq(4).addClass('active')
					}
				}
			}
		}
	}
	if(scrollsize.scrollTop>638){
		$("#history .col-md-7 img").addClass('slideInUp')
		$("#history .col-md-5 ul li").eq(0).addClass('slideInUp')
		$("#history .col-md-7 img").css('opacity', '1');
		$("#history .col-md-5 ul li").eq(0).css('opacity', '1');
		if(scrollsize.scrollTop>809){
			$("#history .col-md-5 ul li").eq(1).addClass('slideInUp')
			$("#history .col-md-5 ul li").eq(1).css('opacity', '1');
			if(scrollsize.scrollTop>869){
				$("#history .col-md-5 ul li").eq(2).addClass('slideInUp')
				$("#history .col-md-5 ul li").eq(2).css('opacity', '1');
				if(scrollsize.scrollTop>935){
					$("#history .col-md-5 ul li").eq(3).addClass('slideInUp')
					$("#history .col-md-5 ul li").eq(3).css('opacity', '1');
					if(scrollsize.scrollTop>995){
						$("#history .col-md-5 ul li").eq(4).addClass('slideInUp')
						$("#history .col-md-5 ul li").eq(4).css('opacity', '1');
						if(scrollsize.scrollTop>1175){
							$("#mission").addClass('slideInUp')
							$("#mission").css('opacity', '1');
						}
					}
				}
			}
		}
	}// company page scroll problem end

	// services page scroll problem start
	if(scrollsize.scrollTop>172){
		$("#services02 .col-md-9 .row").eq(2).addClass("slideInUp")
		$("#services02 .col-md-9 .row").eq(2).css("opacity","1")
		if(scrollsize.scrollTop>360){
			$("#services02 .col-md-9 .row").eq(3).addClass("slideInUp")
			$("#services02 .col-md-9 .row").eq(3).css("opacity","1")
			// services-detail page start
			if(scrollsize.scrollTop>500){
				$("#services-detail02 .detail-side ul li").eq(0).css('opacity', '1');
				$("#services-detail02 .detail-side ul li").eq(0).addClass('slideInUp');
				if(scrollsize.scrollTop>580){
					$("#services-detail02 .detail-side ul li").eq(1).css('opacity', '1');
					$("#services-detail02 .detail-side ul li").eq(1).addClass('slideInUp');
					if(scrollsize.scrollTop>640){
						$("#services-detail02 .detail-side ul li").eq(2).css('opacity', '1');
						$("#services-detail02 .detail-side ul li").eq(2).addClass('slideInUp');
						if(scrollsize.scrollTop>720){
							$("#services-detail02 .detail-side ul li").eq(3).css('opacity', '1');
							$("#services-detail02 .detail-side ul li").eq(3).addClass('slideInUp');
						}
					}
				}

			}
		}
	} // services page scroll problem end
}
// all onscroll problems end
// nav section, drop picture,scrollUp(just show -hidden function) and slideUp icons section end

// homepage pop-up section start(section04)
var popup=$(" .pop-up");
var slider=$(" .slider");
var img=$(".section04 .gallery a");
var useImg=$(" #myImage");
var prev=$("#prev");
var next=$("#next");
var imgs=$(".gallery img");
var arr=[]
for(i=0;i<imgs.length;i++){
	arr.push($(imgs[i]).attr("src"))
}
img.click(function() {
		popup.css({
			"display":"block"
		});
		$("body").css({
			"overflow-y":"hidden"
		})
		slider.css("display","block");
		var source=$(this).children('div').children('img').attr("src")
		$(".slider").children('img').attr({
			src:source
		})

	var indexSrc=arr.indexOf(source)
	prev.click(function(event) {
			indexSrc --;
			if(indexSrc<0){
				indexSrc=6;
			}
		$(".slider").children('img').attr({
			src:arr[indexSrc]
		})
	});
	next.click(function(event) {
			indexSrc ++;
			if(indexSrc>6){
				indexSrc=0;
			}
		$(".slider").children('img').attr({
			src:arr[indexSrc]
		})
	});
});
popup.click(function() {
	popup.css("display","none");
	slider.css("display","none");
	$("body").css({
			"overflow-y":"visible"
		})
});
// homepage pop-up section end(section04)

// Mini-slider section(homepage section05) start
var button01 = $(".but01").eq(0);
var button02 = $(".but02").eq(0);
var leftSide = $(".leftSide").eq(0);
var rightSide = $(".rightSide").eq(0);

button01.click(function(){
	leftSide.css('left','580px');
	rightSide.css('right', '-600px');
	leftSide.css('opacity','1');
	button01.css("background","#E04622");
	button02.css("background","#5e7279");

});
button02.click(function(){
	leftSide.css('left', '400px');
	rightSide.css('right', '0');
	leftSide.css('opacity','0');
	button01.css("background","#5e7279");
	button02.css("background","#E04622");
});
// Mini-slider section(homepage section05) end

// iconSlider section(homepage) start
var buttonIcon01 = $(".section06 .prev");
var buttonIcon02 = $(".section06 .next");
var iconSlider = $(".section06 .iconSlider");
j=0;
k=0;

buttonIcon01.click(function(){
	if(j==1){
		iconSlider.css("right","-335px");
		k=0;
	}else if(j==0){
		iconSlider.css("right","-169px");
		j=1;
		k=1;
	}
});

buttonIcon02.click(function(){
	if(k==0){
		iconSlider.css("right","-169px");
		k=1;
		j=1;
	}else if(k==1){
		iconSlider.css("right","0px");
		j=0;
	}	
});
// iconSlider section(homepage) end

// scrollUp button start
$("#scrollButton").click(function() {
  var intervalId = setInterval(function () { 
       var s = document.body;
       if (s.scrollTop > 0) {
         s.scrollTop -= 15;
       } 
       else {
           clearInterval(intervalId);
       }
   }   , 0); 
}); 
// scrollUp button end

// company page start
// owlcarousel section start
  $("#company02 .owl-carousel").owlCarousel({
  	autoplay:true,
  	items:1,
  	autoplayTimeout:2500,
  	loop:true,
  	mouseDrag:false,
  	nav:true,
  	vavElements:true,
  	animateIn:"fadeIn",
  	animateOut:"fadeOut",
  });
// owlcarousel section end

// leftside clicks start
$("#company02 .col-md-3 ul span").eq(0).click(function() {
	$('html, body').animate({
    scrollTop: "196"
 }, 1000);
	$("#company02 .col-md-3 ul span").removeClass('active')
	$(this).addClass('active')
});


$("#company02 .col-md-3 ul span").eq(1).click(function() {
	$('html, body').animate({
    scrollTop: "982"
 }, 1000);
	$("#company02 .col-md-3 ul span").removeClass('active')
	$(this).addClass('active')
});


$("#company02 .col-md-3 ul span").eq(2).click(function() {
	$('html, body').animate({
    scrollTop: "1415"
 }, 1000);
	$("#company02 .col-md-3 ul span").removeClass('active')
	$(this).addClass('active')
});


$("#company02 .col-md-3 ul span").eq(3).click(function() {
	$('html, body').animate({
    scrollTop: "1712"
 }, 1000);
	$("#company02 .col-md-3 ul span").removeClass('active')
	$(this).addClass('active')
});


$("#company02 .col-md-3 ul span").eq(4).click(function() {
	$('html, body').animate({
    scrollTop: "2043"
 }, 1000);
	$("#company02 .col-md-3 ul span").removeClass('active')
	$(this).addClass('active')
});
// leftside clicks end
// company page end

// services page start

$(document).ready(function() {
	$("#services02 .col-md-9 .row").eq(0).addClass("slideInUp")
	$("#services02 .col-md-9 .row").eq(1).addClass("slideInUp")
	$("#services02 .col-md-9 .row").eq(0).css("opacity","1")
	$("#services02 .col-md-9 .row").eq(1).css("opacity","1")
	$("#services02 .col-md-3 ul a").removeClass('active')
	$("#services02 .col-md-3 ul a").eq(0).addClass('active')
	$("#services-detail02 .col-md-3 ul a").removeClass('active')
	$("#services-detail02 .col-md-3 ul a").eq(2).addClass('active')
});


 // services-detail page start
  $("#services-detail02 .detail-side .owl-carousel").owlCarousel({
  	autoplay:true,
  	items:1,
  	autoplayTimeout:2500,
  	loop:true,
  	mouseDrag:false,
  	nav:true,
  	vavElements:true,
  	animateIn:"fadeIn",
  	animateOut:"fadeOut",
  });
 // services-detail page start
// services page end


// projects page start
// filtering projects start
$("#projects02 ul a").click(function() {
			$("#projects02 ul a").css({
				background: 'transparent',
				color: '#E04622'
			});
			$(this).css({
				background: '#E04622',
				color: 'white'
			});
});
$("#projects02 ul a").eq(0).click(function() {
	$("#projects02 .row .col-md-4").css('display', 'block');
	$("#projects02 .row .col-md-4").addClass('slideInUp'); 
});
$("#projects02 ul a").eq(1).click(function() {
	$("#projects02 .row .col-md-4").css('display', 'none'); 
	$("#projects02 .row .col-md-4").eq(0).css('display', 'block'); 
	$("#projects02 .row .col-md-4").eq(4).css('display', 'block');
	$("#projects02 .row .col-md-4").addClass('slideInUp');  
});
$("#projects02 ul a").eq(2).click(function() {
	$("#projects02 .row .col-md-4").css('display', 'none'); 
	$("#projects02 .row .col-md-4").eq(1).css('display', 'block');
	$("#projects02 .row .col-md-4").addClass('slideInUp');  
});
$("#projects02 ul a").eq(3).click(function() {
	$("#projects02 .row .col-md-4").css('display', 'none'); 
	$("#projects02 .row .col-md-4").eq(2).css('display', 'block');
	$("#projects02 .row .col-md-4").addClass('slideInUp');  
});
$("#projects02 ul a").eq(4).click(function() {
	$("#projects02 .row .col-md-4").css('display', 'none'); 
	$("#projects02 .row .col-md-4").eq(1).css('display', 'block'); 
	$("#projects02 .row .col-md-4").eq(5).css('display', 'block'); 
	$("#projects02 .row .col-md-4").addClass('slideInUp'); 
});
// filtering projects end

// progressbar end(projects-detail)
$(function () {
 $('[data-toggle="tooltip"]').tooltip()
})

$(function () { 
 $('.col-md-7 [data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

 $(".progress-bar").each(function(){
   each_bar_width = $(this).attr('aria-valuenow');
   $(this).width(each_bar_width + '%');
 });
// progressbar end(projects-detail)
// projects page end
