function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let flag = [];
    let condition = true;
    let count = 0;
    let i = 0;
    while(condition){
        if(flag[i] != true){
            flag[i] = true;
            count++;
            i = (i+M) % N ;
        }
        else{
            return count;
            condition = false;
        }

    }
}
