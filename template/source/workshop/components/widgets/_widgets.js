import {Slider} from '../../modules/Slider';
import $ from 'jquery';

$(document).ready(function () {
	let slider = new Object(Slider);
	slider.init({
		target: '.js-widgets',
		options: {
			arrows: true,
			dots: true
		}
	}); 
});