import $ from 'jquery';
global.jQuery = $;
global.$ = $;


import Post from '@models/Post';
//import './styles/style.css';
import WebpackLogo from '@/assets/webpack-logo.png';
import './babel'


import './styles/style.scss'
import './index.pug'


const post = new Post('webpackposttitle', WebpackLogo);

import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import './plug.js';


