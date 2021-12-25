/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2019-2021. All rights reserved.
 * Description: 上机编程认证
 * Note: 缺省代码仅供参考，可自行决定使用、修改或删除
 */

/**
 * 待实现函数，在此函数中填入答题代码
 * @param {number} serverNum
 * @param {number[]} task
 * @return {number}
 */
// const getMinLoad = (serverNum, task) => {
//     let result = 1;
//     const taskType = task.length;
//
//
//     for (let i = 0; i < task.length; i++) {
//         result = getMinLoad(serverNum - 1, task[i])
//     }
//
//
//     return result;
// };
//
//
// const getArray = (serverNum, taskType, result) => {
//
//     if (serverNum - taskType === 0) {
//         return serverNum;
//     }
//
//     result.push();
//
// }


const getMinLoad = (serverNum, task) => {
    let wishNum = 1;
    while (true) {
        let temp = 0;
        for (let j = 0; j < task.length; j++) {
            temp = temp + Math.floor(task[j] / wishNum) + 1;
        }
        if (temp === serverNum) {
            return wishNum
        }
        wishNum++;
    }
};

const dealInput = (serverNum, task) => {
    const result = getMinLoad(serverNum, task);
    console.log(result);
};

dealInput(8, [101, 1, 1, 20, 40]);

