/**
 * EX2: 
 * Write a JavaScript program to display a random leap year from 1 to 2020.
    For ex: A random leap year: 2020
    Not a leap year: 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
    Leap year: 1988, 1992, 1996, 1600, 2000, 2400
 */

function isLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 100 === 0 && year % 400 === 0)) return true;
    return false;
}

// Random an integer between 1 and 2020
const get_random_year = ()=>{
    return Math.floor(Math.random() * 2020) + 1;
}

 const displayRandomLeapYear = async (year)=>{
    for (var i = 0; i < 2020; i ++){
        year = get_random_year();
        if (isLeapYear(year)=== true){
            console.log("A random leap year: " + year);
            break;
        }
    }
 }
displayRandomLeapYear(get_random_year());







