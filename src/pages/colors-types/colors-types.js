import './colors-types.scss'


$(document).ready(function() {
    $("#example_id").ionRangeSlider({
        skin: "big",
        min: 0,
        max: 10000,
        from: 1000,
        to: 9000,
        type: 'double',
        prefix: "$",
        grid: true,
        grid_num: 10
    });

})