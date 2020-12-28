import { add, before } from 'lodash';
import './calendar.scss'

$(document).ready(function() {
    var timeNow = mostime();
    var yearNum = timeNow.getFullYear()
    var monthDiff = 0;
    var arrDate,
        exDate;

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

    function calDateGen(diff, id, stage) {
        
        var id = $(`#${id}`)
        var stage = stage
        var firstDay = mostime(diff);
        firstDay.setDate(1)
        var beforeDays = [];
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        var totalElems = 0;
        id.find('.calendar__dates').empty()
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
            id.find('.calendar__dates')
            .append(`<div data-date="${item.getDate()}" data-month="${item.getMonth()}" data-year="${item.getFullYear()}" class="calendar__date calendar__other-month">${item.getDate()}</div>`);
            totalElems += 1
         })
        //- даты текущего месяца
        for (var i = 1; i <= 31; i++) {
            var thisMthday = mostime(diff)
            thisMthday.setDate(i);
            if (thisMthday.getMonth() === firstDay.getMonth()) {
            id.find('.calendar__dates')
            .append(`<div data-date="${thisMthday.getDate()}" data-month="${thisMthday.getMonth()}" data-year="${thisMthday.getFullYear()}" class="calendar__date">${thisMthday.getDate()}</div>`);
            totalElems += 1}
        }
        //- даты следующего месяца
        if (!(totalElems % 7 === 0)) {
            for (var i = 1; !(totalElems % 7 === 0); i++) {
                var nextMthday = mostime(diff+1)
                nextMthday.setDate(i)
                $('.calendar__dates')
                .append(`<div data-date="${nextMthday.getDate()}" data-month="${nextMthday.getMonth()}" data-year="${nextMthday.getFullYear()}" class="calendar__date calendar__other-month">${nextMthday.getDate()}</div>`);
                totalElems += 1
            }}
        //- подцветка сегоднешней даты
        $(`.calendar__date[data-date="${timeNow.getDate()}"][data-month="${timeNow.getMonth()}"][data-year="${timeNow.getFullYear()}"]`)
        .addClass('calendar__curr-date')

        //- нажатие на дату
        $('.calendar__date').click(function(){
            
            if (stage === 1) {   //- получаем обьект дата с кликнутой даты
                var dt = $(this).data();
                var arrData = $(this).parents('.calendar')
                .find('.calendar__arrive-text').data(); //- получаем обьект дата из инпута прибытия
                
                //- дата отбытия больше даты прибытия
                if (compareDates(dt, arrData)) {
                    var exit = $(this).parents('.calendar').find('.calendar__exit-text');

                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    $(this).addClass('calendar__date_selected');
                    exit.data('date', dtDate);
                    exit.data('month', dtMonth);
                    exit.data('year', dtYear);

                    exDate = new Date(dtYear, dtMonth, dtDate)
                    var dateDiff = (exDate - arrDate) / 86400000
                    $(this).parents('.calendar').data('diff', dateDiff)

                    dtMonth += 1;
                    if (dtDate < 10) {dtDate = '0' + dtDate}
                    if (dtMonth < 10) {dtMonth = '0' + dtMonth}
                    exit.val(`${dtDate}.${dtMonth}.${dtYear}`);
                    
                    stage = 2;
                    id.data('stage', stage)
                }
                //- дата прибытия больше даты отбытия
                if (compareDates(arrData, dt)) {
                    $('.calendar__date').each(function(){$(this).removeClass('calendar__date_selected')})

                    var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
                    $(this).addClass('calendar__date_selected');
                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    arrive.data('date', dtDate);
                    arrive.data('month', dtMonth);
                    arrive.data('year', dtYear);
                    arrDate = new Date(dtYear, dtMonth, dtDate)
                    dtMonth += 1;
                    if (dtDate < 10) {dtDate = '0' + dtDate}
                    if (dtMonth < 10) {dtMonth = '0' + dtMonth}
                    arrive.val(`${dtDate}.${dtMonth}.${dtYear}`);
                    stage = 1;
                    id.data('stage', stage)
                }
            }
            if (stage === 0) {
                stage = 1;
                id.data('stage', stage)
                
                var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
                
                $(this).addClass('calendar__date_selected');
                
                var dtDate = $(this).data('date')
                var dtMonth = $(this).data('month')
                var dtYear = $(this).data('year')
                arrive.data('date', dtDate);
                arrive.data('month', dtMonth);
                arrive.data('year', dtYear);
                arrDate = new Date(dtYear, dtMonth, dtDate)
                dtMonth += 1;
                if (dtDate < 10) {dtDate = `0${dtDate}`}
                if (dtMonth < 10) {dtMonth = `0${dtMonth}`}
                arrive.val(`${dtDate}.${dtMonth}.${dtYear}`);
        } 

        
        },);

        //- наведение выши
        $('.calendar__date').mouseenter(function(){
            if (stage === 0) {
                $(this).addClass('calendar__date_grayhover');
            }
            
            if (stage === 1) {
            $(this).addClass('calendar__date_hover');
            var mouseEntrDate = $(this).data()
            var arriveDate = $(this).parents('.calendar').find('.calendar__arrive-text').data()
            var mouseEntr = $(this)
            
            $('.calendar__date').each(function(){
                var eachDate = $(this).data()

                $(this).removeClass('calendar__in-range')
                $(this).removeClass('calendar__range-to');
                $(this).removeClass('calendar__range-from');
                if (compareDates(mouseEntrDate, arriveDate)) {
                    mouseEntr.addClass('calendar__range-to');
                    $(this).parents('.calendar__select').find('.calendar__date_selected').addClass('calendar__range-from')
                }
                if (compareDates(arriveDate, mouseEntrDate)) {
                    mouseEntr.addClass('calendar__range-from');
                    $(this).parents('.calendar__select').find('.calendar__date_selected').addClass('calendar__range-to')
                }
                if ((compareDates(eachDate, arriveDate) && compareDates(mouseEntrDate, eachDate)) ||
                    (compareDates(eachDate, mouseEntrDate) && compareDates(arriveDate, eachDate))) {
                    $(this).addClass('calendar__in-range')
                }
            })
        }})

        $('.calendar__date').mouseleave(function(){
            $(this).removeClass('calendar__date_hover');
        })

        $('.calendar__date').mouseleave(function(){
            $(this).removeClass('calendar__date_grayhover');
        });

        //- кнопка очистки
        $('.calendar__clear').click(function(){
            stage = 0;
            var cal = $(this).parents('.calendar')
            cal.find('.calendar__arrive-text').val('')
            cal.find('.calendar__exit-text').val('')
            cal.find('.calendar__arrive-text').removeData('year')
            cal.find('.calendar__exit-text').removeData()
            $(this).parents('.calendar__select').find('.calendar__date').each(function(){
                $(this).removeClass('calendar__date_selected');
                $(this).removeClass('calendar__in-range');
                $(this).removeClass('calendar__range-to');
                $(this).removeClass('calendar__range-from');
            })
        })

        
        //- состояние: выбрана дата отбытия
        if (stage === 2) {
            

            var dataobj = id.find('.calendar__exit-text').data()
            var dataobj2 = id.find('.calendar__arrive-text').data() //- берем объект дата из инпута

            id.find('.calendar__date').each(function(){
                if ( (compareDates($(this).data(), dataobj2)) && (compareDates(dataobj, $(this).data())) ) {
                    $(this).addClass('calendar__in-range')
                }
            })
            id.find(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected calendar__range-to'); //- подсвечиваем дату отбытия
            id.find(`.calendar__date[data-date='${dataobj2.date}'][data-month='${dataobj2.month}'][data-year='${dataobj2.year}']`)
            .addClass('calendar__range-from');
        }
        //- состояние: выбрана дата прибытия
        if (stage >= 1) {
            var dataobj = id.find('.calendar__arrive-text').data() //- берем объект дата из инпута
            id.find(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected') //- подсвечиваем дату прибытия
        }
        
        
    } //end caldategen

    //- получить название месяца на русском по цифре
    function getMounthName(date) {
        var dateNum = date.getMonth();
        var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[dateNum]
    }
    //- функция получает смещение (diff) от текущего месяца, заполняет calendar_month и вызывает calDateGen
    function calTitle(diff, id, stage) {
        var date = mostime(diff)
        var month = getMounthName(date);
        var year = date.getFullYear();
        $('.calendar__select').find('.calendar__month').empty();
        $('.calendar__select').find('.calendar__month').html(`${month}<br>${year}`);
        calDateGen(diff, id, stage);
    }
    
    $('.calendar__select').data('year', String(yearNum))

    $('.calendar__arrive').click(function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active'); 
            var id = $(this).parents('.calendar').attr('id')
            var stage = $(this).parents('.calendar').data('stage') || 0
            monthDiff = 0; 
            calTitle(monthDiff, id, stage)
    },); 

    $('.calendar__exit').click(function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active');
            var id = $(this).parents('.calendar').attr('id')
            var stage = $(this).parents('.calendar').data('stage') || 0
            monthDiff = 0; 
            calTitle(monthDiff, id, stage)
    },); 

    $('.calendar__prev').click(function(){
            var id = $(this).parents('.calendar').attr('id')
            var stage = $(this).parents('.calendar').data('stage') || 0
            monthDiff -= 1;
            calTitle(monthDiff, id, stage)
    },); 

    $('.calendar__next').click(function(){
            var id = $(this).parents('.calendar').attr('id')
            var stage = $(this).parents('.calendar').data('stage') || 0
            monthDiff += 1;
            calTitle(monthDiff, id, stage)
    },); 
    $('.calendar__apply').click(function(){
            $(this).parents('.calendar__select').removeClass('calendar__select_active');
    },);

    $(document).click(
        function(event){
            let calsel = $('.calendar')
            let btn1 = $('.calendar__arrive')
            let apply = $('.calendar__apply')

            if (! btn1.is(event.target) && btn1.has(event.target).length === 0  &&
                ! calsel.is(event.target) && calsel.has(event.target).length === 0) {
                $('.calendar__select').removeClass('calendar__select_active')
            }
    })
});

