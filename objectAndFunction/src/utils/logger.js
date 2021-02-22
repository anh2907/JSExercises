const chalk = require('chalk');
const log = console.log

function logger(text, format){

    let colorType;
    let displayText;

    if (format) {
        let color = format.color || 'white';
        let bg = format.bg || 'black';
        
        if(color.indexOf('#') !== -1)
            colorType = chalk.hex(color)(text)
        else
            colorType = chalk.keyword(color)(text)

        if(bg.indexOf('#') !== -1)
            displayText = chalk.bgHex(bg)(colorType)
        else
            displayText = chalk.bgKeyword(bg)(colorType)

        if(format.bold)
            displayText = chalk.bold(displayText)

        log(displayText)
      }
    else
      log(text)
}

module.exports = logger