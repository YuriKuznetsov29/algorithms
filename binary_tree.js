class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        let curNode = this.root
        while (curNode) {
            if (newNode.value < curNode.value) {
                if (!curNode.left) {
                    curNode.left = newNode
                    return
                }

                curNode = curNode.left
            } else {
                if (!curNode.right) {
                    curNode.right = newNode
                    return
                }
                curNode = curNode.right
            }
        }
    }

    preOrder(node, callback) {
        if (!node) {
            return
        }

        if (callback) {
            callback(node)
        }

        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }

    postOrder(node, callback) {
        if (!node) {
            return
        }

        this.postOrder(node.left, callback)
        this.postOrder(node.right, callback)

        if (callback) {
            callback(node)
        }
    }

    inOrder(node, callback) {
        if (!node) {
            return
        }

        this.inOrder(node.left, callback)
        if (callback) {
            callback(node)
        }
        this.inOrder(node.right, callback)
    }

    traverseDFS(callback, method) {
        if (method === "preOrder") {
            return this.preOrder(this.root, callback)
        }

        if (method === "inOrder") {
            return this.inOrder(this.root, callback)
        }

        return this.postOrder(this.root, callback)
    }

    traverseBFS(callback) {
        const queue = [this.root]

        while (queue.length) {
            const node = queue.shift()
            callback(node)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
    }
}

const tree = new BinaryTree()

tree.add(8)
tree.add(7)
tree.add(9)
tree.add(5)
tree.add(10)
tree.add(20)
tree.add(6)
tree.add(2)
tree.add(11)

// console.log(tree)

//             8
//         7       9
//     5               10
// 2       6               20
//                     11

// 8 7 5 2 6 9 10 20 11
// tree.traverseDFS((node) => {
//     console.log(node.value)
// }, "preOrder")

// 2 5 6 7 8 9 10 11 20
// tree.traverseDFS((node) => {
//     console.log(node.value)
// }, "inOrder")

// 2 6 5 7 11 20 10 9 8
// tree.traverseDFS((node) => {
//     console.log(node.value)
// }, "postOrder")

// 8    7,9    5,10    2,6,20  11
// tree.traverseBFS((node) => {
//     console.log(node.value)
// })
