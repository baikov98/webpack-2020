const { toString } = require("lodash");

let options = {
    // max total items
    maxItems: Infinity,
    // min total items
    minItems: 1,
    // text to show on the dropdown override data-selection-text attribute
    selectionText: 'item',
    // text to show for multiple items
    textPlural: 'items',
    // optionally can use setSelectionText function to override selectionText
    setSelectionText: (itemCount, totalItems) => { /* return string */ },
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
    // fires when an item quantity changes
    onChange: (id, count, totalItems) => {},
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => {},
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => {}
  };
$(document).ready(() => {
    $('.iqdropdown').iqDropdown();
  }); 

$(document).ready(() => {
    function checkval() {
      return $(this).siblings('.item__value').text()
    }

    $('.dropdown__box').click(function(){
        $(this).addClass('dropdown__box_active');
        $(this).children('.drop__menu').addClass('visible');
    });

    $('.item__calc-inc').click(function(){
      var val = $(this).siblings('.item__value').text();
      val++;
      $(this).siblings('.item__value').text(toString(val)); 
  });
    $('.item__calc-dec').click(function(){
      var val = $(this).siblings('.item__value').text();
      if (!(val == 0)) {val--};
      
      $(this).siblings('.item__value').text(toString(val)); 
  });
    
  }); 