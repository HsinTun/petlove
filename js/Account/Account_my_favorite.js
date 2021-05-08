$('.l_date').click(function () {

    let hotelName = $(this).html();

    $('.l_array').html(hotelName);
});
$('.l_hot').click(function () {

    let hotelName = $(this).html();

    $('.l_array').html(hotelName);
});
$('.l_high_price').click(function () {

    let hotelName = $(this).html();

    $('.l_array').html(hotelName);
});
$('.l_low_price').click(function () {

    let hotelName = $(this).html();

    $('.l_array').html(hotelName);
});

//刪除商品



$ShowHideMore = $('.l_my_favorite_product');


var $times = $ShowHideMore.children('.l_my_favorite_one');

if ($times.length >= 5) {
    $ShowHideMore.children(':nth-of-type(n+5)').hide();
    $('.l_my_favorite_box').find('.l_more a').addClass('more-times').text('more');

}
else {


    $('.l_my_favorite_box').find('.l_more a').hide();

}




var comeBack = true

$('.l_delete').click(function () {
    let test = $(this).parent().parent().text()
    console.log(test)

    $(this).parent().parent().remove();
    if (comeBack) {
        $ShowHideMore = $('.l_my_favorite_product');

        $ShowHideMore.each(function () {
            $ShowHideMore.children().show();

        });
        var $times = $ShowHideMore.children('.l_my_favorite_one');

        console.log($times.length)
        if ($times.length >= 5) {
            $ShowHideMore.children(':nth-of-type(n+5)').hide();
            // $ShowHideMore.children(':nth-of-type(n+6)').addClass('moreShown').hide();
            $('.l_my_favorite_box').find('.l_more a').addClass('more-times').text('more');

        }
        else {


            $('.l_my_favorite_box').find('.l_more a').hide();

        }
    }

    var openNomore = $('.l_my_favorite_product').children();
    console.log(openNomore)


    console.log(openNomore.length)
    if (openNomore.length == 0) {
        $('.l_nomore').show();
    }
    else {


        $('.l_nomore').hide();

    }



});





$('.l_more').click(function () {
    comeBack = false;
    $('.l_my_favorite_product').children().show();
    $('.l_my_favorite_box').find('.l_more a').hide();
    // $(this).toggleClass('more-times');

    var openNomore = $('.l_my_favorite_product').children();
    console.log(openNomore)


    console.log(openNomore.length)
    if (openNomore.length == 0) {
        $('.l_nomore').show();
    }
    else {


        $('.l_nomore').hide();

    }

});








// $('.l_delete').click(function () {
//     // let test = $(this).parent().parent().text()
//     // console.log(test)

//     $(this).parent().parent().remove();

//     let a = $('.l_more').children('.display');
//     console.log(a.length = 0);
//     if (a.length == 0) {
//         $ShowHideMore = $('.l_my_favorite_product');

//         $ShowHideMore.each(function () {
//             $ShowHideMore.children().show();

//         });
//         var $times = $ShowHideMore.children('.l_my_favorite_one');

//         console.log('time' + $times.length)
//         if ($times.length >= 5) {
//             $ShowHideMore.children(':nth-of-type(n+5)').hide();
//             // $ShowHideMore.children(':nth-of-type(n+6)').addClass('moreShown').hide();
//             $('.l_my_favorite_box').find('.l_more a').addClass('more-times').text('more');

//         }
//         else {


//             $('.l_my_favorite_box').find('.l_more a').hide();

//         }
//     }




// });





// $('.l_more').click(function () {

//     $('.l_my_favorite_product').children().show();
//     $('.l_my_favorite_box').find('.l_more a').addClass('display').hide();


// });
