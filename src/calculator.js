/**
 * OJ题目参考：http://oj.rnd.huawei.com/problems/27/details
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', (line) => {
    let arr = line.replace(/\s/g, '').replace(/\-/g, '+-').split('+')
    let count = 0, i = arr.length
    while (i--) {
        count += parseInt(arr[i])
    }
    console.log(count)
})