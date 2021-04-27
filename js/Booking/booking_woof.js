
$(document).ready(function () {
    $('.l_slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 1900
    });

});
$('.l_btn_dog').click(function () {
    $('.l_btn_cat').removeClass('button_color');
    $('.l_btn_dog').addClass('button_color');
    $('.l_dog_room').fadeIn(1000);
    $('.l_cat_room').hide();

});
$('.l_btn_cat').click(function () {
    $('.l_btn_dog').removeClass('button_color');
    $('.l_btn_cat').addClass('button_color');
    $('.l_dog_room').hide();

    $('.l_cat_room').fadeIn(1000);


});

// _mobile
$('.l_btn_dog_mobile').click(function () {
    $('.l_btn_cat').removeClass('button_color_mobile');
    $('.l_btn_dog').addClass('button_color_mobile');
    $('.l_dog_room_mobile').fadeIn(1000);
    $('.l_cat_room_mobile').hide();

});
$('.l_btn_cat_mobile').click(function () {
    $('.l_btn_dog').removeClass('button_color_mobile');
    $('.l_btn_cat').addClass('button_color_mobile');
    $('.l_dog_room_mobile').hide();

    $('.l_cat_room_mobile').fadeIn(1000);


});




