import delay  from '../src/utils/wait';
//import {delaySeconds}  from '../src/utils/wait';

async function doSomeThing(){
    console.log("Print this first");
    await delay(3000);
    console.log("print this after 3 seconds");
    //await delaySeconds(5);
        
}
delay(6000).then(() => {
    console.log("this runs after 6 seconds!");
  });
doSomeThing();