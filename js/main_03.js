$(document).ready(function () {
    var mainImg = $('.img-big').attr('src');//variável global para ter src imagem grande
    $('.image-list li img').click(function () {
        var clickImg = $(this).attr('src');//variável para guardar src da imagem clicada
        mainImg = $('.img-big').attr('src');//actualiza a variável da imagem grande 
        $('.img-big').attr('src', clickImg);//actualiza o src da imagem grande 
        $(this).attr('src', mainImg);//coloca img grande no tumbnail
    });
})
