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
            console.log('clic')
            if (stage === 1) {
                stage = 2;
                var dt = $(this).data();
                var exit = $(this).parents('.calendar').find('.calendar__exit-text');
                $(this).addClass('calendar__date_selected');
                exit.val(`${dt.date}.${dt.month}.${dt.year}`);
                exit.attr('data-date', `${dt.date}`);
                exit.attr('data-month', `${dt.month}`);
                exit.attr('data-year', `${dt.year}`);
            }
            if (stage === 0) {
                stage = 1;
                var dt = $(this).data();
                var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
                $(this).addClass('calendar__date_selected');
                arrive.val(`${dt.date}.${dt.month}.${dt.year}`);
                arrive.attr('data-date', `${dt.date}`);
                arrive.attr('data-month', `${dt.month}`);
                arrive.attr('data-year', `${dt.year}`);
        } 

        },);

        //- состояние: выбрана дата прибытия
        if (stage >= 1) {
            var dataobj = $('.calendar__arrive-text').data()
            console.log(dataobj)
            $(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected')
        }
        //- состояние: выбрана дата отбытия
        if (stage === 2) {
            var dataobj = $('.calendar__exit-text').data()
            console.log(dataobj)
            $(`.calendar__date[data-date='${dataobj.date}'][data-month='${dataobj.month}'][data-year='${dataobj.year}']`)
            .addClass('calendar__date_selected')
        }

        //- наведение выши
        $('.calendar__date').mouseenter(function(){
            if (stage === 1) {
            $(this).addClass('calendar__date_hover');
            var dt = $(this).data()
            console.log(dt)
        }})

        $('.calendar__date').mouseleave(function(){
            if (true) {
            $(this).removeClass('calendar__date_hover');
        }})

        $('.calendar__clear').click(function(){
            stage = 0;
            $(this).parents('.calendar').find('.calendar__arrive-text').val('')
            $(this).parents('.calendar').find('.calendar__exit-text').val('')
            $(this).parents('.calendar__select').find('.calendar__date').each(function(){
                $(this).removeClass('calendar__date_selected');
            })
        })
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


    