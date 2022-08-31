function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = [];
    let flag = []; let len = A.length;
    if (len === 0) return -1;
    for(let i = 0 ; i<len; i++){
        if(arr.length == 0){
            arr.push(A[i]);
            flag[i] = false;
        }
        else {
            if(arr[arr.length -1 ] == A[i]){
                arr.push(A[i]);
                flag[i] = true;
                flag[i-1]=true;
                
            }
            else{
                arr.pop();
                flag[i-1]= false;
                flag[i] = false;
                
            }
        }

    }
    if(arr){
        return A.indexOf(arr[0]);
    
    }
    else 
        return -1;
}
