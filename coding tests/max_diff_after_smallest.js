var numbers = [2,3,10,6,4,8,1,8,2,40,3,64,0,21,4,-3,63];
var smallest = numbers[0];
var largest = numbers[1];
var testSmallest = smallest;
console.log(numbers);
console.log(numbers[3]);
for(i = 2; i < 7; i++){
    if(numbers[i] < smallest){
        testSmallest = numbers[i];
    }
    console.log(i);

    if(numbers[i] > largest){
        largest = numbers[i];
        console.log("new largest number is: " + largest);
    }
    if(numbers[i] >= largest && (numbers[i] - testSmallest > largest - smallest)){
        smallest = testSmallest;
    }
    if(i = numbers.length -1){
        console.log(largest - smallest);
    }
}

for (m = 0; m < 5; m++) {
     console.log("The number is " + m + "<br>");
  }


