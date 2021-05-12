$('.l_btn_account').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_my_account_box').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();


});

$('.l_btn_password').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_change_password_box').show();

    $('.l_my_account_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_order').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_order_management').show();

    $('.l_change_password_box').hide();
    $('.l_my_account_box ').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_subscription').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_subscription_order_box').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_my_account_box ').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_walking').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_walking_order_box').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_my_account_box ').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_favorite').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_recommend').css('margin-top', '0');
    $('.l_my_favorite_box').show();
    $('.l_for_you_recommend').show();
    $('.l_recommend').css('opacity', '1').show();



    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_account_box ').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_coin').click(function () {
    $('.footer').css('margin-top', '0');
    $('.footer2').css('margin-top', '0');
    $('.l_mao_coin').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_my_account_box ').hide();
    $('.l_coin_rule').hide();



});

// 手機板

$('.l_black').click(function () {


    $('.l_black').fadeOut();
    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');

    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');



});
$('.icon-user').click(function () {


    $('.l_black').fadeIn();

    $('.l_user_mobile').css('transform', 'translateX(0%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(45deg) translate(0px, -10px)').css('opacity', '1');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(-45deg) translate(3px, 3px)').css('opacity', '1');




});
$('.l_g-right').click(function () {
    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');
    $('.l_black').fadeOut();
})

$('.l_btn_account_m').click(function () {
    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');
    $('.l_black').fadeOut();


    $('.l_my_account_box').show();
    $('.l_account_mebile').show();
    $('.l_yellow_line').css('transform', 'translateY(-10px) translateX(77px)').css('transition', '.5s');

    $('.l_btn_password_mebile a').css('color', '#CCC');

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();


});



$('.l_btn_order_m').click(function () {

    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');
    $('.l_black').fadeOut();

    $('.l_order_management').show();
    $('.l_order_management_detail').show();
    $('.l_order_management_program').show();
    $('.l_bottomline_mobile').css('transform', 'translateX(2px)').css('transition', '.0s');
    $('.l_order_mobile').children().css('color', '#89A7C2');
    $('.l_order_mobile').siblings().children().css('color', '#CCCCCC');

    $('.l_change_password_box').hide();
    $('.l_my_account_box ').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});





$('.l_btn_favorite_m').click(function () {
    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');
    $('.l_black').fadeOut();


    $('.l_recommend').css('margin-top', '0');
    $('.l_my_favorite_box').show();
    $('.l_for_you_recommend').show();
    $('.l_recommend').css('opacity', '1').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_account_box').hide();
    $('.l_mao_coin').hide();
    $('.l_coin_rule').hide();



});

$('.l_btn_coin_m').click(function () {
    $('.l_user_mobile').css('transform', 'translateX(-100%)').css(' transition', '.5s');
    $('.l_g-right').children().eq(0).css('transform', 'rotate(0deg) translate(0px, -10px)');
    $('.l_g-right').children().eq(1).css('transform', 'rotate(0deg) translate(3px, 3px)');
    $('.l_black').fadeOut();


    $('.l_mao_coin').show();

    $('.l_change_password_box').hide();
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_my_favorite_box').hide();
    $('.l_for_you_recommend').hide();
    $('.l_recommend').hide();
    $('.l_my_account_box ').hide();
    $('.l_coin_rule').hide();



});

