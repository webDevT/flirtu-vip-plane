$(function(){

    $('.plan-item').click(function(){   
        $('.plan-item').removeClass('active');
        $(this).addClass('active');
        // $('.plan-item').find('.price-item__detailes').slideUp();
        // $(this).find('.price-item__detailes').slideDown();
    })

});