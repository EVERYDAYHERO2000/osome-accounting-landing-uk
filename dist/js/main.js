"use strict";$(function(){$(function(){var e=$(".promo svg");e.find("#message_1, #message_2, #message_3, #message_4, #message_5, #popup, #message_6, #message_7, #message_8, #message_9, #message_10, #message_11, #message_12, #message_13, #message_14").css({opacity:"0","transform-origin":"center"}),e.find("#message_1").css({transform:"translate(50px, 66px)"}),e.find("#message_2").css({transform:"translate(231px, 205px)"}),e.find("#message_3").css({transform:"translate(50px, 235px)"}),e.find("#popup").css({transform:"translate(0, 139px) scale(.8)"}),e.find("#sign").css({"stroke-dasharray":"1060 1060","stroke-dashoffset":"1060"}),e.find("#message_4").css({transform:"translate(173px, 383px)"}),e.find("#message_5").css({transform:"translate(50px, 416px)"}),e.find("#message_6").css({transform:"translate(46px, 10px)"}),e.find("#message_7").css({transform:"translate(0px, 54px)"}),e.find("#message_8").css({transform:"translate(178px, 164px)"}),e.find("#message_9").css({transform:"translate(0, 195px)"}),e.find("#awesome, #leonard, #felix").css({"stroke-dasharray":"1060 1060","stroke-dashoffset":"1060"}),e.find("#message_10").css({transform:"translate(178px, 490px)"}),e.find("#message_11").css({transform:"translate(61px, 10px)"}),e.find("#message_12").css({transform:"translate(0, 60px)"}),e.find("#message_13").css({transform:"translate(38px, 149px)"}),e.find("#message_14").css({transform:"translate(157px, 430px)"}),window.startAnim_1=function(){if(e.find("#animation_1").is(":not(.animated-run)")){var s=0;setTimeout(function(){e.find("#message_1").css({opacity:"1",transform:"translate(50px, 56px)",transition:"all .2s ease"}),e.find("#message_1 .message").addClass("message-show")},s+=100),setTimeout(function(){e.find("#message_2").css({opacity:"1",transform:"translate(231px, 195px)",transition:"all .2s ease"}),e.find("#message_2 .message").addClass("message-show")},s+=500),setTimeout(function(){e.find("#message_3").css({opacity:"1",transform:"translate(50px, 225px)",transition:"all .2s ease"}),e.find("#message_3 .message").addClass("message-show")},s+=800),setTimeout(function(){e.find("#popup").css({opacity:"1",transform:"translate(0, 139px) scale(1)",transition:"all .2s ease"})},s+=800),setTimeout(function(){e.find("#sign").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},s+=800),setTimeout(function(){e.find("#popup").css({opacity:"0",transform:"translate(0px, 50px) scale(1)",transition:"all .4s ease"}),e.find("#message_4").css({opacity:"1",transform:"translate(173px, 373px)",transition:"all .3s .3s ease"}),e.find("#message_4 .message").addClass("message-show")},s+=2100),setTimeout(function(){e.find("#message_5").css({opacity:"1",transform:"translate(50px, 406px)",transition:"all .3s ease"}),e.find("#message_5 .message").addClass("message-show")},s+=900)}e.find("#animation_1").addClass("animated-run")},window.startAnim_2=function(){if(e.find("#animation_2").is(":not(.animated-run)")){var s=0;setTimeout(function(){e.find("#message_6").css({opacity:"1",transform:"translate(46px, 0)",transition:"all .2s ease"}),e.find("#message_6 .message").addClass("message-show")},s+=100),setTimeout(function(){e.find("#message_7").css({opacity:"1",transform:"translate(0, 44px)",transition:"all .2s ease"}),e.find("#message_7 .message").addClass("message-show")},s+=800),setTimeout(function(){e.find("#message_8").css({opacity:"1",transform:"translate(178px, 154px)",transition:"all .2s ease"}),e.find("#message_8 .message").addClass("message-show")},s+=800),setTimeout(function(){e.find("#message_9").css({opacity:"1",transform:"translate(0, 185px)",transition:"all .2s ease"}),e.find("#message_9 .message").addClass("message-show")},s+=800),setTimeout(function(){e.find("#awesome").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},s+=300),setTimeout(function(){e.find("#felix").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},s+=500),setTimeout(function(){e.find("#leonard").css({"stroke-dashoffset":"0",transition:"all 2s ease"})},s+=300),setTimeout(function(){e.find("#message_6").css({opacity:"0"}),e.find("#scroll_1").css({transform:"translate(0, -50px)",transition:"all .2s ease"})},s+=1200),setTimeout(function(){e.find("#message_10").css({opacity:"1",transform:"translate(178px, 480px)",transition:"all .2s ease"}),e.find("#message_10 .message").addClass("message-show")},s+=200)}e.find("#animation_2").addClass("animated-run")},window.startAnim_3=function(){if(e.find("#animation_3").is(":not(.animated-run)")){var s=0;setTimeout(function(){e.find("#message_11").css({opacity:"1",transform:"translate(61px, 0)",transition:"all .2s ease"})},s+=100),setTimeout(function(){e.find("#message_12").css({opacity:"1",transform:"translate(0, 50px)",transition:"all .2s ease"})},s+=500),setTimeout(function(){e.find("#message_13").css({opacity:"1",transform:"translate(38px, 139px)",transition:"all .2s ease"})},s+=500),setTimeout(function(){e.find("#message_14").css({opacity:"1",transform:"translate(157px, 420px)",transition:"all .2s ease"})},s+=1e3)}},window.animation_hide=function(s){e.find("#animation_"+s).css({opacity:0,transition:"all .2s ease"})},window.animation_show=function(s){e.find("#animation_"+s).css({opacity:1,transition:"all .2s ease"})}}),$(function(){function s(){var s=$("#pos_1"),e=$("#pos_2"),n=$("#pos_3"),a=$("#pos_4"),t=$("#pos_3_contain_1"),i=$("#pos_3_contain_2");e[0].getBoundingClientRect().top<$(window).outerHeight()?(s.addClass("btn_hidden"),e.removeClass("btn_hidden")):(s.removeClass("btn_hidden"),e.addClass("btn_hidden")),n[0].getBoundingClientRect().top<$(window).outerHeight()+50?(n.is(".btn_fixed")||(a.addClass("btn_hidden-cut").removeClass("btn_visible-cut"),n.addClass("btn_fixed")),n[0].getBoundingClientRect().top>t[0].getBoundingClientRect().top&&n[0].getBoundingClientRect().top<i[0].getBoundingClientRect().top||n.is(".btn_fixed")&&(a.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),n.removeClass("btn_fixed"))):n.is(".btn_fixed")&&(a.removeClass("btn_hidden-cut").addClass("btn_visible-cut"),n.removeClass("btn_fixed"))}s(),$(document).scroll(function(){s()})}),$(function(){}),$(function(){function s(){$(".promo")[0].getBoundingClientRect().top<$(window).outerHeight()?($(".promo").addClass("promo_visible"),window.startAnim_1()):$(".promo").removeClass("promo_visible")}s(),$(document).scroll(function(){s()})}),$(function(){$(".qa__title").click(function(){$(this).parent().toggleClass("qa__i_visible"),console.log("sdsds")})}),$(function(){var e=$("#scrren_1"),n=$("#scrren_2"),a=$("#scrren_3"),t=$("#scrren_4"),i="";function s(){e[0].getBoundingClientRect();var s=$(window).outerHeight();i="",e[0].getBoundingClientRect().top<s&&(i="#screen_1"),2*n[0].getBoundingClientRect().top<s&&(i="#screen_2"),2*a[0].getBoundingClientRect().top<s&&(i="#screen_3"),2*t[0].getBoundingClientRect().top<s&&(i="#screen_4"),"#screen_1"==i?(window.startAnim_1(),window.animation_show(1)):window.animation_hide(1),"#screen_2"==i?(window.startAnim_2(),window.animation_show(2)):window.animation_hide(2),"#screen_3"==i||"#screen_4"==i?(window.startAnim_3(),window.animation_show(3)):window.animation_hide(3),console.log(i)}s(),$(window).scroll(function(){s()})}),$(function(){var e=$("#slider").find(".slider__s").length,n=0,a=$("#slider").find(".slider__c-prev"),t=$("#slider").find(".slider__c-next"),i=$("#slider").find(".slider__inner");function s(s){s&&(s.is(".slider__c-prev")&&0<n&&n--,s.is(".slider__c-next")&&n<e-1&&n++),a.removeClass("disabled"),t.removeClass("disabled"),0==n&&a.addClass("disabled"),n==e-1&&t.addClass("disabled"),i.css({"margin-left":"-"+100*n+"vw"})}s(),$("#slider").find(".slider__c").click(function(){s($(this))})}),$(function(){$(".tab div").click(function(){var s=$("[data-id="+$(this).parent().data("for")+"]"),e=s.find("[data-id="+$(this).data("qa")+"]");s.find(".qa").removeClass("qa_selected"),e.addClass("qa_selected"),$(this).parent().find("div").removeClass("selected"),$(this).addClass("selected")})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
