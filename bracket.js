function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = S.length;
    if (len === 0 ) return 1;
    let arr = [];
    for(let i = 0; i < len; i++){
        if(arr.length === 0 ){
            arr.push(S[i]);
        }
        else {
            if (isClose(S[i],arr[arr.length-1])){
                arr.pop();
            }
            else   
                arr.push(S[i]);
        }
    }
    if (arr.length !=0)
        return 0;
    else
        return 1;

}
function isClose(s,n){
    if (s === '[' || s === '{' || s=== '(')
        return false;
    else {
        if (s === ')' || s==='}' ||s===']'){
            if(s===')' && n==='('){
                return true;
            }
            if(s==='}' && n==='{'){
                return true;
            }
            if(s===']' && n==='['){
                return true;
            }
            else 
            return false;
        }
    }
    
}
