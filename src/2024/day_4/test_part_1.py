from day_3.data import get_data
from day_3.part_1 import answer_part_1, decode_corrupted_memory


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

data= get_data(input)

def test_get_data():
    assert get_data(input) == input

def test_part_1():
    assert answer_part_1(data) == 18
