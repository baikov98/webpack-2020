import './header.scss'

$(document).ready(() => {
    $('.header__burger').click(function() {
        $(this).toggleClass('open-menu');
        $(this).siblings('.header__nav').toggleClass('open-menu')
        $('body').toggleClass('header__fixed-page')
    });
    
})