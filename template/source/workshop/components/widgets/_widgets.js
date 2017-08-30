import {Slider, SliderImageGalleryPopup} from '../../modules/Slider';
import $ from 'jquery';

console.log(SliderImageGalleryPopup);

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