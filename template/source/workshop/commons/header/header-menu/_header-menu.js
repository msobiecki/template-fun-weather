import {HeaderMenu} from '../../../modules/Header';
import $ from 'jquery';


$(document).ready(function () {
	let headerMenu = new Object(HeaderMenu);
	headerMenu.init({
		target: '.header-menu',
		toggle: '.header-menu__toggle',
		menu: '.header-menu__menu'
	});
});