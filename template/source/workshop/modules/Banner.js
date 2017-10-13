'use strict';
import $ from 'jquery';

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * @param {string} arg.ejected - Leaf item with 100% banner
 * 
 * @attribute '.-slider' at target - Initialize slick-carousel  
 */

const Banner = {
	windowWidth: $(window).width(),
	settings: {
		target: '',
		box: '',
		item: '',
		ejected: '',
		options: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,

			dots: false,
			arrows: false,

			speed: 800,
			autoplay: true,
			autoplaySpeed: 8000,

			fade: false,
		}
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : '';
	},
	catchDOM: function () {
		let _target = $(this.settings.target),
			_ejected = $(this.settings.ejected);
		this.settings.isSlider = _target.hasClass('-slider');
		this.$target = {
			element: _target,
			box: _target.find(this.settings.box),
			item: _target.find(this.settings.item),
			ejected: _ejected.length ? _ejected : ''
		};

		this.$target.element.length && this.$target.box.length && this.$target.item.length ? (this.setBanner(), this.bindEvents()) : '';
	},
	bindEvents: function () {
		$(window).resize(this.resizeEvent.bind(this));
	},
	resizeEvent: function () {
		let actualWidth = $(window).width();
		if (actualWidth !== this.windowWidth) {
			this.setHeight();
			this.windowWidth = actualWidth;
		}
	},
	setBanner: function () {
		this.setHeight();
		this.settings.isSlider ? this.generateSlick() : '';

	},
	setHeight: function () {
		this.$target.element.css({
			'height': $(window).height() - this.$target.ejected.height()
		});
		this.$target.box.css({
			'height': $(window).height() - this.$target.ejected.height()
		});
		this.$target.item.css({
			'height': $(window).height() - this.$target.ejected.height()
		});
	},
	generateSlick: function () {
		this.$target.box.slick(this.settings.options);
	},
};

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * 
 */

const BannerToggle = {
	settings: {
		target: '',
		content: ''
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length && this.settings.content.length ? this.catchDOM() : '';
	},
	catchDOM: function () {
		let _target = $(this.settings.target),
			_content = $(this.settings.content);

		this.$target = {
			element: _target,
			content: _content
		};

		this.$target.element.length, this.$target.content.length ? (this.bindEvents()) : '';
	},
	bindEvents: function () {
		this.$target.element.on('click', this.clickEvent.bind(this));
	},
	clickEvent: function () {
		let _content = this.$target.content;
		$('html, body').animate({
			scrollTop: (_content.offset().top - $('.header__wrapper').height())
		}, 'slow', function () {
			$('html, body').animate({
				scrollTop: _content.offset().top - $('.header__wrapper').height()
			}, 'fast');
		});
	}
};

export {
	Banner,
	BannerToggle
};