function solution(A) {

    let len = A.length;
    let max = Math.max(...A);
    if (max > 0)
    {
        let flag = Array(max).fill(false);
        for(let i = 0, j = 0; i < len; i ++){
            if(A[i] > 0 && flag[A[i]] === false){
                flag[A[i]] = true;
                }
        }
        for(let i = 1; i < max; i ++){
            if(flag[i]=== false){
                return i;
            }
        }
        return max+1;
    }
    else 
        return 1;
}
