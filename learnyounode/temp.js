function foo(optionalArg) {
    optionalArg = optionalArg || "default!";
    console.log(optionalArg);
  }
  
  foo("test");
  foo();