
  for(var i=1; i<=100; i++){
    if(0==(i%3) && 0==(i%5)) {
        console.log("FizzBuzz");
    }else{
      if(0==(i%3)) {
        console.log("Fizz");
      }else{
        if(0==(i%5)) {
          console.log("Buzz");
        }else{
          console.log(i);
        }

      }
    }
  }
