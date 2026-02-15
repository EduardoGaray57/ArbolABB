# Basic structure of a node in the Binary Search Tree (ABB)
class Node:
    def __init__(self, data = None):
        self.data = data
        self.h_izq = None
        self.h_der = None

# Basic structure of the Binary Search Tree (ABB)
class ArbolABB:
    def __init__(self):
        self.root = None
    # Insert data in the tree
    def insert(self, data):
        if self.root is None:
            self.root = Node(data)
            return

        current = self.root
        while True:
            if data < current.data:
                if current.h_izq is None:
                    current.h_izq = Node(data)
                    return
                current = current.h_izq
            else:
                if current.h_der is None:
                    current.h_der = Node(data)
                    return
                current = current.h_der
    
    # PreOrden
    def pre_orden(self):
        self._pre_orden(self.root)
        print()    
    def _pre_orden(self, root):
        if root is not None:
            print(root.data, end="-")
            self._pre_orden(root.h_izq)
            self._pre_orden(root.h_der)
    
    # InOrden
    def in_orden(self):
        result = []
        stack = []
        current = self.root

        while stack or current:
            # bajar por la izquierda
            while current:
                stack.append(current)
                current = current.h_izq

            current = stack.pop()
            result.append(current.data)
            current = current.h_der

        return result
    
    # PostOrden
    def post_orden(self):
        self._post_orden(self.root)
        print()    
    def _post_orden(self, root):
        if root is not None:
            self._post_orden(root.h_izq)
            self._post_orden(root.h_der)
            print(root.data, end="-")
    
    # Search data in the tree
    def search(self, data):
        return self._search(self.root, data)
    def _search(self, root, data):
        if root is None:
            return False
        if root.data == data:
            return True
        elif data < root.data:
            return self._search(root.h_izq, data)
        else:
            return self._search(root.h_der, data)

    # Delete data from the tree
    def delete(self, data):
        self.root, deleted = self._delete(self.root, data)
        return deleted

    def _delete(self, root, data):
        if root is None:
            return root, False

        if data < root.data:
            root.h_izq, deleted = self._delete(root.h_izq, data)
            return root, deleted

        elif data > root.data:
            root.h_der, deleted = self._delete(root.h_der, data)
            return root, deleted

        else:
            # Nodo encontrado
            if root.h_izq is None:
                return root.h_der, True
            if root.h_der is None:
                return root.h_izq, True

            # Nodo con dos hijos
            successor = self._minimum(root.h_der)
            root.data = successor.data
            root.h_der, _ = self._delete(root.h_der, successor.data)
            return root, True
    
    # Node of replacement
    def _minimum(self, node):
        while node.h_izq is not None:
            node = node.h_izq
        return node
    
    # Previous adjustments test
    def in_order_list(self):
        result = []
        self._in_order_list(self.root, result)
        return result

    def _in_order_list(self, root, result):
        if root:
            self._in_order_list(root.h_izq, result)
            result.append(root.data)
            self._in_order_list(root.h_der, result)




