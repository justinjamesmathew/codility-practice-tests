function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let flag = [];
    for(let i = 0; i < len; i++){
        flag[A[i]]= true;

    }
    for (let i = 1; i <= len; i++){
        if(flag[i] != true){
            return 0
        }
        
    }
    return 1;
}
