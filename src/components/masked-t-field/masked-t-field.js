import './masked-t-field.scss'


$(document).ready(function(){
    var im = new Inputmask('99.99.9999');
    im.mask('.masked-t-field')
  });