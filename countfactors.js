function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let i = 1;
    let result = 0;
    let index = Math.sqrt(N);
    while (i < index){
        if (N % i === 0){
            result += 2;
            
        }
        i++;

    }
    if(i*i === N){
        result++;
    }
    return result;
}
