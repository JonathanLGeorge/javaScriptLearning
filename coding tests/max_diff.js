var numbers = [7,9,5,6,3,2,-5,10,68,-2,6,-50,-100];
var min = numbers[0];
var max = numbers[1];
var tempMin = numbers[0];
console.log("the file is working");
for(i = 0; i < numbers.length; i++){
    
    /* 
    We may have found the smallest number, but we dont know
    where it is in relation to largest number. So... we need
    to save this new min and test it once we find a new max
    */
    if(numbers[i] <= min){
        tempMin = numbers[i];
    }

    /* 
    so we have found a new max number. This means we can test this
    number with the tempMin which should always be the max diff
    found so far in the array. set the min. 
    */
    if(numbers[i] >= max){
        max = numbers[i];
        console.log("max number found: "+ max);
        if(max - min < max - tempMin){
            console.log(max +'-'+ min +'=' + (max - min));
            min = tempMin
            console.log(max +'-'+ min +'=' + (max - min));
        }
    }
}
console.log("the max difference is " + (max - min));