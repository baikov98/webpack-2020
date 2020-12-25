import { min } from 'lodash';
import './range-slider.scss'

$(document).ready(function () {

    if ($('*').is('.range')) {
    
    var min = 0
    var max = 20000;
    var input = $('.range__input-box')
    var rangeBoxOfs = $('.range__cont').offset()
    var rangeBoxX = rangeBoxOfs.left
    var rangemax = $('.range__max');
    var rangemin = $('.range__min');
    var boxWidth = $('.range__cont').width()
    console.log(rangeBoxOfs)
    function calc(pnum) {
        return (Math.round(Math.round(((pnum-rangeBoxX) / (boxWidth))*max) / 100))*100
    }
    function fillInput() {
        input.val(`${rangefrom}₽ - ${rangeto}₽`)
    }
    
    $('.range__max').css( {'left': ''+(121 + rangeBoxX)+'px' } )
    $('.range__min').css( {'left': ''+(55 + rangeBoxX)+'px' } )
    
    var maxpoint = $('.range__max').offset().left
    var minpoint = $('.range__min').offset().left

    var midbar = $('.range__bar')
    midbar.width(maxpoint - minpoint)
    console.log(minpoint)
    midbar.css( {'left': ''+(minpoint-rangeBoxX)+'px' } )
    var rangefrom = calc(minpoint)
    var rangeto = calc(maxpoint)
    fillInput()
    console.log(minpoint, maxpoint)
    $('.range__max').mousedown((e) => {
        var x = e.pageX
        $(document).bind('mouseup', () => {
            console.log(minpoint, maxpoint)
            $(document).unbind()
        })

        $(document).bind('mousemove', (event) => {
            var xnow = event.pageX
            maxpoint = xnow
            maxpoint = maxpoint > (rangeBoxX + boxWidth) ? (rangeBoxX + boxWidth) : maxpoint
            maxpoint = maxpoint < minpoint ? minpoint : maxpoint
            rangeto = calc(maxpoint)
            fillInput()
            rangemax.css( {'left': ''+(maxpoint-rangeBoxX-5)+'px' } )
            midbar.width(maxpoint-minpoint)
        }) 
    })

    $('.range__min').mousedown((e) => {
        var x = e.pageX
        $(document).bind('mouseup', () => {
            console.log(minpoint, maxpoint)
            $(document).unbind()
        })

        $(document).bind('mousemove', (event) => {
            var xnow = event.pageX
            minpoint = xnow
            minpoint = minpoint < rangeBoxX ? rangeBoxX : minpoint
            minpoint = minpoint > maxpoint ? maxpoint : minpoint
            rangefrom = calc(minpoint)
            fillInput()
            rangemin.css( {'left': ''+(minpoint-rangeBoxX-5)+'px' } )
            midbar.width(maxpoint-minpoint)
            midbar.css( {'left': ''+(minpoint-rangeBoxX)+'px' } )
        })
    })
}
});