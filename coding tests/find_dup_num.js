//if there is an array with n+1 numbers and each number in the array represents some number (0 -> n)
//find the duplicate number

function Numbers(nums){
    var seen = new Set(nums);
    for(i = 0; nums.length; i++){
        if(seen.has(nums[i])){
            return nums[i];
        }
        seen.add(nums[i]);
    }
    return -1;
}



console.log(Numbers([1,2,3,4,5,6,7,8,9,10,11,,13,12,14,6,16,15,17,18,19,20]));
