import { add, before } from 'lodash';
import './calendar.scss'

$(document).ready(function() {
    var timeNow = mostime();
    var dayNum = timeNow.getDay()
    var yearNum = timeNow.getFullYear()
    var mouthDiff = 0;

    function mostime(diff = 0) {
        var d = new Date()
        var utc = 3;
        d.setHours(d.getHours() + utc, d.getMinutes() + d.getTimezoneOffset());
        d.setMonth(d.getMonth() + diff);
        return d;
    }

    function calDateGen(diff) {
        var firstDay = mostime(diff);
        firstDay.setDate(1)
        var beforeDays = [];
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        var totalElems = 0;
        $('.calendar__dates').empty()
        if (firstDay.getDay() !== 1) {
             console.log(firstDay.getDay())
             console.log(dayBefore.getDay())
             for (var i = 1; dayBefore.getDay() !== 1; i++) {
                var dayBefore = mostime(diff);
                dayBefore.setDate(1);
                dayBefore.setDate(dayBefore.getDate() - i)
                beforeDays.push(dayBefore)
             }
             beforeDays.reverse()
             console.log(beforeDays)
        }
        console.log(beforeDays)
        beforeDays.forEach(function(item, i, arr) {
            $('.calendar__dates').append(`<div class="calendar__date calendar__other-month">${item.getDate()}</div>`);
            totalElems += 1
         })
        for (var i = 1; i <= 31; i++) {
            var thisMouth = mostime(diff)
            thisMouth.setDate(i);
            if (thisMouth.getMonth() === firstDay.getMonth()) {
            $('.calendar__dates').append(`<div class="calendar__date">${thisMouth.getDate()}</div>`);
            totalElems += 1}
        } 

        if (!(totalElems % 7 === 0)) {
            //firstDay.setMonth(firstDay.getMonth + 1);
            //firstDay.setDate(1)
            for (var i = 1; !(totalElems % 7 === 0); i++) {
                $('.calendar__dates').append(`<div class="calendar__date calendar__other-month">${i}</div>`);
                totalElems += 1
            }}
        
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
    
    var mouthName = null;

    $('.calendar__select').data('year', String(yearNum))

    $('.calendar__arrive').click(
        function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active'); 
            mouthDiff = 0; 
            calTitle(mouthDiff)
    },); 

    $('.calendar__exit').click(
        function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active');  
            mouthDiff = 0; 
            calTitle(mouthDiff)
    },); 

    $('.calendar__prev').click(
        function(){
            mouthDiff -= 1;
            calTitle(mouthDiff)
    },); 

    $('.calendar__next').click(
        function(){
            mouthDiff += 1;
            calTitle(mouthDiff)
    },); 

    


});//end


    