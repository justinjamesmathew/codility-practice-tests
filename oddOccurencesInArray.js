// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    if (len === 1){
        return A[0];
    }
    const flag = [];
    for (let i = 0; i < len; i++){
        if (flag[i]!=true){
            for(let r = i+1; r< len; r++){
                if((A[i]===A[r])&&(flag[r] != true)){
                    flag[r] = true;
                    flag[i] = true;
                    break;
                }
            }
        }
    }
    for (let i = 0; i < len; i++){
        if(flag[i]!=true){
            return A[i];
        }
    }

}
