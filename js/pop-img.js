// build time:Mon May 18 2020 23:54:28 GMT+0800 (GMT+08:00)
$.fn.popImg=function(){var t=$("<div/>").css({position:"fixed",left:0,right:0,top:0,bottom:0,height:"100%",width:"100%",zIndex:9999999,background:"#000",opacity:"0.6",display:"none"}).attr("data-id","b_layer");var i=function(t){var i=t.offset().left;var o=t.offset().top;var a=t.width();var e=t.height();return t.clone().css({position:"fixed",width:a,height:e,left:i,top:o,zIndex:1e7})};var o=function(t){var i=$(window).width();var o=$(window).height();t.css("cursor","zoom-out").attr("data-b-img",1);var a=new Image;a.onload=function(){t.stop().animate({width:this.width,height:this.height,left:(i-this.width)/2,top:(o-this.height)/2},300)};a.src=t.attr("src")};this.each(function(){$(this).css("cursor","zoom-in").on("click",function(){var a=$("body");t.appendTo(a);t.fadeIn(300);var e=i($(this));e.appendTo(a);o(e)})});var a=null;$(window).on("resize",function(){$("img[data-b-img]").each(function(){var t=$(this);a&&clearTimeout(a);a=setTimeout(function(){o(t)},10)})});$(window).on("click keydown",function(i){if(i.type=="keydown"&&i.keyCode===27){t.fadeOut(300);$("img[data-b-img]").remove()}var o=$(i.target);if(o.attr("data-id")=="b_layer"||o.attr("data-b-img")==1){t.fadeOut(300);$("img[data-b-img]").remove()}})};
//rebuild by neat 