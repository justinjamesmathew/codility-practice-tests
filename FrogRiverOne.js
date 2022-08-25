//Solution 1
function solution(X, A) {
    
    let maxpos = 0;
    for (let i = 1; i <= X; i++){
        let pos = A.indexOf(i)
        if(pos === -1){
            return -1;
        }
        else {
            if(pos > maxpos){
                maxpos = pos;
            }
        }
    }
    return maxpos;
}
//Solution 2 better than solution 1
function solution(X, A) {
    
    let flag = [];
    let len = A.length;
    let maxpos = 0;
    for (let i = 0; i < len; i++ ){
        if (flag[A[i]] != true){
        flag[A[i]] = true;
        maxpos = i;
        }
    }
    for (let i = 1; i <= X; i++){
        if(flag[i]!= true){
            return -1;
        }
    }
    return maxpos;
}
