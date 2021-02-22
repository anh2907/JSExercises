const fakePromise = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 100);
    if (randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject("Number is not even!");
    }
  })
    .then((result) => {
      console.log(result);
      return result;
    })
    .then((result) => {
      throw new Error("Second Then just fired!");
    })
    .catch((err) => console.log(err));

    export default fakePromise;