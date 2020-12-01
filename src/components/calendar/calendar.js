import { add, before } from 'lodash';
import './calendar.scss'

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
        console.log(stage)
        
        
        var firstDay = mostime(diff);
        firstDay.setDate(1)
        var beforeDays = [];
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        var totalElems = 0;
        $('.calendar__dates').empty()
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
            $('.calendar__dates')
            .append(`<div data-date="${item.getDate()}" data-month="${item.getMonth()}" data-year="${item.getFullYear()}" class="calendar__date calendar__other-month">${item.getDate()}</div>`);
            totalElems += 1
         })
        //- даты текущего месяца
        for (var i = 1; i <= 31; i++) {
            var thisMthday = mostime(diff)
            thisMthday.setDate(i);
            if (thisMthday.getMonth() === firstDay.getMonth()) {
            $('.calendar__dates')
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
                console.group(arrData)
                
                //- дата отбытия больше даты прибытия
                if (compareDates(dt, arrData)) {
                    var exit = $(this).parents('.calendar').find('.calendar__exit-text');
                    console.log('штатный режим')
                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    $(this).addClass('calendar__date_selected');
                    exit.data('date', dtDate);
                    exit.data('month', dtMonth);
                    exit.data('year', dtYear);
                    
                    dtMonth += 1;
                    
                    if (dtDate < 10) {dtDate = '0' + dtDate}
                    if (dtMonth < 10) {dtMonth = '0' + dtMonth}
                    exit.val(`${dtDate}.${dtMonth}.${dtYear}`);
                    stage = 2;
                }
                //- дата прибытия больше даты отбытия
                if (compareDates(arrData, dt)) {
                    $('.calendar__date').each(function(){$(this).removeClass('calendar__date_selected')})
                    console.log('zasel')
                    var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
                    $(this).addClass('calendar__date_selected');
                    var dtDate = $(this).data('date')
                    var dtMonth = $(this).data('month')
                    var dtYear = $(this).data('year')
                    arrive.data('date', dtDate);
                    arrive.data('month', dtMonth);
                    arrive.data('year', dtYear);
                    
                    dtMonth += 1;
                    if (dtDate < 10) {dtDate = '0' + dtDate}
                    if (dtMonth < 10) {dtMonth = '0' + dtMonth}
                    arrive.val(`${dtDate}.${dtMonth}.${dtYear}`);
                    stage = 1;
                }
            }
            if (stage === 0) {
                stage = 1;
                var dt = $(this).data();
                var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
                $(this).addClass('calendar__date_selected');
                arrive.data('date', dt.date);
                arrive.data('month', dt.month);
                arrive.data('year', dt.year);
                dt.month += 1;
                if (dt.date < 10) {dt.date = `0${dt.date}`}
                if (dt.month < 10) {dt.month = `0${dt.month}`}
                arrive.val(`${dt.date}.${dt.month}.${dt.year}`);
                
        } 


        //- наведение выши
        $('.calendar__date').mouseenter(function(){
            if (stage === 1) {
            $(this).addClass('calendar__date_hover');
            var mouseEntrDate = $(this).data()
            var arriveDate = $(this).parents('.calendar').find('.calendar__arrive-text').data()
            $('.calendar__date').each(function(){
                var eachDate = $(this).data()
                $(this).removeClass('calendar__in-range')
                //console.log(compareDates(dt, eachDate))
                if ((compareDates(eachDate, arriveDate) && compareDates(mouseEntrDate, eachDate)) ||
                    (compareDates(eachDate, mouseEntrDate) && compareDates(arriveDate, eachDate))) {
                    $(this).addClass('calendar__in-range')
                }
            })
        }})

        $('.calendar__date').mouseleave(function(){
            if (true) {
            $(this).removeClass('calendar__date_hover');
        }})

        },);

        
        
        
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
            })
        })

        
        //- состояние: выбрана дата отбытия
        if (stage === 2) {
            var dataobj = $('.calendar__exit-text').data() //- берем объект дата из инпута
            console.log('if - stage 2')
            console.log(dataobj)
            $(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected') //- подсвечиваем дату отбытия
        }
        //- состояние: выбрана дата прибытия
        if (stage >= 1) {
            var dataobj = $('.calendar__arrive-text').data() //- берем объект дата из инпута
            console.log('if - stage 1+')
            console.log(dataobj)
            $(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected') //- подсвечиваем дату прибытия
        }
    }



    function getMounthName(date) {
        var dateNum = date.getMonth();
        var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[dateNum]
    }

    function calTitle(diff) {
        var date = mostime(diff)
        var month = getMounthName(date);
        var year = date.getFullYear();
        $('.calendar__select').find('.calendar__month').empty();
        $('.calendar__select').find('.calendar__month').html(`${month}<br>${year}`);
        calDateGen(diff);
    }
    
    var monthName = null;

    $('.calendar__select').data('year', String(yearNum))

    $('.calendar__arrive').click(function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active'); 
            monthDiff = 0; 
            calTitle(monthDiff)
    },); 

    $('.calendar__exit').click(function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active');  
            monthDiff = 0; 
            calTitle(monthDiff)
    },); 

    $('.calendar__prev').click(function(){
            monthDiff -= 1;
            calTitle(monthDiff)
    },); 

    $('.calendar__next').click(function(){
            monthDiff += 1;
            calTitle(monthDiff)
    },); 

    



});//end


    