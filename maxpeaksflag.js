//have to do again//solution incorrect
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numpeak = 0;
    let len = A.length;
    let peakindex = [];
    for(let i = 1; i < len-1; i++){
        if(A[i] > A[i-1] && A[i]> A[i+1]){
            numpeak++;
            peakindex.push(i);
        }
    }
    let maxf = Math.round(len / numpeak);

    return   Math.min(maxf,numpeak);
}
