$(function(){
  
  flyHeader();
  
  $(document).scroll(function(e){
    flyHeader();
  });
  
  function flyHeader(){
    if( $(document).scrollTop() > 50 ){
      $('.header').addClass('header_not-top').removeClass('header_top');
    } else {
      $('.header').removeClass('header_not-top').addClass('header_top');
    }
    
    
    if( $(document).scrollTop() > 200 ){
      $('.navigation__btn').removeClass('navigation__btn_hidden');
    } else {
      $('.navigation__btn').addClass('navigation__btn_hidden');
    }
    
    if( $(document).scrollTop() > 200 ){
      $('.arrow-down').addClass('arrow-down_hidden');
    } else {
      $('.arrow-down').removeClass('arrow-down_hidden');
    }
    
  }
  
  
});