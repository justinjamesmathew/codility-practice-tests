function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    for (let i = 0; i < K; i++){
        let templast = A[len-1];
        for (let r = len-1 ; r > 0; r--){
            A[r] = A[r-1];
        }
        A[0] = templast; 

        }
        return A;
    }
    
