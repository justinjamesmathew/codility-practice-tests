function solution(N, A) {
    
    let counter = Array(N).fill(0);
    let len = A.length;
    for(let i = 0 ; i < len; i ++){
        if(A[i] <= N){
            counter[A[i]-1]++;
        }
        else
            if (A[i] == (N+1)) {
                let max = Math.max(...counter);
                counter = counter.fill(max);
             }

    }
    return counter;

}
