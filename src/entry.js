import $ from 'jquery';
global.jQuery = $;
global.$ = $;

import '../node_modules/inputmask/bundle'

import '../node_modules/slick-carousel/slick/slick.min.js'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

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
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(png)$/));
requireAll(require.context('./img', true, /^\.\/(?!.*(?:__tests__)).*\.(png)$/));



