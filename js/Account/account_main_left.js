$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');

});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});


//按鈕
$('.l_btn_account').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')

});
$('.l_btn_password').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});

$('.l_btn_order').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});
$('.l_btn_subscription').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});
$('.l_btn_walking').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});
$('.l_btn_favorite').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});
$('.l_btn_coin').click(function () {
    $('.l_member_detail').find('button').css('color', '#89A7C2');
    $(this).css('color', '#F9DD83')
});