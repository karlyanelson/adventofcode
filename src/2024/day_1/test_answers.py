from day_1.data import get_data
from day_1.part_1 import answer_part_1
from day_1.part_2 import answer_part_2


input = """3   4
4   3
2   5
1   3
3   9
3   3"""

left, right = get_data(input)

def test_part_1():
    assert answer_part_1(left, right) == 11


def test_part_2():
    assert answer_part_2(left, right) == 31