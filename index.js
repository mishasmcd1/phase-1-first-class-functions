const spy = tea => 'yum!'
function receivesAFunction(callback) {
    callback(spy);
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }