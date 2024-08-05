const myPromise = new Promise(resolve => resolve('Success!'));

// Using the promise
myPromise.then(value => {
  console.log(value);  // Output: 'Success!'
});
