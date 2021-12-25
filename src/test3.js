/**
 * 待实现函数，在此函数中填入答题代码
 * @param {number} coreCount
 * @param {number[]} nodes
 * @return {number}
 */
const getCycleCount = (coreCount, nodes) => {
    let result = -1;

    return result;

}

const getTree = nodes => {
    const Tree = [];
    let test = [];
    nodes.forEach((item, index) => {
        if (index === 0) {
            Tree.push([item]);
        }
        if (test.length < 2) {
            test.push(item);
        } else {
            Tree.push([...test]);
        }
        if (index === nodes.length - 1) {
            Tree.push([...test]);
        }
        if(test.length === 2){
            test = [];
        }
    })
    return Tree;
}


const result = getCycleCount(3, [0, 0, 0, 1, 1, 1, 1]);
console.log(result);


console.log(getTree([0, 0, 0, 1, 1, 1, 1]))