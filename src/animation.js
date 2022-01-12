$('.medialist__item').hover(function(){
    $(this).css('border-color','#ce484a');
    $(this).children('.medialist__icon').css('fill','#ce484a');
},function(){
    $(this).css('border-color','#fbf5f3');
    $(this).children('.medialist__icon').css('fill','#fbf5f3');
});