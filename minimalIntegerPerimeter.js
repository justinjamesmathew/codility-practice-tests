function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let x1 = 0, x2 = 0;
    let sq = Math.sqrt(N);
    let i = Math.round(sq);
    while (i > 0){
        if(N%i === 0){
            x1=i;
            break;
        }
        i--;
    }
    x2 = N / x1;
    return (2*(x1+x2));
    
}
