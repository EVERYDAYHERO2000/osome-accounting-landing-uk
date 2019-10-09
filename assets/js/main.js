$(function(){
  var getBrowser = window.currentBrowser = browserDetect(); 
  $('body').addClass(getBrowser.browserName)
		.addClass(getBrowser.platform)
    .addClass(getBrowser.iphoneX)
		.addClass(getBrowser.isMobile);
})