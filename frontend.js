$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });
    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            screen('header').removeClass('header-active');
        }
    });

    $('.facility').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
});

//Counter

$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 20);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });