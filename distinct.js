function solution(A) {
    let len = A.length;
    let arr = new Set();
    if (len === 0) return 0;
    
    for (let i = 0; i < len; i++){
        
            arr.add(A[i]);
        
    }
    return arr.size;
}
