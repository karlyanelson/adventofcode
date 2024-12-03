from day_2.data import get_data
from day_2.part_1 import answer_part_1, check_if_safe
from day_2.part_2 import answer_part_2


input = """7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9"""

data= get_data(input)

def test_check_is_safe_case_1():
    # Safe because the levels are all decreasing by 1 or 2
    assert check_if_safe([7, 6, 4, 2, 1]) == True

def test_check_is_safe_case_2():
    # Unsafe because 2 7 is an increase of 5.
    assert check_if_safe([1, 2, 7, 8, 9]) == False

def test_check_is_safe_case_3():
    # Unsafe because 6 2 is a decrease of 4.
    assert check_if_safe([9, 7, 6, 2, 1]) == False

def test_check_is_safe_case_4():
    # Unsafe because 1 3 is increasing but 3 2 is decreasing.
    assert check_if_safe([1, 3, 2, 4, 5]) == False

def test_check_is_safe_case_5():
    # Unsafe because 4 4 is neither an increase or a decrease.
    assert check_if_safe([8, 6, 4, 4, 1]) == False

def test_check_is_safe_case_6():
    # Safe because the levels are all increasing by 1, 2, or 3. 
    assert check_if_safe([1, 3, 6, 7, 9]) == True

def test_check_is_safe_case_7():
    assert check_if_safe([75, 76, 77, 80, 82, 85, 84]) == False

def test_check_is_safe_case_8():
    assert check_if_safe([49, 52, 53, 55, 58, 59, 61, 61]) == False

def test_part_1():
    assert answer_part_1(data) == 2

# def test_part_2():
#     assert answer_part_2(data) == 31