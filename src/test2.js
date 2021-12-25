
/**
 * 待实现函数，在此函数中填入答题代码
 * @param {[]} rangePairs
 * @return {[]}
 */
const check = (rangePairs) => {
    const result = [];
    rangePairs.forEach(item => {
        result.push(checkPart(item));
    })
    return result;
}

const checkPart = item => {
    const firstArr = [];
    const secondArr = [];
    const firstItem = convertToNum(item[0]);
    const secondItem = convertToNum(item[1]);
    console.log(firstItem);
    console.log(secondItem);
    return false;
}

const convertToNum = item =>{
    const numArr = Array.from(item);
    const symbol = [];
    for (let i = 0; i < numArr.length; i++) {
        symbol.push(numArr.shift());
        if(Number.isNaN(Number(numArr.join(''))))
        {break;}
    }
    let result = [];
    const symbolStr = symbol.join('');
    const numStr = numArr.join('')
    if(symbolStr === '>'){
        result = ['0.0.0',numStr]
    }
    if(symbolStr === '<'){
        result = [numStr,'999.999.999']
    }
    if(symbolStr === '~'){
        let temp = numStr.split('.');
        temp[1] ++;
        result = [numStr,temp.join('.')];
    }
    return result;
}

const result = check([
    ['>1.0.0', '<=1.0.0'],
    ['<1.2.0', '>1.1.999'],
    ['~0.10', '=0.10.0'],
    ['=99.0', '~99'],
]);
console.log(result);


const rightRuselt = ['no', 'no', 'yes', 'yes'];

console.log(convertToNum('>1.0.0'));