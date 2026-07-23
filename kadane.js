function maxSubArray(nums) {

    let currentSum = 0;
    let maxSum = -Infinity;

    for (let num of nums) {

        currentSum += num;

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

console.log(maxSubArray([-2,6,-3,-4,-1,8,1,-5,4]));
