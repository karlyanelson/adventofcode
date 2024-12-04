from day_2.data import get_data
from day_2.part_2 import answer_part_2, check_if_safe_with_problem_dampener


input = """7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9"""

data= get_data(input)

def test_check_is_safe_case_1():
    # Safe without removing any level.
    assert check_if_safe_with_problem_dampener([7, 6, 4, 2, 1]) == True

def test_check_is_safe_case_2():
    # Unsafe regardless of which level is removed.
    assert check_if_safe_with_problem_dampener([1, 2, 7, 8, 9]) == False

def test_check_is_safe_case_3():
    # Unsafe regardless of which level is removed.
    assert check_if_safe_with_problem_dampener([9, 7, 6, 2, 1]) == False

def test_check_is_safe_case_4():
    # Safe by removing the second level, 3.
    assert check_if_safe_with_problem_dampener([1, 3, 2, 4, 5]) == True

def test_check_is_safe_case_5():
    # Safe by removing the third level, 4.
    assert check_if_safe_with_problem_dampener([8, 6, 4, 4, 1]) == True

def test_check_is_safe_case_6():
    # Safe without removing any level.
    assert check_if_safe_with_problem_dampener([1, 3, 6, 7, 9]) == True

def test_check_is_safe_case_7():
    assert check_if_safe_with_problem_dampener([75, 76, 77, 80, 82, 85, 84]) == True

def test_check_is_safe_case_8():
    assert check_if_safe_with_problem_dampener([49, 52, 53, 55, 58, 59, 61, 61]) == True

def test_part_1():
    assert answer_part_2(data) == 4
