/*
this is the longest word

we nned to find the longest word in a sentence ignoring  special charaters
so just return the longest string of chars
*/



//really short way of doing this but without regx
function LongestWord(sentence){

    return sentence.split(" ").sort(function(x,y){
        return y.length - x.length})[0];
    
}

console.log(LongestWord("The quick brown fox jumped over the moon or something like that i dont remember"));



//who its done! 
function RealLongestWord(sentence){

    //we use a regx match function ignoring words with special chars
    var realWord = sentence.match(/[a-z0-9]+/gi);

    //sorting longest legal word to the front of array
    var sort = realWord.sort(function(x,y){
        return y.length - x.length;
    });

    //return the head of the array and therfore the longest word
    return sort[0];
}

console.log(RealLongestWord("The quick! brown@#$#^% fox TenFeetUP jumped over7878987s that volcano#$#sss"));