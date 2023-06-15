function parent() {
  let a = 20;
  function child() {
    console.log(a);

    function child2() {
      console.log(a);
    }

    child2();
  }
  child();
}

parent();


// every children function (Nested Functions) will have access to its parents properties and values
