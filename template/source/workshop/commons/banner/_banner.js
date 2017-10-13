import {Banner} from '../../modules/Banner';
import $ from 'jquery';

$(document).ready(function () {
	let banner = new Object(Banner);
	banner.init({
		target: '.banner',
		box: '.banner__box',
		item: '.banner__item',
		ejected: '.header',
		options: {
			fade: true
		}
	});
});