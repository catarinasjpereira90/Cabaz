var mainImg = $('big').attr('src');//variavel global para ter src inicial da img grande

$(document).ready(function() {

    $('.image ul li img').click(function() {
    var clickImg=$(this).find('img').attr('src');//variavel para guardar src da imagem
    $('.img-block').attr('src',clickImg);//actualizar variavel da imagem grande
    $('big').attr('src',clickImg);//actualizar o src da imagem grande 
    $('.hero ul li').removeClass('selected');//remover class selected
    $(this).parent().addClass('selected');//adicionar class selected
    mainImg = $('big').attr('src');//colocar imagem grande no tumbnail 
})
});

