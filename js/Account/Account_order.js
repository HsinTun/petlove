// 會員中心


// 訂單管理//
$('.l_btn_order').click(function () {

    $('.l_order_management').show();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').hide();
    $('.l_bottomline').css('transform', 'translateX(0px)').css('transition', '.0s');




    $('.l_order_management_detail').children().eq(0).show();
    $('.l_order_management_detail').children().eq(0).siblings().hide();


});
// 待付款
$('.l_waiting_payment').click(function () {

    $('.l_bottomline').css('transform', 'translateX(0px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(2px)').css('transition', '.5s');


    $('.l_order_management_detail').children().eq(0).show();
    $('.l_order_management_detail').children().eq(0).siblings().hide();

});


// 待出貨
$('.l_waiting_picked').click(function () {

    $('.l_bottomline').css('transform', 'translateX(165px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(65px)').css('transition', '.5s');

    $('.l_order_management_detail').children().eq(1).show();
    $('.l_order_management_detail').children().eq(1).siblings().hide();



})




// 運送中
$('.l_transport').click(function () {

    $('.l_bottomline').css('transform', 'translateX(320px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(129px)').css('transition', '.5s');

    $('.l_order_management_detail').children().eq(2).show();
    $('.l_order_management_detail').children().eq(2).siblings().hide();


})
// 完成
$('.l_finish').click(function () {

    $('.l_bottomline').css('transform', 'translateX(465px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(186px)').css('transition', '.5s');

    $('.l_order_management_detail').children().eq(3).show();
    $('.l_order_management_detail').children().eq(3).siblings().hide();


})
// 取消
$('.l_cancel').click(function () {

    $('.l_bottomline').css('transform', 'translateX(600px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(233px)').css('transition', '.5s');

    $('.l_order_management_detail').children().eq(4).show();
    $('.l_order_management_detail').children().eq(4).siblings().hide();


})
// 退貨
$('.l_return').click(function () {

    $('.l_bottomline').css('transform', 'translateX(738px)').css('transition', '.5s');

    $('.l_bottomline_mobile').css('transform', 'translateX(282px)').css('transition', '.5s');

    $('.l_order_management_detail').children().eq(5).show();
    $('.l_order_management_detail').children().eq(5).siblings().hide();

});





// 訂閱制//
$('.l_btn_subscription').click(function () {
    $('.l_order_management').hide();
    $('.l_subscription_order_box').show();
    $('.l_walking_order_box').hide();

    $('.l_bottomline_1').css('transform', 'translateX(-2px)').css('transition', '0s');

    $('.l_subscription_order_detail').children().eq(0).show();
    $('.l_subscription_order_detail').children().eq(0).siblings().hide();

});


// 訂閱中
$('.l_subscribing').click(function () {

    $('.l_bottomline_1').css('transform', 'translateX(-2px)').css('transition', '.5s');
    $('.l_bottomline_1_mobile').css('transform', 'translateX(0px)').css('transition', '.5s');

    $('.l_subscription_order_detail').children().eq(0).show();
    $('.l_subscription_order_detail').children().eq(0).siblings().hide();

});


// 取消訂閱
$('.l_unsubscribe').click(function () {

    $('.l_bottomline_1').css('transform', 'translateX(205px)').css('transition', '.5s');
    $('.l_bottomline_1_mobile').css('transform', 'translateX(100px)').css('transition', '.5s');


    $('.l_subscription_order_detail').children().eq(1).show();
    $('.l_subscription_order_detail').children().eq(1).siblings().hide();

});


// 結束訂閱
$('.l_end_subscription').click(function () {

    $('.l_bottomline_1').css('transform', 'translateX(423px)').css('transition', '.5s');
    $('.l_bottomline_1_mobile').css('transform', 'translateX(205px)').css('transition', '.5s');

    $('.l_subscription_order_detail').children().eq(2).show();
    $('.l_subscription_order_detail').children().eq(2).siblings().hide();

});








// 代遛訂單//
$('.l_btn_walking').click(function () {
    $('.l_order_management').hide();
    $('.l_subscription_order_box').hide();
    $('.l_walking_order_box').show();

    $('.l_bottomline_2').css('transform', 'translateX(0px)').css('transition', '0s');

    $('.l_walking_service_order').children().eq(0).show();
    $('.l_walking_service_order').children().eq(0).siblings().hide();


});



// 待付款
$('.l_walking_patment').click(function () {

    $('.l_bottomline_2').css('transform', 'translateX(0px)').css('transition', '.5s');
    $('.ll_bottomline_2_mobile').css('transform', 'translateX(0px)').css('transition', '.5s');

    $('.l_walking_service_order').children().eq(0).show();
    $('.l_walking_service_order').children().eq(0).siblings().hide();

});

// 預約代遛
$('.l_walking_reservation').click(function () {

    $('.l_bottomline_2').css('transform', 'translateX(205px)').css('transition', '.5s');
    $('.l_bottomline_2_mobile').css('transform', 'translateX(97px)').css('transition', '.5s');

    $('.l_walking_service_order').children().eq(1).show();
    $('.l_walking_service_order').children().eq(1).siblings().hide();

});

// 過去訂單
$('.l_walking_end').click(function () {

    $('.l_bottomline_2').css('transform', 'translateX(423px)').css('transition', '.5s');
    $('.l_bottomline_2_mobile').css('transform', 'translateX(204px)').css('transition', '.5s');

    $('.l_walking_service_order').children().eq(2).show();
    $('.l_walking_service_order').children().eq(2).siblings().hide();

});



// 手機
$('.l_order_mobile').click(function () {
    $('.l_order_management_detail').show();
    $('.l_order_management_program').show();

    $('.l_subscription_order_box').hide();

    $('.l_walking_order_box').hide();

    $(this).children().css('color', '#89A7C2');
    $(this).siblings().children().css('color', '#CCCCCC');

    $('.l_bottomline_mobile').css('transform', 'translateX(2px)').css('transition', '.0s');
    $('.l_order_management_detail').children().eq(0).show();
    $('.l_order_management_detail').children().eq(0).siblings().hide();

});

$('.l_subscription_mobile').click(function () {
    $('.l_order_management_detail').hide();
    $('.l_order_management_program').hide();

    $('.l_subscription_order_box').show();

    $('.l_walking_order_box').hide();

    $(this).children().css('color', '#89A7C2');
    $(this).siblings().children().css('color', '#CCCCCC');

    $('.l_bottomline_1_mobile').css('transform', 'translateX(0px)').css('transition', '.0s');
    $('.l_subscription_order_detail').children().eq(0).show();
    $('.l_subscription_order_detail').children().eq(0).siblings().hide();

});

$('.l_walking_mobile').click(function () {
    $('.l_order_management_detail').hide();
    $('.l_order_management_program').hide();

    $('.l_subscription_order_box').hide();

    $('.l_walking_order_box').show();

    $(this).children().css('color', '#89A7C2');
    $(this).siblings().children().css('color', '#CCCCCC');

    $('.l_bottomline_2_mobile').css('transform', 'translateX(0px)').css('transition', '.0s');
    $('.l_walking_service_order').children().eq(0).show();
    $('.l_walking_service_order').children().eq(0).siblings().hide();

})





// 收起來
$('.l_order_close_arrow').click(function () {
    $(this).parentsUntil('.l_one_order').find('.l_order_ifn').slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_cancel').slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_open_bottom').slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_all').addClass('l_order_all_jq');
    $(this).slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_close_buttom').slideDown();
    $(this).parentsUntil('.l_one_order').find('.l_order_open_arrow').slideDown();

    // $(this).parentsUntil('.l_one_order').find('.l_order_all').addClass('l_walking_all_jq');
});



// 展開
$('.l_order_open_arrow').click(function () {
    $(this).parentsUntil('.l_one_order').find('.l_order_ifn').slideDown();
    $(this).parentsUntil('.l_one_order').find('.l_order_cancel').slideDown();
    $(this).parentsUntil('.l_one_order').find('.l_order_open_bottom').slideDown();
    $(this).parentsUntil('.l_one_order').find('.l_order_all').removeClass('l_order_all_jq');
    $(this).slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_close_buttom').slideUp();
    $(this).parentsUntil('.l_one_order').find('.l_order_close_arrow').slideDown();


    // $(this).parentsUntil('.l_one_order').find('.l_order_all').removeClass('l_walking_all_jq');
});












