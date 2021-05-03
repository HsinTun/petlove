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