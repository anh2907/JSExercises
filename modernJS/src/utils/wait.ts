//  function waitSeconds(seconds: number) {
//     let time = Date.now() + seconds*1000;
//     while(Date.now() < time) {}
//     console.log(`This runs after ${seconds} seconds waiting`)
//  }
 
//  export const delaySeconds = (sec: number) => new Promise(
//     (resolve) => waitSeconds(sec)
//   );

//Write a function that receives a delay argument (in seconds) and returns a Promise which is fullfiled after delay seconds
  const delay = (miliSeconds) => new Promise(
    (resolve) => {setTimeout(resolve, miliSeconds)}
  );
  export default delay

 

 
 