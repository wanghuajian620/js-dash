/**
 * 2017-09-23  Wang Huajian
 */

function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      }, 2000);
    });
  }
  
  asyncFunction().then(function (value) {
    console.log(`1-${value}`);
    return value;
  }).then(function (value){
      console.log(`2-${value}`);
      return{
          value : value,
          age : 2
      }
  }).then(function(value){
      console.log(`3-${value.value}-${value.age}`);
      return value;
  }).catch(function(error){
      console.log(`catch-$(error)`);
  });



console.log(2222222222);// in order to let's know  function asyncFunction()  that  have   delay.