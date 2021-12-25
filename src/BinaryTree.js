/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

class Node {
    constructor(element, left, right, parents) {
        this.element = element;
        this.left = left;
        this.right = right;
        this.parents = parents;
        this.count = 1;
        this.toString = () => this.element
    }
}

class BinaryTree {
    constructor(values) {
        this.root = null;
        values.forEach(item => this.insert(item));
    }

    insert = element => {
        let node = new Node(element, null, null);
        if (this.root === null) {
            this.root = node;
        } else {
            let buffer = this.root;
            while (true) {
                if (buffer.left === null) {
                    buffer.l
                }
            }
        }
    }

    preOrederTraversal = (node) => {
        if (node !== null) {
            console.log(node.toString());
            this.preOrederTraversal(node.left);
            this.preOrederTraversal(node.right);
        }
    }
}

const testTree = new BinaryTree([0, 0, 0, 1, 1, 1, 1]);
testTree.preOrederTraversal(testTree.root);
