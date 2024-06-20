$(window).scroll(function(){

        if($(window).scrollTop() >= 100){
            $("div.top").addClass("xiao");
        } else{
            $("div.top").removeClass("xiao");
        }
    });
	


var ua = navigator.userAgent;

var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

isAndroid = ua.match(/(Android)\s+([\d.]+)/),

isMobile = isIphone || isAndroid;

//判断

if(isMobile){
$('div.pub-right-box').css('display','none');
$('div.bottom').css('width','1200px');
}else{
$('div.pub-right-box').css('display','block');
}


