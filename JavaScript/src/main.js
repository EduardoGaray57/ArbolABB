import { computeLayout, renderTree,renderEdges, animateSearch } from "../ui/bstView.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertWithPath(data){
        const path = [];
        const newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
            path.push(newNode);
            return path
        }
        let current = this.root

        while(true){
            path.push(current);

            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    path.push(newNode);
                    return path
                }
                current = current.left
            } else {
                if(!current.right){
                    current.right = newNode;
                    path.push(newNode);
                    return path;
                }
                current = current.right
            }
        }
    }

    searchWithPath(data){
        const path = [];
        let current = this.root;

        while (current !== null){
            path.push(current);
            if(current.data === data){
                return { found: true, path };
            }
            current = data < current.data ? current.left : current.right;
        }
        return { found: false, path };
    }

    /* ================= INSERT ================= */
    // Time: O(h)
    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    /* ================= SEARCH ================= */
    // Time: O(h)
    search(data) {
        let current = this.root;

        while (current !== null) {
            if (current.data === data) return true;
            current = data < current.data ? current.left : current.right;
        }

        return false;
    }

    /* ================= IN ORDER ================= */
    // Time: O(n)
    inOrder() {
        const result = [];
        const stack = [];
        let current = this.root;

        while (stack.length > 0 || current !== null) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            result.push(current.data);
            current = current.right;
        }

        return result;
    }

    /* ================= PRE ORDER ================= */
    preOrder() {
        const result = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node, result) {
        if (node !== null) {
            result.push(node.data);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
    }

    /* ================= POST ORDER ================= */
    postOrder() {
        const result = [];
        this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node, result) {
        if (node !== null) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.data);
        }
    }

    /* ================= DELETE ================= */
    // Time: O(h)
    delete(data) {
        const result = this._delete(this.root, data);
        this.root = result.node;
        return result.deleted;
    }

    _delete(node, data) {
        if (node === null) {
            return { node: null, deleted: false };
        }

        if (data < node.data) {
            const result = this._delete(node.left, data);
            node.left = result.node;
            return { node, deleted: result.deleted };
        }

        if (data > node.data) {
            const result = this._delete(node.right, data);
            node.right = result.node;
            return { node, deleted: result.deleted };
        }

        // Nodo encontrado
        if (node.left === null) {
            return { node: node.right, deleted: true };
        }

        if (node.right === null) {
            return { node: node.left, deleted: true };
        }

        // Dos hijos
        const successor = this._minimum(node.right);
        node.data = successor.data;

        const result = this._delete(node.right, successor.data);
        node.right = result.node;

        return { node, deleted: true };
    }

    /* ================= MINIMUM ================= */
    _minimum(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
    /* ================= UI ================= */
document.addEventListener("DOMContentLoaded", () => {
    const bst = new BinarySearchTree();

    const container = document.getElementById("tree");
    const svg = document.getElementById("edges");

    const input = document.getElementById("valueInput");
    const insertBtn = document.getElementById("insertBtn");

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const speedRange = document.getElementById("speedRange");

    let lastInserted = null;

    function redrawTree() {
        const width = container.clientWidth;

        const nodes = computeLayout(
            bst.root,
            width / 2,
            40,
            width / 4
        );

        renderTree(nodes, container, lastInserted);

        svg.innerHTML = "";
        renderEdges(nodes, svg);
    }

    insertBtn.addEventListener("click", () => {
        const value = Number(input.value);
        if (Number.isNaN(value)) return;

        bst.insertWithPath(value);
        lastInserted = value;

        redrawTree();

        input.value = "";
        input.focus();
    });

    searchBtn.addEventListener("click", async () => {
        const value = Number(searchInput.value);
        if (Number.isNaN(value)) return;

        const { found, path } = bst.searchWithPath(value);

        await animateSearch(path, found);

        searchInput.value = "";
        searchInput.focus();
    });

    speedRange.addEventListener("input", () => {
        document.documentElement.style.setProperty(
            "--anim-speed",
            speedRange.value + "ms"
        );
    });
    window.addEventListener("resize", redrawTree);
});



export { BinarySearchTree};

if(typeof module != "undefined"){
    module.exports = {BinarySearchTree}
}
