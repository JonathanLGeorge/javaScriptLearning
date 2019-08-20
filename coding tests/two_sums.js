function twoSums(numAr, targetNum){
    var sums = [];
    var hashTable = {};

    for(i = 0; i < numAr.length; i++){
        var hashedNumbs = targetNum - numAr[i];

        if(hashTable[hashedNumbs.toString()] !== undefined){
            sums.push([numAr[i], hashedNumbs]);
        }

        hashTable[numAr[i].toString()] = numAr[i];
    }
    return sums;
}

console.log(twoSums([5,1,2,3,4,-9,78,65,-2,0,-10,15], 5));