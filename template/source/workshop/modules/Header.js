'use strict';
import $ from 'jquery';

/**
 * Header Bar
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
		$(window).scrollTop() > this.$target.element.height() ? this.$target.element.addClass('-minimalize') : this.$target.element.removeClass('-minimalize');
	},
	throwError: function (text) {
		console.log('[Header] Error: ' + text);
	}
};

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * @param {string} arg.toggle - Toggle
 * @param {string} arg.menu - Menu box
 * 
 */

const HeaderMenu = {
	settings: {
		target: '',
		toggle: '[data-toggle]',
		menu: '[data-menu]'
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : '';
	},
	catchDOM: function () {
		let _target = $(this.settings.target);

		this.$target = {
			element: _target,
			toggle: _target.find(this.settings.toggle),
			menu: _target.find(this.settings.menu),
		};

		this.$target.element.length && this.$target.toggle.length && this.$target.menu.length ? this.bindEvents() : '';
	},
	bindEvents: function () {
		this.$target.toggle.on('click', this.toggleMenuEvent.bind(this));
		$(window).resize(this.resizeEvent.bind(this));
	},
	resizeEvent: function (event) {
		$(event.target).width() > 969 ? this.resetMenu() : '';
	},
	toggleMenuEvent: function () {
		!this.$target.element.hasClass('-opened') ? this.openMenu() : this.closeMenu();
	},
	openMenu: function () {
		this.$target.element.addClass('-opened');
		this.$target.toggle.addClass('is-active');
		this.$target.menu.slideDown(400);
	},
	closeMenu: function () {
		this.$target.element.removeClass('-opened');
		this.$target.toggle.removeClass('is-active');
		this.$target.menu.slideUp(400);
	},
	resetMenu: function () {
		this.$target.element.removeClass('-opened');
		this.$target.toggle.removeClass('is-active');
		this.$target.menu.css({
			'display': ''
		});
	}
};

export {
	Header,
	HeaderMenu
};