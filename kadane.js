function kadane(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    console.log("Index\tNumber\tCurrentSum\tMaxSum");

    console.log(`0\t${nums[0]}\t${currentSum}\t\t${maxSum}`);

    for (let i = 1; i < nums.length; i++) {

        currentSum = Math.max(nums[i], currentSum + nums[i]);

        maxSum = Math.max(maxSum, currentSum);

        console.log(`${i}\t${nums[i]}\t${currentSum}\t\t${maxSum}`);
    }

    console.log("\nMaximum Sum =", maxSum);
}

kadane([-2,1,-3,4,-1,2,1,-5,4]);
