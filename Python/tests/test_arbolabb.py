import pytest
from src.ArbolABB import ArbolABB


@pytest.fixture
def abb():
    """Árbol base para reutilizar en varios tests"""
    tree = ArbolABB()
    for v in [10, 5, 15, 3, 7]:
        tree.insert(v)
    return tree


def test_inorder(abb):
    assert abb.in_orden() == [3, 5, 7, 10, 15]


def test_search_existing(abb):
    assert abb.search(7) is True


def test_search_non_existing(abb):
    assert abb.search(99) is False


def test_insert_many():
    abb = ArbolABB()
    values = list(range(1000))
    for v in values:
        abb.insert(v)

    assert abb.in_orden() == values


def test_delete_until_empty():
    abb = ArbolABB()
    values = [10, 5, 15, 3, 7]

    for v in values:
        abb.insert(v)

    for v in values:
        assert abb.delete(v) is True

    assert abb.in_orden() == []


def test_delete_nonexistent():
    abb = ArbolABB()
    abb.insert(10)

    assert abb.delete(99) is False
    assert abb.in_orden() == [10]


def test_wrong_order_calls():
    abb = ArbolABB()

    assert abb.search(10) is False
    assert abb.in_orden() == []
    assert abb.delete(10) is False


def test_single_node():
    abb = ArbolABB()
    abb.insert(10)

    assert abb.search(10) is True
    assert abb.in_orden() == [10]
