# Javascript 可信认证 科目1

> 该项目包含 eslint代码规范 及 mocha测试环境。

## 目录结构

```bash
eslint-demo
├── package.json          
├── package-lock.json
├── .eslintrc.js                     # eslint规则文件，与OJ考试一致
├── README.md
├── src
|    ├── calculator.js               # OJ编程考试示例代码
|    ├── calculator.spec.js          # OJ编程考试单测用例
├── demo                             # eslint规则测试文件夹（可忽略）
│   ├── demo1.js
│   ├── demo2.js
│   ├── demo3.js
│   ├── demo4.js
│   └── demo5.js


```

## 安装项目依赖

```
$ npm install
```

## 运行

```bash
# 运行eslint
$ npm run eslint

# 运行单测
$ npm run test
```

## 如何使用eslint

首先确保编码规范满足要求，先把写好的代码贴到`src`文件夹上，然后运行 `npm run eslint`，若出现error及warn，则修复。

## 如何测试代码

由于OJ环境是基于控制台输入输出进行测试的，所以用mocha进行测试时，需要将框架代码稍微转换一下，变成mocha可测试的代码即可。

基于OJ上的这道题目：http://oj.rnd.huawei.com/problems/27/details ，做了一个示例，具体可以查看src文件夹
```
├── src
|    ├── calculator.js               # OJ编程考试示例代码
|    ├── calculator.spec.js          # OJ编程考试单测用例
```

### 改造示例

以如下OJ框架代码为例:

```js
function getNormalDeviceNum(start, end) {
    // TODO 在此补充你的代码
    return 0;
};

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
});
process.stdin.on('end', () => {
    const inputArr = input.split(' ');
    const start = parseInt(inputArr[0],10);
    const end = parseInt(inputArr[1],10);
    const result = getNormalDeviceNum(start,end);
    console.log(result);
    process.exit();
});
```

其核心在于`process.stdin.on('end',function)`这个回调中。input则是控制台输入的内容。

```js
const assert = require('assert');

describe('#OJ用例测试', () => {
  it('样例1', () => {
    // 这里注意，这里是控制台的输入
    const input =  `2
REQUEST=AABBCCDDEEF1
RELEASE=AABBCCDDEEF1
    `
    // 原题目中的代码贴到单测中
    const inputArr = input.split(' ');
    const start = parseInt(inputArr[0],10);
    const end = parseInt(inputArr[1],10);
    const result = getNormalDeviceNum(start,end);
    // result 是输出的内容，进行比较
    assert.equal(result, `192.168.0.0
192.168.0.1
192.168.0.0`);
  });
});
```
