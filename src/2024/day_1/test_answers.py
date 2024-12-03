from day_1.answers import get_data, part_1, part_2


input = """3   4
4   3
2   5
1   3
3   9
3   3"""

left, right = get_data(input)

def test_day_1_part_1():
    assert part_1(left, right) == 11


def test_day_1_part_2():
    assert part_2(left, right) == 31