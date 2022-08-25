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
