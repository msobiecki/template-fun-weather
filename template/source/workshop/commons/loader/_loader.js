import {Loader} from '../../modules/Loader';
import $ from 'jquery';

$(document).ready(function () {
	let loader = new Object(Loader);
	loader.init({
		target: '.js-loader'
	});
});