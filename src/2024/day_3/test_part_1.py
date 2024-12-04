from day_3.data import get_data
from day_3.part_1 import answer_part_1, decode_corrupted_memory


input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"

data= get_data(input)

def test_get_data():
    assert get_data(input) == input

def test_decode_corrupted_memory():
    assert decode_corrupted_memory(input) == [[2, 4], [5, 5], [11, 8], [8, 5]]

def test_decode_corrupted_memory_case_2():
    input = 'mul(498,303);when()}!(%mul(846,233)-,what()($where()how():}mul(334,117)]'
    assert decode_corrupted_memory(input) == [[498, 303], [846, 233], [334, 117]]

def test_decode_corrupted_memory_case_3():
    input = 'mul(4*,50)'
    assert decode_corrupted_memory(input) == [] 

def test_decode_corrupted_memory_case_4():
    input = 'mul(6,9!)'
    assert decode_corrupted_memory(input) == [] 

def test_decode_corrupted_memory_case_5():
    input = 'mul?(12,34)'
    assert decode_corrupted_memory(input) == [] 

def test_decode_corrupted_memory_case_6():
    input = 'mul ( 2 , 4 )'
    assert decode_corrupted_memory(input) == [] 

def test_decode_corrupted_memory_case_7():
    input = '*who(597,691)){&-mul(971,304)where()mul(64,983)'
    assert decode_corrupted_memory(input) == [[971, 304], [64, 983]] 

def test_decode_corrupted_memory_case_8():
    input = '*who(5927,691)){&-mul(971,3034)where()mul(64,983)'
    assert decode_corrupted_memory(input) == [[64, 983]] 

def test_part_1():
    assert answer_part_1(data) == 161
