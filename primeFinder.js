function primeFinder(n){
    let flag = new Array(n+1).fill(true);
    flag[0] =flag[1] = false;
    let i = 2;
    while (i <= Math.sqrt(n)){
      if(flag[i]){
        let k = i*i;
        while ( k <= n){
          flag[k] = false;
          k += i;
        }
     
      }
      i+=1;
    }
      for(let i = 0; i <= n; i++){
        if(flag[i]){
          console.log(i);}
      }
  }
  primeFinder(100);

  
