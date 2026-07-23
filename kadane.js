function maxSubArray(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum,
        subarray: nums.slice(start, end + 1)
    };
}

const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

console.log(result);
