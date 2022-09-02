function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //0,01,012,0123,01234
    //1,12,123,1234,
    //2,23,234,
    //3,34
    //4
    
    let len = A.length;
    if(len === 1) return A[0];
    let max_value = -1* Number.MAX_VALUE;
    for(let i = 0 ; i < len; i ++ ){
        let sum = 0;
        for(let p = i; p < len; p++){
            sum += A[p];
            if(sum > max_value){
                max_value = sum;
            }
        }
        

    }
    return max_value;


}
