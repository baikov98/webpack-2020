import { min } from 'lodash';
import './range-slider.scss'

$(document).ready(function () {

    if ($('*').is('.range')) {
    
    let min = 0;
    let max = 20000;
    let input = $('.range__input-box')
    let rangeBoxOfs = $('.range__cont').offset()
    let rangeBoxX = rangeBoxOfs.left
    let rangemax = $('.range__max');
    let rangemin = $('.range__min');
    let boxWidth = $('.range__cont').width()
    
    
    function calc(pnum) {
        return (Math.round(Math.round(((pnum-rangeBoxX) / (boxWidth))*max) / 100))*100
    }
    function fillInput() {
        input.val(`${rangefrom}₽ - ${rangeto}₽`)
    }
    
    $('.range__max').css( {'left': ''+(130)+'px' } ) // def max val
    $('.range__min').css( {'left': ''+(65)+'px' } ) // def min val
    
    var maxpoint = $('.range__max').offset().left
    var minpoint = $('.range__min').offset().left

    var midbar = $('.range__bar')
    midbar.width(maxpoint - minpoint)

    midbar.css( {'left': ''+(minpoint-rangeBoxX)+'px' } )
    var rangefrom = calc(minpoint)
    var rangeto = calc(maxpoint)
    fillInput()
    
    $('.range__max').on('mousedown', (e) => { 
        let x = e.pageX //e.pageX
        
        $(document).bind('mouseup', () => {
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

    $('.range__min').on('mousedown', (e) => {
        var x = e.pageX
        $(document).bind('mouseup', () => {
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