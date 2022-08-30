function Dominator(A){
let len = A.length;
    if (len===0) return -1;
    let arr = [];
    let index = -1;
    for(let i=1;i <len;i++){

        if(arr.length === 0){
            arr.push(A[i]);
            index = i;
        }
        else{
            if(arr[arr.length-1] != A[i]){
                arr.pop();
                index -= 1 ;
            }
            else  {
                arr.push(A[i]);
                index = i;
            }
        }

    }
return index;
}
