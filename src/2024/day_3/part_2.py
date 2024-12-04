import re

def decode_corrupted_memory(string) -> list[list[int]]:
    # For a string like xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
    # select everything from beginning until don't()
    # and everything from a do() until either another don't() or the end of the string

    enabled_instructions_pattern = re.compile(r'(?<=^)(.*?)(?=don\'t\()')
    enabled_instructions_list = enabled_instructions_pattern.findall(string)

    enabled_instructions = enabled_instructions_list
    enabled_instructions = ''.join(enabled_instructions_list)

    print(enabled_instructions)

    # then grab the numbers
    valid_numbers_pattern = re.compile(r'mul(?<!\?)\((\d{1,3}),(\d{1,3})\)')
    valid_numbers = valid_numbers_pattern.findall(enabled_instructions)
    result = [[int(x), int(y)] for x, y in valid_numbers]
    return result

def answer_part_2(string):
    memory = decode_corrupted_memory(string)
    total = 0

    for x, y in memory:
        total += x * y
    
    return total

