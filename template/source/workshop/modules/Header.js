'use strict';
import $ from 'jquery';

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * 
 */

const Header = {
	settings: {
		target: ''
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : this.throwError('Target not set.');
	},
	catchDOM: function () {
		let _target = $(this.settings.target);

		this.$target = {
			element: _target,
		};

		this.$target && this.$target.element ? (this.bindEvents(), this.setHeader()) : this.throwError('Required elements not find.');
	},
	bindEvents: function () {
		$(window).on('scroll', this.setHeader.bind(this));
	},
	setHeader: function () {
		$(window).scrollTop() > this.$target.element.height() ? 		this.$target.element.addClass('-minimalize') :this.$target.element.removeClass('-minimalize');
	},
	throwError: function (text) {
		console.log('[Header] Error: ' + text);
	}
};

export {
	Header
};