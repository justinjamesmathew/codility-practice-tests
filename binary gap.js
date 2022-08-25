function Solution(N){
let strn = N.toString(2); // convert the positive integer to binary
let len = strn.length; // find the length of the string
let max = 0; //a variable to contain the max binary gap
//iterate over the string from index 1
// if character is 0 add 1 to temporary variable temp;
//if character is 1 then 
//.   check if temp > max if so max = temp;
//    temp = 0

for (let i = 1, temp = 0; i < len; i++){
  if (strn[i] === '0')
    temp++;
  else {
    if (temp > max)
      max =temp;
    temp = 0;
    }
 }
 return max;
 
 }
// after the loop return max
