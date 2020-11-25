import './dropdown-room.scss'
// нужны элементы управления плагином из пага -

$(document).ready(() => {
    //var preset = $('.dropdown__box').data('preset') === 'guest';

    function filltext(ctx) {
        var text = []
        console.log(ctx)
        $(ctx).parents('.drop__menu').find('.item__value').each(function(index, value){
            if (Number($(this).text()) !== 0) {
                var numtext = String($(this).parent('.item__calc').siblings('.item__text').text())
                if (Number($(this).text()) === 1){
                    if (numtext === 'спальни') {numtext = 'спальня'};
                    if (numtext === 'ванные комнаты') {numtext = 'ванная комната'};
                    if (numtext === 'кровати') {numtext = 'кровать'};
                } 
                var t = $(this).text() + ' ' + numtext  + ', ';
                text.push(t)
            }
        }, )
        var inner = text.join(" ");
        if (inner === '') {inner = 'Удобства номера'}
        $(ctx).parents('.drop__menu').siblings('.drop__text-box').children('.drop__text-field').text(inner);
    }
    function checkval() {
        $('.item__value').each(function(){
            if ( Number($(this).text()) === 0 ) {
                $(this).siblings('.item__calc-dec').addClass('item__calc-dec_unactive')
            } else {
                $(this).siblings('.item__calc-dec').removeClass('item__calc-dec_unactive')
            };
        })
    };
    // ремувер
    $(document).click(
        function(event){
            if ((!event.target.matches('.drop__text-box')) && 
            (!event.target.matches('.item, .item__text, .item__calc, .item__calc-dec, .item__value, .item__calc-inc')) && 
            (!event.target.matches('.drop__text-field'))) {
            $('.drop__text-box').removeClass('dropdown__box_active');
            $('.drop__text-box').siblings('.drop__menu').removeClass('visible');
        };
    },);

    $('.drop__text-box').click(
        function(){
            $(this).toggleClass('dropdown__box_active');
            $(this).siblings('.drop__menu').toggleClass('visible');

    },); 


    $('.item__calc-inc').click(function(){
      var val = $(this).siblings('.item__value').text();
      val++;
      $(this).siblings('.item__value').text(val); 
      checkval()
      filltext(this)
    },);

    $('.item__calc-dec').click(function(){
      var val = parseInt($(this).siblings('.item__value').text());
      if (!(val == 0)) {val--};
      $(this).siblings('.item__value').text(val); 
      checkval()
      filltext(this)
    });
    checkval()

    //заполнение поля при загрузке
    $('.item__value').each(function(){
        filltext(this)
    })
    // 
  }); 