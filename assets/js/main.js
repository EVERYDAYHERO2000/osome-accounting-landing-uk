$(function(){
  var getBrowser = window.currentBrowser = browserDetect(); 
  $('body').addClass(getBrowser.browserName)
		.addClass(getBrowser.platform)
    .addClass(getBrowser.iphoneX)
		.addClass(getBrowser.isMobile);
  
  $('a').click(function(e){
    
    if ( $(this).attr('href').includes('my.osome.com') ){
      
      e.preventDefault();
      
      window.form().show();
      
      
    }
    
  })
  
  
});