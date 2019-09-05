$(function(){
  
  $('body').addClass(window.browserDetect().isMobile);
  
  if ( $('body').is('.mobile') ){
    
    $('.main-header').html(`<h1>Paperless<br>Corporate Secretary</h1>
<p>Your&nbsp;documents done&nbsp;right, online,<br>and&nbsp;on&nbsp;time</p>`);
    
    
    $('.offer-mobile').append( $('.offer-price').remove().clone() );
    
    
    var phone = $('.promo-phone-animation').parent().html(); 
    $('.phone').find('.promo').remove().clone();
    var $rate = $('.phone').find('.app-rate').remove().clone();
    
    
    
    $('#screen_1').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_2').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_3').find('.phone-mobile').append( parseSVG(phone) );
    
    $('#screen_4').find('.phone-mobile').append($rate);
    
    
    $('tspan').each(function(i,e){
      $(e).attr('font-size', 10)
    })
    
    
    
    function parseSVG(s) {
        var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
        var frag = document.createDocumentFragment();
        while (div.firstChild.firstChild)
          frag.appendChild(div.firstChild.firstChild);
        return frag;
    }
    
    
    
  }
  
  
});