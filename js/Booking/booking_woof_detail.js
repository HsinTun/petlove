$('.l_subtitle_1').click(function () {

    $('.l_type_detail').show();
    $('.l_main_bottom').show();

    $('.l_main_right_2').hide();
    $('.l_main_right2_bottom').hide();
    $('.l_yellow_line').css('transform', 'translateX(-4px)translateY(-15px)').css('transition', '.5s').css('width', '100px');

});
$('.l_subtitle_2').click(function () {
    $('.l_main_right_2').show();
    $('.l_main_right2_bottom').show();

    $('.l_type_detail').hide();
    $('.l_main_bottom').hide();

    $('.l_yellow_line').css('transform', 'translateX(240px) translateY(-15px)').css('transition', '.5s').css('width', '130px');


});