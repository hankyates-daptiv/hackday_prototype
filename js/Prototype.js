$(document).ready(function () {
    $('#global-nav .nav-tab a').eq(2).addClass('selected');
    $('#global-nav .nav-tab a').click(function (e) {
        $('#global-nav .selected').removeClass('selected');
        $(e.target).addClass('selected');
    });

});
