import { add, before } from 'lodash';
import './calendar-filter.scss'

$(document).ready(function() {
    var timeNow = mostime();
    var yearNum = timeNow.getFullYear()
    var monthDiff = 0;
    var stage = 0;
    //- получение даты по московскому времени
    function mostime(diff = 0) {
        var d = new Date()
        var utc = 3;
        d.setHours(d.getHours() + utc, d.getMinutes() + d.getTimezoneOffset());
        d.setMonth(d.getMonth() + diff);
        return d;
    }

    //- date1 > date2?
    function compareDates(date1, date2) {
        if (date1.year > date2.year) return true; else if (date1.year < date2.year) {return false};
        if (date1.month > date2.month) return true; else if (date1.month < date2.month) {return false}
        if (date1.year === date2.year) {
            if (date1.month === date2.month) {
                if (date1.date > date2.date) {return true} else return false;
            } else return false
        } else return false
    }

    function calDateGen(diff) {

        var firstDay = mostime(diff);
        firstDay.setDate(1)
        var beforeDays = [];
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        var totalElems = 0;
        $('.calendar-filter__dates').empty()
        //- получаем массив объектов дат прошлого месяца
        if (firstDay.getDay() !== 1) {
             for (var i = 1; dayBefore.getDay() !== 1; i++) {
                var dayBefore = mostime(diff);
                dayBefore.setDate(1);
                dayBefore.setDate(dayBefore.getDate() - i)
                beforeDays.push(dayBefore)
             }
             beforeDays.reverse()
        }
        //- даты прошлого месяца
        beforeDays.forEach(function(item, i, arr) {
            $('.calendar-filter__dates')
            .append(`<div data-date="${item.getDate()}" data-month="${item.getMonth()}" data-year="${item.getFullYear()}" class="calendar-filter__date calendar-filter__other-month">${item.getDate()}</div>`);
            totalElems += 1
         })
        //- даты текущего месяца
        for (var i = 1; i <= 31; i++) {
            var thisMthday = mostime(diff)
            thisMthday.setDate(i);
            if (thisMthday.getMonth() === firstDay.getMonth()) {
            $('.calendar-filter__dates')
            .append(`<div data-date="${thisMthday.getDate()}" data-month="${thisMthday.getMonth()}" data-year="${thisMthday.getFullYear()}" class="calendar-filter__date">${thisMthday.getDate()}</div>`);
            totalElems += 1}
        }
        //- даты следующего месяца
        if (!(totalElems % 7 === 0)) {
            for (var i = 1; !(totalElems % 7 === 0); i++) {
                var nextMthday = mostime(diff+1)
                nextMthday.setDate(i)
                $('.calendar-filter__dates')
                .append(`<div data-date="${nextMthday.getDate()}" data-month="${nextMthday.getMonth()}" data-year="${nextMthday.getFullYear()}" class="calendar-filter__date calendar-filter__other-month">${nextMthday.getDate()}</div>`);
                totalElems += 1
            }}
        //- подцветка сегоднешней даты
        $(`.calendar-filter__date[data-date="${timeNow.getDate()}"][data-month="${timeNow.getMonth()}"][data-year="${timeNow.getFullYear()}"]`)
        .addClass('calendar-filter__curr-date')

        //- нажатие на дату
        $('.calendar-filter__date').click(function(){
            
            if (stage === 1) {   //- получаем обьект дата с кликнутой даты
                var dt = $(this).data();
                var arrData = $(this).parents('.calendar-filter')
                .find('.calendar-filter__arrive-text').data(); //- получаем обьект дата из инпута прибытия
                
                //- дата отбытия больше даты прибытия
                if (compareDates(dt, arrData)) {
                    var exit = $(this).parents('.calendar-filter').find('.calendar-filter__exit-text');
                    var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    $(this).addClass('calendar-filter__date_selected');
                    exit.data('date', dtDate);
                    exit.data('month', dtMonth);
                    exit.data('year', dtYear);
                
                    arrive.val(arrive.val() + ' ' + `${dtDate} ${getMounthByNum(dtMonth)}`);
                    stage = 2;
                }
                //- дата прибытия больше даты отбытия
                if (compareDates(arrData, dt)) {
                    $('.calendar-filter__date').each(function(){$(this).removeClass('calendar-filter__date_selected')})

                    var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
                    $(this).addClass('calendar-filter__date_selected');
                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    arrive.data('date', dtDate);
                    arrive.data('month', dtMonth);
                    arrive.data('year', dtYear);
                    
                    arrive.val(`${dtDate} ${getMounthByNum(dtMonth)} -`);
                    stage = 1;
                }
            }
            if (stage === 0) {
                stage = 1;
                //var dt = $(this).data();
                var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
                
                $(this).addClass('calendar-filter__date_selected');
                
                var dtDate = $(this).data('date')
                var dtMonth = $(this).data('month')
                var dtYear = $(this).data('year')
                arrive.data('date', dtDate);
                arrive.data('month', dtMonth);
                arrive.data('year', dtYear);
    
                arrive.val(`${dtDate} ${getMounthByNum(dtMonth)} -`);
        } 

        
        },);

        //- наведение выши
        $('.calendar-filter__date').mouseenter(function(){
            if (stage === 0) {
                $(this).addClass('calendar-filter__date_grayhover');
            }
            
            if (stage === 1) {
            $(this).addClass('calendar-filter__date_hover');
            var mouseEntrDate = $(this).data()
            var arriveDate = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text').data()
            var mouseEntr = $(this)
            
            $('.calendar-filter__date').each(function(){
                var eachDate = $(this).data()

                $(this).removeClass('calendar-filter__in-range')
                $(this).removeClass('calendar-filter__range-to');
                $(this).removeClass('calendar-filter__range-from');
                if (compareDates(mouseEntrDate, arriveDate)) {
                    mouseEntr.addClass('calendar-filter__range-to');
                    $(this).parents('.calendar-filter__select').find('.calendar-filter__date_selected').addClass('calendar-filter__range-from')
                }
                if (compareDates(arriveDate, mouseEntrDate)) {
                    mouseEntr.addClass('calendar-filter__range-from');
                    $(this).parents('.calendar-filter__select').find('.calendar-filter__date_selected').addClass('calendar-filter__range-to')
                }
                if ((compareDates(eachDate, arriveDate) && compareDates(mouseEntrDate, eachDate)) ||
                    (compareDates(eachDate, mouseEntrDate) && compareDates(arriveDate, eachDate))) {
                    $(this).addClass('calendar-filter__in-range')
                }
            })
        }})

        $('.calendar-filter__date').mouseleave(function(){
            $(this).removeClass('calendar-filter__date_hover');
        })

        $('.calendar-filter__date').mouseleave(function(){
            $(this).removeClass('calendar-filter__date_grayhover');
        });

        //- кнопка очистки
        $('.calendar-filter__clear').click(function(){
            stage = 0;
            var cal = $(this).parents('.calendar-filter')
            cal.find('.calendar-filter__arrive-text').val('')
            cal.find('.calendar-filter__exit-text').val('')
            cal.find('.calendar-filter__arrive-text').removeData('year')
            cal.find('.calendar-filter__exit-text').removeData()
            $(this).parents('.calendar-filter__select').find('.calendar-filter__date').each(function(){
                $(this).removeClass('calendar-filter__date_selected');
                $(this).removeClass('calendar-filter__in-range');
                $(this).removeClass('calendar-filter__range-to');
                $(this).removeClass('calendar-filter__range-from');
            })
        })

        
        //- состояние: выбрана дата отбытия
        if (stage === 2) {
            var dataobj = $('.calendar-filter__exit-text').data()
            var dataobj2 = $('.calendar-filter__arrive-text').data() //- берем объект дата из инпута
            $('.calendar-filter__date').each(function(){
                if ( (compareDates($(this).data(), dataobj2)) && (compareDates(dataobj, $(this).data())) ) {
                    $(this).addClass('calendar-filter__in-range')
                }
            })
            $(`.calendar-filter__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar-filter__date_selected calendar-filter__range-to'); //- подсвечиваем дату отбытия
            $(`.calendar-filter__date[data-date='${dataobj2.date}'][data-month='${dataobj2.month}'][data-year='${dataobj2.year}']`)
            .addClass('calendar-filter__range-from');
        }
        //- состояние: выбрана дата прибытия
        if (stage >= 1) {
            var dataobj = $('.calendar-filter__arrive-text').data() //- берем объект дата из инпута
            $(`.calendar-filter__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar-filter__date_selected') //- подсвечиваем дату прибытия
        }
    }
    //- получить название месяца на русском по цифре из объекта date
    function getMounthName(date) {
        var dateNum = date.getMonth();
        var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[dateNum]
    }
    function getMounthByNum(num) {
        var months = ['янв', 'фев', 'Мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        return months[num]
    }
    //- функция получает смещение (diff) от текущего месяца, заполняет calendar_month и вызывает calDateGen
    function calTitle(diff) {
        var date = mostime(diff)
        var month = getMounthName(date);
        var year = date.getFullYear();
        $('.calendar-filter__select').find('.calendar-filter__month').empty();
        $('.calendar-filter__select').find('.calendar-filter__month').html(`${month}<br>${year}`);
        calDateGen(diff);
    }
    
    $('.calendar-filter__select').data('year', String(yearNum))

    $('.calendar-filter__arrive').click(function(){
            $(this).parents('.calendar-filter__box').siblings('.calendar-filter__select').toggleClass('calendar-filter__select_active'); 
            monthDiff = 0; 
            calTitle(monthDiff)
    },); 

    $('.calendar-filter__exit').click(function(){
            $(this).parents('.calendar-filter__box').siblings('.calendar-filter__select').toggleClass('calendar-filter__select_active');  
            monthDiff = 0; 
            calTitle(monthDiff)
    },); 

    $('.calendar-filter__prev').click(function(){
            monthDiff -= 1;
            calTitle(monthDiff)
    },); 

    $('.calendar-filter__next').click(function(){
            monthDiff += 1;
            calTitle(monthDiff)
    },); 
    $('.calendar-filter__apply').click(function(){
            $(this).parents('.calendar-filter__select').removeClass('calendar-filter__select_active');
    },);

    $(document).click(
        function(event){
            let calsel = $('.calendar-filter')
            let btn1 = $('.calendar-filter__arrive')
            let apply = $('.calendar-filter__apply')

            if (! btn1.is(event.target) && btn1.has(event.target).length === 0  &&
                ! calsel.is(event.target) && calsel.has(event.target).length === 0) {
                $('.calendar-filter__select').removeClass('calendar-filter__select_active')
            }
    })
});


    