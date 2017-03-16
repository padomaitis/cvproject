$(document).ready(function(){
    $(".carousel__item").click(function(){
        var imgScr = $(this).attr('src');
        $(".carousel__modal").css({"display":"block"});
        $(".carousel__modal__img").attr('src',imgScr);

    })
    
    $(".carousel__modal").click(function () {
        $(".carousel__modal").css({"display":"none"});
    })
})