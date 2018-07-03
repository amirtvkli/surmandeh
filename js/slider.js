    // ************** Slider ****************

    $(document).ready(function(){
    // Options
    var speed=500;
    var autoswitch =true;
    var autoswitch_speed=8000;
    
    $('.slide').first().addClass('activate');
    
    // Hide All Slides 
    $('.slide').hide();
    
    // Show First Slide
    $('.activate').show();
    
    // Next Handler
    $('#next').on('click',NextSlide);
    
    // previous Handler
    $('#prev').on('click',PrevSlide);
    
    // Switch to Next
    function NextSlide(){
        $('.activate').removeClass('activate').addClass('oldactivate');
        if($('.oldactivate').is(':last-child')){
            $('.slide').first().addClass('activate');
        } else{
            $('.oldactivate').next().addClass('activate');
        }
        $('.oldactivate').removeClass('oldactivate');
        $('.slide').fadeOut(speed);
        $('.activate').fadeIn(speed);
    }
    
    // Switch to Previous
    function PrevSlide(){
        $('.activate').removeClass('activate').addClass('oldactivate');
        if($('.oldactivate').is(':first-child')){
            $('.slide').last().addClass('activate');
        } else{
            $('.oldactivate').prev().addClass('activate');
        }
        $('.oldactivate').removeClass('oldactivate');
        $('.slide').fadeOut(speed);
        $('.activate').fadeIn(speed);
    }
    
    
    // Auto Slider Handler
    if(autoswitch==true){
        setInterval(NextSlide,autoswitch_speed);
    }
    
    
  });
  