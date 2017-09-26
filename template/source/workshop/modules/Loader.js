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
		this.settings.target.length ? this.catchDOM() : this.throwError('Target not set.');
	},
	catchDOM: function () {
		let _target = $(this.settings.target);

		this.$target = {
			element: _target,
		};

		this.$target && this.$target.element ? this.runLoader() : this.throwError('Required elements not find.');
	},
	runLoader: function () {
		this.$target.element.fadeOut(400);
	},
	throwError: function (text) {
		console.log('[Loader] Error: ' + text);
	}
};

export {
	Loader
};