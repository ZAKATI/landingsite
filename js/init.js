(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.slider').slider({
            full_width: true,
            indicators: false
        });
        $('#left-slide').click(function () {
            $('.slider').slider('prev');
        });
        $('#right-slide').click(function () {
            $('.slider').slider('next');
        });
    }); 
})(jQuery); 