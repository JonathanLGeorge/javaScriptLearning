var input = [[1,3,1],
             [1,5,1], 
             [4,2,1]];

console.log(input[1].length);

//so you need to travers recursively though this but remember the best path?


//ill use these to track where i am in the 2d array
var a1 = 0;
var a2 = 0;
var total = 0;

//  [A][B][C]
//  [D][E][F]
//  [G][H][I]
//first naive try
 while(a1 != input[0].length -1 && a2 != input[1].length -1){
    total = input[a1][a2];
    if(a2 == inputp.length-1){
        a1++;
    } else if(a1 == input.length){
        a2++
    }else if(input[a1 + 1][a2] != 0 && input[a1][a2+1] < input[a1 + 1][a2]){
        a2++;
    } else {
        a1++;
    }
}

