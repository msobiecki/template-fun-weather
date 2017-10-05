import {Header} from '../../modules/Header';
import $ from 'jquery';

$(document).ready(function () {
	let header = new Object(Header);
	header.init({
		target: '.header'
	}); 
});