import './dropdown-room.scss'
// нужны элементы управления плагином из пага -

$(document).ready(() => {
    function filltext(ctx) {
        
        if ($(ctx).parents(".dropdown__box").data('preset') === 'guest') {
            var num = 0;
            var numtext = 'гостей';
            $(ctx).parents('.drop__menu').find('.item__value').each(function(index, value){
                num += Number($(this).text());
            },)
            var inner;
            if (num === 1) {numtext = 'гость'};
            if (num >= 2 && num < 5) {numtext = 'гостя'};
            inner = num + ' ' + numtext;
            if (num === 0) {
                inner = 'Сколько гостей';
                $(ctx).parents('.drop__menu').find('.dropdown__clear').addClass('dropdown__clear_unactive')
            } else {$(ctx).parents('.drop__menu').find('.dropdown__clear').removeClass('dropdown__clear_unactive')}
            
            $(ctx).parents('.drop__menu').siblings('.drop__text-box').children('.drop__text-field').text(inner);
        } else {
        var text = []
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
    }}

    function checkval() {
        $('.item__value').each(function(){
            if ( Number($(this).text()) === 0 ) {
                $(this).siblings('.item__calc-dec').addClass('item__calc-dec_unactive')
            } else {
                $(this).siblings('.item__calc-dec').removeClass('item__calc-dec_unactive')
            };
        })
    };
    // при клике по документу, исключая дропдаун = убирает меню
    $(document).click(
        function(event){
            if ( (!event.target.matches('.drop__text-box')) && 
            (!event.target.matches('.item, .item__text, .item__calc, .item__calc-dec, .item__value, .item__calc-inc')) && 
            (!event.target.matches('.drop__text-field')) && 
            (!event.target.matches('.dropdown__clear')) ) {
            $('.drop__text-box').removeClass('dropdown__box_active');
            $('.drop__text-box').siblings('.drop__menu').removeClass('visible');
        };
    },);

    $('.drop__text-box').click(
        function(){
            var ctx = this;
            $('.drop__text-box').each(function(){
                if (this !== ctx) {
                    $(this).removeClass('dropdown__box_active');
                    $(this).siblings('.drop__menu').removeClass('visible'); 
                }
            })
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
    checkval();
    //нас
    $(".dropdown__box[data-preset='guest']").find('.drop__text-box').addClass('dropdown_w320');
    $(".dropdown__box[data-preset='guest']").find('.drop__menu').addClass('dropdown_w320');
    $(".dropdown__box[data-preset='guest']").find('.drop__menu').append(`
    <div class="item">
    <div class="dropdown__clear">очистить</div>
    <div class="dropdown__submit">применить</div>
    </div>
    `);
    $(".dropdown__box[data-preset='guest']").find('.dropdown__clear').click(function() {
        $(this).parents('.drop__menu').find('.item__value').each(function() {
            $(this).text(0)
        })
        filltext(this)
    })

    //заполнение поля при загрузке
    $('.item__value').each(function(){
        filltext(this)
    })
    
    function calc(arr) {
        var result = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > 0 && (arr[i] % 2 !== 0)) {
                result += arr[i];
            }
        }
        return result;
    }
    //console.log(calc([5,0,-5,12,7]))
  }); 