$('.l_all_coin').click(function () {
    $('.l_all_coin_detail').show();
    $('.l_get_coin_detail').hide();
    $('.l_use_coin_detail').hide();
    $('.l_coin_bottomline').css('transform', 'translateX(0px)').css('transition', '.5s');

    $('.l_coin_bottomline_mobile').css('transform', 'translateX(0px)').css('transition', '.5s');



});
$('.l_get_coin').click(function () {
    $('.l_all_coin_detail').hide();
    $('.l_get_coin_detail').show();
    $('.l_use_coin_detail').hide();
    $('.l_coin_bottomline').css('transform', 'translateX(165px)').css('transition', '.5s');

    $('.l_coin_bottomline_mobile').css('transform', 'translateX(107px)').css('transition', '.5s');


});
$('.l_use_coin').click(function () {
    $('.l_all_coin_detail').hide();
    $('.l_get_coin_detail').hide();
    $('.l_use_coin_detail').show();
    $('.l_coin_bottomline').css('transform', 'translateX(345px)').css('transition', '.5s');

    $('.l_coin_bottomline_mobile').css('transform', 'translateX(228px)').css('transition', '.5s');
});

$(function () {
    $('.l_question').click(function () {
        $('.l_coin_rule').toggle('slow');
        return false;

    });
    $(document).click(function (event) {
        var _con = $('.l_coin_rule');

        if (!_con.is(event.target) && _con.has(event.target).length === 0) {

            $('.l_coin_rule').hide(100);
        }
    });
});





// $('.l_points_return').each(function () {
//     let test = $(this).text()


//     for (i = 0; i < 42; i++) {

//         console.log("判斷數字_", i)
//         console.log("我取到的數字_", test)
//         if (test == "+" + i) {
//             console.log("有+")

//         }
//         else {
//             console.log("沒有+")
//             $(this).css('color', '#89A7C2')
//         }

//     }




// })



