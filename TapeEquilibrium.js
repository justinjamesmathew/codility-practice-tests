function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let mindiff = Number.MAX_VALUE;
    let sumcurrent = 0;
    let sumtotal = 0;
    for(i=0;i<len;i++){
        sumtotal += A[i];
    }

    for (let i = 1; i < len; i++){
        sumcurrent += A[i-1];
        let sumother = sumtotal - sumcurrent
        let tempmindiff = sumother - sumcurrent;
        if (Math.abs(tempmindiff) < mindiff){
            mindiff = Math.abs(tempmindiff);
        }
    }
    return mindiff;
}
