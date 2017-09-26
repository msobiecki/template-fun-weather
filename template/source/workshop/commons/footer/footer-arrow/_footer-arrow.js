import {Arrow} from '../../../modules/Arrow';
import $ from 'jquery';

$(document).ready(function () {
	let arrow = new Object(Arrow);
	arrow.init({
		target: '.js-arrow'
	}); 
});