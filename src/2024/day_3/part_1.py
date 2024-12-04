import re

def decode_corrupted_memory(string) -> list[list[int]]:
    # for a string like xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
    # write regex that will match the numbers between two parentheses

    pattern = re.compile(r'mul(?<!\?)\((\d{1,3}),(\d{1,3})\)')
    matches = pattern.findall(string)
    result = [[int(x), int(y)] for x, y in matches]
    return result

def answer_part_1(string):
    memory = decode_corrupted_memory(string)
    total = 0

    for x, y in memory:
        total += x * y
    
    return total

