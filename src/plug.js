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

/* $(document).ready(() => {
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
    
  });  */

  $(document).ready(() => {
    function calculate () {
      const total = Number($('#total-length').val()) * 100;
      let usedPerDay = 0;
      let result = 0;
      $('.control__input', '#users-list').each(function (index, item) {
        usedPerDay = usedPerDay + Number($(item).val())
      });
      if ($('.control__button--active').data('type') === 'paper') {
        const papersCount = total / Number($('#paper-length').val())
        result = papersCount / usedPerDay;
      } else{
        result = total / usedPerDay
      }

      $('#result').html(result.toFixed(0))

    };
    function generateUsers () {
     $('#users-list').empty();
      console.log('vizov')
      const currentType = $('.control__button--active').data('type') === 'paper' ? 
        {unit: 'листочков', defaultValue: '1'} : {unit: 'см', defaultValue: '10'};
        console.log(currentType)
      for (let i = 1; i <= $('#users-count').val(); i++){
        $('#users-list').append(`
          <div class="form-group form-group--row">
            <div class="form-group__title">Человек ${i} (${currentType.unit})</div>
            <div class="form-group__control control">
              <input class="control__input" type="text" value=${currentType.defaultValue} />
            </div>
          </div>
        `)
      }
      calculate()
    };
    $('#total-length, #paper-length').blur(calculate);
    $('#users-count').blur(generateUsers);
    
    $('body').on('change', '#users-list .control__input', function() {
      calculate()
    })

    $('.control__button').click(function(){
      $(this)
          .addClass('control__button--active')
          .siblings()
          .removeClass('control__button--active')
      if ($(this).data('type') === 'paper') {
        $('#paper-length-block').removeClass('hidden')
      } else {
        $('#paper-length-block').addClass('hidden')
      }
      generateUsers();
    });

    generateUsers()
    calculate ()
  }); 










