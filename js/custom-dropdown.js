$(function () {
    $('#header .mopen button').on('click', () => {
        $('#header .gnb').toggleClass('on')
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', () => {
        $('#header .gnb').removeClass('on');
        $('#header .gnb .sub').removeAttr('style');
    })
})