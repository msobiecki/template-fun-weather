import $ from 'jquery';
import 'slick-carousel';

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * @param {string} arg.box - Slider
 * @param {string} arg.item - Slider item
 * @param {string} arg.arrows - Slider arrows
 * @param {string} arg.dots - Slider dots
 * 
 */

const Slider = {
	settings: {
		target: '',
		box: '[data-slider-box]',
		item: '[data-slider-item]',
		arrows: '[data-slider-arrows]',
		dots: '[data-slider-dots]',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,

			dots: false,
			arrows: false,

			speed: 300,
			autoplay: true,
			autoplaySpeed: 2000,
		}
	},

	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : this.throwError('Target not set.');
	},

	catchDOM: function () {
		let _target = $(this.settings.target);

		this.$target = {
			element: _target,
			box: _target.find(this.settings.box),
			item: _target.find(this.settings.item)
		};

		this.settings.options.arrows && _target.find(this.settings.arrows).length ? (this.target = $.extend(true, this.target, {
			arrows: _target.find(this.settings.arrows)
		}), this.settings.options = $.extend(true, this.settings.options, {appendArrows: this.settings.arrows})) : (this.settings.options.arrows = false, this.throwError('Arrows are not possible.'));

		this.settings.options.dots && _target.find(this.settings.dots).length ? (this.target = $.extend(true, this.target, {dots:_target.find(this.settings.dots)}),this.settings.options = $.extend(true, this.settings.options, {appendDots: this.settings.dots})) : (this.settings.options.dots = false, this.throwError('Dots are not possible.'));

		this.$target && this.$target.element && this.$target.box && this.$target.item ? this.createSlider() : this.throwError('Required elements not find.');
	},

	createSlider: function () {
		this.$target.box.slick(this.settings.options); 
	},

	throwError: function (text) {
		console.log('[Slider] Error: ' + text);
	}
};

export default Slider;