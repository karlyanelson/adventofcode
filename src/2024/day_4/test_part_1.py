from day_4.data import get_data
from day_4.part_1 import answer_part_1, count_in_rows

import numpy as np

input = """MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX"""

rows, matrix = get_data(input)

def test_get_data():
    test_rows = ['MMMSXXMASM', 'MSAMXMSMSA', 'AMXSXMAAMM', 'MSAMASMSMX', 'XMASAMXAMM', 'XXAMMXXAMA', 'SMSMSASXSS', 'SAXAMASAAA', 'MAMMMXMMMM', 'MXMXAXMASX']
    test_matrix = [
        ['M','M','M','S','X','X','M','A','S','M'],
        ['M','S','A','M','X','M','S','M','S','A'],
        ['A','M','X','S','X','M','A','A','M','M'],
        ['M','S','A','M','A','S','M','S','M','X'],
        ['X','M','A','S','A','M','X','A','M','M'],
        ['X','X','A','M','M','X','X','A','M','A'],
        ['S','M','S','M','S','A','S','X','S','S'],
        ['S','A','X','A','M','A','S','A','A','A'],
        ['M','A','M','M','M','X','M','M','M','M'],
        ['M','X','M','X','A','X','M','A','S','X'],
    ]
    
    result_rows, result_matrix = get_data(input)

    assert result_rows == test_rows
    assert np.array_equal(result_matrix, test_matrix)

def test_count_in_rows():
    assert count_in_rows(rows) == 18

def test_part_1():
    assert answer_part_1(rows, matrix) == 18
