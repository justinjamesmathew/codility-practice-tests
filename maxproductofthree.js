function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let firstmax = -1* Number.MAX_VALUE;
    let secondmax = -1* Number.MAX_VALUE;
    let thirdmax = -1* Number.MAX_VALUE;
    let negmax =   1001;
    let negsecmax =  1001;
    let negflag = false;
    let negsecflag = false;
    for (let i = 0, len = A.length; i < len; i++){
        
        if(A[i] > firstmax){
            thirdmax = secondmax;
            secondmax = firstmax;
            firstmax = A[i];
        }
        else {
            if(A[i] > secondmax){
                thirdmax = secondmax;
                secondmax = A[i];
            }
            else{
                if(A[i] > thirdmax){
                    thirdmax = A[i];
                }
            }
        }
    
    if(A[i] < 0) {
        if(A[i]< negmax){
            negflag = true;
            negsecflag = true;
            negsecmax = negmax;
            negmax =A[i];
        }
        else
            if(A[i] < negsecmax){
                negsecflag = true;
                negsecmax = A[i];
            }
    }
 }
 
 let product1 = firstmax * secondmax * thirdmax;
 let product2 = - 1* Number.MAX_VALUE;
 if (negflag === true && negsecflag === true){
    
    product2 = firstmax * negsecmax * negmax;
    
    }
    
 return (product1 > product2 ? product1: product2);
}
