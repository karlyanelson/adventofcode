from day_1 import get_day_1_data
from day_1 import day_1_part_1

def test_day_1_part_1():
    input = """3   4
4   3
2   5
1   3
3   9
3   3"""
    left, right = get_day_1_data(input)

    assert day_1_part_1(left, right) == 11