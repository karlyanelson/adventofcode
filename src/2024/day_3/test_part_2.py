from day_3.data import get_data
from day_3.part_2 import answer_part_2, decode_corrupted_memory


input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

data= get_data(input)

def test_decode_corrupted_memory():
    assert decode_corrupted_memory(input) == [[2, 4], [8, 5]]

def test_decode_corrupted_memory_case_2():
    input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)$?don't())+mul(32,64]undo()?mul(8,5))"
    assert decode_corrupted_memory(input) == [[2, 4], [8, 5]]


def test_decode_corrupted_memory_case_3():
    input = """^don't()*mul(884,335)]@@why()$do()~#mul(786,141)
where()}/what(611,646)!mul(470,537)}"""
    assert decode_corrupted_memory(input) == [[786,141], [470,537]]

def test_part_2():
    assert answer_part_2(data) == 48
