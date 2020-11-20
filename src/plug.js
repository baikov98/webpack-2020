
$(document).ready(() => {
    $('.iqdropdown').iqDropdown();
  }); 

$(document).ready(() => {
    function checkval() {
      return $(this).siblings('.item__value').text()
    }

    $('.dropdown__box').click(function(){
        $(this).addClass('dropdown__box_active');
        $(this).children('.drop__menu').addClass('visible');
    });

    $('.item__calc-inc').click(function(){
      var val = $(this).siblings('.item__value').text();
      val++;
      $(this).siblings('.item__value').text(toString(val)); 
  });
    $('.item__calc-dec').click(function(){
      var val = $(this).siblings('.item__value').text();
      if (!(val == 0)) {val--};
      
      $(this).siblings('.item__value').text(toString(val)); 
  });
    
<<<<<<< Updated upstream
  }); 
=======
  });  */











>>>>>>> Stashed changes
