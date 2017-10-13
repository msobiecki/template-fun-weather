import {BannerToggle} from '../../../modules/Banner';
import $ from 'jquery';

$(document).ready(function () {
	let bannerToggle = new Object(BannerToggle);
	bannerToggle.init({
		target: '.banner-toggle',
		content: '.content'
	});
});