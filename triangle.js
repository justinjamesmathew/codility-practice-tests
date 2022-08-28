function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    A.sort((a,b)=> a-b);
    for (let i = 0; i < len-2; i++){
        if(A[i]>=0 && A[i+1]>A[i+2]-A[i]){
            return 1;
        }
    }
    return 0;

}
