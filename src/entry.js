import $ from 'jquery';
global.jQuery = $;
global.$ = $;

import '../node_modules/inputmask/bundle'
import '../node_modules/ion-rangeslider/js/ion.rangeSlider.min'
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css'

import './theme/fonts/text-fonts.scss'
import './theme/global.scss';

import './index.pug'

import './plug.js';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(png)$/));



