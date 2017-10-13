'use strict';
import $ from 'jquery';

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * 
 */

const Loader = {
	settings: {
		target: ''
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : '';
	},
	catchDOM: function () {
		let _target = $(this.settings.target);

		this.$target = {
			element: _target,
		};

		this.$target.element.length ? this.runLoader() : '';
	},
	runLoader: function () {
		this.$target.element.fadeOut(400);
	}
};

export {
	Loader
};