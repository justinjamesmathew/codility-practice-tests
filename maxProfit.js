function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let max = 0;
    
    for (let i = 0; i < len-1; i++){
        for(let j = i; j< len; j++){
            max = A[j] - A[i] > max ? A[j]-A[i]:max;
        }
    }
    return max;
}

//inefficient solution does not work for large values O(n^2)
