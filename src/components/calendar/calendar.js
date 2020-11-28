import './calendar.scss'
//var now = new Date().toLocaleDateString(); // 19.12.2019
var now = new Date();
//console.log( now );
//console.log( now.getTimezoneOffset() );

$(document).ready(function() {
    

    function mostime() {
        var d = new Date()
        var utc = 3;
        d.setHours( d.getHours() + utc, d.getMinutes() + d.getTimezoneOffset()  );
        return d;
    }
    var timeNow = mostime();
    var mounthNum = timeNow.getMonth()
    var dateNum = timeNow.getDate()
    var dayNum = timeNow.getDay()
    var yearNum = timeNow.getFullYear()
    
    function getMounthName(dateNum) {
        switch (dateNum) {
            case 0: return 'Январь';
            case 1: return 'Февраль';
            case 2: return 'Март';
            case 3: return 'Апрель';
            case 4: return 'Май';
            case 5: return 'Июнь';
            case 6: return 'Июль';
            case 7: return 'Август';
            case 8: return 'Сентябрь';
            case 9: return 'Октябрь';
            case 10: return 'Ноябрь';
            case 11: return 'Декабрь';
        }
    }
    var mouthName = null;
    var test = mostime()
    test.setDate(30)
    console.log(test.getDate())
    console.log(getMounthName(mounthNum))

    

    console.log(timeNow);
    $('.calendar__select').data('year', yearNum)
    $('.calendar__arrive').click(
        function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active'); 
    },); 

    $('.calendar__exit').click(
        function(){
            $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active');   
    },); 

    


});//end


    