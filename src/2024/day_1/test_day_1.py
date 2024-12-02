from day_1 import get_day_1_data, day_1_part_1, day_1_part_2


input = """3   4
4   3
2   5
1   3
3   9
3   3"""

left, right = get_day_1_data(input)

def test_day_1_part_1():
    assert day_1_part_1(left, right) == 11


def test_day_1_part_2():
    assert day_1_part_2(left, right) == 31