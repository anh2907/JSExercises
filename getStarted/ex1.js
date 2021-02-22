/**
 * EX1: 
 * 1. Write a JavaScript program to display the current day and time in the following format:
    English: Friday, Jan 21, 2021 (Time executed: 06:02:59 AM)
    Vietnamese: Thứ 6 ngày 21 tháng 1 năm 2021 (Giờ khởi tạo: 18:02:59)
 */
var assert = require('assert');
const today = new Date();
const date = new Date(2021, 0, 21, 18, 02, 59); //year, month, day, hours, minutes, seconds
const en_locale_time = 'en-US';
const vn_locale_time = 'vi-VN';
const en_options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const vn_options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

// Function to display date and time in an expected format
function displayDateTime(date, localeTime, options_type){
    if (localeTime === vn_locale_time){
        let vn_date_format = date.toLocaleDateString(localeTime, options_type) + " " + "(Giờ khởi tạo: "+ date.toLocaleTimeString(localeTime) + ")";
        let arr_date_format = vn_date_format.split(',');
        return arr_date_format[0]+ " ngày" + arr_date_format[1]+ " năm" + arr_date_format[2]
    }
    else{
        return date.toLocaleDateString(localeTime, options_type) + " " + "(Time executed: "+ date.toLocaleTimeString(localeTime) + ")";
    }
    
}
// Display current day and time in an expected format:
console.log('English: ' + displayDateTime(today,en_locale_time, en_options));
console.log('Vietnamese: ' + displayDateTime(today,vn_locale_time, vn_options));

// Get date and time for a specific date in an expected format 
var en_date_actual = 'English: ' + displayDateTime(date, en_locale_time, en_options);
var vn_date_actual = 'Vietnamese: ' + displayDateTime(date, vn_locale_time, vn_options);

// Get expected result to compare
var en_date_expected = "English: Thursday, Jan 21, 2021 (Time executed: 6:02:59 PM)";
var vn_date_expected = "Vietnamese: Thứ Năm ngày 21 tháng 1 năm 2021 (Giờ khởi tạo: 18:02:59)";

// Verify date and time displayed in an expected format
assert.strictEqual(en_date_actual, en_date_expected, "Compare actual and expected date in English");
assert.strictEqual(vn_date_actual, vn_date_expected, "Compare actual and expected date in Vietnamese");
