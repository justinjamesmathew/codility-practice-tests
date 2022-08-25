function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let countzero = 0;
    let countone = 0;
    let passing = 0;
    for(let i=0;i<len;i++){
        if(A[i]===0)
            countzero++;
        else{
            passing += countzero;
        }
     }
     if (passing > 1000000000)
        return -1;
     else
        return passing;

}
