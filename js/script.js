$(document).ready(function(){
    
    
  // ************** Slider ****************
  // Options
  var speed=500;
  var autoswitch =true;
  var autoswitch_speed=8000;
  
  $('.slide').first().addClass('active');
  
  // Hide All Slides 
  $('.slide').hide();
  
  // Show First Slide
  $('.active').show();
  
  // Next Handler
  $('#next').on('click',NextSlide);
  
  // previous Handler
  $('#prev').on('click',PrevSlide);
  
  // Switch to Next
  function NextSlide(){
      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child')){
          $('.slide').first().addClass('active');
      } else{
          $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  }
  
  // Switch to Previous
  function PrevSlide(){
      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':first-child')){
          $('.slide').last().addClass('active');
      } else{
          $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  }
  
  
  // Auto Slider Handler
  if(autoswitch==true){
      setInterval(NextSlide,autoswitch_speed);
  }
  
  
});