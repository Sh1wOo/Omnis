import sPreloader from './preloader-module/js/preloader.js'
import sButton from './button-module/js/button.js';

const preloader = document.querySelector('preloaderlib');
const button = document.querySelector('s-button');

preloader ? sPreloader() : '';
button ? sButton() : '';