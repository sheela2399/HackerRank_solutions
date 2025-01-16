function miniMaxSum(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0)
    const miniSum = totalSum - Math.max(...arr);
    const maxSum = totalSum - Math.min(...arr);
    console.log(miniSum, maxSum)
}

miniMaxSum([1, 2, 3, 4, 5])

