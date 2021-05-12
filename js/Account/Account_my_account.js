// 地址 JS    star
new TwCitySelector({
    el: ".city-selector", // 同 DOM querySelector()
    disabled: false,
    hasZipcode: true,
    bootstrapStyle: true,
});
$('.l_btn_account').click(function () {
    $('.l_my_account_box').show();
    $('.l_change_password_box').hide();
});
$('.l_btn_password').click(function () {
    $('.l_my_account_box').hide();
    $('.l_change_password_box').show();
});

// 手機
$('.l_btn_account_mebile').click(function () {
    $('.l_account_mebile').fadeIn();
    $('.l_change_password_box').fadeOut();

    $('.l_my_account_box h3').fadeIn()
    $('.l_my_account_box h4').hide()

    $('.l_btn_password_mebile a').css('color', '#CCC');
    $('.l_btn_account_mebile a').css('color', '#89A7C2');

    $('.l_yellow_line').css('transform', 'translateY(-10px) translateX(77px)').css('transition', '.5s');

});

$('.l_btn_password_mebile').click(function () {

    $('.l_account_mebile').fadeOut();
    $('.l_change_password_box').fadeIn();

    $('.l_my_account_box h4').fadeIn()
    $('.l_my_account_box h3').hide()

    $('.l_btn_account_mebile a').css('color', '#CCC');
    $('.l_btn_password_mebile a').css('color', '#89A7C2');

    $('.l_yellow_line').css('transform', 'translateY(-10px) translateX(223px)').css('transition', '.5s');
});