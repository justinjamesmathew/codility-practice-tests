function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len =  B - A;
    let count = 0;
    if (A === 0)
        count++;
    if (len === 0){
        return count;
    }
    else{
        if (K > 1){
        let remA = A % K;
        let remB = B % K;
       
        
        if (len > K){
            let lencount = Math.ceil(len / K);
            count += lencount;
        }
        else
            if (remB < len || (K-remA) < len ){
                count++
            }
        

        }
        else {
            return len+1;
        }
        
    }
    return count;
}
