function solution(A) {
    // write your code in JavaScript (Node.js 14)
    let len = A.length;
    let count = new Array(len).fill(0);
    for (let i = 0; i < len; i ++){
        for(let j = 0; j < len; j++){
            if(i!=j){
                if( A[i]%A[j] != 0){
                     count[i]++;
                }
            }
        }
    }
    return count;
}
