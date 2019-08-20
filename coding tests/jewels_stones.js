var numJewelsInStones = function(J, S) {
    var numOfJewels = 0;
    var jewels = new Set(J);
    for(i = 0; i < S.length; i++){
        if(jewels.has(S.charAt(i))){
            numOfJewels++;
        }   
    }   
    console.log(numOfJewels); 
}

numJewelsInStones("aAc","aAAbbbbcCdd")