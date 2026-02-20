const { BinarySearchTree } = require("./main");

test("inOrder devuelve los elementos ordenados", () => {
    const bst = new BinarySearchTree();

    bst.insert(8);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(6);

    expect(bst.inOrder()).toEqual([1, 3, 6, 8, 10]);
});

test("search encuentra y no encuentra valores", () => {
    const bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(2);
    bst.insert(7);

    expect(bst.search(2)).toBe(true);
    expect(bst.search(7)).toBe(true);
    expect(bst.search(10)).toBe(false);
});

test("delete elimina un nodo hoja", () => {
    const bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    const deleted = bst.delete(3);

    expect(deleted).toBe(true);
    expect(bst.inOrder()).toEqual([5, 7]);
});

test("delete elimina nodo con dos hijos", () => {
    const bst = new BinarySearchTree();

    bst.insert(8);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(6);
    bst.insert(14);

    bst.delete(3);

    expect(bst.inOrder()).toEqual([1, 6, 8, 10, 14]);
});

test("delete returns false if element not found", () => {
    const bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(3);

    expect(bst.delete(10)).toBe(false);
});

test("delete removes the root",() => {
    const bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    bst.delete(5);

    expect(bst.inOrder()).toEqual([3, 7]);
});

test("search in empty tree returns false",()=>{
    const bst = new BinarySearchTree();

    expect(bst.search(1)).toBe(false);
});

test("preOrder returns correct order", () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    expect(bst.preOrder()).toEqual([2, 1, 3]);
});

test("postOrder returns correct order", () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    expect(bst.postOrder()).toEqual([1, 3, 2]);
});
