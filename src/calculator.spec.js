/**
 * OJ题目参考：http://oj.rnd.huawei.com/problems/27/details
 */

const assert = require('assert');

describe('#OJ用例测试', () => {
    it('样例1', () => {
        let line = '1+2 + 3 +   4';
        let arr = line.replace(/\s/g, '').replace(/\-/g, '+-').split('+')
        let count = 0, i = arr.length
        while (i--) {
            count += parseInt(arr[i])
        }
        assert.equal(count, '10');
    });
});