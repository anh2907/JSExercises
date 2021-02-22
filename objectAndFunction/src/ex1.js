/**Requirements:
Write a utility function, in logger.js file, that enhance console.log() with chalk to print out 
more colorful log instead of white color by default */
var logger = require('.//utils/logger');
logger('hello world')  // print default color
logger('hello world', {color: 'red', bg: 'yellow', bold: true})  // print red color, yellow background, bold is true
logger('hello world', {color: 'red', bg: 'yellow', bold: false})  // print red color, yellow background
logger('hello world', {color: 'red', bg: 'yellow'}) //print red color, yellow background
logger('hello world', {color: 'red', bold: true})  // print red color and background is default, bold is true
logger('hello world', {color: 'red'})  // print red color and background is default
logger('hello world', {bg: 'yellow', bold: true})  // print default color, yelow background and bold is true
logger('hello world', {bg: 'yellow'})  // print default color and background is yellow
logger('hello world', {bold: true})  // print default color with bold, default bold is false
logger('hello world', {color: '#FF0000', bg: 'yellow'})  // still works, with #FF0000 is red
logger('hello world', {color: '#ff0000', bg: 'yellow'})  // still works, with #ff0000 is red